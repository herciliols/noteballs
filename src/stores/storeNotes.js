import { defineStore } from 'pinia'

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
    addNote() {
        this.notes.unshift({
            id: this.notes.length,
            content: this.NewNote
        });   
        this.NewNote = null;
    },

    delNote(index) {
        this.notes.splice(index, 1);
    },

    updateNote(index, NewNote) {
        this.notes[index].content = NewNote;
    }
  },

})