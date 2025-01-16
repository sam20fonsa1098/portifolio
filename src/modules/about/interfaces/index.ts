export interface About {
    _id: string;
    name: string;
    summary: string;
    techSkills: {
        [k: string]: string[]
    };
    softSkills: string[]
}