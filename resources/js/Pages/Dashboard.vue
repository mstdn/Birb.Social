<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            Dashboard
        </template>

        <div class="border-b border-gray-200 dark:border-dim-200 pb-4 border-l border-r">
            <Welcome />
        </div>

    </AppLayout>
</template>
