export * from './studies';
export * from './sessions';
export * from './books';
export * from './notices';
export * from './activities';

export interface WeeklyProgress {
  week: number;
  title: string;
  originalTitle?: string;
  status: 'completed' | 'current' | 'upcoming';
  description: string;
  originalDescription?: string;
} 