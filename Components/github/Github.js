import classes from "./Github.module.css";

function Github(){
    return(
        <div className={classes.github}>
            <img src="./img/git.webp" alt="gitimg"/>
            <p>Ha érzed magadban a késztetést hogy bővítsd Thomast , esetleg debuggold akkor az alábbi repón keresztül ezt megteheted.
                clónozd a repozitorit, tedd meg a változtatásokat. majd küldj egy push requestet.
            </p>
            <a href="https://github.com/Csaba19999/DCthomasBot" target="blank">GitHub repo</a>
        </div>
    );
}

export default Github;