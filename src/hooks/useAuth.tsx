interface IUseAuth {
  getUser: () => any;
  updateUser: (user: any) => void;
  refreshToken: () => void;
  logout: () => void;
}

export const STORAGE_AUTH_USER_KEY = "STORAGE_AUTH_USER";

/**
 * Authorized user information and functions for manipulate that data.
 * This information should save in global store.
 * This hook is a basic example
 */
export const useAuth = (): IUseAuth => {

  const getUser = () => {
    const user = localStorage.getItem(STORAGE_AUTH_USER_KEY);
     return user
       ? JSON.parse(user)
       : null
  };

  const updateUser = (user: any) => {
    localStorage.setItem(STORAGE_AUTH_USER_KEY, JSON.stringify(user));
  };

  const refreshToken = () => {
    // refresh user token and update on store
  };

  const logout = () => {
    // remove user credentials from storages etc.

    localStorage.removeItem(STORAGE_AUTH_USER_KEY);
  };

  return {
    updateUser,
    refreshToken,
    logout,
    getUser
  };
};