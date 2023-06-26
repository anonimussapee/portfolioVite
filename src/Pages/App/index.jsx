import './App.css'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { Home } from '../Home'
import { NotFound } from '../NotFound'
import { NavBar } from '../../Components/NavBar'
import { ContextThemeProvider } from '../../Components/Context/themes'
import { Footer } from '../Footer'

const AppRoutes = () => {
  let routes = useRoutes([
    {path:'/', element : <Home/> },
    {path:'/home', element : <Home/> },
    {path:'/*', element : <NotFound/> },

  ])
  return routes 
}

function App() {

  return (

   <BrowserRouter>
   <ContextThemeProvider>
    <AppRoutes/>
    <NavBar/>
    <Footer/>
   </ContextThemeProvider>
   </BrowserRouter>
   
  )
}

export default App
