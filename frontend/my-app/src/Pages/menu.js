import { Box } from '@mui/material'
import React from 'react'
import BasicAppBar from '../Components/appBar'
import CheckboxList from '../Components/menuList'

function menu({ setServices }) {
  return (
    <Box>
      <BasicAppBar />
      <CheckboxList setServices={setServices} />
    </Box>
  )
}

export default menu