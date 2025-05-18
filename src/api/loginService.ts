import http from './http';

interface LoginPayload { username: string; password: string; }
interface LoginResponse { token: string; }

export async function login(payload: LoginPayload): Promise<LoginResponse> {
  const { data } = await http.post<LoginResponse>('/login', payload);
  return data;
}
