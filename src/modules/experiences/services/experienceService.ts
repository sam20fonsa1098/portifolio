
import { getClient } from '@modules/shared/services/mongo';
import { IExperience } from '../interfaces';

async function getExperiences() {
    console.log("Retrieving experiences in mongodb atlas")
    const client = getClient();
    try {
      await client.connect();
      const data =  await client.db(
        process.env.MONGODB_DATABASE!
      ).collection<IExperience>(
        process.env.MONGODB_EXPERIENCES_COLLECTION!
      ).find({}).toArray();
      return data;
    } finally {
      await client.close();
    }
}


export { getExperiences }
  