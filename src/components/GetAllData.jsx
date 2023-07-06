import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { Box, Button, TextField } from '@mui/material';

export default function GetAllData() {
  const [data, setData] = useState(null);

  const handleChange = (e, id) => {

    const getData = data.map((item, i) => {
      if (item.id === id) {
        return { ...item, name: e.target.value }
      }
      else {
        return item
      }

    })
    setData(getData)
  }

  const handleSubmit = () => {
    localStorage.removeItem("user")
    localStorage.setItem("user", JSON.stringify(data))
    alert("Update Successfully")
  }

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("user")))
  }, [])

  return (
    <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {data ? data.map((item, i) => {
          return (
            <Box key={i} sx={{
              marginTop: 8,
              width: "20%",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Name"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => handleChange(e, item.id)}
                value={data !== null ? data[i].name : ''}
              />
              <Button type="submit" onClick={handleSubmit} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} > Save </Button>
            </Box>
          )
        }) : "No data Found"}
      </Table>
    </TableContainer>
  );
}