import { Route, Switch} from "react-router-dom"

import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/Home"
import Contacts from "./components/Contacts"
import Todolist from "./components/Todolist"
import ProtectedRoute from "./components/ProtectedRoute"

const App=()=>{
    return(
      // <BrowserRouter>
         <Switch>
             <Route exact path="/login" component={Login}/>
             <Route exact path="/register" component={Register}/>
             <ProtectedRoute exact path="/" component={Home}/>
             <ProtectedRoute exact path="/contacts" component={Contacts}/>
             <ProtectedRoute exact path="/todolist" component={Todolist}/>
         </Switch>
      // </BrowserRouter>
    )
}

export default App