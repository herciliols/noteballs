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
                    />
                </div>
            </div>

            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button
                      :disabled="!NewNote"
                      @click="addNote()"
                      class="button is-white"
                    >Add New Note</button>
                </div>
            </div>
        </div>

        <div
          v-for="(note, index) in notes"
          :key="note.id"
          :note="note"
          class="card mb-4"
        >
            <div class="card-content">
                <div class="content">
                    {{ note.content }}
                    <div class="has-text-right has-text-grey-light mt-2">
                        <small> {{ note.content.length }} characters </small>
                    </div>
                </div>
            </div>
            <footer class="card-footer">
                <a class="card-footer-item">Edit</a>

                <a @click="DelNote(index)" class="card-footer-item">
                    Delete
                </a>
            </footer>
        </div>




    </div>
</template>

<script setup>
import { ref } from 'vue';

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
