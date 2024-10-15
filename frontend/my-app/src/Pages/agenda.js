import React from 'react'
import BasicAppBar from '../Components/appBar'
import { Box } from '@mui/material'
import BasicDateCalendar from '../Components/basicCalendar'

function agenda() {
  return (
    <Box>
      <BasicAppBar />
      <BasicDateCalendar />
    </Box>
  )
}

export default agenda