// 1) Мокаем не axios, а наш http-модуль
jest.mock('../http');
import http from '../http';
import { login } from '../loginService';

// Приводим к типу Mocked, чтобы TS не ругался
const mockedHttp = http as jest.Mocked<typeof http>;

describe('loginService', () => {
  it('успешно возвращает токен', async () => {
    const mockResponse = {
      data: { token: 'fake-token' },
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };
    // Подмешиваем ответ в http.post
    mockedHttp.post.mockResolvedValue(mockResponse as any);

    const result = await login({ username: 'u', password: 'p' });
    expect(result.token).toBe('fake-token');

    // Проверяем, что вызов был корректен
    expect(mockedHttp.post).toHaveBeenCalledWith('/login', {
      username: 'u',
      password: 'p',
    });
  });

  it('бросает ошибку, если http.post отклоняется', async () => {
    mockedHttp.post.mockRejectedValue(new Error('Unauthorized'));
    await expect(
      login({ username: 'u', password: 'p' })
    ).rejects.toThrow('Unauthorized');
  });
});
