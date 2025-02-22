import { unstable_cache } from "next/cache";
import { Certification } from '@modules/certifications/components/Certification';
import { getCertifications } from '@modules/certifications/service/certificationService';
import styles from './page.module.css';

const getCachedCertifications = unstable_cache(
    async () => {
      return await getCertifications();
    },
    ['certifications'],
    { revalidate: 60 * 60 * 24 * 30, tags: ['certifications'] }
)

export default async function Certifications() {
    const certifications = await getCachedCertifications();
    const completedCertifications = certifications.filter(certification => certification.expireDate);
    const certificationToAchieve = certifications.filter(certification => !certification.expireDate);

    return (
        <div className={styles.mainContainer}>
            <h1><span>Completed</span> certifications</h1>
            <section>
                {completedCertifications.map(certification => {
                    return (
                        <Certification key={certification._id} {...certification}/>
                    );
                })}
            </section>
            <h1><span>Studying</span> to achieve these certifications</h1>
            <section>
                {certificationToAchieve.map(certification => {
                    return (
                        <Certification key={certification._id} {...certification}/>
                    );
                })}
            </section>
        </div>
    );
} 