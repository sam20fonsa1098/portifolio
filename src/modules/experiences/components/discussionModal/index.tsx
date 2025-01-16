
import { Modal } from 'antd';
import { ReactNode } from 'react';
import styles from './styles.module.css';

interface IDiscussionModal {
    children: ReactNode;
    modalOpen: boolean;
    setModalOpen(open: boolean): void;
    title: string;
}

const DiscussionModal: React.FC<IDiscussionModal> = ({
    children,
    modalOpen,
    setModalOpen,
    title,
}) => {
    return (
        <Modal
            title={title}
            centered
            className={styles.modalContainer}
            open={modalOpen}
            onOk={() => setModalOpen(false)}
            onCancel={() => setModalOpen(false)}
            closeIcon={null}
            footer={null}
        >
            {children}
        </Modal>
    );
}

export { DiscussionModal }