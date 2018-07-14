import firebase from './firebase'
import store from './store'

import { SET_PROFILE, LOGOUT } from '@/store/user/mutations'

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      store.commit(`user/${SET_PROFILE}`,user)
			console.log(user)
			console.log('LOGIN')
    }else{
      store.commit(`user/${LOGOUT}`)
			console.log(user)
			console.log('LOGOUT')
    }
})
