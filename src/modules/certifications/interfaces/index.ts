export interface ICertification {
    id: number;
    name: string;
    organization: string;
    imageLink: string;

    credentialUrl?: string;
    issueDate?: Date;
    expireDate?: Date;
}