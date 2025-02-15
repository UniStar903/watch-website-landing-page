import react from "react";
import classes from "./TopNav.module.css";
import logo from "./amazon.png";

const TopNav = () =>{
    return(
      <header>
        <nav className={classes.Topbar}>
          <img src={logo} alt="amazon image"></img>
        </nav>
      </header>
    );
}

export default TopNav;