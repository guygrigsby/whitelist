import { createMuiTheme } from "@material-ui/core/styles";
const palette = {
  type: "dark",
  primary: { main: "#212121", contrastText: "#FAFAFA" },
  secondary: { main: "#FAFAFA", contrastText: "#212121" }
};
const theme = createMuiTheme({
  palette: palette
});

export default theme;
