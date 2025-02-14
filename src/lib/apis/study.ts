import { ApiResponse, Study } from '@/types/type'
import { baseUrl } from '../constants'


export const getStudyList = async () => {
  const response = await fetch(`${baseUrl}/studies`)
  const data: ApiResponse<Study[]> = await response.json()
  return data
}

export interface GetStudyDetailRequest {
  studyId: number
}

export const getStudyDetail = async ({ studyId }: GetStudyDetailRequest) => {
  const response = await fetch(`${baseUrl}/studies/${studyId}`)
  const data: ApiResponse<Study> = await response.json()
  return data
}
