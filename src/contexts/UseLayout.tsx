import {
    useContext,
    createContext,
    useState,
} from 'react';

interface LayoutProps {
    fullLoading: boolean;
    setFullLoading: (value: boolean) => void;
}

const layoutContext = createContext({} as LayoutProps);

export const useLayout = (): LayoutProps => {
    return useContext(layoutContext);
};

function useProvideLayout(): LayoutProps {
    const [fullLoading, setFullLoading] = useState(false);
    return {
        fullLoading,
        setFullLoading
    }
}
const ProvideLayout: any = ({ children }: any) => {
    const layout: LayoutProps = useProvideLayout();
    return (
        <layoutContext.Provider value={layout}>{children}</layoutContext.Provider>
    );
};

export default ProvideLayout;