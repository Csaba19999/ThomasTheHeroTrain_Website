import classes from "./Intruduce.module.css";

function Intruduce() {
  return (
    <div className={classes.intruduceBox}>
      <div className={classes.intruduce}>
        <h1>Thomas a Hősmozdony</h1>
        <div className={classes.thomasImg}>
          <img
            className={classes.thomas}
            src="./img/thomas.jpg"
            alt="Joe RossFollow
                Thomas the Tank Engine enters a Shed at Greenfield Village 4-26-2008 327 N (15)"
          />
        </div>
        <div className={classes.thomasDescription}>
          <p>
            Alszik a barátod a gép elött? Vagy csak
            simán sorizik és nem válaszol? Ha nem reagál a spamre és facebookon
            se ír vissza csak is 2 lehetőség mardt. <br />A : Meghalt és többet nem
            látod. <br />B : Nem édekli vagy nem halja hogy keresed! <br />De semmi gond! Ha
            nem reagál a barátod csak ültesd fel Thomasra a Hősmozdonyra és várd
            a csodát! FIGYELEM ! Lehetséges rosszullét a hullámvasúton valamint agresszív viselkedés is lehetséges!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intruduce;
