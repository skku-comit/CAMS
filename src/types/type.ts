export type Level = '초급' | '중급' | '고급'
export type Campus = '공통' | '온라인' | '명륜' | '율전'
export type Day = '월' | '화' | '수' | '목' | '금' | '토' | '일'
export type Role = 'ROLE_MEMBER' | 'ROLE_VERIFIED' | 'ROLE_ADMIN'
export type ActivityType = 'study' | 'project' | 'session'
export type ActivityLevel = 'easy' | 'intermediate' | 'hard'

export interface ErrorResponse {
  errorType: string
  message: string
}

export interface ApiResponse<T> {
  error: ErrorResponse | null
  data: T | null
}

export interface User {
  userId: number;
  loginId: string;
  loginPassword: string;
  userName: string;
  userEmail: string;  
  userGithub: string | null;
  profileImage: string | null; //우리 서버에 파일 저장하고 url 환반하는 경우 맞지?
  bio: string; //신규 모집 폼에 있는 자기소개 필드
  blogUrl: string | null;
  phoneNumber: number;
  kakaoId: string | null;
  studentId: number;
  major: string;
  academicStatus: "attend" | "absent" | "graduate";
  activeCampus: "seoul" | "suwon" | "n/a";
  signupReason: Array<"스터디"| "세미나" | "프로젝트" | "대회 참여" | "네트워킹(친목 포함)" | string>;
  pastExperience: string;
  interestFields: Array<"웹개발"|"프론트엔드"|"백엔드"|"풀스택"|"모바일 앱 개발"|"게임 개발"|"인공지능"| "프로그래밍 언어"|"하드웨어"|"알고리즘 · 자료구조"| "데브옵스 · 인프라" | "소프트웨어 테스트" | "개발 도구" | "웹 퍼블리싱" | "VR/AR 자격증" | "빅데이터 · 데이터 분석" | "클라우드" | "네트워크 · 보안" | "기타">;
  createdAt: string;
}

export interface UserProfile extends Omit<User, 'isStaff' | 'role'> {}

export interface Study {
  id: number
  title: string
  imageSrc: string
  mentor: UserProfile
  day: Day
  startTime: string
  endTime: string
  level: Level
  stacks: string[]
  campus: Campus
  description: string
  isRecruiting: boolean
  semester: string
}

export interface WeeklyPlan {
  week_index: number
  learning_plan: string
}

interface WeeklyProgress {
  week: number
  title: string
  status: 'completed' | 'current' | 'upcoming'
  description: string
  originalTitle?: string
  originalDescription?: string
}

export interface Activity {
  id: string
  title: string
  type: ActivityType
  level: ActivityLevel
  icon: string
  schedule: string
  startDate: string
  endDate: string
  progress: number
  duration_week: number
  curriculum: WeeklyPlan[]
  members: {
    id: string
    name: string
    isLeader: boolean
  }[]
  currentWeek: number
  weeklyProgress: WeeklyProgress[]
}


