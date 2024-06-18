import { FC } from 'react'
import { Box, ListItem, ListItemText, SnackbarContent } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store/store'

interface MessageProps {
  message: string
  name: string
}

const Message: FC<MessageProps> = ({ message, name }) => {
  const params = useSelector((state: RootState) => state.auth.params)
  const isOwnMessage = params?.name === name

  return (
    <ListItem sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: isOwnMessage ? 'flex-end' : 'flex-start',
          width: '100%',
          flexDirection: 'column',
        }}
      >
        <ListItemText
          sx={{
            color: isOwnMessage ? 'blue' : 'green',
            textAlign: isOwnMessage ? 'right' : 'left',
          }}
        >
          {name}
        </ListItemText>
        <SnackbarContent
          sx={{
            backgroundColor: isOwnMessage ? 'blue' : 'green',
            wordWrap: 'break-word',
            wordBreak: 'break-word',
            maxWidth: '50%',
            marginLeft: isOwnMessage ? 'auto' : 0,
            marginRight: isOwnMessage ? 0 : 'auto',
          }}
          message={message}
        />
      </Box>
    </ListItem>
  )
}

export default Message
