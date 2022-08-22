<template>
    <div>
        <!-- Tweet -->
        <div v-for="post in posts.data" :key="post.id" class="
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
            <div class="flex flex-shrink-0 p-4">
                <div class="flex-shrink-0 group block min-w-full">
                    <div class="flex items-top">
                        <div class="flex justify-between min-w-full">
                            <div class="flex justify-start">
                                <div>
                                    <InertiaLink :href="route('user-profile', { id: post.username })">
                                        <img class="inline-block h-10 w-10 rounded-full" :src="post.avatar" alt="" />
                                    </InertiaLink>
                                </div>
                                <div class="ml-3">
                                    <div class="
                                                text-base
                                                font-medium
                                                text-gray-800
                                                dark:text-white
                                                ">
                                        <InertiaLink :href="route('user-profile', { id: post.username })">
                                            {{ post.name }}
                                        </InertiaLink>
                                        <div class="
                                                    mb-2
                                                    text-sm
                                                    text-gray-400
                                                    group-hover:text-gray-300
                                                    transition
                                                    ease-in-out
                                                    duration-150
                                                    ">
                                            <InertiaLink :href="route('user-profile', { id: post.username })">
                                                @{{ post.username }}
                                            </InertiaLink>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="flex justify-end mt-2">
                                <div class="text-xs text-gray-900 dark:text-white">
                                    <InertiaLink :href="route('show-post', { id: post.id })">
                                        {{ post.time }}
                                    </InertiaLink>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div class="pl-4">

                <div v-if="post.downloadready !== null" class="flex mb-4 mr-4">
                    <div class="w-full">
                        <vue-plyr :options="options" class="object-fill h-full w-full">
                            <video controls crossorigin playsinline>
                                <source size="720" :src="post.video" type="video/mp4" />
                            </video>
                        </vue-plyr>
                    </div>
                </div>

                <div v-if="post.hasimage !== null" class="flex mb-4 pr-4 pl-2 rounded-md min-w-fit">
                    <div class="w-full">
                        <FullImage :post="post" />
                    </div>
                </div>

                <div class="
                    text-base
                    width-auto
                    font-medium
                    text-gray-800
                    dark:text-white
                    flex-shrink
                    pb-5
                    mr-3
                    pl-4
                    sx:break-all overflow-hidden
                ">
                    {{ post.description }}
                </div>

                <div class="flex">
                    <div class="w-full">
                        <div class="flex items-center pl-4">
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
                                        class=" text-gray-800 dark:text-white text-xs text-gray-400 hover:text-red-400 dark:hover:text-red-400 transition duration-350 ease-in-out">
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
    </div>
</template>
<script setup>
import { useForm } from '@inertiajs/inertia-vue3'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import FullImage from './FullImage.vue';

const form = useForm();
function destroy(id) {
    if (confirm("Are you sure you want to Delete")) {
        form.delete(route('posts.destroy', id));
    }
}

let props = defineProps({
    posts: Object,
});
</script>