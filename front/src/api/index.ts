import { RegData } from '@/containers/AuthPage/auth-model'
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:1337/api',
})

export const createUser = (data: RegData) => {
    return api.post('auth/local/register', { ...data })
}
