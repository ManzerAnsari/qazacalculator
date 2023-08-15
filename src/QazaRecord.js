import React, { useEffect, useState } from "react";
import { Grid, IconButton, InputAdornment, TextField, Box } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

export default function QazaRecord() {
  const [storage, setStorage] = useState(
    JSON.parse(localStorage.getItem("days")) || {}
  );
  const [days, setDays] = useState(
    JSON.parse(localStorage.getItem("days")) || {}
  );

  useEffect(() => {
    setDays(storage);
  }, [storage]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    days[name] = value;
    localStorage.setItem("days", JSON.stringify(days));
    setStorage(JSON.parse(localStorage.getItem("days")));
  };

  const handleIncreament = (name) => {
    days[name]++;
    localStorage.setItem("days", JSON.stringify(days));
    setStorage(JSON.parse(localStorage.getItem("days")));
  };
  const handleDecreament = (name) => {
    days[name]--;
    localStorage.setItem("days", JSON.stringify(days));
    setStorage(JSON.parse(localStorage.getItem("days")));
  };
  return (
    <>
      <Box sx={{ backgroundColor: '#F5F5F5', padding: '2rem' }}>
      <Grid
        container
        spacing={4}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        {["fazar", "zuhar", "asar", "magrib", "isha", "witr"].map((prayer, index) => (
          <Grid key={index} item xs={12} sm={8} md={6}>
            <TextField
              name={prayer}
              id={prayer}
              label={prayer.charAt(0).toUpperCase() + prayer.slice(1)}
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={days[prayer]}
              onChange={handleChange}
              InputProps={{
                sx: {
                  "& input": { textAlign: "center", color: '#2E7D32' },
                  "& fieldset": { borderColor: '#2E7D32' },
                  "&:hover fieldset": { borderColor: '#2E7D32' },
                  "&.Mui-focused fieldset": { borderColor: '#2E7D32' },
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton onClick={() => handleDecreament(prayer)}>
                      <RemoveCircleOutlineIcon color="primary" />
                    </IconButton>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => handleIncreament(prayer)}>
                      <AddCircleOutlineIcon color="primary" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  );
}
