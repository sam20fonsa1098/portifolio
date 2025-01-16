export interface IExperience {
    _id: string;
    role: string;
    company: string;
    companyLink: string;
    startDate: Date;
    endDate?: Date;
    achievements: string[]
    achievementDiscussion?: {
        [key: number]: string[];
    }
}