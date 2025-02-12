"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ProjectOutlined,
  SafetyCertificateOutlined, 
  FileTextOutlined,
  IdcardOutlined,
  SolutionOutlined,
  HomeOutlined
} from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import styles from './styles.module.css';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'home',
    icon: <HomeOutlined />,
    label: (
      <Link href="/">
        Home
      </Link>
    ),
  },{
    key: 'experiences',
    icon: <SolutionOutlined />,
    label: (
      <Link href="experiences">
        Experiences
      </Link>
    ),
  },
  {
    key: 'certifications',
    icon: <SafetyCertificateOutlined />,
    label: (
      <Link href="certifications">
        Certifications
      </Link>
    ),
  },
  {
    key: 'projects',
    icon: <ProjectOutlined />,
    label: (
      <Link href="projects">
        Projects
      </Link>
    ),
  },{
    key: 'publications',
    icon: <FileTextOutlined />,
    label: (
      <Link href="publications">
        Publications
      </Link>
    ),
  },
  {
    key: 'resume',
    icon: <IdcardOutlined />,
    label: (
      <Link href={`${process.env.SERVER_URL}/files/resume.pdf`} target="_blank">
        Resume
      </Link>
    ),
  },
];

export function Navigation() {
  const pathname = usePathname();

  const activeKey = pathname === "/" ? "home" : pathname.replace("/", "");

  return (
    <Menu mode="horizontal" items={items} className={styles.navigation} selectedKeys={[activeKey]}/>
  );
}
