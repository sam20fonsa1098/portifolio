
import { getClient } from '@modules/shared/services/mongo';
import { IPublication } from '../interfaces';

async function getPublications() {
    console.log("Retrieving publications in mongodb atlas")
    const client = getClient();
    try {
      await client.connect();
      const data =  await client.db(
        process.env.MONGODB_DATABASE!
      ).collection<IPublication>(
        process.env.MONGODB_PUBLICATIONS_COLLECTION!
      ).find({}).toArray();
      return data;
    } finally {
      await client.close();
    }
}


export { getPublications }
  