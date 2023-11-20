import { ITokens } from '@/store/user/user.intereface'
import Cookies from 'js-cookie'

export const getAccessToken = () => {
    const accessToken = Cookies.get('accessToken')
    return accessToken || null
}

export const getRefreshToken = () => {
    const refreshToken = Cookies.get('refreshToken')
    return refreshToken || null
}

export const getUserFromStorage = () => {
    const user = typeof window !== "undefined" && localStorage.getItem('user')
    return JSON.parse(user || '{}')
}

export const saveTokensStorage = (data: ITokens) => {
    Cookies.set('accessToken', data.accessToken)
    Cookies.set('refreshToken', data.refreshToken)
}

export const removeToken = () => {
    Cookies.remove('accessToken')
    Cookies.remove('refreshToken')
    typeof window !== "undefined" && localStorage.removeItem('user')
}

export const saveToStorage = (data: any) => {
    const {user, accessToken, refreshToken} = data
    saveTokensStorage({accessToken, refreshToken})
    typeof window !== "undefined" && localStorage.setItem('user', JSON.stringify(user))
}