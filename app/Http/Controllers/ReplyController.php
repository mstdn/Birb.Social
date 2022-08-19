<?php

namespace App\Http\Controllers;

use App\Jobs\ConvertReplyVideoForDownload;
use App\Models\Post;
use App\Models\Reply;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class ReplyController extends Controller
{
    public function store(Request $request, Post $post, Reply $reply) {

        $replies = $request->validate([
            'reply'         =>  'required|min:1|max:500',
            'image'         => ['nullable', 'mimes:jpg,jpeg,png,gif', 'max:500048'],
            'video'         =>  'nullable|file|mimetypes:video/x-ms-asf,video/x-flv,video/mp4,video/mpeg,application/x-mpegURL,video/MP2T,video/3gpp,video/quicktime,video/x-msvideo,video/x-ms-wmv,video/avi|max:10240',
        ]);

        $replies['post_id'] = $request['post_id'];
        $replies['user_id'] = auth()->id();
        $storeURL = Str::random(16);

        if ($request->hasFile('image')) {
            $post->replies()->create([
                'user_id'       =>  auth()->id(),
                'image'         =>  $request->file('image')->store('uploads/images', 'public'),
                'reply'         =>  $request->reply
            ]);
            return back();
        }

        if ($request->hasFile('video')) {
            $post->replies()->create([
                'user_id'       =>  auth()->id(),
                'disk'          =>  'public',
                'original_name' =>  $request->file('video')->getClientOriginalName(),
                'path'          =>  $request->file('video')->store('uploads/' . $request['user_id'] . '/' . 'videos/' . $storeURL, 'public'),
                'reply'   =>        $request->reply
            ]);
            $this->dispatch(new ConvertReplyVideoForDownload($reply));
            return back();
        } else {
            $post->replies()->create([
                'user_id'       =>  auth()->id(),
                'reply'   =>  $request->reply
            ]);
            return back();
        }


        
        $reply = $request->validate([
            'reply' => 'required|max:500|min:1'
        ]);

        $reply['post_id'] = $request['post_id'];

        $reply['user_id'] = auth()->id();

        $post->replies()->create($reply);

        return back();
    }

    public function like(Reply $reply)
    {
        if (auth()->user()->hasLiked($reply)) {
            auth()->user()->unlike($reply);
        } else {
            auth()->user()->toggleLike($reply);
        }
        return back();
    }

    // Delete
    public function destroy(Reply $reply)
    {
        if (! Gate::allows('delete-reply', $reply)) {
            abort(403);
        }
        $reply->delete();
    
        return back();
    }
}
