import { Box } from '@mui/material'
import React from 'react'
import BasicAppBar from '../Components/appBar'
import ChooseBarber from '../Components/chooseBarber'

function barber({ setSelectedBarber }) {
  return (
    <Box>
      <BasicAppBar />
      <ChooseBarber setSelectedBarber={setSelectedBarber} />
    </Box>
  )
}

export default barber