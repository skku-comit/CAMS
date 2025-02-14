import { ApiResponse, UserProfile } from '@/types/type'
import { baseUrl } from '../constants'

export const getStaffProfile = async () => {
  const response = await fetch(`${baseUrl}/staffs`)
  const data: ApiResponse<UserProfile[]> = await response.json()
  return data
}
