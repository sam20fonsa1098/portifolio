
"use client";

import { IExperience } from "@modules/experiences/interfaces";
import { formatDate } from "@modules/shared/utils/date";
import { useState } from "react";
import { Image } from "antd";
import { DiscussionModal } from "../discussionModal";
import styles from './styles.module.css';

const Experience: React.FC<IExperience> = ({
    achievements,
    achievementDiscussion,
    company,
    role,
    companyLink,
    startDate,
    endDate
}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [index, setIndex] = useState(-1);

    const openModal = (index: number) => {
        if (achievementDiscussion && achievementDiscussion[index]) {
            setIndex(index);
            setModalOpen(true);
        }
    }

    return (
        <div>
            <div className={styles.roleContainer}>
                <h2><span>{role}</span></h2>
                <p>
                    {formatDate(startDate)} ~ {endDate ? formatDate(endDate) : 'Present'} - <a href={companyLink} target="_blank">{company}</a>
                </p>
            </div>
            <div className={styles.achievementsContainer}>
                {achievements.map((achievement, index) => {
                    return (
                        <p
                            key={index}
                            onClick={() => openModal(index)}
                            className={achievementDiscussion && achievementDiscussion[index] ? styles.highlightText : ''}>
                            {achievement}
                        </p>
                    );
                })}
            </div>

            <DiscussionModal modalOpen={modalOpen} setModalOpen={setModalOpen} title={achievements[index]}>
                <div className={styles.modalContentContainer}>
                    {(achievementDiscussion &&  achievementDiscussion[index] ? achievementDiscussion[index] : []).map((discussion, discussionIndex) => {
                        if (discussion.includes("/images/")) {
                            const splitDiscussion = discussion.split("/images/");
                            const alt = splitDiscussion[0];
                            const imageFile = splitDiscussion[1]
                            return (
                                <Image key={discussionIndex} src={`images/${imageFile}`} preview={false} width={200} alt={alt}/>
                            );
                        }
                        return (
                            <p key={discussionIndex}>{discussion}</p>
                        );
                    })}
                </div>
            </DiscussionModal>
        </div>
    );
}

export { Experience }
