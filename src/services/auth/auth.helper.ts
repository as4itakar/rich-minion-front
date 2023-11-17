import { ITokens } from '@/store/user/user.intereface'
import { cookies } from 'next/headers'

export const getTokens = () => {

}

export const saveTokensStorage = (data: ITokens) => {
    cookies().set('accessToken', data.accessToken)
    cookies().set('refreshToken', data.refreshToken)
}

export const removeToken = () => {
    cookies().delete('accessToken')
    cookies().delete('refreshToken')
}

export const saveToStorage = (data: any) => {
    const {user, accessToken, refreshToken} = data
    saveToStorage({accessToken, refreshToken})
    localStorage.setItem('user', JSON.stringify(user))
}