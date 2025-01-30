'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { mockMyActivities, mockPosts } from '@/lib/mockData';
import clsx from 'clsx';

export default function ActivityDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const activity = mockMyActivities.find(a => a.id === params.id);
  const [newPost, setNewPost] = useState('');
  const [showOriginalPlan, setShowOriginalPlan] = useState(false);

  if (!activity) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API 연동
    setNewPost('');
  };

  return (
    <div className="max-w-5xl mx-auto px-8 py-6">
      <button 
        onClick={() => router.back()}
        className="text-[13px] text-gray-500 hover:text-gray-700 mb-4"
      >
        ← 목록으로
      </button>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-3xl">{activity.icon}</span>
          <div>
            <h1 className="text-xl font-medium mb-2">{activity.title}</h1>
            <div className="flex gap-2 text-[13px] text-gray-500">
              <span>{activity.type === 'study' ? '스터디' : activity.type === 'project' ? '프로젝트' : '세션'}</span>
              <span>• {activity.schedule}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <h2 className="text-[15px] font-medium mb-2">팀원</h2>
            <div className="space-y-2">
              {activity.members.map((member) => (
                <div key={member.id} className="flex items-center gap-2 text-[13px]">
                  <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                    {member.name[0]}
                  </span>
                  <span>{member.name}</span>
                  {member.isLeader && (
                    <span className="text-xs text-primary">(리더)</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-[15px] font-medium mb-2">활동 정보</h2>
            <div className="space-y-1 text-[13px] text-gray-600">
              <p>난이도: {activity.level === 'easy' ? '초급' : activity.level === 'medium' ? '중급' : '고급'}</p>
              <p>시작일: {activity.startDate}</p>
              <p>종료일: {activity.endDate}</p>
              <p>진행률: {activity.progress}%</p>
            </div>
          </div>
        </div>

        <div className="border-t pt-4 mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-[14px] font-medium">주차별 진행상황</h2>
            <button
              onClick={() => setShowOriginalPlan(!showOriginalPlan)}
              className="text-[12px] text-primary hover:text-primary-dark"
            >
              {showOriginalPlan ? '실제 진행상황 보기' : '예정된 커리큘럼 보기'}
            </button>
          </div>
          
          <div className="space-y-2">
            {activity.weeklyProgress.map((week) => (
              <div
                key={week.week}
                className={clsx(
                  'p-3 rounded-lg border',
                  week.status === 'current' && 'border-primary bg-primary/5',
                  week.status === 'completed' && 'bg-gray-50'
                )}
              >
                <div className="flex items-start gap-3">
                  <div className="w-16 flex-shrink-0">
                    <span className="text-[12px] font-medium">
                      {week.week}주차
                    </span>
                  </div>
                  
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2 min-w-0">
                        <h3 className="text-[12px] font-medium truncate">
                          {showOriginalPlan ? week.originalTitle || week.title : week.title}
                        </h3>
                        {!showOriginalPlan && week.originalTitle && (
                          <span className="text-[11px] text-primary whitespace-nowrap">(수정됨)</span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
                        {!showOriginalPlan && (
                          <>
                            {week.status === 'completed' && (
                              <span className="text-[11px] text-green-800 bg-green-100 px-1.5 py-0.5 rounded-full">
                                완료
                              </span>
                            )}
                            {week.status === 'current' && (
                              <span className="text-[11px] text-white bg-primary px-1.5 py-0.5 rounded-full">
                                진행중
                              </span>
                            )}
                            {week.status === 'upcoming' && (
                              <span className="text-[11px] text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded-full">
                                예정
                              </span>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                    <p className="text-[11px] text-gray-600 line-clamp-1">
                      {showOriginalPlan ? week.originalDescription || week.description : week.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t pt-6">
          <h2 className="text-[15px] font-medium mb-4">게시판</h2>
          <form onSubmit={handleSubmit} className="mb-6">
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="팀원들과 공유할 내용을 작성해보세요"
              className="w-full px-4 py-3 border rounded-lg text-[13px] h-24 resize-none"
            />
            <div className="flex justify-end mt-2">
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded-lg text-[13px] hover:bg-primary-dark"
                onClick={() => alert('아직 클릭가능한 버튼이 아닙니다.')}
              >
                작성하기
              </button>
            </div>
          </form>

          <div className="space-y-4">
            {mockPosts.filter(post => post.activityId === activity.id).map((post) => (
              <div key={post.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-[13px]">
                      {post.author[0]}
                    </span>
                    <span className="text-[13px] font-medium">{post.author}</span>
                  </div>
                  <span className="text-[12px] text-gray-500">{post.date}</span>
                </div>
                <p className="text-[13px] text-gray-700">{post.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 