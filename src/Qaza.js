import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
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
      {showQaza ? (
        <QazaRecord />
      ) : (
        <Grid container spacing={10}>
          <Grid item width="100%">
            <Grid container spacing={4} display="flex" justifyContent="center">
              <Typography>Please select your date of birth</Typography>
            </Grid>
          </Grid>
          <Grid item width="100%">
            <Grid container spacing={4} display="flex" justifyContent="center">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  disableFuture={true}
                  value={dayjs(normalDate, "DD-MM-YYYY")}
                  format="DD-MM-YYYY"
                  slotProps={{ textField: { size: "small" } }}
                  onChange={(date) => handleChange(date)}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          <Grid item width="100%">
            <Grid container spacing={4} display="flex" justifyContent="center">
              <Typography
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
              >
                {" hijri date:" + hijriDate}
              </Typography>
              <Typography
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
              >
                {"selected date is :" + normalDate + "  "}
              </Typography>
              <Typography
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
              >
                {message && "message : " + message}
              </Typography>
            </Grid>
          </Grid>
          <Grid item width="100%">
            <Grid
              container
              spacing={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button
                size="medium"
                sx={{ m: 2 }}
                variant="contained"
                onClick={() => handleButton(12)}
              >
                Check Qaza for mens
              </Button>
              <Button
                size="medium"
                sx={{ m: 2 }}
                variant="contained"
                onClick={() => handleButton(15)}
              >
                Check Qaza for womens
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
      {showQaza && (
        <Grid container display="flex" justifyContent="center">
          <Button
            size="medium"
            sx={{ m: 2 }}
            variant="contained"
            onClick={() => setShowQaza(false)}
          >
            Set Qaza Namaz Again
          </Button>
        </Grid>
      )}
    </>
  );
}
