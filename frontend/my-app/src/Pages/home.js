import { Box } from '@mui/material'
import React from 'react'
import BasicAppBar from '../Components/appBar'
import ButtonBaseDemo from '../Components/complexButtons'

function home() {
  return (
    <Box>
      <BasicAppBar />
      <ButtonBaseDemo />
    </Box>
  )
}

export default home