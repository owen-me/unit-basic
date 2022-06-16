const UserService = require('../user_service');
const UserClient = require('../user_client');

jest.mock('../userClient');

describe('UserService', () => {
  const login = jest.fn(async () => 'success');

  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
    login.mockClear();
    UserClient.mockClear();
  });

  it('class login() on UserClient when tries to login', async () => {
    await userService.login('abc', 'abc');
    expect(login.mock.calls.length).toBe(1);
  });
});
