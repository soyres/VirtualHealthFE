export interface UserState {
    id: string;
    name: string;
    email: string;
    isAuthenticated: boolean;
    error?: string;
  }