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
                      maxlength="100"
                    />
                </div>
            </div>
            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button :disabled="!NewNote" @click="AddNote()" class="button is-white">Add New Note</button>
                </div>
            </div>
        </div>

        <progress
          v-if="!notesLoading"
          class="progress is-large is-info"
          max="100"
        />

        <template
          v-else
        >
            <Note
              v-for="(note, index) in notes"
              :key="note.id"
              :index="index"
              :note="note"
            />

            <div
              v-if="!notes.length"
              class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6" 
            >
                No notes here yet..
            </div>
        </template>
        
       
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { storeToRefs } from 'pinia'
import Note from '@/components/Notes/Note.vue';
import { useStoreNotes } from '@/stores/storeNotes';
import { vAutofocus } from '@/directives/vAutoFocus.js';

const storeNotes = useStoreNotes();
const { notes, NewNote, notesLoading } = storeToRefs(storeNotes);
const { addNote } = storeNotes;
const NewNoteRef = ref(null);

function AddNote(){
    addNote();
    NewNoteRef.value.focus();
}

watch(NewNote, (newValue) => {
    if(NewNote.length===100){
        alert('Only 100 characters allowed gosh darnit!!');
    }
})



onMounted(() => {
    storeNotes.getNotes()
})


</script>
