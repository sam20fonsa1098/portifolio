
import { getClient } from '../../shared/services/mongo';
import { ICertification } from '../interfaces';

async function getCertifications() {
    console.log("Retrieving certification in mongodb atlas")
    const client = getClient();
    try {
      await client.connect();
      const data =  await client.db(
        process.env.MONGODB_DATABASE!
      ).collection<ICertification>(
        process.env.MONGODB_CERTIFICATIONS_COLLECTION!
      ).find({}).toArray();
      return data;
    } finally {
      await client.close();
    }
}


export { getCertifications }
  