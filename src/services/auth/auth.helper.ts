import { ITokens } from '@/store/user/user.intereface'
import { cookies } from 'next/headers'

export const getAccessToken = () => {
    const accessToken = cookies().get('accessToken')
    return accessToken || null
}

export const getRefreshToken = () => {
    const refreshToken = cookies().get('refreshToken')
    return refreshToken || null
}

export const getUserFromStorage = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    return user
}

export const saveTokensStorage = (data: ITokens) => {
    cookies().set('accessToken', data.accessToken)
    cookies().set('refreshToken', data.refreshToken)
}

export const removeToken = () => {
    cookies().delete('accessToken')
    cookies().delete('refreshToken')
    localStorage.removeItem('user')
}

export const saveToStorage = (data: any) => {
    const {user, accessToken, refreshToken} = data
    saveToStorage({accessToken, refreshToken})
    localStorage.setItem('user', JSON.stringify(user))
}