import { Link } from "react-router-dom";
import { useLayout } from "@/context/UseLayout";

export default function HeaderSigned() {
    const { logout } = useLayout();
    return (
        <header className="bg-blue-500 text-white">
            <nav className="container flex">
                <ul className="flex gap-5 flex-1">
                    <li><Link to={'/'} className="block py-2 px-3">Home</Link></li>
                    <li><Link to={'/sobre'} className="block py-2 px-3">Sobre</Link></li>
                </ul>
                <button onClick={logout}>Sair</button>
            </nav>
        </header>
    )
}