import Box_comp from "./components/Box_comp";
import Container_comp from "./components/Container_comp";
import Css_In_Js_comp from "./components/Css_In_Js_comp";
import Typography_comp from "./components/Typography_comp";
import { ThemeProvider, createTheme } from "@mui/material";

import "./styles/App.css";
import Paper_comp from "./components/Paper_comp";
import Color_comp from "./components/Color_comp";
import Icon_comp from "./components/Icon_comp";
import Button_comp from "./components/Button_comp";
import UtilityClasses_comp from "./components/UtilityClasses_comp";
import Customization_comp from "./components/Customization_comp";
import Grid_comp from "./components/Grid_comp";
import Fab_comp from "./components/Fab_comp";
import Card_comp from "./components/Card_comp";
import TextField_comp from "./components/TextField_comp";
import Radio_Check_Switch from "./components/Radio_Check_Switch";
import List_comp from "./components/List_comp";
import Table_comp from "./components/Table_comp";
import App_Bar from "./components/App_Bar";
import Drawer from "./components/Drawer";
import Menu_comp from "./components/Menu_comp";
import DialogBox_comp from "./components/DialogBox_comp";
import Pagination_comp from "./components/Pagination_comp";
import Steeper_comp from "./components/Steeper_comp";

function App() {
  const theme = createTheme();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div>
          {/* <Box_comp /> */}
          {/* <Typography_comp /> */}
          {/* <Container_comp /> */}
          {/* <Css_In_Js_comp /> */}
          {/* <Paper_comp /> */}
          {/* <Color_comp /> */}
          {/* <Icon_comp/> */}
          {/* <Button_comp /> */}
          {/* <UtilityClasses_comp /> */}
          {/* <Customization_comp /> */}
          {/* <Grid_comp /> */}
          {/* <Fab_comp /> */}
          {/* <Card_comp /> */}
          {/* <TextField_comp /> */}
          {/* <Radio_Check_Switch/> */}
          {/* <List_comp /> */}
          {/* <Table_comp /> */}
          {/* <App_Bar /> */}
          {/* <Drawer /> */}
          {/* <Menu_comp /> */}
          {/* <DialogBox_comp /> */}
          {/* <Pagination_comp /> */}
          <Steeper_comp />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
