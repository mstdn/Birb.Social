<script setup>
import AppLayout from '@/Layouts/AppLayout.vue'
import { useForm } from "@inertiajs/inertia-vue3"
import { computed } from 'vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

let props = defineProps({
    post: Object,
});

const characterCount = computed(() => {
    return form.reply.length
})

let form = useForm({
    reply: "",
    image: "",
    video: "",
});

let submit = () => {
    form.post(route('reply', { id: props.post.id }), {
        forceFormData: true,
        preserveScroll: true,
        onSuccess: () => form.reset("reply", "video", "image"),
    });
};

function destroy(id) {
    if (confirm("Are you sure you want to delete?")) {
        form.delete(route('reply.destroy', id));
    }
}
</script>
<template>
    <AppLayout title="Post">
        <template #header>
            Post by {{ post.username }}
        </template>

        <div class="border-b border-gray-200
                dark:border-dim-200
                min-h-screen
                border-l border-r
                ">

            <!-- Tweet -->
            <div class="
                    border-b border-gray-200
                    dark:border-dim-200
                    hover:bg-gray-100
                    dark:hover:bg-dim-300
                    cursor-pointer
                    transition
                    duration-350
                    ease-in-out
                    pb-4
                    
                ">
                <div class="flex flex-shrink-0 p-4 pb-0">
                    <div class="flex-shrink-0 group block">
                        <div class="flex items-top">
                            <div>
                                <InertiaLink :href="route('user-profile', { id: post.username })">
                                    <img class="inline-block h-9 w-9 rounded-full" :src="post.avatar" alt="" />
                                </InertiaLink>
                            </div>
                            <div class="ml-3">
                                <p class="
                                    flex
                                    items-center
                                    text-base
                                    leading-6
                                    font-medium
                                    text-gray-800
                                    dark:text-white
                                    ">
                                    <InertiaLink :href="route('user-profile', { id: post.username })">
                                        {{ post.name }}
                                    </InertiaLink>

                                    <span class="
                                        ml-1
                                        text-sm
                                        leading-5
                                        font-medium
                                        text-gray-400
                                        group-hover:text-gray-300
                                        transition
                                        ease-in-out
                                        duration-150
                                    ">
                                        <InertiaLink :href="route('user-profile', { id: post.username })">
                                            @{{ post.username }}
                                        </InertiaLink>
                                        .
                                        <InertiaLink :href="route('show-post', { id: post.id })">
                                            {{ post.time }}
                                        </InertiaLink>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pl-16">
                    <div class="
                        text-base
                        width-auto
                        font-medium
                        text-gray-800
                        dark:text-white
                        flex-shrink
                        pb-5
                        mr-3
                        sx:break-all overflow-hidden
                    ">
                        {{ post.description }}
                    </div>

                    <div v-if="post.downloadready !== null" class="flex mb-4 mr-4">
                        <div class="w-full">
                            <vue-plyr :options="options" class="object-fill h-full w-full">
                                <video controls crossorigin playsinline>
                                    <source size="720" :src="post.video" type="video/mp4" />
                                </video>
                            </vue-plyr>
                        </div>
                    </div>

                    <div v-if="post.hasimage !== null" class="flex mb-4 pr-4 rounded-2xl min-w-fit">
                        <div class="w-full">
                            <InertiaLink :href="route('show-post', { id: post.id })">
                                <img class="rounded-2xl object-fill h-full w-full" :src="post.image" alt="" />
                            </InertiaLink>
                        </div>
                    </div>

                    <div class="flex">
                        <div class="w-full">
                            <div class="flex items-center">
                                <!-- Post replies -->
                                <InertiaLink :href="route('show-post', { id: post.id })" class="
                                            flex-1 flex
                                            items-center
                                            text-gray-800
                                            dark:text-white
                                            text-xs text-gray-400
                                            hover:text-red-400
                                            dark:hover:text-red-400
                                            transition
                                            duration-350
                                            ease-in-out
                                            ">
                                    <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                                        <g>
                                            <path
                                                d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z">
                                            </path>
                                        </g>
                                    </svg>
                                    {{ post.replycount }}
                                </InertiaLink>

                                <!-- Post likes -->
                                <InertiaLink v-if="$page.props.user !== null && post.isliked === false" preserveScroll
                                    method="post" as="button" class="
                                        flex-1 flex
                                        items-center
                                        text-gray-800
                                        dark:text-white
                                        text-xs text-gray-400
                                        hover:text-red-600
                                        dark:hover:text-red-600
                                        transition
                                        duration-350
                                        ease-in-out
                                        " :href="route('like', { id: post.id })">
                                    <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                                        <g>
                                            <path
                                                d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z">
                                            </path>
                                        </g>
                                    </svg>
                                    {{ post.likes }}
                                </InertiaLink>
                                <InertiaLink v-if="$page.props.user !== null && post.isliked === true" preserveScroll
                                    method="post" as="button" class="
                                        flex-1 flex
                                        items-center
                                        text-red-600
                                        dark:text-red-600
                                        text-xs text-red-600
                                        hover:text-red-700
                                        dark:hover:text-red-400
                                        transition
                                        duration-350
                                        ease-in-out
                                    " :href="route('like', { id: post.id })">
                                    <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                                        <g>
                                            <path
                                                d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z">
                                            </path>
                                        </g>
                                    </svg>
                                    {{ post.likes }}
                                </InertiaLink>
                                <a v-if="$page.props.user === null" preserveScroll method="post" as="button" class="
                                        flex-1 flex
                                        items-center
                                        text-gray-800
                                        dark:text-white
                                        text-xs text-gray-400
                                        hover:text-red-600
                                        dark:hover:text-red-600
                                        transition
                                        duration-350
                                        ease-in-out
                                    ">
                                    <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                                        <g>
                                            <path
                                                d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z">
                                            </path>
                                        </g>
                                    </svg>
                                    {{ post.likes }}
                                </a>

                                <div class="flex-1 flex items-center">
                                    <Popover v-slot="{ open }" class="relative">
                                        <PopoverButton :class="open ? '' : 'text-gray-600 dark:text-gray-300'"
                                            class=" text-gray-800 dark:text-white text-xs text-gray-400 hover:text-blue-400 dark:hover:text-blue-400 transition duration-350 ease-in-out">
                                            <span>
                                                <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                                                    <g>
                                                        <path
                                                            d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z">
                                                        </path>
                                                        <path
                                                            d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z">
                                                        </path>
                                                    </g>
                                                </svg>
                                            </span>
                                        </PopoverButton>

                                        <transition enter-active-class="transition duration-200 ease-out"
                                            enter-from-class="translate-y-1 opacity-0"
                                            enter-to-class="translate-y-0 opacity-100"
                                            leave-active-class="transition duration-150 ease-in"
                                            leave-from-class="translate-y-0 opacity-100"
                                            leave-to-class="translate-y-1 opacity-0">
                                            <PopoverPanel
                                                class="absolute left-1/2 z-10 mt-3 w-min max-w-sm -translate-x-1/2 transform px-4 sm:px-0">
                                                <div
                                                    class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                    <div class="bg-gray-50 dark:bg-dim-900 dark:text-white p-4">
                                                        <InertiaLink :href="route('show-post', { id: post.id })">
                                                            See post
                                                        </InertiaLink>
                                                    </div>
                                                </div>
                                            </PopoverPanel>
                                        </transition>
                                    </Popover>
                                </div>
                                <button v-if="post.delete" @click="destroy(post.id)" method="post" type="submit" class="
                                    flex-1 flex
                                    items-center
                                    text-gray-800
                                    dark:text-white
                                    text-xs text-gray-400
                                    hover:text-red-400
                                    dark:hover:text-red-400
                                    transition
                                    duration-350
                                    ease-in-out
                                    ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path
                                            d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                        </path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Tweet -->

            <!-- Reply -->
            <form v-if="$page.props.auth.user !== null" @submit.prevent="submit">
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
                            <textarea v-model="form.reply" name="reply" id="reply" class="
                            dark:text-white
                            text-gray-900
                            placeholder-gray-400
                            w-full
                            h-12
                            bg-transparent
                            border-0
                            focus:outline-none
                            border-none focus:ring-0 
                            resize-none
                            " placeholder="What do you think?"></textarea>
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
                                <svg viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor">
                                    <g>
                                        <path
                                            d="M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z">
                                        </path>
                                        <path
                                            d="M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                            <input name="media" id="media" type="file" @input="form.video = $event.target.files[0]"
                                style="display: none" />
                        </label>

                        <p class="p-2 text-gray-400 text-sm">{{ characterCount }}/500</p>

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
                            <span class="font-bold text-sm">Reply</span>
                        </button>
                    </div>
                </div>


                <div v-if="form.errors.reply" v-text="form.errors.reply" class="text-red-500 mt-1"></div>

            </form>
            <!-- /Reply -->

            <!-- Replies -->
            <div v-for="reply in post.replies" :key="reply.id" class="
                        border-b border-gray-200
                        dark:border-dim-200
                        hover:bg-gray-100
                        dark:hover:bg-dim-300
                        cursor-pointer
                        transition
                        duration-350
                        ease-in-out
                        pb-4
                        
                    ">
                <div class="flex flex-shrink-0 p-4 pb-0">
                    <div class="flex-shrink-0 group block">
                        <div class="flex items-top">
                            <div>
                                <InertiaLink :href="route('user-profile', { id: reply.username })">
                                    <img class="inline-block h-9 w-9 rounded-full" :src="reply.avatar" alt="" />
                                </InertiaLink>
                            </div>
                            <div class="ml-3">
                                <p class="
                                    flex
                                    items-center
                                    text-base
                                    leading-6
                                    font-medium
                                    text-gray-800
                                    dark:text-white
                                    ">
                                    <InertiaLink :href="route('user-profile', { id: reply.username })">
                                        {{ reply.name }}
                                    </InertiaLink>

                                    <span class="
                                        ml-1
                                        text-sm
                                        leading-5
                                        font-medium
                                        text-gray-400
                                        group-hover:text-gray-300
                                        transition
                                        ease-in-out
                                        duration-150
                                    ">
                                        <InertiaLink :href="route('user-profile', { id: reply.username })">
                                            @{{ reply.username }}
                                        </InertiaLink>
                                        .
                                        {{ reply.time }}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pl-16">
                    <div class="
                        text-base
                        width-auto
                        font-medium
                        text-gray-800
                        dark:text-white
                        flex-shrink
                        pb-5
                        mr-3
                        sx:break-all overflow-hidden
                    ">
                        {{ reply.reply }}
                    </div>

                    <div v-if="reply.downloadready !== null" class="flex mb-4 mr-2 w-full h-full">
                        <vue-plyr :options="options">
                            <video controls crossorigin playsinline>
                                <source size="720" :src="reply.video" type="video/mp4" />
                            </video>
                        </vue-plyr>
                    </div>

                    <div v-if="reply.hasimage !== null" class="flex mb-4 pr-4 rounded-2xl min-w-fit">
                        <div class="w-full">
                            <img class="rounded-2xl object-fill h-full w-full" :src="reply.image" alt="" />
                        </div>
                    </div>


                    <div class="flex">
                        <div class="w-full">
                            <div class="flex items-center">
                                <!-- Post replies -->
                                <div class="
                                            flex-1 flex
                                            items-center
                                            text-gray-800
                                            dark:text-white
                                            text-xs text-gray-400
                                            hover:text-red-400
                                            dark:hover:text-red-400
                                            transition
                                            duration-350
                                            ease-in-out
                                            ">
                                    <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                                        <g>
                                            <path
                                                d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z">
                                            </path>
                                        </g>
                                    </svg>
                                    0
                                </div>
                                <!-- Post likes -->
                                <InertiaLink v-if="$page.props.user !== null && reply.isliked === false" preserveScroll
                                    method="post" as="button" class="
                                        flex-1 flex
                                        items-center
                                        text-gray-800
                                        dark:text-white
                                        text-xs text-gray-400
                                        hover:text-red-600
                                        dark:hover:text-red-600
                                        transition
                                        duration-350
                                        ease-in-out
                                        " :href="route('like-reply', { id: reply.id })">
                                    <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                                        <g>
                                            <path
                                                d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z">
                                            </path>
                                        </g>
                                    </svg>
                                    {{ reply.likes }}
                                </InertiaLink>
                                <InertiaLink v-if="$page.props.user !== null && reply.isliked === true" preserveScroll
                                    method="post" as="button" class="
                                        flex-1 flex
                                        items-center
                                        text-red-600
                                        dark:text-red-600
                                        text-xs text-red-600
                                        hover:text-red-700
                                        dark:hover:text-red-400
                                        transition
                                        duration-350
                                        ease-in-out
                                    " :href="route('like-reply', { id: reply.id })">
                                    <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                                        <g>
                                            <path
                                                d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z">
                                            </path>
                                        </g>
                                    </svg>
                                    {{ reply.likes }}
                                </InertiaLink>
                                <div v-if="$page.props.user === null" preserveScroll method="post" as="button" class="
                                        flex-1 flex
                                        items-center
                                        text-gray-800
                                        dark:text-white
                                        text-xs text-gray-400
                                        hover:text-red-600
                                        dark:hover:text-red-600
                                        transition
                                        duration-350
                                        ease-in-out
                                    ">
                                    <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                                        <g>
                                            <path
                                                d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z">
                                            </path>
                                        </g>
                                    </svg>
                                    {{ reply.likes }}
                                </div>


                                <button v-if="reply.delete" @click="destroy(reply.id)" method="post" type="submit"
                                    class="
                                    flex-1 flex
                                    items-center
                                    text-gray-800
                                    dark:text-white
                                    text-xs text-gray-400
                                    hover:text-red-400
                                    dark:hover:text-red-400
                                    transition
                                    duration-350
                                    ease-in-out
                                    ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path
                                            d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                        </path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>
                                </button>

                                <div class="flex-1 flex items-center">
                                    <Popover v-slot="{ open }" class="relative">
                                        <PopoverButton :class="open ? '' : 'text-gray-600 dark:text-gray-300'"
                                            class=" text-gray-800 dark:text-white text-xs text-gray-400 hover:text-blue-400 dark:hover:text-blue-400 transition duration-350 ease-in-out">
                                            <span>
                                                <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                                                    <g>
                                                        <path
                                                            d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z">
                                                        </path>
                                                        <path
                                                            d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z">
                                                        </path>
                                                    </g>
                                                </svg>
                                            </span>
                                        </PopoverButton>

                                        <transition enter-active-class="transition duration-200 ease-out"
                                            enter-from-class="translate-y-1 opacity-0"
                                            enter-to-class="translate-y-0 opacity-100"
                                            leave-active-class="transition duration-150 ease-in"
                                            leave-from-class="translate-y-0 opacity-100"
                                            leave-to-class="translate-y-1 opacity-0">
                                            <PopoverPanel
                                                class="absolute left-1/2 z-10 mt-3 w-min max-w-sm -translate-x-1/2 transform px-4 sm:px-0">
                                                <div
                                                    class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                    <div class="bg-gray-50 dark:bg-dim-900 dark:text-white p-4">
                                                        <InertiaLink
                                                            :href="route('user-profile', { id: reply.username })">
                                                            @{{ reply.username }}
                                                        </InertiaLink>
                                                    </div>
                                                </div>
                                            </PopoverPanel>
                                        </transition>
                                    </Popover>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Tweet -->


        </div>

    </AppLayout>
</template>
