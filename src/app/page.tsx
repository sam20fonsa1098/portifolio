import styles from './page.module.css';

import { unstable_cache } from 'next/cache';
import { Image } from 'antd';
import { getInfoAboutMe } from './about/services/aboutService';
import { ContactMe } from './shared/components/contactMe';

const getCachedInfoAboutMe = unstable_cache(
  async () => {
    return await getInfoAboutMe();
  },
  ['about'],
  { revalidate: 60 * 60 * 24 * 30, tags: ['about'] }
)
  
export default async function Home() {
  const aboutMe = await getCachedInfoAboutMe();
  const summarySpplited = aboutMe?.summary.split(".");

  return (
    <div className={styles.homeContainer}>
      <section className={styles.introContainer}>
        <div className={styles.aboutContainer}>
          <h1>Hi There!</h1>
          <h2>I am <span>{aboutMe?.name}</span></h2>

          <section className={styles.roleContainer}>
            <h2><span>LET ME INTRODUCE MYSELF</span></h2>

            
              <div>
                {summarySpplited?.map((summary, index) => {
                  if (!summary) {
                    return null;
                  }

                  return (
                    <p key={index}>{summary};</p>
                  );
                })}

              </div>
              


          </section>
        </div>
        <Image src="images/me.jpeg" preview={false}/>
      </section>

      <section className={styles.hardContainer}>
        <h2><span>TECH SKILLS</span></h2>

        {Object.keys(aboutMe?.techSkills || {}).map(techArea => {
          return (
            <div key={techArea} className={styles.hardSkillContainer}>
              <h3>{techArea}</h3>

              <div>
                {aboutMe?.techSkills[techArea].map(hardSkill => {
                  return (
                    <div key={hardSkill}>
                      <p>{hardSkill}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      <section className={styles.softContainer}>
        <h2><span>SOFT SKILLS</span></h2>

        <div>
          <div>
            {aboutMe?.softSkills.map(softSkill => {
              return (
                <div key={softSkill} className={styles.softSkillContainer}>
                  <p>{softSkill}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.contactContainer}>
        <ContactMe>
          <h2><span>FIND ME ON</span></h2>
          <p>Feel free to <span>connect</span> with me</p>
        </ContactMe>
      </section>
    </div>
  );
}
