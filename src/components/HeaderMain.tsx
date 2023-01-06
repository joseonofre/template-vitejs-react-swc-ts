import { Link } from "react-router-dom";

export default function HeaderMain() {
    return (
        <>
            <header className="bg-azul-1 text-center py-5 text-white">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <Link to="/" className="px-5 py-3 bg-white text-azul-1">
                            Logo
                        </Link>
                        <ul className="flex space-x-5">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/sobre">Sobre</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}