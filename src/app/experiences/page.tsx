import { getExperiences } from "@modules/experiences/services/experienceService";
import { unstable_cache } from "next/cache";
import { Experience } from '@modules/experiences/components/Experience';
import styles from './page.module.css';

const getCachedCertifications = unstable_cache(
    async () => {
      return await getExperiences();
    },
    ['experiences'],
    { revalidate: 60 * 60 * 24 * 30, tags: ['experiences'] }
)

export default async function Experiences() {
    const experiences = await getCachedCertifications();

    return (
        <div className={styles.container}>
            <h1><span>Experiences</span></h1>

            {experiences.map(experience => {
                return (
                    <Experience key={experience._id} {...experience}/>
                );
            })}
        </div>
    );
} 