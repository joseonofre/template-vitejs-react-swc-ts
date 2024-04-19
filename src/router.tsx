import { Navigate, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import ProvideLayout, { useLayout } from "@/context/UseLayout";
import { lazy } from "react";
const LoginPage = lazy(() => import("@/pages/(sign-in)/Login/Login"));
const HomePage = lazy(() => import("@/pages/(signed)/Home/Home"));
const LayoutSignIn = lazy(() => import("@/pages/(sign-in)/LayoutSegnIn/LayoutSegnIn"));
const LayoutSigned = lazy(() => import("@/pages/(signed)/LayoutSigned/LayoutSigned"));
const AboutPage = lazy(() => import("@/pages/(signed)/About/About"));
const LoadingComponent = lazy(() => import("@/components/Loading/Loading"));

function ProtectedLoader() {
    const { token } = useLayout();
    if (!!token) {
        return <Outlet />
    } else {
        let params = new URLSearchParams();
        const path = new URL(window?.location?.href).pathname;
        if (path != '/') {
            params.set("redirect", new URL(window?.location?.href).pathname);
        }
        return <Navigate to={`/login?${params.toString()}`} replace={true} />
    }
}

const RouterConfig = createBrowserRouter([
    {
        path: "/",
        Component: ProvideLayout,
        children: [
            /* 
            * Páginas logadas
            */
            {
                path: '/',
                Component: ProtectedLoader,
                children: [
                    {
                        path: '/',
                        Component: LayoutSigned,
                        children: [
                            {
                                path: '/',
                                Component: HomePage,
                            },
                            {
                                path: '/sobre',
                                Component: AboutPage,
                            }
                        ]
                    }
                ]
            },
            /* 
            * Páginas que não estão logadas
            */
            {
                path: '/',
                Component: LayoutSignIn,
                children: [
                    {
                        path: '/login',
                        Component: LoginPage
                    },
                ]
            },
        ]
    },
]);

export default function Router() {
    return (
        <RouterProvider router={RouterConfig} fallbackElement={<LoadingComponent />} />
    )
}