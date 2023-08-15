import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import moment from "moment-hijri";
import dayjs from "dayjs";
import QazaRecord from "./QazaRecord";

export default function Qaza() {
  const [normalDate, setNormalDate] = useState(moment().format("DD-MM-YYYY"));
  const [hijriDate, setHijriDate] = useState(moment().format("iD-iM-iYYYY"));
  const [message, setMessage] = useState("");
  const [showQaza, setShowQaza] = useState(false);
  const today = moment();
  const times = {
    fazar: "",
    zuhar: "",
    asar: "",
    magrib: "",
    isha: "",
    witr: "",
  };
  const handleChange = (date) => {
    setNormalDate(moment(new Date(date)).format("DD-MM-YYYY"));
  };
  const handleButton = (year) => {
    if (
      moment(hijriDate, "iD-iM-iYYYY")
        .add(year, "iYear")
        .isSameOrAfter(new Date(), "iD-iM-iYYYY")
    ) {
      setMessage("no qaza for you");
    } else {
      setMessage("");
      let qazaD = moment(hijriDate, "iD-iM-iYYYY").add(year, "iYear");
      let diff = today.diff(qazaD, "days");
      Object.keys(times).forEach((key) => {
        times[key] = parseInt(diff);
      });
      localStorage.setItem("days", JSON.stringify(times));
      setShowQaza(true);
      // navigate("/QazaRecord");
    }
  };

  useEffect(() => {
    setHijriDate(moment(normalDate, "DD-MM-YYYY").format("iD-iM-iYYYY"));
  }, [normalDate]);

  useEffect(() => {
    setShowQaza(!!JSON.parse(localStorage.getItem("days")));
  }, []);
  return (
    <>
      <Box sx={{ backgroundColor: '#F5F5F5', minHeight: '100vh' }}>
      {showQaza ? (
        <QazaRecord />
      ) : (
        <Grid container spacing={3} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '80vh' }}>
          <Grid item xs={12}>
            <Typography variant="h5" align="center" style={{ color: '#2E7D32' }}>Please select your date of birth</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                disableFuture={true}
                value={dayjs(normalDate, "DD-MM-YYYY")}
                format="DD-MM-YYYY"
                slotProps={{ textField: { size: "small", fullWidth: true } }}
                onChange={(date) => handleChange(date)}
                renderInput={(params) => <div {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" align="center" color="secondary">
              {message && "Message: " + message}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              fullWidth
              size="medium"
              sx={{ m: 1, backgroundColor: '#2E7D32', color: '#FFFFFF' }}
              variant="contained"
              onClick={() => handleButton(12)}
            >
              Check Qaza for men
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              fullWidth
              size="medium"
              sx={{ m: 1, backgroundColor: '#2E7D32', color: '#FFFFFF' }}
              variant="contained"
              onClick={() => handleButton(15)}
            >
              Check Qaza for women
            </Button>
          </Grid>
        </Grid>
      )}
      {showQaza && (
        <Grid container justifyContent="center" mt={2}>
          <Button
            size="medium"
            sx={{ m: 2, backgroundColor: '#2E7D32', color: '#FFFFFF' }}
            variant="contained"
            onClick={() => setShowQaza(false)}
          >
            Set Qaza Namaz Again
          </Button>
        </Grid>
      )}
    </Box>
    </>
  );
}
