import { Box } from "@mui/system";
import { CircularProgress, Typography } from "@mui/material";

const Loading = ({ message = "Loading..." }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="absolute"
      top={0}
      bottom={0}
      left={0}
      right={0}
    >
      <Box p={2} borderRadius={6} bgcolor="white" minWidth={160} textAlign="center">
        <CircularProgress />
        <Typography variant="body1" align="center">
          {message}
        </Typography>
      </Box>
    </Box>
  );
};

export default Loading;