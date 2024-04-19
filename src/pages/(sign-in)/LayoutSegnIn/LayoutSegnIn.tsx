import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
const LoadingComponent = lazy(() => import("@/components/Loading/Loading"));

export default function LayoutSignIn() {
    return (
        <div className="flex flex-1 justify-center items-center bg-blue-500">
            <Suspense fallback={<LoadingComponent />}>
                <Outlet />
            </Suspense>
        </div>
    )
}