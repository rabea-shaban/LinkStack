import type { ComponentType, SVGProps } from 'react';
import type { IconType } from 'react-icons';
import {
  SiFacebook,
  SiGithub,
  SiLinkedin,
  SiTiktok,
  SiUpwork,
  SiWhatsapp,
  SiYoutube,
} from 'react-icons/si';
import {
  FiGlobe,
  FiList,
  FiMail,
  FiPlay,
  FiVideo,
} from 'react-icons/fi';
import { KhamsatIcon, KhamsaLogoIcon, MostaqlIcon } from '../components/BrandIcons';

export type IconComponent = IconType | ComponentType<SVGProps<SVGSVGElement>>;

export type LinkItem = {
  id: string;
  label: string;
  description: string;
  href: string;
  icon: IconComponent;
  imageSrc?: string;
  accent: 'blue' | 'cyan' | 'violet' | 'emerald' | 'rose' | 'amber' | 'indigo';
  badge?: string;
};

// 1. Personal & Professional Links
export const personalProfessionalLinks: LinkItem[] = [
  {
    id: 'portfolio',
    label: 'Portfolio',
    description: 'Explore my projects and professional experience',
    href: 'https://www.rabea-shaban.com/',
    icon: FiGlobe,
    accent: 'blue',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    description: 'Connect with me professionally',
    href: 'https://www.linkedin.com/in/rabea-sh-elzayat',
    icon: SiLinkedin,
    accent: 'blue',
  },
  {
    id: 'github',
    label: 'GitHub',
    description: 'Explore my repositories and projects',
    href: 'https://github.com/rabea-shaban',
    icon: SiGithub,
    accent: 'violet',
  },
];

// 2. Personal Social Links
export const personalSocialLinks: LinkItem[] = [
  {
    id: 'personal-facebook',
    label: 'Facebook',
    description: 'Follow my personal Facebook profile',
    href: 'https://www.facebook.com/Rabea.Sh.ELZayat/',
    icon: SiFacebook,
    accent: 'blue',
  },
  {
    id: 'personal-tiktok',
    label: 'TikTok',
    description: 'Follow my personal TikTok account',
    href: 'https://www.tiktok.com/@rabea.sh.elzayat',
    icon: SiTiktok,
    accent: 'cyan',
  },
];

// 3. Freelance Platforms (Official Mostaql, Khamsat, Upwork SVGs)
export const freelanceLinks: LinkItem[] = [
  {
    id: 'mostaql',
    label: 'مستقل (Mostaql)',
    description: 'Hire me for freelance development',
    href: 'https://mostaql.com/u/rabea_elzayat',
    icon: MostaqlIcon,
    accent: 'cyan',
  },
  {
    id: 'khamsat',
    label: 'خمسات (Khamsat)',
    description: 'Explore my freelance services',
    href: 'https://khamsat.com/user/rabeashaban',
    icon: KhamsatIcon,
    accent: 'amber',
  },
  {
    id: 'upwork',
    label: 'Upwork',
    description: 'Work with me on international projects',
    href: 'https://www.upwork.com/freelancers/~01bd899c27a06f54f1',
    icon: SiUpwork,
    accent: 'emerald',
  },
];

// 4. Khamsa Programming Belady Official Website
export const platformWebsiteLink: LinkItem = {
  id: 'khamsa-website',
  label: 'خمسة برمجة بالبلدي — الموقع الرسمي',
  description: 'محتوى تقني وتعليمي لتبسيط البرمجة والتكنولوجيا باللغة العربية.',
  href: 'https://www.khamsaprogramming.com/',
  icon: KhamsaLogoIcon,
  imageSrc: '/khamsa-logo.png',
  accent: 'indigo',
  badge: 'المنصة الرسمية',
};

// 5. Official YouTube Channel & Featured Content
export const youtubeOfficialLink: LinkItem = {
  id: 'khamsa-youtube',
  label: 'YouTube — خمسة برمجة بالبلدي',
  description: 'Follow the official YouTube channel',
  href: 'https://www.youtube.com/@5programming.balady',
  icon: SiYoutube,
  accent: 'rose',
  badge: 'Official Channel',
};

export const youtubeFeaturedLinks: LinkItem[] = [
  {
    id: 'computer-windows-playlist',
    label: 'أساسيات الكمبيوتر وWindows للمبتدئين',
    description: 'Beginner-friendly computer tutorials',
    href: 'https://youtube.com/playlist?list=PLYMsJ3Zl5HO4&si=NNs-FhTi-cIkdONC',
    icon: FiList,
    accent: 'blue',
    badge: 'Playlist',
  },
  {
    id: 'computer-video',
    label: 'يعني إيه كمبيوتر؟',
    description: 'Featured educational video',
    href: 'https://www.youtube.com/watch?v=9quqWXxdifI',
    icon: FiPlay,
    accent: 'cyan',
    badge: 'Video',
  },
  {
    id: 'programming-start-short',
    label: 'مش عارف تبدأ البرمجة منين؟',
    description: 'Short video for programming beginners',
    href: 'https://www.youtube.com/shorts/vfkUirn_KnQ',
    icon: FiVideo,
    accent: 'violet',
    badge: 'Shorts',
  },
];

// 6. Official TikTok Account & Featured Videos
export const tiktokOfficialLink: LinkItem = {
  id: 'khamsa-tiktok',
  label: 'TikTok — خمسة برمجة بالبلدي',
  description: 'Follow the official TikTok channel',
  href: 'https://www.tiktok.com/@5programming.balady',
  icon: SiTiktok,
  accent: 'cyan',
  badge: 'Official Account',
};

export const tiktokFeaturedVideos: LinkItem[] = [
  {
    id: 'graduation-video',
    label: 'رحلة التخرج من منحة الرواد الرقميون',
    description: 'My graduation journey',
    href: 'https://www.tiktok.com/@5programming.balady/video/7689165379649735957',
    icon: FiPlay,
    accent: 'violet',
    badge: 'TikTok Video',
  },
  {
    id: 'jwt-video',
    label: 'يعني إيه JWT؟',
    description: 'A simplified JWT explanation',
    href: 'https://www.tiktok.com/@5programming.balady/video/7689867894754217224',
    icon: FiPlay,
    accent: 'blue',
    badge: 'TikTok Video',
  },
  {
    id: 'programming-start-video',
    label: 'مش عارف تبدأ منين؟',
    description: 'Tips for starting programming',
    href: 'https://www.tiktok.com/@5programming.balady/video/7683920332029283605',
    icon: FiPlay,
    accent: 'emerald',
    badge: 'TikTok Video',
  },
  {
    id: 'javascript-tip',
    label: 'معلومة ع الماشي | JavaScript',
    description: 'A quick JavaScript tip',
    href: 'https://www.tiktok.com/@5programming.balady/video/7686094530478722325',
    icon: FiPlay,
    accent: 'amber',
    badge: 'TikTok Video',
  },
];

// 7. Official Facebook Page
export const platformFacebookLink: LinkItem = {
  id: 'khamsa-facebook',
  label: 'Facebook — خمسة برمجة بالبلدي',
  description: 'Follow the official Facebook page',
  href: 'https://www.facebook.com/5programming.balady/',
  icon: SiFacebook,
  accent: 'blue',
  badge: 'Official Page',
};

// 8. Contact Links (Personal vs Platform)
export const personalContactLinks: LinkItem[] = [
  {
    id: 'personal-email',
    label: 'Personal Email',
    description: 'Send me an email (rabea.elzayate@gmail.com)',
    href: 'mailto:rabea.elzayate@gmail.com',
    icon: FiMail,
    accent: 'violet',
  },
  {
    id: 'alternative-personal-email',
    label: 'Alternative Personal Email',
    description: 'Alternative email contact (r.shaban.2016@gmail.com)',
    href: 'mailto:r.shaban.2016@gmail.com',
    icon: FiMail,
    accent: 'blue',
  },
  {
    id: 'personal-whatsapp',
    label: 'Personal WhatsApp',
    description: 'Message me personally (+20 155 408 7543)',
    href: 'https://wa.me/201554087543',
    icon: SiWhatsapp,
    accent: 'emerald',
  },
];

export const platformContactLinks: LinkItem[] = [
  {
    id: 'platform-email',
    label: 'خمسة برمجة بالبلدي Email',
    description: 'Contact the platform (info@khamsaprogramming.com)',
    href: 'mailto:info@khamsaprogramming.com',
    icon: FiMail,
    accent: 'cyan',
  },
  {
    id: 'platform-whatsapp',
    label: 'Platform WhatsApp',
    description: 'Contact Khamsa Programming (+20 115 680 7072)',
    href: 'https://wa.me/201156807072',
    icon: SiWhatsapp,
    accent: 'emerald',
  },
];

// Compatibility alias exports
export const mainLinks = personalProfessionalLinks;
export const contactLinks = [...personalContactLinks, ...platformContactLinks];
export const youtubeLinks = [youtubeOfficialLink, ...youtubeFeaturedLinks];
export const tiktokLinks = [tiktokOfficialLink, ...tiktokFeaturedVideos];
export const platformSocialLinks = [platformFacebookLink];
export const platformLinks = [platformWebsiteLink, youtubeOfficialLink, tiktokOfficialLink, platformFacebookLink];
