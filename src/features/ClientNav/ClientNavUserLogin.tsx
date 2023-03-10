import { useAppSelector } from '@/hooks'
import { logger } from '@/utils'
import { type FC } from 'react'
import { Button } from 'react-daisyui'
import { useNavigate } from 'react-router-dom'
import { ClientNavUser } from './ClientNavUser'

export const ClientNavUserLogin: FC = () => {
  const userSubstate = useAppSelector((state) => state.user)
  const navigate = useNavigate()
  const handleClick = (): void => {
    logger.log('navigate', { to: '/login', action: 'nav_btn_click' })
    navigate('/login')
  }

  if (userSubstate.userInfo !== null) {
    return <ClientNavUser />
  }

  return (
    <Button
      onClick={handleClick}
      color="primary"
      className="btn-sm"
    >
      Ingresar
    </Button>
  )
}
