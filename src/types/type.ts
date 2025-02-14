export type Level = '초급' | '중급' | '고급'
export type Campus = '공통' | '온라인' | '명륜' | '율전'
export type Day = '월' | '화' | '수' | '목' | '금' | '토' | '일'
export type Role = 'ROLE_MEMBER' | 'ROLE_VERIFIED' | 'ROLE_ADMIN'

export interface ErrorResponse {
  errorType: string
  message: string
}

export interface ApiResponse<T> {
  error: ErrorResponse | null
  data: T | null
}

export interface User {
  id: number
  username: string
  phoneNumber: string
  studentId: string
  email: string
  position: string
  isStaff: boolean
  bio: string | null
  github: string | null
  blog: string | null
  profileImage: string | null
  role: Role
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


