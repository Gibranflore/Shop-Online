import type { User } from '@/interface/user.interface'
import { create } from 'zustand'
import { loginAction } from '../action/LoginAction';
import { checkAcutAction } from '../action/check-auth.actions';

type AuthStatus = 'authenticated' | 'not-authenticated' | 'checking';

interface AuthState {
//Porperties
user: User | null,
token: string | null,
authStatus: AuthStatus
//Getters
isAdmin: () => boolean;
//Actions
login: (email: string, password: string) => Promise<boolean>
logout: () => void;
checkAuthStatus: () => Promise<boolean>;
};

export const useAuthStore = create<AuthState>()((set, get) => ({
    //Implementacion del Store
    user: null,
    token: null,
    authStatus: 'checking',

    //Getters
    isAdmin: () => {
        const roles = get().user?.roles || [];

        return roles.includes('admin');
    },
    //Actiions
    login: async(email: string, password:string) => {
        console.log({email, password});

        try {
            const data = await loginAction(email, password)
            localStorage.setItem('token', data.token)

            set({user: data.user, token: data.token, authStatus: 'authenticated'})
            return true;
        } catch (error) {
            localStorage.removeItem('toekn')
            set({user: null, token: null, authStatus: 'not-authenticated'})
            return false;
            
        }
        
    },
    logout: () => {
        localStorage.removeItem('token')
        set({user: null, token: null, authStatus: 'not-authenticated'})
    },


    checkAuthStatus: async() => {
        try {
            const {user, token} = await checkAcutAction();
            set({user: user, token: token, authStatus: 'authenticated'})
            return true
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            set({user: undefined, token: undefined, authStatus: 'not-authenticated'})
            return false
        }
    }
}));
//   count: number
//   increment: () => void
//   decrement: () => void
//   reset: () => void
//   setCount: (newCount: number) => void


//   count: 0,
//   increment: () => set((state) => ({ count: state.count + 1 })),
//   decrement: () => set((state) => ({ count: state.count - 1 })),
//   reset: () => set({ count: 0 }),
//   setCount: (newCount) => set({ count: newCount }),