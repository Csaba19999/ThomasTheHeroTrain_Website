import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <br />
      <div className={classes.linee}></div>
      <div className={classes.contact}>
        <h3>Kapcsolatok</h3>
        <p className={classes.email}>menesi888@gmail.com</p>
        <p className={classes.discord}>Csaba1999#0767</p>
      </div>
      <div className={classes.description}>
        <h3>Thomasról</h3>
        <p>
          Thomas célja hogy a szobában alvó embereket felébressze ha némítva
          vannak. Thomasra fentartom a Paródia jogát! Thomas a hősmozdony néven!
        </p>
      </div>
      <div className={classes.socialMedia}>
        <h3>Social média</h3>
        <section className={classes.icons}>
          <ul>
            <li>
              <a target="blank" href="https://discord.gg/x8YwG7D7">
                <img src="./img/discord.svg" />
              </a>
            </li>
            <li>
              <a target="blank" href="https://www.facebook.com/csaba.menesi.1/">
                <img src="./img/Facebook.svg.webp" />
              </a>
            </li>
            <li>
              <a target="blank" href="https://github.com/Csaba19999">
                <img src="./img/github.webp" />
              </a>
            </li>
          </ul>
        </section>
      </div>
      <br />
      <div className={classes.line}></div>
      <div className={classes.footerCopiright}>
        <p>Copyright © 2022 Thomas</p>
      </div>
    </footer>
  );
}

export default Footer;
