import classes from "./Statistics.module.css";
import {useEffect, useState} from "react";


function Statistics(props) {

  const { statistics, servers } = props;

  const [isOnline, setIsOnline] = useState(null);
  const [avaliableServers, setAvaliableServers] = useState(null);
  const [activeMembers, setActiveMembers] = useState(0);
  const [popularServer, setPopularServer] = useState({});

  useEffect(() => {
    if (statistics.length > 0) {
      setIsOnline(true);
      setAvaliableServers(statistics.length);

      let members = 0;
      let popularCount = 0;
      let popularName = "";

      for (let index = 0; index < servers.length; index++) {
        members += servers[index].members_online;
        if(servers[index].members_online > popularCount){
          popularCount = servers[index].members_online;
          popularName = servers[index].name;
        }
      }
      setActiveMembers(members);
      setPopularServer({
        name: popularName,
        count: popularCount
      });
    }
  }, [statistics, servers]);

  return (
    <div className={classes.statistics}>
      <section className={classes.wrapp}>
        <h3>Szerver státusz</h3>
        <p className={`${classes.status} ${!isOnline && classes.offline}`}>{isOnline ? 'Online' : 'Offline'}</p>
      </section>
      <div className={classes.line}></div>
      <section className={classes.wrapp}>
        <h3>Aktív szerverek</h3>
        <p className={`${isOnline ? classes.avaliableServers : classes.offline}`}>{isOnline ? avaliableServers : 'Ismeretlen'}</p>
      </section>
      <div className={classes.line}></div>
      <section className={classes.wrapp}>
        <h3>Aktív felhasználók</h3>
        <p className={classes.sendedMesseges}>{activeMembers}</p>
      </section>
      <div className={classes.line}></div>
      <section className={classes.wrapp}>
        <h3>Top szerver</h3>
        <p className={classes.popularServer}>{popularServer.name}<br /><br />{`${popularServer.count} aktív felhasználóval`}</p>
      </section>
    </div>
  );
}

export default Statistics;
