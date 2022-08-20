<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Reply;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use App\Jobs\ConvertVideoForDownloading;

class PostController extends Controller
{
    public function landing(Post $post, Request $request)
    {
        return Inertia::render('Landing', [
            'posts' => Post::query()
                ->latest()
                ->where('is_nsfw', null)
                ->when($request->input('search'), function ($query, $search) {
                    $query->where('description', 'like', "%{$search}%");
                })
                ->paginate(20)
                ->withQueryString()
                ->through(fn ($post) => [
                    'id'            =>  $post->id,
                    'name'          =>  $post->user->name,
                    'username'      =>  $post->user->username,
                    'title'         =>  $post->title,
                    'description'   =>  $post->description,
                    'time'          =>  $post->created_at->diffForHumans(),
                    'avatar'        =>  $post->user->getProfilePhotoUrlAttribute(),
                    'userlink'      =>  '@' . $post->user->username,
                    'media'         =>  'storage/' . $post->files,
                    'delete'        =>  false,
                    'likes'         =>  $post->likers()->count(),
                    'replycount'    =>  $post->replies->count(),
                    'downloadready' =>  $post->converted_for_downloading_at,
                    'video'         =>  Storage::disk('public')->url('uploads/' . $post->user->id . '/' . 'videos/' . $post->id . '.mp4'),
                    'hasimage'          => $post->image,
                    'image'          =>  '/storage/' . $post->image,
                ]),
            'filters' => $request->only(['search'])
        ]);
    }

    public function home(Post $post, Request $request)
    {
        return Inertia::render('Posts/Home', [
            'posts' => Post::where(function ($query) {
                $query->where('user_id', auth()->id())
                    ->orWhereIn('user_id', auth()->user()->followings->pluck('followable_id'));
            })
                ->latest()
                ->when($request->input('search'), function ($query, $search) {
                    $query->where('description', 'like', "%{$search}%");
                })
                ->simplePaginate(5)
                ->withQueryString()
                ->through(fn ($post) => [
                    'id'            =>  $post->id,
                    'name'          =>  $post->user->name,
                    'username'      =>  $post->user->username,
                    'title'         =>  $post->title,
                    'description'   =>  $post->description,
                    'time'          =>  $post->created_at->diffForHumans(),
                    'avatar'        =>  $post->user->getProfilePhotoUrlAttribute(),
                    'userlink'      =>  '@' . $post->user->username,
                    'media'         =>  'storage/' . $post->files,
                    'downloadready' =>  $post->converted_for_downloading_at,
                    'video'         =>  Storage::disk('public')->url('uploads/' . $post->user->id . '/' . 'videos/' . $post->id . '.mp4'),
                    'delete'        =>  Auth::user()->id === $post->user_id,
                    'isliked'       =>  $post->isLikedBy(auth()->user()),
                    'likes'         =>  $post->likers()->count(),
                    'replycount'    =>  $post->replies->count(),
                    'image'         =>  'storage/' . $post->image,
                    'hasimage'      =>  $post->image,
                ]),
            'filters'           =>  $request->only(['search']),
            'postcount'         =>  Post::latest()->count(),

        ]);
    }

    public function public(Post $post, Request $request)
    {
        return Inertia::render('Posts/Index', [
            'posts' => Post::query()
                ->latest()
                ->when($request->input('search'), function ($query, $search) {
                    $query->where('description', 'like', "%{$search}%");
                })
                ->paginate(20)
                ->withQueryString()
                ->through(fn ($post) => [
                    'id'            =>  $post->id,
                    'name'          =>  $post->user->name,
                    'username'      =>  $post->user->username,
                    'title'         =>  $post->title,
                    'description'   =>  $post->description,
                    'time'          =>  $post->created_at->diffForHumans(),
                    'avatar'        =>  $post->user->getProfilePhotoUrlAttribute(),
                    'userlink'      =>  '@' . $post->user->username,
                    'image'         =>  'storage/' . $post->image,
                    'isliked'       =>  $post->isLikedBy(auth()->user()),
                    'likes'         =>  $post->likers()->count(),
                    'delete'        =>  Auth::user()->id === $post->user_id,
                    'replycount'    =>  $post->replies->count(),
                    'downloadready' =>  $post->converted_for_downloading_at,
                    'image'         =>  '/storage/' . $post->image,
                    'hasimage'      =>  $post->image,
                    'video'         =>  Storage::disk('public')->url('uploads/' . $post->user->id . '/' . 'videos/' . $post->id . '.mp4'),
                ]),
            'filters'           =>  $request->only(['search']),
            'postcount'         =>  Post::latest()->count(),
        ]);
    }

    public function show(Post $post, Reply $reply)
    {
        if (Auth::user()) {
            $liked = $post->isLikedBy(Auth()->user());
            $replyliked = $reply->isLikedBy(Auth()->user());
            $delete = Auth::user()->id === $post->user_id;
            $deleteReply = auth()->user()->id === $reply->user_id;
        } else {
            $liked = null;
            $delete = false;
            $deleteReply = false;
            $replyliked = null;
        }

        return Inertia::render('Posts/Show', [
            'post' => [
                'id'                =>  $post->id,
                'description'       =>  $post->description,
                'avatar'            =>  $post->user->getProfilePhotoUrlAttribute(),
                'time'              =>  $post->created_at->diffForHumans(),
                'username'          =>  $post->user->username,
                'downloadready'     =>  $post->converted_for_downloading_at,
                'video'             =>  Storage::disk('public')->url('uploads/' . $post->user->id . '/' . 'videos/' . $post->id . '.mp4'),
                'isliked'           =>  $liked,
                'likes'             =>  $post->likers()->count(),
                'delete'            =>  $delete,
                'replies'           =>  Reply::query()
                    ->where('post_id', $post->id)
                    ->oldest()
                    ->paginate(25)
                    ->map(fn ($reply) => [
                        'id'            =>  $reply->id,
                        'reply'         =>  $reply->reply,
                        'time'          =>  $reply->created_at->diffForHumans(),
                        'username'      =>  $reply->user->username,
                        'avatar'        =>  $reply->user->getProfilePhotoUrlAttribute(),
                        'link'          =>  '@' . $reply->user->username,
                        'delete'        =>  $deleteReply,
                        'isliked'       =>  $replyliked,
                        'likes'         =>  $reply->likers()->count(),
                        'downloadready' =>  $reply->converted_for_downloading_at,
                        'image'         =>  '/storage/' . $reply->image,
                        'hasimage'      =>  $reply->image,
                        'video'         =>  Storage::disk('public')->url('uploads/' . $reply->user->id . '/' . 'videos/' . $reply->id . '.mp4'),
                    ]),
                'replycount'            =>  $post->replies->count(),
                'image'                 =>  '/storage/' . $post->image,
                'hasimage'              =>  $post->image,
            ]
        ]);
    }

    public function store(Request $request)
    {
        $post = $request->validate([
            'description'   =>  'required|min:1|max:500',
            'nsfw'          =>  'nullable|boolean',
            'image'         => ['nullable', 'mimes:jpg,jpeg,png,gif', 'max:500048'],
            'video'         =>  'nullable|file|mimetypes:video/x-ms-asf,video/x-flv,video/mp4,video/mpeg,application/x-mpegURL,video/MP2T,video/3gpp,video/quicktime,video/x-msvideo,video/x-ms-wmv,video/avi|max:10240',
        ]);
        $post['user_id'] = auth()->id();
        $storeURL = Str::random(16);

        if ($request->hasFile('image')) {
            $post = Post::create([
                'user_id'       =>  auth()->id(),
                'is_nsfw'       =>  $request->nsfw,
                'image'         =>  $request->file('image')->store('uploads/images', 'public'),
                'description'   =>  $request->description
            ]);
            return back();
        }

        if ($request->hasFile('video')) {
            $post = Post::create([
                'user_id'       =>  auth()->id(),
                'is_nsfw'       =>  $request->nsfw,
                'disk'          =>  'public',
                'original_name' =>  $request->file('video')->getClientOriginalName(),
                'path'          =>  $request->file('video')->store('uploads/' . $request['user_id'] . '/' . 'videos/' . $storeURL, 'public'),
                'description'   =>  $request->description
            ]);
            $this->dispatch(new ConvertVideoForDownloading($post));
            return back();
        } else {
            $post = Post::create([
                'user_id'       =>  auth()->id(),
                'is_nsfw'       =>  $request->nsfw,
                'description'   =>  $request->description
            ]);
            return back();
        }
    }

    // Delete item
    public function destroy(Post $post)
    {
        if (!Gate::allows('delete-post', $post)) {
            abort(403);
        }

        File::delete(public_path('uploads/videos/') . $post->id . '.mp4');

        // Delete the file
        File::delete($post->path);

        $post->delete();
        return redirect('/home')->with('message', 'Post deleted successfully.');
    }

    public function like(Post $post)
    {
        if (auth()->user()->hasLiked($post)) {
            auth()->user()->unlike($post);
        } else {
            auth()->user()->toggleLike($post);
        }
        return back();
    }
}
