import './App.css'
import DashBoard from './Components/DashBoard'
import Cart from './Components/Cart'
import { Provider } from 'react-redux'
import store from './Components/store/store'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NavBar from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
 
  
    
  return (
    <>
   <Provider store={store}>
     <Router>
     <NavBar/>
          <Routes>
               <Route path='/' element={<DashBoard/>}></Route>
               <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
     </Router>
     </Provider>
    </>   
  
  )
}

export default App
