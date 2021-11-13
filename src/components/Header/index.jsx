import React, { useState } from 'react';
import './style.css';
import { Link, NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Register from '../../features/Auth/components/Register';
import { Grid, IconButton } from '@mui/material';
import { Close } from '@material-ui/icons';
import Login from '../../features/Auth/components/Login';
const useStyles = makeStyles((theme) => ({
  closeButton : {
    // positon : 'absolute',
    top : theme.spacing(1),
    right : theme.spacing(1),
    color : theme.palette.grey[500],
    zIndex : 5,
  }
}));
const MODE = {
  LOGIN : 'Login',
  REGISTER : 'Register',
}
function Header(props) {

  const [open, setOpen] = useState(false);
  const [mode,setMode] = useState(MODE.LOGIN);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <>
      <Dialog  disableEscapeKeyDown open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        {/* <IconButton className={classes.closeButton}>
          <Close />
          
        </IconButton> */}
        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
               <Register closeDialog={handleClose}/>
               <Grid container justifyContent="flex-end">
                <Grid item margin="normal">
                  <Button onClick={()=>setMode(MODE.LOGIN)} variant="body2">
                    Already have an account? Login here
                  </Button>
                </Grid>
              </Grid>
              
            </>
          )}   
          {mode === MODE.LOGIN && (
            <>
            <Login closeDialog={handleClose}/>
            <Grid container justifyContent="flex-end">
                <Grid item margin="normal">
                  <Button onClick={()=>setMode(MODE.REGISTER)} variant="body2">
                    Already have an account? Register here
                  </Button>
                </Grid>
              </Grid>

            </>
          )}       

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <header className="ltn__header-area ltn__header-3">
        <div className="ltn__header-top-area border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="ltn__top-bar-menu">
                  <ul>
                    <li>
                      <a href="mailto:nguyendinhkhoa1234@gmail.com">
                        <i className="far fa-envelope"></i> contact@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="locations.html">
                        <i className="fas fa-map-marker-alt"></i>Tan Phu , HCM
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="top-bar-right text-right text-end">
                  <div className="ltn__top-bar-menu">
                    <ul>
                      <li>
                        <div className="ltn__social-media text-end">
                          <ul className="text-end">
                          <li>
                            <a onClick={handleClickOpen}>
                              <i className="far fa-user me-3"></i>
                              <span>Login</span>
                            </a>
                          </li>                          
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ltn__header-middle-area">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="site-logo">
                  <Link to="/">
                    <img src="img/logo.png" alt="" />
                    Medicine
                  </Link>
                </div>
              </div>
              <div className="col header-contact-serarch-column d-none d-lg-block">
                <div className="header-contact-search">
                  <div className="header-feature-item">
                    <div className="header-feature-icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="header-feature-info">
                      <h6>Phone</h6>
                      <p>
                        <a href="tel:0123456789">+0123-456-789</a>
                      </p>
                    </div>
                  </div>

                  <div className="header-search-2">
                    <form id="  " method="get" action="">
                      <input type="text" name="search" placeholder="Search here..." />
                      <button type="submit">
                        <span>
                          <i className="fas fa-search"></i>
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="ltn__header-options">
                  <ul>
                    <li className="d-lg-none">
                      <div className="header-search-wrap">
                        <div className="header-search-1">
                          <div className="search-icon">
                            <i className="fas fa-search for-search-show"></i>
                            <i className="icon-cancel  for-search-close" />
                          </div>
                        </div>
                        <div className="header-search-1-form">
                          <form id="#" method="get" action="#">
                            <input type="text" name="search" placeholder="Search here..." />
                            <button type="submit">
                              <span>
                                <i className="fas fa-search"></i>
                              </span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </li>
                    <li className="d-none---">
                      <div className="ltn__drop-menu user-menu">
                        <ul>

                        </ul>
                      </div>
                    </li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom-area ltn__border-top ltn__header-sticky  ltn__sticky-bg-white--- ltn__sticky-bg-secondary ltn__secondary-bg section-bg-1 menu-color-white d-none d-lg-block">
          <div className="container">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8 header-menu-column justify-content-center">
                <div className="sticky-logo">
                  <div className="site-logo">
                    <a href="index.html">
                      <img src="img/logo-3.png" alt="Logo" />
                    </a>
                  </div>
                </div>
                <div className="header-menu header-menu-2">
                  <nav>
                    <div className="ltn__main-menu">
                      <ul>
                        <li className="menu-icon">
                          <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="menu-icon">
                          <NavLink to="/products">Shop</NavLink>
                        </li>
                        <li className="menu-icon">
                          <NavLink to="/about">About</NavLink>
                        </li>

                        {/* <li className="menu-icon">
                        <NavLink to="/news">News</NavLink>
                      </li>
                      <li className="menu-icon">
                        <NavLink to="/pages">Pages</NavLink>
                      </li> */}
                        <li>
                          <NavLink to="/contact">Contact</NavLink>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="col-md-2">
                <div className="mini-cart-icon mini-cart-icon-2">
                  <a href="#ltn__utilize-cart-menu" className="ltn__utilize-toggle">
                    <span className="mini-cart-icon">
                      <i className="fas fa-shopping-cart"></i>
                      <sup>0</sup>
                    </span>
                    <h6>
                      <span className="ltn__secondary-color">Your Cart</span>
                    </h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <MobileMenu/> */}
    </>
  );
}

export default Header;
