import {
    useContext,
    createContext,
    useState,
    Suspense,
} from 'react';
import { Outlet } from 'react-router-dom';
import LoadingComponent from '@/components/Loading/Loading';

interface LayoutProps {
    token?: string;
    user?: any;
    fullLoading: boolean;
    setToken: (value: string) => void;
    setUser: (user: any) => void;
    setFullLoading: (value: boolean) => void;
    login: (token: string) => void;
    logout: () => void;
}

const layoutContext = createContext({} as LayoutProps);

export const useLayout = (): LayoutProps => {
    return useContext(layoutContext);
};

function useProvideLayout(): LayoutProps {
    const [fullLoading, setFullLoading] = useState(false);
    const [token, setToken] = useState<string | undefined>(window?.localStorage?.getItem('token') || '');
    const [user, setUser] = useState();

    function login(token: string) {
        window?.localStorage?.setItem('token', token);
        setToken(token);
    }

    function logout() {
        window?.localStorage?.removeItem('token');
        setToken(undefined);
    }

    return {
        token,
        user,
        fullLoading,
        setToken,
        setUser,
        setFullLoading,
        login,
        logout
    }
}
const ProvideLayout: any = () => {
    const layout: LayoutProps = useProvideLayout();
    return (
        <layoutContext.Provider value={layout}>
            <Suspense fallback={<LoadingComponent />}>
                <Outlet />
            </Suspense>
        </layoutContext.Provider>
    );
};

export default ProvideLayout;