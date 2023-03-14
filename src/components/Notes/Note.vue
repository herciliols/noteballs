<template>
    <div class="card mb-4">
        <div class="card-content">
            <div v-show="!editNote" class="content">
                {{ getNoteByIndex[index].content }}
                <div class="columns is-mobile has-text-grey-light mt-2">
                    <small class="column">{{ dateFormatted }} </small>
                    <small class="column has-text-right">{{ characterLength }} </small>  
                </div>  
            </div>
            
            <div
                v-show="editNote"
                class="content"
            >
              <textarea
                v-model="NewNote"
                class="textarea"
                placeholder="Text here!"
              >
                {{ getNoteByIndex[index].content }} 
              </textarea>
            </div>
        </div>
        <footer
          class="card-footer"
        >
            <a
              v-show="editNote"
              @click="EditNote(index)"
              class="card-footer-item "
            >Cancel</a>

            <a
              v-show="editNote"
              @click="UpdateNote(getNoteByIndex[index].id)"
              class="card-footer-item"
            >Update</a>

            
            <a
              v-show="!editNote"
              @click="EditNote(index)"
              class="card-footer-item"
            >Edit</a>
            
            <a
              v-show="!editNote"
              @click="modals.deleteNote = true"
              class="card-footer-item"
            >Delete</a>
        </footer>

        <ModalDeleteNote
          v-if="modals.deleteNote"
          v-model="modals.deleteNote"
          :indexDelete="getNoteByIndex[index].id"
        />
    </div>



</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { useDateFormat } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { useStoreNotes } from '@/stores/storeNotes'
import ModalDeleteNote from '@/components/Notes/ModalDeleteNote.vue'
const storeNotes = useStoreNotes()

const { updateNote } = storeNotes
const { getNoteByIndex } = storeToRefs(storeNotes)

const editNote = ref(false)
const NewNote = ref(null)

const characterLength = computed(() => {
    length = props.note.content.length;
    let description = props.note.content.length > 1 ?
    'characters' : 'character'
    return `${props.note.content.length} ${description}` 
})


const modals = reactive({
  deleteNote: false
})


function EditNote (index){
    NewNote.value = getNoteByIndex.value[index].content
    editNote.value = !editNote.value
}

function UpdateNote (index){
    updateNote(index, NewNote.value)
    editNote.value = !editNote.value
}

const props = defineProps({
    note: {
        type: Object,
        required: true
    },
    index: {
        type: Number,
        required: true
    }
})

const dateFormatted = computed(() => {
  let date = new Date(parseInt(props.note.date))
  let formattedDate = useDateFormat(date, 'MM-DD-YYYY @ HH:mm:ss')
  return formattedDate.value
})
</script>
