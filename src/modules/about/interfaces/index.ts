export interface About {
    id: number;
    name: string;
    summary: string;
    techSkills: {
        [k: string]: string[]
    };
    softSkills: string[]
}