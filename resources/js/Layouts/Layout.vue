<template>
    <div class="min-h-screen flex flex-col">
        <nav class="flex justify-center py-2 bg-gray-800 text-gray-100">
            <h1 class="text-xl font-bold tracking-wider">Will You Go?</h1>
        </nav>
        <div class="flex-1">
            <slot />
        </div>
        <footer class="flex justify-end">
            <img src="/favicon-32X32.png" alt="">
        </footer>
    </div>
</template>
