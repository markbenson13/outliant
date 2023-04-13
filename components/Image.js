import { Box } from "@mui/material";
import React from "react";

const Image = ({ width, height, bg, className }) => {
  return (
    <Box
      className={className}
      sx={{
        width: width,
        height: height,
        backgroundColor: bg,
      }}
    ></Box>
  );
};

export default Image;
