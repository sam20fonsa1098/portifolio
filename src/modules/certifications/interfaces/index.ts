export interface ICertification {
    _id: string;
    name: string;
    organization: string;
    imageLink: string;

    credentialUrl?: string;
    issueDate?: Date;
    expireDate?: Date;
}