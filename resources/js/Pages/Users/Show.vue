<script setup>
import AppLayout from '@/Layouts/AppLayout.vue'
import Pagination from '../Components/Pagination.vue'
import ProfileCard from '../Components/ProfileCard.vue'
import Empty from '../Components/Empty.vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import Cards from '../Components/Cards.vue'

let props = defineProps({
    profile: Object,
});
</script>
<template>
    <AppLayout title="User Profile">
        <template #header>
            {{ profile.name }} Profile
        </template>

        <ProfileCard :profile="profile" />

        <TabGroup>
            <TabList class="mx-auto text-center flex space-x-1 bg-gray-200 dark:bg-gray-800 p-2">
                <Tab v-slot="{ selected }" as="template">
                    <button :class="[selected ? 'btn btn-primary' : 'btn btn-primary btn-active']">
                        Posts
                    </button>
                </Tab>
                <Tab v-slot="{ selected }" as="template">
                    <button :class="[selected ? 'btn btn-primary' : 'btn btn-primary btn-active']">
                        Liked
                    </button>
                </Tab>
                <Tab v-slot="{ selected }" as="template">
                    <button :class="[selected ? 'btn btn-primary' : 'btn btn-primary btn-active']">
                        Shared
                    </button>
                </Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <div class="border-b border-gray-200
                            dark:border-dim-200
                            min-h-screen
                            border-l border-r
                            ">
                        <div v-if="profile.posts.total === 0">
                            <Empty />
                        </div>
                        <Cards v-bind:posts="profile.posts" />
                        <Pagination :links="profile.posts.links" />
                    </div>
                </TabPanel>
                <TabPanel>
                    <div class="px-4 mx-auto max-w-screen-xl">
                        <div class="mx-auto max-w-screen-sm text-center p-10">

                            Soon.

                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div class="px-4 mx-auto max-w-screen-xl lg:px-6">
                        <div class="mx-auto max-w-screen-sm text-center p-10">

                            Soon.

                        </div>
                    </div>
                </TabPanel>
            </TabPanels>
        </TabGroup>


    </AppLayout>
</template>