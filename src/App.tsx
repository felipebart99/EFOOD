import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import { GlobalCss } from './styles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
