export interface Study {
  id: string;
  title: string;
  level: 'easy' | 'medium' | 'hard';
  maxMembers: number;
  currentMembers: number;
  status: '모집중' | '모집완료';
  icon: string;
} 