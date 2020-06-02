import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import ReadingList from "./ReadingList";
import BookList from "./BookList";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://twitter.com/SpikeLeeJoint/status/1267269978320826368"
      >
        Humanity
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const App = () => {
  return (
    <Container maxWidth="md">
      <Box
        my={8}
        textAlign="center"
        alignContent="flex-end"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Stop Killing Black People
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          We whites have all the power. Use it for good.
        </Typography>
        <Box p={2}>
          <BookList booklist={[...ReadingList]} />
        </Box>
        <Copyright />
      </Box>
    </Container>
  );
};
export default App;
