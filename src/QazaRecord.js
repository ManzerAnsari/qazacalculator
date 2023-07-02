import { Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
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
      <Grid
        container
        spacing={4}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Grid item>
          <TextField
            name="fazar"
            id="fazar"
            label="Fazar"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={days.fazar}
            onChange={(e) => handleChange(e)}
            InputProps={{
              sx: { "& input": { textAlign: "center" } },
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={() => handleDecreament("fazar")}>
                    <RemoveCircleOutlineIcon />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => handleIncreament("fazar")}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            name="zuhar"
            id="zuhar"
            label="Zuhar"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={days.zuhar}
            onChange={(e) => handleChange(e)}
            InputProps={{
              sx: { "& input": { textAlign: "center" } },
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={() => handleDecreament("zuhar")}>
                    <RemoveCircleOutlineIcon />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => handleIncreament("zuhar")}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            name="asar"
            id="asar"
            label="Asar"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={days.asar}
            onChange={(e) => handleChange(e)}
            InputProps={{
              sx: { "& input": { textAlign: "center" } },
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={() => handleDecreament("asar")}>
                    <RemoveCircleOutlineIcon />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => handleIncreament("asar")}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            name="magrib"
            id="magrib"
            label="Magrib"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={days.magrib}
            onChange={(e) => handleChange(e)}
            InputProps={{
              sx: { "& input": { textAlign: "center" } },
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={() => handleDecreament("magrib")}>
                    <RemoveCircleOutlineIcon />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => handleIncreament("magrib")}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            name="isha"
            id="isha"
            label="Isha"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={days.isha}
            onChange={(e) => handleChange(e)}
            InputProps={{
              sx: { "& input": { textAlign: "center" } },
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={() => handleDecreament("isha")}>
                    <RemoveCircleOutlineIcon />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => handleIncreament("isha")}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            name="witr"
            id="witr"
            label="Witr"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={days.witr}
            onChange={(e) => handleChange(e)}
            InputProps={{
              sx: { "& input": { textAlign: "center" } },
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={() => handleDecreament("witr")}>
                    <RemoveCircleOutlineIcon />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => handleIncreament("witr")}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
