import React, { useState } from "react";
import { Box, Stack, Typography, FormControl, Button } from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";
import ReplayIcon from "@mui/icons-material/Replay";

const BmiCalculator = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage("You are underweight");
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage("You are a healthy weight");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  let imgSrc;

  if (bmi < 1) {
    imgSrc = null;
  } else {
    if (bmi < 25) {
      imgSrc = require("../assets/images/underweight.png");
    } else if (bmi >= 25 && bmi < 30) {
      imgSrc = require("../assets/images/healthy.png");
    } else {
      imgSrc = require("../assets/images/overweight.png");
    }
  }

  let reload = () => {
    window.location.reload();
  };

  return (
    <Stack
      className="bmi"
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "40px", alignItems: "center" }}
    >
      <Box className="container">
        <FormControl>
          <Typography
            fontWeight="bold"
            align="center"
            paddingBottom="30px"
            variant="h4"
          >
            BMI CALCULATOR
          </Typography>
          <Typography>Weight(lbs)</Typography>
          <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          <Typography>Height(in)</Typography>
          <input
            value={height}
            onChange={(event) => setHeight(event.target.value)}
          />
          <Button
            color="error"
            startIcon={<CalculateIcon />}
            variant="outlined"
            onClick={calcBmi}
          >
            Calculate
          </Button>
          <Button
            color="error"
            startIcon={<ReplayIcon />}
            variant="outlined"
            className="btn btn-outline"
            onClick={reload}
            type="submit"
          >
            Reload
          </Button>
          <Typography>Your BMI is: {bmi}</Typography>
          <p>{message}</p>
          <Typography className="img-container">
            <img src={imgSrc} alt=""></img>
          </Typography>
        </FormControl>
      </Box>
    </Stack>
  );
};

export default BmiCalculator;
