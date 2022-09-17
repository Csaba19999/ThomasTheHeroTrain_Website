import classes from "./CommandsList.module.css";
import Command from "./Command";

const Commands = [
  {
    id: "c1",
    title: "Segítség",
    command: "help",
    description: "A szerveren lévő parancsokat listázza ki.",
  },
  {
    id: "c2",
    title: "Hullámvasútazás",
    command: "vasut",
    description:
      "Thomas felülteti a kiválasztott személyt a hullám vasútra hogy felébressze a mute-ból.",
  },
  {
    id: "c3",
    title: "Effect lista",
    command: "soundlist",
    description: "Kilistázza a szerveren lévő hang effektek.",
  },
  {
    id: "c4",
    title: "Effect hozzáadása",
    command: "addsound",
    description:
      "Hozzáad egy új hang effektet a szerverhez amit később lejátszhatsz.",
  },
  {
    id: "c5",
    title: "Effect lejátszása",
    command: "sound",
    description: "Thomas belép a szobába és lejátsza a megadott effectet.",
  },
  {
    id: "c10",
    title: "Effect törlése",
    command: "removesound",
    description: "Kitörli a kiválasztott effectet a szerverről.",
  },
  {
    id: "c6",
    title: "Aranyköpés",
    command: "goldensaying",
    description: "Thomas küld neked egy random aranyköpést.",
  },
  {
    id: "c7",
    title: "Kifogás",
    command: "excuse",
    description:
      "Thomas küld neked egy random kifogást hogy kihúzd magad a pácból.",
  },
  {
    id: "c16",
    title: "Kifogás hozzáadása",
    command: "addexcuse",
    description:
      "Hozzáad egy új kifogást a szerverhez amit később bekérhetsz.",
  },
  {
    id: "c15",
    title: "Köszöntés",
    command: "togglewelcome",
    description:
      "Ha be van kapcsolva Thomas üdvözöl mindenkit aki belép a szobába.",
  },
  {
    id: "c8",
    title: "Statisztikák és státusz",
    command: "status",
    description: "Thomas jelenlegi állapotát és statisztikáit küldi el neked.",
  },
  {
    id: "c9",
    title: "Zene lejátszás",
    command: "play",
    description: "Thomas belép hozzád a szobába és lejátsza a megadott zenét.",
  },
  {
    id: "c11",
    title: "Azonnali zene lejátszás",
    command: "forceplay",
    description: "Thomas belép hozzád a szobába és lejátsza a megadott zenét azonnal.",
  },
  {
    id: "c14",
    title: "A következő zene lejátszása",
    command: "skip",
    description: "Thomas belép hozzád a szobába és lejátsza a megadott zenét azonnal.",
  },
  {
    id: "c12",
    title: "Megállít minden zene lejátszást",
    command: "stop",
    description: "Thomas belép hozzád a szobába és lejátsza a megadott zenét azonnal.",
  },
  {
    id: "c13",
    title: "Felolvassás",
    command: "read",
    description: "Thomas felolvassa a megadott szöveget.",
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
