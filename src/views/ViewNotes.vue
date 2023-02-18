<template>
    <div class="notes">
        <div class="card has-background-info-dark p-4 mb-5">
            <div class="field">
                <div class="control">
                    <textarea class="textarea" placeholder="Text here!" v-model="NewNote" ref="NewNoteRef" />
                </div>
            </div>

            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button :disabled="!NewNote" @click="addNote()" class="button is-white">Add New Note</button>
                </div>
            </div>
        </div>
        <Note v-for="(note, index) in notes" :key="note.id" :note="note" />

    </div>
</template>

<script setup>
import { ref } from 'vue';
import Note from '@/components/Notes/Note.vue';


const notes = ref([]);
const NewNote = ref();
const NewNoteRef = ref(null);


const addNote = () => {
    notes.value.unshift({
        id: notes.value.length,
        content: NewNote.value
    });
    NewNote.value = null;
    NewNoteRef.value.focus();
}

const DelNote = (index) => {
    notes.value.splice(index, 1);
}

</script>
