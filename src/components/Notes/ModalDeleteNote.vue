<template>
    <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
        <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button
            @click="closeModal"
            class="delete" 
            aria-label="close">
        </button>
        </header>
        <section class="modal-card-body">
            Are you sure you want to delete this note? 
        </section>
        <footer class="modal-card-foot is-justify-content-flex-end">
            <button 
                class="button"
                @click="closeModal"
            >Cancel</button>
            <button 
                class="button is-danger"
                @click="DelNote(indexDelete)"
            >Delete
            </button>
        </footer>
    </div>
    </div>
</template>

<script setup>

import { useStoreNotes } from '@/stores/storeNotes'
const storeNotes = useStoreNotes()
const { delNote } = storeNotes




function DelNote (indexDelete){
    delNote(indexDelete);
    console.log(indexDelete);
}


const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    indexDelete:{
        type: Number,
        default: null
    }
})

const emit = defineEmits(['update:modelValue'])

const closeModal = () => {
    emit('update:modelValue', false)
}



</script>