import classes from "./CommandsList.module.css";
import Command from "./Command";

const Commands = [
  {
    id: "c1",
    title: "Segítség",
    command: "thomashelp",
    description: "A szerveren lévő parancsokat listázza ki.",
  },
  {
    id: "c2",
    title: "Hullámvasútazás",
    command: "hullámvasút @username",
    description:
      "Thomas felülteti a kiválasztott személyt a hullám vasútra hogy felébressze a mute-ból.",
  },
  {
    id: "c3",
    title: "Effect lista",
    command: "tsoundlist",
    description: "Kilistázza a szerveren lévő hang effektek.",
  },
  {
    id: "c4",
    title: "Effect hozzáadása",
    command: "taddsound cím YoutubeLink",
    description:
      "Hozzáad egy új hang effektet a szerverhez amit később lejátszhatsz.",
  },
  {
    id: "c5",
    title: "Effect lejátszása",
    command: "tsound sorszám",
    description: "Thomas belép a szobába és lejátsza a megadott effectet.",
  },
  {
    id: "c6",
    title: "Aranyköpés",
    command: "aranyköpés",
    description: "Thomas küld neked egy random aranyköpést.",
  },
  {
    id: "c7",
    title: "Kifogás",
    command: "kifogás",
    description:
      "Thomas küld neked egy random kifogást hogy kihúzd magad a pácból.",
  },
  {
    id: "c8",
    title: "Statisztikák és státusz",
    command: "tstatus",
    description: "Thomas jelenlegi állapotát és statisztikáit küldi el neked.",
  },
  {
    id: "c9",
    title: "Zene lejátszás",
    command: "tplay YoutubeLink",
    description: "Thomas belép hozzád a szobába és lejátsza a megadott zenét.",
  },
];

function CommandsList() {
  return (
    <div className={classes.commandsList}>
      <img src="./img/train.png" />
      {Commands.map((command) => 
        <Command
          key={command.id}
          title={command.title}
          command={command.command}
          description={command.description}
        />
      )}
    </div>
  );
}
export default CommandsList;
