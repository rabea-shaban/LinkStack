import type { IconType } from 'react-icons';
import {
  FiBriefcase,
  FiGithub,
  FiGlobe,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiSend,
  FiTag,
} from 'react-icons/fi';

export type LinkItem = {
  id: string;
  label: string;
  description: string;
  href: string;
  icon: IconType;
  accent: 'blue' | 'cyan' | 'violet' | 'emerald';
};

export const mainLinks: LinkItem[] = [
  {
    id: 'portfolio',
    label: 'Portfolio',
    description: 'Explore my personal engineering website',
    href: 'https://rabea-shaban.com',
    icon: FiGlobe,
    accent: 'blue',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    description: 'Connect with me on LinkedIn',
    href: 'https://www.linkedin.com/in/rabea-sh-elzayat',
    icon: FiLinkedin,
    accent: 'cyan',
  },
  {
    id: 'github',
    label: 'GitHub',
    description: 'View my open-source projects',
    href: 'https://github.com/rabea-shaban',
    icon: FiGithub,
    accent: 'violet',
  },
];

export const freelanceLinks: LinkItem[] = [
  {
    id: 'mostaql',
    label: 'Mostaql',
    description: 'Hire me for Arabic freelance work',
    href: 'https://mostaql.com/u/rabea_elzayat',
    icon: FiBriefcase,
    accent: 'emerald',
  },
  {
    id: 'khamsat',
    label: 'Khamsat',
    description: 'Browse my freelance gigs',
    href: 'https://khamsat.com/user/rabeashaban',
    icon: FiTag,
    accent: 'blue',
  },
  {
    id: 'upwork',
    label: 'Upwork',
    description: 'Work with me on global projects',
    href: 'https://www.upwork.com/freelancers/~01bd899c27a06f54f1',
    icon: FiSend,
    accent: 'cyan',
  },
];

export const contactLinks: LinkItem[] = [
  {
    id: 'email',
    label: 'Email',
    description: 'Send me a message',
    href: 'mailto:rabea.elzayate@gmail.com',
    icon: FiMail,
    accent: 'violet',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    description: 'Chat with me instantly',
    href: 'https://wa.me/201156807072',
    icon: FiPhone,
    accent: 'emerald',
  },
];
