<template>
    <div>
        <form @submit.prevent="submit">
            <div class="
          border-b border-gray-200
          dark:border-dim-200
          pb-4
          border-l border-r
        ">
                <div class="flex flex-shrink-0 p-4 pb-0">
                    <div class="w-12 flex items-top">
                        <img class="inline-block h-10 w-10 rounded-full" :src="$page.props.user.profile_photo_url"
                            alt="" />
                    </div>
                    <div class="w-full p-2">
                        <textarea v-model="form.description" name="description" id="description" class="
                        dark:text-white
                        text-gray-900
                        placeholder-gray-400
                        w-full
                        h-14
                        bg-transparent
                        border-0
                        focus:outline-none
                        border-none focus:ring-0 
                        resize-none
                    " placeholder="Upload and post something funny!"></textarea>
                    </div>
                </div>
                <div class="w-full flex items-top p-2 text-white pl-14">
                    <label>
                        <div class="
                            text-red-400
                            hover:bg-red-50
                            dark:hover:bg-dim-800
                            rounded-full
                            p-2
                        ">
                            <svg viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor">
                                <g>
                                    <path
                                        d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z">
                                    </path>
                                    <circle cx="8.868" cy="8.309" r="1.542"></circle>
                                </g>
                            </svg>
                        </div>
                        <input name="image" id="image" type="file" @input="form.image = $event.target.files[0]"
                            style="display: none" />
                    </label>
                    <label>
                        <div class="
                                text-red-400
                                hover:bg-red-50
                                dark:hover:bg-dim-800
                                rounded-full
                                p-2
                            ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                                <line x1="7" y1="2" x2="7" y2="22"></line>
                                <line x1="17" y1="2" x2="17" y2="22"></line>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <line x1="2" y1="7" x2="7" y2="7"></line>
                                <line x1="2" y1="17" x2="7" y2="17"></line>
                                <line x1="17" y1="17" x2="22" y2="17"></line>
                                <line x1="17" y1="7" x2="22" y2="7"></line>
                            </svg>
                        </div>
                        <input name="media" id="media" type="file" @input="form.video = $event.target.files[0]"
                            style="display: none" />
                    </label>
                    <p class="p-2 text-gray-400 text-sm">{{ characterCount }}/500</p>
                </div>

                <div class="w-full flex items-top text-gray-900 md:pl-14 pl-4 justify-between">
                    <div class="flex justify-start">
                        <select v-model="form.category" name="category" id="category"
                            class="select select-bordered w-min max-w-xs mt-1 text-blue-400 text-sm font-normal dark:bg-dim-800 hover:bg-gray-100 dark:hover:bg-dim-300 cursor-pointer transition duration-350 ease-in-out">
                            <option disabled value="">Category</option>
                            <option value="1" selected>General</option>
                            <option value="2">Animals</option>
                            <option value="3">LOL</option>
                            <option value="4">Videos</option>
                            <option value="5">Wholesome</option>
                            <option value="6">Memes</option>
                            <option value="7">GIFs</option>
                            <option value="8">News</option>
                            <option value="9">Anime</option>
                            <option value="10">Comics</option>
                        </select>
                        <label class="label cursor-pointer ml-2">
                            <input v-model="form.nsfw" type="checkbox" name="nsfw" id="nsfw"
                                class="checkbox checkbox-xs dark:bg-dim-800" />
                            <span class="label-text text-gray-900 ml-2 dark:text-white text-sm">
                                18+
                            </span>
                        </label>
                    </div>
                    <div class="flex justify-end">
                        <button type="submit" :disabled="form.processing" class="
                        bg-red-400
                        hover:bg-red-500
                        text-white
                        rounded-full
                        py-1
                        px-4
                        ml-auto
                        mr-1
                        
                        ">
                            <span class="font-bold text-sm">Publish</span>
                        </button>
                    </div>
                </div>
                <div v-if="form.errors.image" v-text="form.errors.image" class="text-red-500 mt-1"></div>
                <div v-if="form.errors.video" v-text="form.errors.video" class="text-red-500 mt-1"></div>
                <div v-if="form.errors.description" v-text="form.errors.description" class="text-red-500 mt-1"></div>

            </div>
        </form>
    </div>
</template>
<script setup>
import { useForm } from "@inertiajs/inertia-vue3";
import { computed } from 'vue';

const characterCount = computed(() => {
    return form.description.length
})

let form = useForm({
    description: "",
    video: "",
    image: "",
    nsfw: "",
    category: "1",
});

let submit = () => {
    form.post("/home", {
        forceFormData: true,
        onSuccess: () => form.reset("description", "video", "nsfw", "image", "category"),
    });
};
</script>
