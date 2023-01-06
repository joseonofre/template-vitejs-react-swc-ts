import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/main.scss'
import ProvideLayout from './contexts/UseLayout';
const Routes = lazy(() => import('./routes'));

function Splash() {
  return (
    <div className='w-screen h-screen bg-azul-1 flex justify-center items-center text-white'>
      Carregando...
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<Splash />}>
      <ProvideLayout>
        <Routes />
      </ProvideLayout>
    </Suspense>
  </React.StrictMode>,
)
