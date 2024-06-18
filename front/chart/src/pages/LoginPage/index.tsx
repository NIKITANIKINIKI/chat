import { ChangeEvent, FC, useState } from 'react'
import styles from './LoginPage.module.scss'
import { Link } from 'react-router-dom'

import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'

interface Field {
  NAME: string
  ROOM: string
}

const field: Field = {
  NAME: 'name',
  ROOM: 'room',
}

interface Values {
  [key: string]: string
}

const LoginPage: FC = () => {
  const { NAME, ROOM } = field

  const [values, setValues] = useState<Values>({ [NAME]: '', [ROOM]: '' })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    setValues({ ...values, [name]: value })
  }

  return (
    <Paper
      style={{ background: 'white', borderRadius: '40px' }}
      className={styles.content}
    >
      <Typography style={{ color: 'black', textAlign: 'center' }} variant="h4">
        Войти в комнату
      </Typography>
      <form className={styles.forms}>
        <TextField
          label="Ваше имя"
          type="text"
          name="name"
          color="success"
          value={values[NAME]}
          fullWidth
          style={{ background: 'white', borderRadius: '5px' }}
          onChange={handleChange}
        />
        <TextField
          name="room"
          value={values[ROOM]}
          label="Ваша комната"
          color="success"
          fullWidth
          onChange={handleChange}
          style={{ background: 'white', borderRadius: '5px' }}
        />
        <Link to={`/chat?name=${values[NAME]}&room=${values[ROOM]}`}>
          <Button variant="contained" color="success" style={{ width: '100%' }}>
            Войти
          </Button>
        </Link>
      </form>
    </Paper>
  )
}

export default LoginPage
