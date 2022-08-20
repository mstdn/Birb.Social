<?php

use App\Models\Category;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('slug')->unique();
            $table->string('max')->nullable();
            $table->text('caption')->nullable();
            $table->timestamps();
        });

        $data =  array(
            [
                'name' => 'General',
                'slug' =>  'general',
            ],
            [
                'name' => 'Animals',
                'slug' =>  'animals',
            ],
            [
                'name' => 'LOL',
                'slug'  =>  'lol',
            ],
            [
                'name' => 'Videos',
                'slug'  =>  'videos',
            ],
            [
                'name' => 'Wholesome',
                'slug'  =>  'wholesome',
            ],
            [
                'name' => 'Memes',
                'slug'  =>  'memes',
            ],
            [
                'name' => 'GIFs',
                'slug'  =>  'gifs',
            ],
            [
                'name' => 'News',
                'slug'  =>  'news',
            ],
            [
                'name' => 'Anime',
                'slug'  =>  'anime',
            ],
            [
                'name' => 'Comics',
                'slug'  =>  'comics',
            ],
        );
        foreach ($data as $datum) {
            $category = new Category(); //The Category is the model for your migration
            $category->name = $datum['name'];
            $category->slug = $datum['slug'];
            $category->save();
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories');
    }
};
