import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
        notes: [],
        NewNote: null
    }
  },
  actions: {
    addNote() {
        this.notes.unshift({
            id: this.notes.length,
            content: this.NewNote
        });   
        this.NewNote = null;
    },
    delNote(index) {
        this.notes.splice(index, 1);
    }
  },
})