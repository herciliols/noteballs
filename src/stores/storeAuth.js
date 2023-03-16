import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/js/firebase'


export const useStoreAuth = defineStore("storeAuth", {
  state: () => {
    return {};
  },

  getters: {},

  actions: {
    registerUser(credentials){
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
          const user = userCredential.user
      }).catch((error) => {
          console.log("errorCode: ", error.code, ". errorMessage: ", error.message);
      })
    }
  }
});