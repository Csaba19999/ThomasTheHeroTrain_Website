import Invite from "../Components/invite/Invite";
import Intruduce from "../Components/intruduce/Intruduce";
import Statistics from "../Components/statistics/Statistics";
import Reviews from "../Components/review/Reviews";
import { MongoClient } from 'mongodb';
import classes from "./welcome.module.css";  
import Github from "../Components/github/Github";


export default function Home({data, reviews, guilds}) {
  return (
    <div className={classes.home}>
        <Intruduce />
        <Invite />
        <Statistics statistics={data} servers={guilds} />
        <Reviews reviews={reviews} />
        <Github />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://discord.com/api/v9/users/@me/guilds", {
    headers: {
      Authorization:
        `Bot ${process.env.THOMAS_TOKEN}`,
    },
  });
  const data = await res.json();


  const guilds = [];
  for (let index = 0; index < data.length; index++) {
    const resM = await fetch(`https://canary.discord.com/api/v9/guilds/${data[index].id}?with_counts=true`, {
    headers: {
      Authorization:
      `Bot ${process.env.THOMAS_TOKEN}`,
    },
  });
  const members = await resM.json();

  const guild = {
    id : members.id,
    name : members.name,
    members_total : members.approximate_member_count,
    members_online : members.approximate_presence_count,
    description: members.description,
  }
  guilds.push(guild);
  
  }

  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DATABASE_CONNECT_NAME}:${process.env.DATABASE_CONNECT_PASSWORD}@thomasdcdatabase.64vbjp7.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();
  const reviewsCollection = db.collection("reviews");
  const reviews = await reviewsCollection.find().limit(20).toArray();
  client.close();
  

  return {
    props: {
      data,
      guilds,
      reviews: reviews.map((review) => ({
        name: review.name,
        date: review.date,
        id: review._id.toString(),
        profileImage: review.profileImage,
        description: review.description,
        rating: review.rating,
      }))
    },
  };
}
