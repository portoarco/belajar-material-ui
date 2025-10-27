"use client";
import { Button, Stack, IconButton } from "@mui/material";
import EscalatorIcon from "@mui/icons-material/Escalator";
import React from "react";

export const MuiButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={"row"}>
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outline</Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack display={"block"} spacing={2} direction={"row"}>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          color="secondary"
          startIcon={<EscalatorIcon />}
          disableFocusRipple
        >
          Start Icon
        </Button>
        <Button
          variant="contained"
          color="secondary"
          endIcon={<EscalatorIcon />}
          disableElevation
        >
          End Icon
        </Button>
        <IconButton aria-label="send" color="success" size="small">
          <EscalatorIcon />
        </IconButton>
      </Stack>
    </Stack>

    // Stack ini seperti susunan ke bawah, spacing seperti gap
    // direction ini untuk urutan susunan komponennya
  );
};
