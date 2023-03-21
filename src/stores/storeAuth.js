import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { auth } from '@/js/firebase'


export const useStoreAuth = defineStore("storeAuth", {
  state: () => {
    return {
      user: {}
    };
  },

  getters: {},

  actions: {
    init(){
      onAuthStateChanged(auth, (user) => {
        if (user) {
           this.user.id = user.uid
           this.user.email = user.email
           this.router.push('/')
        } else {
           this.user = {}
           this.router.replace('/auth')
        }
      })
    },


    registerUser(credentials){
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
          const user = userCredential.user
      }).catch((error) => {
          console.log('Error ', error.code, '-', error.message)
      })
    },


    loginUser(credentials){
      signInWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
          const user = userCredential.user
          console.log(user)
        }).catch((error) => {
          console.log('Error ', error.code, '-', error.message)
        });
      
    },


    logoutUser(){
      signOut(auth).then(() => {
          console.log('Saiu')
        }).catch((error) => {
          console.log('Error ', error.code, '-', error.message)
        });
    }


  }
});