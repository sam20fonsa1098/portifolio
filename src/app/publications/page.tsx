import { getPublications } from '@modules/publications/services/publicationService';
import { unstable_cache } from 'next/cache';
import { Publication } from '@modules/publications/components/publication';
import styles from './page.module.css';

const getCachedPublications = unstable_cache(
    async () => {
      const publications = (await getPublications()).map(publication => {
        return {
            ...publication,
            publicationDate: new Date(publication.publicationDate)
        };
      }).sort((a, b) => b.publicationDate.getTime() - a.publicationDate.getTime());

      return publications;
    },
    ['publication'],
    { revalidate: 60 * 60 * 24 * 30, tags: ['publication'] }
  )

export default async function Publications() {
    const publications = await getCachedPublications();

    return (
        <div className={styles.container}>
            <h1><span>Publications</span></h1>

            {publications.map(publication => {
                return (
                    <Publication key={publication.id} {...publication}/>
                );
            })}
        </div>
    );
} 