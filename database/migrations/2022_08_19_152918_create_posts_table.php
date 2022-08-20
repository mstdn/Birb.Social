<?php

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
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->longText('description')->nullable();
            $table->foreignId('category_id');
            $table->string('media')->nullable();
            $table->string('image')->nullable();
            $table->string('video')->nullable();
            $table->string('tags')->nullable();
            $table->string('original_name')->nullable();
            $table->string('disk')->nullable();
            $table->string('path')->nullable();
            $table->datetime('converted_for_downloading_at')->nullable();
            $table->boolean('is_nsfw')->default(false)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
};
