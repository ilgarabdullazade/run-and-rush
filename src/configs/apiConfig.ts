export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api`

export const getAuthUrl = (string: string) => `/auth${string}`
export const getUsersUrl = (string: string) => `/users${string}`
export const getAccountUrl = (string: string) => `/account${string}`
export const getReferralUrl = (string: string) => `/referral${string}`
export const getSneakersUrl = (string: string) => `/sneaker${string}`
