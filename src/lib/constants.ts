export const baseUrl = process.env.NEXT_PUBLIC_BASEURL

export const TECH_STACKS = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'Java',
  'Spring',
  'C/C++',
  'Go',
  'AWS',
  'Docker',
  'Kubernetes',
  'MySQL',
  'MongoDB',
  'Redis',
  'Git',
] as const

export const DAYS_OF_WEEK = [
  { value: 'mon', label: '월요일' },
  { value: 'tue', label: '화요일' },
  { value: 'wed', label: '수요일' },
  { value: 'thurs', label: '목요일' },
  { value: 'fri', label: '금요일' },
  { value: 'sat', label: '토요일' },
  { value: 'sun', label: '일요일' },
  { value: 'undecided', label: '미정' },
] as const