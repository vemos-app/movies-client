// Import the functions you need from the SDKs you need
import { logger } from '@/utils'
import { type FirebaseApp, initializeApp } from 'firebase/app'
import { type Analytics, getAnalytics } from 'firebase/analytics'


let firebaseApp: FirebaseApp
let analytics: Analytics

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MESSUREMENT_ID,
}

// Initialize Firebase
export const initializeFirebase = (): void => {
  firebaseApp = initializeApp(firebaseConfig)
  analytics = getAnalytics(firebaseApp)
  logger.debug('initialize_firebase')
}

export { firebaseApp, analytics }
