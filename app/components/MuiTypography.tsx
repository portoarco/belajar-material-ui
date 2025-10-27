"use client";
import { Typography } from "@mui/material";

export const MuiTyphography = () => {
  return (
    <div className="text-center">
      <Typography variant="h1" component={"h2"}>
        h1 Heading
      </Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2 </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
        ullam?
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium,
        itaque.{" "}
      </Typography>
    </div>
  );
};
