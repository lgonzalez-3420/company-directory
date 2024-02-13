import router from '../router'

import { firebaseApp } from './useFirebase'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useAuth as firebaseAuth } from '@vueuse/firebase/useAuth'

const auth = getAuth(firebaseApp)

const { isAutheticated, user } = firebaseAuth(auth)

export const useAuth = () => {
    const login = async (username, password) => {
        await signInWithEmailAndPassword(auth, username, password)
        return isAutheticated.value
    }

    const logout = async () => {
        await signOut(auth)
        router.puch({ name: 'Home'})
    }

    return {isAutheticated, user, login, logout}

}