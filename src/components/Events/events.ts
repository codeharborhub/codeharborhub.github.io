export interface Event {
  id: string;
  name: string;
  slug: string;
  description: string;
  logo_url: string;
  start_date: string;
  end_date: string;
  official_link: string;
  tags: string[];
  is_active: boolean;
}

export const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    name: 'Hacktoberfest',
    slug: 'hacktoberfest',
    description: 'Celebrate open-source with Hacktoberfest! Contribute to projects, earn swag, and support the community.',
    logo_url: 'https://hacktoberfest.com/_next/static/media/logo-hacktoberfest-12--nav.0ac01b46.svg',
    start_date: 'October 1',
    end_date: 'October 31',
    official_link: '/events/hacktoberfest/',
    tags: ['Beginner Friendly', 'Global', 'Annual'],
    is_active: true,
  },
  {
    id: '2',
    name: 'Google Summer of Code',
    slug: 'google-summer-of-code',
    description: 'A global program focused on bringing student developers into open source software development.',
    logo_url: 'https://developers.google.com/open-source/gsoc/resources/downloads/GSoC-logo-horizontal.svg',
    start_date: 'May',
    end_date: 'August',
    official_link: 'https://summerofcode.withgoogle.com/',
    tags: ['Student Program', 'Global', 'Mentorship'],
    is_active: true,
  },
  {
    id: '3',
    name: 'GirlScript Summer of Code',
    slug: 'gssoc',
    description: 'A 3-month-long open-source program by GirlScript Foundation helping beginners get into open-source development.',
    logo_url: 'https://tse1.mm.bing.net/th/id/OIP.h7OBAsph2Bb1K4W9C6jiLQHaCS?pid=Api&P=0&h=180',
    start_date: 'March',
    end_date: 'May',
    official_link: 'https://gssoc.girlscript.tech/',
    tags: ['Beginner Friendly', 'Student Program', 'Mentorship'],
    is_active: true,
  },
];
