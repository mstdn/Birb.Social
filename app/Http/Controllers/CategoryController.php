<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Categories/Index', [
            'categories'    =>  Category::query()
                                ->when($request->input('search'), function ($query, $search) {
                                    $query->where('name', 'like', "%{$search}%");
                                })
                                ->paginate(20)
                                ->withQueryString()
                                ->through(fn ($category) => [
                                    'id'        =>  $category->id,
                                    'name'      =>  $category->name,
                                    'slug'      =>  $category->slug,
                                    'count'     =>  $category->posts()->count(),
                                ]),
                                'filters' => $request->only(['search']),
        ]);
    }

    public function show(Request $request, Category $category, Post $post)
    {
        if (Auth::user()) {
            $liked = $post->isLikedBy(Auth()->user());
            $delete = Auth::user()->id === $post->user_id;
        } else {
            $liked = null;
            $delete = false;
        }

        return Inertia::render('Categories/Show', [
            'posts' => $category->posts()->latest()
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
                'isliked'       =>  $liked,
                'likes'         =>  $post->likers()->count(),
                'delete'        =>  $delete,
                'replycount'    =>  $post->replies->count(),
                'downloadready' =>  $post->converted_for_downloading_at,
                'image'         =>  '/storage/' . $post->image,
                'hasimage'      =>  $post->image,
                'video'         =>  Storage::disk('public')->url('uploads/' . $post->user->id . '/' . 'videos/' . $post->id . '.mp4'),
            ]),
        'filters'           =>  $request->only(['search']),
        ]);
    }
}
