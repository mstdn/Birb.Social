<template>
    <div>
        <!-- Left -->
        <div class="w-68 xs:w-88 xl:w-275 h-screen">
            <div class="flex flex-col h-screen xl:pr-3 fixed overflow-y-auto w-68 xs:w-88 xl:w-275">
                <!-- Logo -->
                <a class="flex my-2 justify-center xl:justify-start" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                        stroke="#add8e6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                        <line x1="12" y1="2" x2="12" y2="12"></line>
                    </svg>
                </a>
                <!-- /Logo -->

                <!-- Nav non-logged-in -->
                <nav v-if="$page.props.auth.user === null" class="mt-5">
                    <NavLink href="/" :active="$page.component === 'Landing'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
                            <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" />
                        </svg>
                        <span class="hidden xl:block ml-4 font-bold text-md">
                            Browse
                        </span>
                    </NavLink>

                    <NavLink href="/categories" :active="$page.component === 'Categories/Index'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="3" width="7" height="7"></rect>
                            <rect x="14" y="3" width="7" height="7"></rect>
                            <rect x="14" y="14" width="7" height="7"></rect>
                            <rect x="3" y="14" width="7" height="7"></rect>
                        </svg>
                        <span class="hidden xl:block ml-4 font-bold text-md">
                            Categories
                        </span>
                    </NavLink>

                    <NavLink href="/register" :active="route().current('register')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="8.5" cy="7" r="4"></circle>
                            <line x1="20" y1="8" x2="20" y2="14"></line>
                            <line x1="23" y1="11" x2="17" y2="11"></line>
                        </svg>
                        <span class="hidden xl:block ml-4 font-bold text-md">
                            Register
                        </span>
                    </NavLink>
                    <NavLink href="/login" :active="route().current('login')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" />
                        </svg>
                        <span class="hidden xl:block ml-4 font-bold text-md">
                            Login
                        </span>
                    </NavLink>
                </nav>
                <!-- /Nav -->

                <!-- Nav logged in -->
                <nav v-else class="mt-5">
                    <NavLink href="/home" :active="$page.component === 'Posts/Home'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
                            <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" />
                        </svg>
                        <span class="hidden xl:block ml-4 font-bold text-md">
                            Feed
                        </span>
                    </NavLink>

                    <NavLink href="/public" :active="$page.component === 'Posts/Index'">
                        <svg fill="currentColor" viewBox="0 0 24 24" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z">
                            </path>
                        </svg>
                        <span class="hidden xl:block ml-4 font-bold text-md">
                            Public
                        </span>
                    </NavLink>

                    <NavLink href="/community" :active="$page.component === 'Users/Community'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <span class="hidden xl:block ml-4 font-bold text-md">
                            Community
                        </span>
                    </NavLink>

                    <NavLink href="/categories" :active="$page.component === 'Categories/Index'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="3" width="7" height="7"></rect>
                            <rect x="14" y="3" width="7" height="7"></rect>
                            <rect x="14" y="14" width="7" height="7"></rect>
                            <rect x="3" y="14" width="7" height="7"></rect>
                        </svg>
                        <span class="hidden xl:block ml-4 font-bold text-md">
                            Categories
                        </span>
                    </NavLink>

                    <NavLink :href="route('user-profile', { id: $page.props.user.username })"
                        :active="route().current('user-profile', { id: $page.props.user.username })">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
                            <circle cx="12" cy="10" r="3" />
                            <circle cx="12" cy="12" r="10" />
                        </svg>
                        <span class="hidden xl:block ml-4 font-bold text-md">
                            Profile
                        </span>
                    </NavLink>

                    <NavLink :href="route('profile.show')" :active="route().current('profile.show')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path
                                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                            </path>
                        </svg>
                        <span class="hidden xl:block ml-4 font-bold text-md">
                            Settings
                        </span>
                    </NavLink>

                    <NavLink v-if="$page.props.jetstream.hasApiFeatures" :href="route('api-tokens.index')"
                        :active="route().current('api-tokens.index')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                        <span class="hidden xl:block ml-4 font-bold text-md">
                            API
                        </span>
                    </NavLink>


                    <NavLink method="post" :href="route('logout')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 17l5-5-5-5M19.8 12H9M10 3H4v18h6" />
                        </svg>
                        <span class="hidden xl:block ml-4 font-bold text-md">
                            Logout
                        </span>
                    </NavLink>
                    <InertiaLink href="/home" :active="$page.component === 'Posts/Home'"
                        class="mx-auto w-11 h-11 xl:w-auto flex items-center justify-center bg-blue-400 hover:bg-blue-500 py-3 rounded-full text-white font-bold font-sm transition duration-350 ease-in-out mb-10">
                        <svg fill="currentColor" viewBox="0 0 24 24" class="block xl:hidden h-6 w-6">
                            <path
                                d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z">
                            </path>
                        </svg>
                        <span class="hidden xl:block font-bold text-md">Post</span>
                    </InertiaLink>
                </nav>
                <!-- /Nav -->


                <Popover v-if="$page.props.user !== null" v-slot="{ open }" class="relative">
                    <PopoverButton :class="open ? '' : 'text-gray-600 dark:text-gray-300'"
                        class="w-14 xl:w-full mx-auto mt-auto flex flex-row justify-between rounded-full hover:bg-blue-50 dark:hover:bg-dim-800 p-2 cursor-pointer transition duration-350 ease-in-out">
                        <div class="flex flex-row">
                            <InertiaLink :href="route('user-profile', { id: $page.props.user.username })">
                                <img class="w-10 h-10 rounded-full" :src="$page.props.user.profile_photo_url" alt="" />
                            </InertiaLink>
                            <div class="hidden xl:block flex flex-col ml-2">
                                <h1 class="text-gray-800 dark:text-white font-bold text-sm">
                                    <InertiaLink :href="route('user-profile', { id: $page.props.user.username })">
                                        {{ $page.props.user.name }}
                                    </InertiaLink>
                                </h1>
                                <p class="text-gray-400 text-sm">
                                    <InertiaLink :href="route('user-profile', { id: $page.props.user.username })">
                                        @{{ $page.props.user.name }}
                                    </InertiaLink>
                                </p>
                            </div>
                        </div>
                        <div class="hidden xl:block">
                            <div class="flex items-center h-full text-gray-800 dark:text-white">
                                <svg viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4 mr-2">
                                    <g>
                                        <path
                                            d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </PopoverButton>

                    <transition enter-active-class="transition duration-200 ease-out"
                        enter-from-class="translate-y-1 opacity-0" enter-to-class="translate-y-0 opacity-100"
                        leave-active-class="transition duration-150 ease-in"
                        leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
                        <PopoverPanel
                            class="absolute left-1/2 z-10 mt-1 w-36 max-w-sm -translate-x-1/2 transform px-4 sm:px-0">
                            <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                <div class="bg-gray-50 dark:bg-dim-900 dark:text-white p-4">
                                    <ul>
                                        <li>
                                            <InertiaLink
                                                :href="route('user-profile', { id: $page.props.user.username })">
                                                Profile
                                            </InertiaLink>
                                        </li>
                                        <li>
                                            <InertiaLink :href="route('profile.show')"
                                                :active="route().current('profile.show')">
                                                Settings
                                            </InertiaLink>
                                        </li>
                                        <li>
                                            <InertiaLink v-if="$page.props.jetstream.hasApiFeatures"
                                                :href="route('api-tokens.index')"
                                                :active="route().current('api-tokens.index')">
                                                API
                                            </InertiaLink>
                                        </li>
                                        <li>
                                            <NavLink method="post" :href="route('logout')">
                                                Logout
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </PopoverPanel>
                    </transition>
                </Popover>



            </div>
        </div>
        <!-- /Left -->
    </div>


</template>
<script setup>
import NavLink from './NavLink.vue';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

</script>
