import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from '../../pages/LoginPage'
import ChatPage from '../../pages/ChatPage'
import { BrowserRouter } from 'react-router-dom'
import ErrorPage from '../../pages/ErrorPage'

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
