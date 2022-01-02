import React from 'react';
import { Link } from 'react-router-dom';
// import {
//     Nav,
//     Navbar,
//     Container,
//     // NavDropdown,
// } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
// import send from '../../../assets/images/send.png';
import Styles from "./Style.module.css";

function Navbars() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();
return (
<div className={classes.root}>
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        Date-NITTe
      </Typography>
      <Button color="inherit">
        <Link to="/home" className={Styles.link}>
          <i className="fas fa-lg fa-home me-1" />
              Home
        </Link>
      </Button>
      <Button color="inherit">
        <Link to="/chat" className={Styles.link}>
          <i className="fas fa-lg fa-paper-plane me-2" />
              Chat
        </Link>
      </Button>
      <Button color="inherit">
          <i className="bi fa-lg bi-person-fill me-1" />
            Profile
      </Button>
    </Toolbar>
  </AppBar>
</div>

  // <Navbar bg="primary" variant="dark" style={{ width: "100%", padding: "0", margin: "0" }}>
  //   <Container className="ms-0 me-0" style={{ width: "100%", padding: "0" }}>
  //   <Navbar.Brand href="#home">Date-NITTe</Navbar.Brand>
  //   </Container>
  //   <Nav className="me-0">
  //     <Nav.Link href="/profile">Profile</Nav.Link>
  //     {/* <Nav.Link href="#features">Features</Nav.Link>
  //     <Nav.Link href="#pricing">Pricing</Nav.Link> */}
  //   </Nav>
  // </Navbar>
);
}
export default Navbars;