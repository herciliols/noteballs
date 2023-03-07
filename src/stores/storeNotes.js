import { defineStore } from 'pinia'
import { collection, onSnapshot, 
         doc, setDoc, deleteDoc, 
         updateDoc, query, 
         orderBy} from 'firebase/firestore';
import { db } from '@/js/firebase.js'

const notesCollectionRef = collection(db, 'notes')
const notesCollectionQUery = query(notesCollectionRef, orderBy('id', 'desc'))


export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
        notes: [],
        NewNote: null
    }
  },


  getters: {
    getNoteByIndex(state) {
       return state.notes;
    },

    totalNotesCount: (state) =>{
      return state.notes.length
    },

    totalCharactersCount: (state) =>{
      let count = 0
      state.notes.forEach(note => {
         count += note.content.length
      })
      return count;
    }
  },

  actions: {
    async getNotes() {
      onSnapshot(notesCollectionQUery, (querySnapshot) => {
        let notes = []
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content
          }
          notes.push(note);
        })
        this.notes = notes
      })
    },
    

    async addNote() {
      let currenteDate = new Date().getTime(),
      id = currenteDate.toString()

      await setDoc(doc(notesCollectionRef, id), {
        content: this.NewNote,
        id
      })

      this.NewNote = null;
    },


    async delNote(indexDelete) {
        //this.notes.splice(index, 1);

        await deleteDoc(doc(notesCollectionRef, indexDelete))

    },


    async updateNote(index, NewNote) {
   
      await updateDoc(doc(notesCollectionRef, index), {
        content: NewNote
      })

    }

    
  },

})