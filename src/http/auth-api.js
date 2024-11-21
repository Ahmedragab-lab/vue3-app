import api from "./api"
// http://localhost:8000/sanctum/csrf-cookie
export const csrfCookie = () => api.get('/sanctum/csrf-cookie')
// http://localhost:8000/auth/login
export const login = (credentials) => api.post('/auth/login',credentials)
// http://localhost:8000/auth/register
export const register = (user) => api.post('/auth/register',user)
// http://localhost:8000/auth/logout
export const logout = () => api.post('/auth/logout')
// http://localhost:8000/api/user
export const getUser = () => api.get('/api/user')
