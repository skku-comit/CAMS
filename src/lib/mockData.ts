export const mockStudies = [
  {
    id: '1',
    title: '우대원 따라잡기 2 (이번엔 진짜 아그로 아님)',
    level: 'medium',
    maxMembers: 3,
    currentMembers: 2,
    status: '모집중',
    icon: '👩‍💻',
    type: 'study'
  },
  {
    id: '2',
    title: '리액트...공식 책!!',
    level: 'hard',
    maxMembers: 4,
    currentMembers: 3,
    status: '모집중',
    icon: '📚',
    type: 'study'
  },
  {
    id: '3',
    title: '금융공학 발 담그기 🌊',
    level: 'medium',
    maxMembers: 5,
    currentMembers: 3,
    status: '모집중',
    icon: '💹',
    type: 'study'
  },
  {
    id: '4',
    title: '파이썬 기초부터 간단한 크롤링까지',
    level: 'easy',
    maxMembers: 6,
    currentMembers: 4,
    status: '모집중',
    icon: '🐍',
    type: 'study'
  },
  {
    id: '5',
    title: 'Blender 3D 스터디',
    level: 'medium',
    maxMembers: 4,
    currentMembers: 2,
    status: '모집중',
    icon: '🎨',
    type: 'study'
  },
  {
    id: '6',
    title: 'ASK프로젝트 서비스 유지보수',
    level: 'medium',
    maxMembers: 3,
    currentMembers: 1,
    status: '모집중',
    icon: '🛠',
    type: 'project'
  },
  {
    id: '7',
    title: '머신러닝 모각공',
    level: 'easy',
    maxMembers: 4,
    currentMembers: 2,
    status: '모집중',
    icon: '🤖',
    type: 'study'
  },
  {
    id: '8',
    title: '백엔드를 배워보자',
    level: 'medium',
    maxMembers: 5,
    currentMembers: 3,
    status: '모집중',
    icon: '💻',
    type: 'project'
  },
  {
    id: '9',
    title: 'Academic English III',
    level: 'easy',
    maxMembers: 4,
    currentMembers: 2,
    status: '모집중',
    icon: '📖',
    type: 'study'
  },
  {
    id: '10',
    title: '내가 데이터분석을 이르켜줄께~',
    level: 'medium',
    maxMembers: 4,
    currentMembers: 2,
    status: '모집중',
    icon: '📊',
    type: 'project'
  },
  {
    id: '11',
    title: '쿠책북 프로젝트 셋업',
    level: 'hard',
    maxMembers: 3,
    currentMembers: 1,
    status: '모집중',
    icon: '📱',
    type: 'project'
  },
  {
    id: '12',
    title: '딥러닝 입문',
    level: 'hard',
    maxMembers: 4,
    currentMembers: 2,
    status: '모집중',
    icon: '🧠',
    type: 'study'
  },
  {
    id: '13',
    title: '알고리즘 1D1P Challenge Season 3',
    level: 'medium',
    maxMembers: 6,
    currentMembers: 4,
    status: '모집중',
    icon: '🏃',
    type: 'project'
  },
  {
    id: '14',
    title: '논문읽고모여',
    level: 'hard',
    maxMembers: 4,
    currentMembers: 2,
    status: '모집중',
    icon: '📑',
    type: 'project'
  }
]

// 현재 날짜 기준으로 이번 주 화요일 찾기
const today = new Date()
const tuesday = new Date(today)
tuesday.setDate(today.getDate() + ((2 + 7 - today.getDay()) % 7))

export const mockReservations = [
  {
    id: '1',
    title: '알고리즘 모각코',
    start: new Date(tuesday.setHours(15, 0, 0)), // 화요일 15시
    end: new Date(tuesday.setHours(17, 0, 0)), // 화요일 17시
    userId: 'admin',
    roomId: '301-BAEKDU'
  }
]

export const mockSessions = [
  {
    id: 's1',
    title: 'Git & GitHub 기초',
    level: 'easy',
    maxMembers: 30,
    currentMembers: 15,
    status: '모집중',
    icon: '🌳',
    type: 'session'
  },
  {
    id: 's2',
    title: 'Docker 컨테이너 실습',
    level: 'medium',
    maxMembers: 20,
    currentMembers: 12,
    status: '모집중',
    icon: '🐳',
    type: 'session'
  },
  {
    id: 's3',
    title: 'AWS 클라우드 입문',
    level: 'medium',
    maxMembers: 25,
    currentMembers: 18,
    status: '모집중',
    icon: '☁️',
    type: 'session'
  },
  {
    id: 's4',
    title: '알고리즘 문제 풀이 전략',
    level: 'hard',
    maxMembers: 15,
    currentMembers: 8,
    status: '모집중',
    icon: '🎯',
    type: 'session'
  },
  {
    id: 's5',
    title: 'React 웹 개발 기초',
    level: 'easy',
    maxMembers: 30,
    currentMembers: 22,
    status: '모집중',
    icon: '⚛️',
    type: 'session'
  },
  {
    id: 's6',
    title: '데이터베이스 설계와 SQL',
    level: 'medium',
    maxMembers: 20,
    currentMembers: 15,
    status: '모집중',
    icon: '💾',
    type: 'session'
  },
  {
    id: 's7',
    title: '머신러닝 기초 이론',
    level: 'medium',
    maxMembers: 25,
    currentMembers: 20,
    status: '모집중',
    icon: '🤖',
    type: 'session'
  },
  {
    id: 's8',
    title: '보안 기초와 모의해킹',
    level: 'hard',
    maxMembers: 15,
    currentMembers: 10,
    status: '모집중',
    icon: '🔒',
    type: 'session'
  }
]

export const mockBooks = [
  {
    id: '1',
    title: '클린 코드',
    author: '로버트 C. 마틴',
    category: 'programming',
    status: '대출가능',
    description: '애자일 소프트웨어 장인 정신',
    publisher: '인사이트',
    publishedYear: 2013
  },
  {
    id: '2',
    title: '리팩터링 2판',
    author: '마틴 파울러',
    category: 'programming',
    status: '대출중',
    description: '코드 구조를 체계적으로 개선하여 효율적인 리팩터링 구현하기',
    publisher: '한빛미디어',
    publishedYear: 2020
  },
  {
    id: '3',
    title: '모던 자바스크립트 Deep Dive',
    author: '이웅모',
    category: 'programming',
    status: '대출가능',
    description: '자바스크립트의 기본 개념과 동작 원리',
    publisher: '위키북스',
    publishedYear: 2020
  },
  {
    id: '4',
    title: '데이터베이스 첫걸음',
    author: '미크',
    category: 'database',
    status: '대출가능',
    description: 'DB 설계와 SQL 기초',
    publisher: '한빛미디어',
    publishedYear: 2016
  },
  {
    id: '5',
    title: '그림으로 공부하는 IT 인프라 구조',
    author: '야마자키 야스시',
    category: 'network',
    status: '대출중',
    description: '인프라 구조가 한 눈에 들어오는 입문서',
    publisher: '제이펍',
    publishedYear: 2019
  },
  {
    id: '6',
    title: '혼자 공부하는 머신러닝+딥러닝',
    author: '박해선',
    category: 'ai',
    status: '대출가능',
    description: '파이썬으로 배우는 머신러닝과 딥러닝 기초',
    publisher: '한빛미디어',
    publishedYear: 2020
  }
]

export const mockNotices = [
  {
    id: '04',
    title: '24-2 COMIT 활동 기간 및 주 차별 안내',
    createdAt: '2024-01-23',
    content: `
      <h2>2024-2학기 COMIT 활동 일정 안내</h2>
      <p>안녕하세요, COMIT 운영진입니다.</p>
      <p>2024-2학기 활동 일정을 안내드립니다.</p>
      <br>
      <h3>1. 활동 기간</h3>
      <ul>
        <li>시작: 2024년 9월 2일 (월)</li>
        <li>종료: 2024년 12월 13일 (금)</li>
      </ul>
      <br>
      <h3>2. 주차별 일정</h3>
      <ul>
        <li>1주차: 오리엔테이션 및 팀 빌딩</li>
        <li>2-12주차: 정규 활동</li>
        <li>13주차: 성과 발표회</li>
      </ul>
    `
  },
  {
    id: '03',
    title: '24-2 COMIT 세션, 스터디, 프로젝트 신청 안내',
    createdAt: '2024-01-23',
    content: `
      <h2>2024-2학기 활동 신청 안내</h2>
      <p>COMIT의 다양한 활동에 참여하실 수 있는 방법을 안내드립니다.</p>
      <br>
      <h3>1. 세션 신청</h3>
      <ul>
        <li>신청 기간: 2024.08.20 - 2024.08.31</li>
        <li>신청 방법: AMS 사이트 내 세션 탭에서 신청</li>
        <li>참고사항: 중복 신청 가능</li>
      </ul>
      <br>
      <h3>2. 스터디/프로젝트 신청</h3>
      <ul>
        <li>신청 기간: 2024.08.20 - 2024.09.10</li>
        <li>신청 방법: AMS 사이트 내 스터디/프로젝트 탭에서 신청</li>
        <li>참고사항: 최대 2개까지 참여 가능</li>
      </ul>
    `
  }
  // ... more notices
]

export interface WeeklyProgress {
  week: number
  title: string
  originalTitle?: string // 원래 계획된 제목
  status: 'completed' | 'current' | 'upcoming'
  description: string
  originalDescription?: string // 원래 계획된 설명
}

export const mockMyActivities = [
  {
    id: 'study1',
    title: '알고리즘 1D1P Challenge Season 3',
    type: 'study',
    level: 'medium',
    icon: '🏃',
    schedule: '매주 화요일 15:00-17:00',
    startDate: '2024-03-01',
    endDate: '2024-06-30',
    progress: 35,
    members: [
      { id: '1', name: '김코밋', isLeader: true },
      { id: '2', name: '이알고', isLeader: false },
      { id: '3', name: '박코딩', isLeader: false }
    ],
    currentWeek: 3,
    weeklyProgress: [
      {
        week: 1,
        title: '팀 빌딩 & OT',
        status: 'completed',
        description: '팀원 소개 및 스터디 목표 설정'
      },
      {
        week: 2,
        title: '그리디 알고리즘',
        status: 'completed',
        description: '그리디 알고리즘 개념 학습 및 백준 문제 풀이'
      },
      {
        week: 3,
        title: '그래프 탐색 기초',
        originalTitle: '동적 프로그래밍',
        status: 'current',
        description: 'DFS/BFS 기초 개념 학습',
        originalDescription: 'DP 기초 개념 및 Top-down/Bottom-up 접근법'
      },
      {
        week: 4,
        title: '동적 프로그래밍',
        originalTitle: 'DFS & BFS',
        status: 'upcoming',
        description: 'DP 기초 개념 및 실전 문제',
        originalDescription: '그래프 탐색 알고리즘 학습'
      },
      {
        week: 5,
        title: 'DFS & BFS',
        originalTitle: '이진 탐색',
        status: 'upcoming',
        description: '그래프 탐색 알고리즘 심화',
        originalDescription: '이진 탐색 및 매개 변수 탐색'
      },
      {
        week: 6,
        title: '최단 경로',
        status: 'upcoming',
        description: '다익스트라 & 플로이드-워셜 알고리즘'
      },
      {
        week: 7,
        title: '트리 알고리즘',
        status: 'upcoming',
        description: '트리의 기초 및 응용 문제'
      },
      {
        week: 8,
        title: '종합 문제 풀이',
        status: 'upcoming',
        description: '실전 대비 종합 문제 풀이'
      }
    ]
  },
  {
    id: 'session1',
    title: 'Git & GitHub 기초',
    type: 'session',
    level: 'easy',
    icon: '🌳',
    schedule: '매주 목요일 13:00-15:00',
    startDate: '2024-03-01',
    endDate: '2024-04-30',
    progress: 25,
    members: [
      { id: '1', name: '최깃헙', isLeader: true },
      { id: '2', name: '김코밋', isLeader: false },
      { id: '4', name: '정버전', isLeader: false }
    ],
    currentWeek: 3,
    weeklyProgress: [
      {
        week: 1,
        title: 'Git 기초',
        status: 'completed',
        description: 'Git 설치 및 기본 명령어'
      },
      {
        week: 2,
        title: 'Branch & Merge',
        status: 'completed',
        description: '브랜치 전략과 병합 방법'
      },
      {
        week: 3,
        title: 'GitHub 협업',
        status: 'current',
        description: 'Pull Request와 Code Review'
      },
      {
        week: 4,
        title: 'Git Flow',
        status: 'upcoming',
        description: 'Git Flow 브랜치 전략'
      },
      {
        week: 5,
        title: 'Reset & Rebase',
        status: 'upcoming',
        description: '커밋 관리와 이력 정리'
      },
      {
        week: 6,
        title: 'GitHub Actions',
        status: 'upcoming',
        description: 'CI/CD 파이프라인 구축'
      },
      {
        week: 7,
        title: 'GitHub Pages',
        status: 'upcoming',
        description: '정적 웹사이트 배포'
      },
      {
        week: 8,
        title: '실전 프로젝트',
        status: 'upcoming',
        description: '배운 내용 종합 실습'
      }
    ]
  }
]

export const mockPosts = [
  {
    id: 'p1',
    activityId: 'study1',
    author: '김코밋',
    date: '2024-03-15',
    content:
      '오늘 스터디에서는 DP 문제를 풀어보았습니다. 다들 수고하셨어요! 다음 주는 그리디 알고리즘을 다뤄볼 예정입니다.'
  },
  {
    id: 'p2',
    activityId: 'session1',
    author: '최깃헙',
    date: '2024-03-14',
    content: 'Git rebase와 merge의 차이점에 대해 설명한 좋은 자료를 공유합니다. [링크]'
  }
]

export const mockEvents = [
  {
    id: 1,
    title: 'React 스터디',
    start: '2024-03-20T14:00:00',
    end: '2024-03-20T16:00:00',
    type: 'study',
    color: '#4F46E5' // indigo-600
  },
  {
    id: 2,
    title: 'Spring Boot 세션',
    start: '2024-03-21T15:00:00',
    end: '2024-03-21T17:00:00',
    type: 'session',
    color: '#DC2626' // red-600
  },
  {
    id: 3,
    title: 'Algorithm 스터디',
    start: '2024-03-22T10:00:00',
    end: '2024-03-22T12:00:00',
    type: 'study',
    color: '#4F46E5'
  }
]
