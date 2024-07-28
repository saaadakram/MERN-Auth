import Header from './componets/Header'
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import React from 'react'

const App = () => {
  return (
    <>
    <Header/>
    <Container className='my-2'>
    <Outlet/>
    </Container>
 
    </>
  )
}

export default App