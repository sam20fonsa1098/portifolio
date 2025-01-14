
import { getClient } from '../../shared/services/mongo';
import { About } from '../interfaces';

async function getInfoAboutMe() {
    console.log("Retrieving info about me in mongodb atlas")
    const client = getClient();
    try {
      await client.connect();
      const data =  await client.db(
        process.env.MONGODB_DATABASE!
      ).collection<About>(
        process.env.MONGODB_ABOUT_COLLECTION!
      ).findOne({});
      return data;
    } finally {
      await client.close();
    }
}


export { getInfoAboutMe }
  