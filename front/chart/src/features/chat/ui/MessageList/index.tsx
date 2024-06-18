import { List } from '@mui/material'
import Message from '../../../../entities/Message'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../app/store/store'

interface Message {
  user: {
    name: string
  }
  message: string
}

const MessageList = () => {
  const messages: Message[] = useSelector(
    (state: RootState) => state.chat.messages
  )

  if (!Array.isArray(messages)) {
    return <div>Нет сообщения</div>
  }

  return (
    <List>
      {messages &&
        messages.map((el, index) => (
          <Message key={index} message={el.message} name={el.user.name} />
        ))}
    </List>
  )
}

export default MessageList
