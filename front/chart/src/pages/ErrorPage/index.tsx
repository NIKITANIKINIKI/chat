import { Container, Paper } from '@mui/material'
import { FC } from 'react'

const ErrorPage: FC = () => {
  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{
          height: '50vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Такой страницы не существует
      </Paper>
    </Container>
  )
}

export default ErrorPage
