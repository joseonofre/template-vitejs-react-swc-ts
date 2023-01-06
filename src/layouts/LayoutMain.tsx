import { lazy } from "react";
import { Outlet } from "react-router-dom";
const HeaderMain = lazy(() => import("../components/HeaderMain"));
const FooterMain = lazy(() => import("../components/FooterMain"));

export default function LayoutMain() {
    return (
        <>
            <HeaderMain />
            <main><Outlet /></main>
            <FooterMain />
        </>
    )
}