import {  Button } from 'antd';
import {
    FileTextOutlined
} from '@ant-design/icons';
import styles from './styles.module.css';
import { IPublication } from '@modules/publications/interfaces';


const Publication: React.FC<IPublication> = ({
    name,
    description,
    publicationDate,
    publicationUrl,
    publisher
}) => {
    publicationDate = new Date(publicationDate);

    return (
        <div className={styles.container}>
            <div>
                <h2><span>{name}</span></h2>
                <p>{publisher} - {`${(publicationDate.getMonth() + 1).toString().padStart(2, '0')}/${publicationDate.getFullYear()}`}</p>
            </div>
            <p>{description}</p>
            <div>
                <Button shape="round" icon={<FileTextOutlined/>} href={publicationUrl} target="_blank">
                    Go to research paper
                </Button>
            </div>
        </div> 
    );
}

export { Publication }