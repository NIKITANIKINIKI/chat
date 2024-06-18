import React, { FC, useState } from 'react'
import { Box, TextField, Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { useSelector } from 'react-redux'
import { Socket } from 'socket.io-client'
import { RootState } from '../../../../app/store/store'

interface MessageInputProps {
  socket: Socket
}

const MessageInput: FC<MessageInputProps> = ({ socket }) => {
  const [message, setMessage] = useState('')
  const params = useSelector((state: RootState) => state.auth.params)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value)
  }

  const handleSendClick = () => {
    if (message.trim()) {
      socket.emit('sendMessage', { message, params })
      setMessage('')
    }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Напиши сообщение"
        value={message}
        onChange={handleInputChange}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            handleSendClick()
          }
        }}
      />
      <Button
        variant="contained"
        onClick={handleSendClick}
        sx={{ marginLeft: '12px' }}
      >
        <SendIcon />
      </Button>
    </Box>
  )
}

export default MessageInput
