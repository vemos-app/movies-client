import { RouterProvider } from 'react-router-dom'
import { router } from '@/router'
import { useCheckUserLoggedIn } from './hooks'
import { useGetUserLikes } from './hooks/likes'
import { type ReactElement } from 'react'

function App(): ReactElement {
  useCheckUserLoggedIn()
  useGetUserLikes()

  return <RouterProvider router={router} />
}

export default App
