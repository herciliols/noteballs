<template>
    <NavBar />
    <div class="container is-max-desktop px-2 py-4">
        <routerView />
    </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import NavBar from '@/components/Layout/NavBar.vue'
import { useStoreNotes } from '@/stores/storeNotes'


const StoreNotes  = useStoreNotes()


onMounted(() => {
    StoreNotes.getNotes()
})
</script>


<style>
@import 'bulma/css/bulma.min.css'
</style>