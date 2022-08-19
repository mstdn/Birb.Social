<script setup>
import JetApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Timeline } from 'flowbite-vue';
import { Card } from 'flowbite-vue';
</script>

<template>
    <div>
        <div class="p-6 sm:px-20 bg-white border-b border-gray-200">
            <div>
                <JetApplicationLogo class="block h-12 w-auto" />
            </div>

            <div class="mt-8 text-2xl">
                Welcome to your Jetstream application!
                <Card>All cool?</Card>
            </div>
        </div>


        <Timeline>
            
        </Timeline>

    </div>
</template>
