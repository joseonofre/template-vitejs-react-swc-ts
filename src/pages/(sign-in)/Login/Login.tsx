import { useNavigate, useSearchParams } from "react-router-dom";
import { useLayout } from "@/context/UseLayout";

export default function LoginPage() {
    const navigate = useNavigate();
    const { login } = useLayout();

    const [search] = useSearchParams();

    function handleLogin() {
        const redirect = search.get('redirect') || '/'
        login('logado');
        navigate(redirect, { replace: true });
    }

    return (
        <div className="text-white space-y-5 text-center">
            <p>Login</p>
            <button
                className="bg-white px-5 py-2 rounded-lg text-blue-500"
                onClick={handleLogin}
            >
                <strong>Entrar</strong>
            </button>
        </div>
    )
}