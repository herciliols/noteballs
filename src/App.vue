<template>
    <NavBar />
    <div class="container is-max-desktop px-2 py-4">
        <routerView />
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import NavBar from '@/components/Layout/NavBar.vue'
import { useStoreNotes } from '@/stores/storeNotes'


const { getNotes } = useStoreNotes();


onMounted(() => {
    getNotes();
})
</script>


<style>
@import 'bulma/css/bulma.min.css'
</style>