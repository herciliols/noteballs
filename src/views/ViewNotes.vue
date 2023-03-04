<template>
    <div class="notes">
        <div class="card has-background-info-dark p-4 mb-5">
            <div class="field">
                <div class="control">
                    <textarea
                      v-model="NewNote"
                      class="textarea"
                      placeholder="Text here!"
                      ref="NewNoteRef"
                      v-autofocus
                    />
                </div>
            </div>

            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button :disabled="!NewNote" @click="AddNote()" class="button is-white">Add New Note</button>
                </div>
            </div>
        </div>
        <Note
          v-for="(note, index) in notes"
          :key="note.id"
          :note="note"
          :index="index"
        />

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia'
import Note from '@/components/Notes/Note.vue';
import { useStoreNotes } from '@/stores/storeNotes';
import { vAutofocus } from '@/directives/vAutoFocus.js';

const storeNotes = useStoreNotes();
const { notes, NewNote } = storeToRefs(storeNotes);
const { addNote } = storeNotes;
const NewNoteRef = ref(null);

function AddNote(){
    addNote();
    NewNoteRef.value.focus();
}



</script>
