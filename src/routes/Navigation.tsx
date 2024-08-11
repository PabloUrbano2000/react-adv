import { Suspense } from 'react'

import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes
} from 'react-router-dom'

import logo from '../logo.svg'
import { routes } from './routes'

export const Navigation = () => {
  return (
    <Suspense fallback={<h1>Cargando...</h1>}>
      <BrowserRouter>
        <div className='main-layout'>
          <nav>
            <img src={logo} alt='React Logo' />
            <ul>
              {routes.map((route) => (
                <li key={route.to}>
                  <NavLink
                    to={route.to}
                    className={({ isActive }) => (isActive ? 'nav-active' : '')}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.Component />}
              />
            ))}

            <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}
