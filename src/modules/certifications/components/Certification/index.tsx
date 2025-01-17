import { ICertification } from "../../interfaces";
import { Image, Button } from 'antd';
import {
    SafetyCertificateOutlined
} from '@ant-design/icons';
import styles from './styles.module.css';
import { formatDate } from "@modules/shared/utils/date";

const Certification: React.FC<ICertification> = ({
    imageLink,
    name,
    organization,
    issueDate,
    expireDate,
    credentialUrl
}) => {
    return (
        <div className={styles.container}>
            <Image src={imageLink} preview={false} alt={name}/>
            <div>
                <h2><span>{name}</span></h2>
                <p>{issueDate ? "Issue by" : "Organization"}: {organization}</p>
                {issueDate ? <p>Issue date: {formatDate(issueDate)}</p> : null}
                {expireDate ? <p>Expiration Date: {formatDate(expireDate)}</p> : null}
                {credentialUrl ? <Button shape="round" icon={<SafetyCertificateOutlined/>} href={credentialUrl} target="_blank">
                    Check my badge
                </Button> : null}
            </div>
        </div>
    );
}

export { Certification }