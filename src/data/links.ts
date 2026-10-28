import type { IconType } from 'react-icons';
import {
  FiBriefcase,
  FiFacebook,
  FiGithub,
  FiGlobe,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiSend,
  FiTag,
  FiVideo,
  FiYoutube,
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
    href: 'https://www.rabea-shaban.com/',
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

export const creatorLinks: LinkItem[] = [
  {
    id: 'khamsa-website',
    label: 'خمسة برمجة بالبلدي — الموقع الرسمي',
    description: 'الموقع الرسمي لمنصة تعليم البرمجة بالعربي',
    href: 'https://www.khamsaprogramming.com/',
    icon: FiGlobe,
    accent: 'blue',
  },
  {
    id: 'youtube',
    label: 'YouTube — خمسة برمجة بالبلدي',
    description: 'القناة الرسمية على يوتيوب',
    href: 'https://www.youtube.com/@5programming.balady',
    icon: FiYoutube,
    accent: 'violet',
  },
  {
    id: 'youtube-playlist',
    label: 'أساسيات الكمبيوتر وWindows للمبتدئين',
    description: 'قائمة تشغيل للمبتدئين',
    href: 'https://youtube.com/playlist?list=PLYMsJ3Zl5HO4&si=NNs-FhTi-cIkdONC',
    icon: FiVideo,
    accent: 'cyan',
  },
  {
    id: 'youtube-computer-video',
    label: 'فيديو: يعني إيه كمبيوتر؟',
    description: 'فيديو تعليمي مميز',
    href: 'https://www.youtube.com/watch?v=9quqWXxdifI',
    icon: FiVideo,
    accent: 'blue',
  },
  {
    id: 'youtube-start-short',
    label: 'Shorts: مش عارف تبدأ البرمجة منين؟',
    description: 'نصائح لبدء رحلة البرمجة',
    href: 'https://www.youtube.com/shorts/vfkUirn_KnQ',
    icon: FiVideo,
    accent: 'violet',
  },
  {
    id: 'tiktok',
    label: 'TikTok — خمسة برمجة بالبلدي',
    description: 'محتوى برمجي قصير ومبسط',
    href: 'https://www.tiktok.com/@5programming.balady',
    icon: FiVideo,
    accent: 'cyan',
  },
  {
    id: 'tiktok-graduation',
    label: 'TikTok: رحلة التخرج من منحة الرواد الرقميون',
    description: 'فيديو عن رحلة التخرج',
    href: 'https://www.tiktok.com/@5programming.balady/video/7689165379649735957',
    icon: FiVideo,
    accent: 'violet',
  },
  {
    id: 'tiktok-jwt',
    label: 'TikTok: يعني إيه JWT؟',
    description: 'شرح مبسط لمفهوم JWT',
    href: 'https://www.tiktok.com/@5programming.balady/video/7689867894754217224',
    icon: FiVideo,
    accent: 'blue',
  },
  {
    id: 'tiktok-start',
    label: 'TikTok: مش عارف تبدأ منين؟',
    description: 'إرشادات لبدء تعلم البرمجة',
    href: 'https://www.tiktok.com/@5programming.balady/video/7683920332029283605',
    icon: FiVideo,
    accent: 'cyan',
  },
  {
    id: 'tiktok-javascript',
    label: 'TikTok: معلومة ع الماشي | JavaScript',
    description: 'معلومة سريعة عن JavaScript',
    href: 'https://www.tiktok.com/@5programming.balady/video/7686094530478722325',
    icon: FiVideo,
    accent: 'emerald',
  },
  {
    id: 'facebook-page',
    label: 'Facebook — خمسة برمجة بالبلدي',
    description: 'الصفحة الرسمية على فيسبوك',
    href: 'https://www.facebook.com/5programming.balady/',
    icon: FiFacebook,
    accent: 'blue',
  },
];

export const personalSocialLinks: LinkItem[] = [
  {
    id: 'personal-facebook',
    label: 'Facebook — حسابي الشخصي',
    description: 'حسابي الشخصي على فيسبوك',
    href: 'https://www.facebook.com/Rabea.Sh.ELZayat/',
    icon: FiFacebook,
    accent: 'blue',
  },
  {
    id: 'personal-tiktok',
    label: 'TikTok — حسابي الشخصي',
    description: 'حسابي الشخصي على تيك توك',
    href: 'https://www.tiktok.com/@rabea.sh.elzayat',
    icon: FiVideo,
    accent: 'violet',
  },
];

export const contactLinks: LinkItem[] = [
  {
    id: 'platform-email',
    label: 'Email — خمسة برمجة بالبلدي',
    description: 'للتواصل مع المنصة',
    href: 'mailto:info@khamsaprogramming.com',
    icon: FiMail,
    accent: 'blue',
  },
  {
    id: 'email',
    label: 'Email — Personal',
    description: 'Send me a message',
    href: 'mailto:rabea.elzayate@gmail.com',
    icon: FiMail,
    accent: 'violet',
  },
  {
    id: 'email-alt',
    label: 'Email — Alternative',
    description: 'Alternative personal email',
    href: 'mailto:r.shaban.2016@gmail.com',
    icon: FiMail,
    accent: 'cyan',
  },
  {
    id: 'platform-whatsapp',
    label: 'WhatsApp — خمسة برمجة بالبلدي',
    description: 'التواصل مع المنصة عبر واتساب',
    href: 'https://wa.me/201156807072',
    icon: FiPhone,
    accent: 'emerald',
  },
  {
    id: 'personal-whatsapp',
    label: 'WhatsApp — Personal',
    description: 'Message me directly',
    href: 'https://wa.me/201554087543',
    icon: FiPhone,
    accent: 'cyan',
  },
];
