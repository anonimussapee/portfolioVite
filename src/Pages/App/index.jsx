import './App.css'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { Home } from '../Home'
import { NotFound } from '../NotFound'
import { NavBar } from '../../Components/NavBar'
import { ContextThemeProvider } from '../../Components/Context/themes'
import { Footer } from '../Footer'
import { Layout } from '../../Components/Layout'
import { Thanks } from '../Thanks'
import { Projects } from '../Projects'
import { Satelite } from '../Satelite'

const AppRoutes = () => {
  let routes = useRoutes([
    {path:'/', element : <Home/> },
    {path:'/home', element : <Home/> },
    {path:'/*', element : <NotFound/> },
    {path:'/thanks', element : <Thanks/> },
    {path:'/proyectos', element : <Projects/> },
    {path:'/projects', element : <Projects/> },
    {path:'/satelite', element : <Satelite/> },
  ])
  return routes 
}

function App() {

  return (

   <BrowserRouter>
    <ContextThemeProvider>
        <Layout>
          <AppRoutes/>
        </Layout>
        <NavBar/>
        <Footer/>
    </ContextThemeProvider>
   </BrowserRouter>
   
  )
}

export default App
