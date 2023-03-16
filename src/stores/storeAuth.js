import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword} from "firebase/auth";
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
          console.log('Erro ', error.code, '-', error.message)
      })
    },


    loginUser(credentials){
      signInWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
          const user = userCredential.user
          console.log(user)
        }).catch((error) => {
          console.log('Erro ', error.code, '-', error.message)
        });
      
    },


    logoutUser(){
      signOut(auth).then(() => {
          console.log('Saiu')
        }).catch((error) => {
          console.log('Erro ', error.code, '-', error.message)
        });
    }


  }
});