import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import "./index.css"
const Header=(props)=>{
    const {history} = props
    const x=()=>{
        Cookies.remove('jwt_token')
        history.replace('/login')
    }
   return (
    <ul className='headercon'>
        <li className='headerli'>
        <Link className="headerx" to="/contacts">CONTACTS</Link>
    </li>
    <li className='headerli'>
    <Link className="headerx" to="/todolist">TODOLIST</Link>
    </li>
    <li className='headerli'>
        <Link className="headerx" to="/">HOME</Link>
    </li>
    <button type='button' className='headerBut' onClick={x}>Log Out</button>

    </ul>
    
   )
}
export default withRouter(Header)