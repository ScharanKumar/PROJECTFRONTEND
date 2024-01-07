import {Component} from 'react'
import Cookies from "js-cookie"
import "./index.css"

class Login extends Component{
    state={username:"",password:"",showSubmitError: false,
    errorMsg: ''}
    y=(event)=>{
        this.setState({username:event.target.value})
    }
    x=(event)=>{
        this.setState({password:event.target.value})
    }
    reg=()=>{
        const {history}=this.props
        history.replace("/register")
    }
    onSubmitSuccess = jwtToken => {
        const {history} = this.props
    
        Cookies.set('jwt_token', jwtToken, {expires: 30})
        this.setState({showSubmitError: false, errorMsg:""})
        history.replace('/')
      }
    
      onSubmitFailure = errorMsg => {
        this.setState({showSubmitError: true, errorMsg})
      }
    log=async()=>{
        const {username,password}=this.state
        if (username!=="" && password!==""){
            const data = {
                username,
                password
            }

            const options = {
              method: "POST",
              headers: {
                 "Content-Type": "application/json",
                 Accept: "application/json",
              },
              body: JSON.stringify(data),      
            };

            // const options = {
            //     method:"POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //       },
            //       body: JSON.stringify(data)
            // }
            const response=await fetch("https://projectcharan1.onrender.com/login",options)
            console.log(response)
           
            if (response.ok === true) {
                const resdata = await response.json()
                console.log(resdata)
                this.onSubmitSuccess(resdata.jwt_token)
              } else {
                const resdata1 = await response.text()
                console.log(resdata1)
                this.onSubmitFailure(resdata1)
              }
        }
    }
    render(){
        const {username,password,showSubmitError,errorMsg}=this.state
        return(
           <div className='container1'>
            <div>
            <img src='https://developers.line.biz/assets/img/products/line-login/p3.svg' alt='imm' className='img1' />
            </div>
              
              <div className='box1'>
                <h1>LOGIN</h1>
                <div className='x1'>
                <label htmlFor="user">Username</label>
                <input value={username} onChange={this.y} id='user' type="text" placeholder='Enter the username'/>
                </div>
                
                <br/>

                <div className='x1'>
                <label htmlFor="pass">Password</label>
                <input value={password} onChange={this.x} id='pass' type="password" placeholder='Password'/>
                </div>

                <div>
                <button onClick={this.log} className='but1' type='button' >Login</button>
                <button onClick={this.reg} className='but2' type='button' >Register</button>
                </div>
                {showSubmitError && <p className="error-message">*{errorMsg}</p>}
                
                
              </div>
           </div>
        )
    }
} 

export default Login