import { ICertification } from "../../interfaces";
import { Image, Button } from 'antd';
import {
    SafetyCertificateOutlined
} from '@ant-design/icons';
import styles from './styles.module.css';

const Certification: React.FC<ICertification> = ({
    imageLink,
    name,
    organization,
    issueDate,
    expireDate,
    credentialUrl
}) => {
    if (issueDate) {
        issueDate = new Date(issueDate);
    }
    if (expireDate) {
        expireDate = new Date(expireDate);
    }
    return (
        <div className={styles.container}>
            <div>
                <Image src={imageLink} preview={false} width={200} alt={name}/>
            </div>
            <div>
                <h2><span>{name}</span></h2>
                <p>{issueDate ? "Issue by" : "Organization"}: {organization}</p>
                {issueDate ? <p>Issue date: {`${(issueDate.getMonth() + 1).toString().padStart(2, '0')}/${issueDate.getFullYear()}`}</p> : null}
                {expireDate ? <p>Expiration Date: {`${(expireDate.getMonth() + 1).toString().padStart(2, '0')}/${expireDate.getFullYear()}`}</p> : null}
                {credentialUrl ? <Button shape="round" icon={<SafetyCertificateOutlined/>} href={credentialUrl} target="_blank">
                    Check my badge
                </Button> : null}
            </div>
        </div>
    );
}

export { Certification }