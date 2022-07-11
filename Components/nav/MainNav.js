import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import classes from "./MainNav.module.css";
//navListHamburger
function MainNav() {
  let startingWidth;
  if (typeof window === "undefined"){
    startingWidth = 651;
  }else{
    startingWidth = window.innerWidth;
  }
  const router = useRouter();
  
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [hamburgerFadeAway, setHamburgerFadeAway] = useState(false);
  const [width, setWidth] = useState(startingWidth);

  
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  function handleHamburgerClick() {
    if(isHamburgerOpen){
      setTimeout(() => {
        setIsHamburgerOpen(!isHamburgerOpen);
      }
      , 500);
      setHamburgerFadeAway(true);
      console.log("hamburgerFadeAway" , hamburgerFadeAway, "isHamburgerOpen" , isHamburgerOpen);
      
    }else{
      console.log("hamburgerFadeAway" , hamburgerFadeAway, "isHamburgerOpen" , isHamburgerOpen);
      setHamburgerFadeAway(false);
      setIsHamburgerOpen(!isHamburgerOpen);
    }
    
  }
  useEffect(() => {
    if(width > 651){
      setIsHamburgerOpen(false);
    }
  }, [width]);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);

  let isMobile = width <= 650;

  return (
    <nav className={classes.mainNav }>
      <ul className={!isMobile ? classes.navList : `${!hamburgerFadeAway && classes.navListHamburger} ${!isHamburgerOpen ? classes.HamburgerClose : ''} ${hamburgerFadeAway ? classes.hamburgerFadeAweayAnimation : ''}`}>
        <li className={classes.navListItem}>
          <a
            href={
              "https://discord.com/api/oauth2/authorize?client_id=830753364466991125&permissions=545393212912&scope=bot"
            }
            target={"_blank"}
          >
            Invite
          </a>
        </li>
        <li
          className={`${classes.navListItem} ${
            router.pathname === "/" && classes.active
          }`}
        >
          <Link href={"/"}>Kezdőlap</Link>
        </li>
        <li
          className={`${classes.navListItem} ${
            router.pathname === "/Commands" && classes.active
          }`}
        >
          <Link href={"/Commands"}>Parancsok</Link>
        </li>
      </ul>
      <button className={isHamburgerOpen ? classes.HamburgerOpenButton : undefined} onClick={handleHamburgerClick}>|||</button>
    </nav>
  );
}

export default MainNav;
