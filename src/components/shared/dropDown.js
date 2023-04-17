import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function DropDownMenu({ label, options, option, setOption }) {
  const onChange = (event) => {
    setOption(event.target.value)
  }

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select value={option} label={label} onChange={onChange}>
          {options.map((opt, i) => {
            return (
              <MenuItem value={i} key={i}>
                {opt}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Box>
  )
}
