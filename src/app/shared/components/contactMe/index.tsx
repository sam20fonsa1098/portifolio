import { Button } from 'antd';
import {
    GithubOutlined,
    LinkedinOutlined,
    MailOutlined,
    PhoneOutlined
} from '@ant-design/icons';
import { ReactNode } from 'react';

const ContactMe: React.FC<{children?: ReactNode}> = ({children}) => {
    return (
        <section>
            {children}
            <Button type='primary' shape='circle' icon={<GithubOutlined/>} href={process.env.GITHUB_URL} target="_blank"/>
            <Button type='primary' shape='circle' icon={<LinkedinOutlined/>} href={process.env.LINKEDIN_URL} target="_blank"/>
            <Button type='primary' shape='circle' icon={<MailOutlined/>} href={`mailto:${process.env.EMAIL}`}/>
            <Button type='primary' shape='circle' icon={<PhoneOutlined/>} href={`tel:${process.env.PHONE_NUMBER}`}/>
        </section>
    );
}

export { ContactMe };