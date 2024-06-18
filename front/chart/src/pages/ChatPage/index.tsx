import { FC, useEffect } from 'react'
import { useLocation } from 'react-router'
import { io, Socket } from 'socket.io-client'
import { Container, Box, Paper, Button } from '@mui/material'
import MessageList from '../../features/chat/ui/MessageList'
import MessageInput from '../../features/chat/ui/MessageInput'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Link } from 'react-router-dom'
import { setParams } from '../../features/auth/model/authSlice'
import { addMessage } from '../../features/chat/model/chatSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store/store'

const socket: Socket = io('http://localhost:8000')

interface Params {
  name: string
  room: string
}

const ChatPage: FC = () => {
  const dispatch = useDispatch()
  const params = useSelector((state: RootState) => state.auth.params)

  const location = useLocation()

  useEffect(() => {
    const searchParams = location.search.replace('?', '').split('&')
    const paramsObj: Params = {
      name: '',
      room: '',
    }

    searchParams.forEach((query) => {
      const [key, value] = query.split('=')
      if (key === 'name' || key === 'room') {
        paramsObj[key] = decodeURIComponent(value)
      }
    })
    dispatch(setParams(paramsObj))
    socket.emit('join', paramsObj)
  }, [location])

  useEffect(() => {
    socket.on('message', ({ data }) => {
      dispatch(addMessage(data))
    })
    return () => {
      socket.off('message')
    }
  }, [])

  const leftroom=()=>{
    socket.emit('leftRoom',{params} )
  }

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{ height: '80vh', display: 'flex', flexDirection: 'column' }}
      >
        <Box>
          <Link to="/">
            <Button color="error" onClick={leftroom}>
              <ArrowBackIcon />
            </Button>
          </Link>
        </Box>

        <Box sx={{ flexGrow: 1, overflowY: 'auto', padding: '16px' }}>
          <MessageList />
        </Box>
        <Box sx={{ padding: '16px' }}>
          <MessageInput socket={socket} />
        </Box>
      </Paper>
    </Container>
  )
}

export default ChatPage
