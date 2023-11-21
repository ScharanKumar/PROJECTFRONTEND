import {Component} from 'react'
import ContactItem from '../ContactItem'
import Header from "../Header"
import "./index.css"

class Contacts extends Component{
    state={there1:false,list1:[],contactn:"",contactp:""}
    add=()=>{

    }
    render(){
        const {there1,list1,contactn,contactp}=this.state
        return(
            <div className='container4'>
              <Header/>
              <h1 className='head4'>Contacts List</h1>
              

              <div className='box4'>
              <div className='x4'>
              <label htmlFor='name1'>Name</label>
              <input className='' id='name1' value={contactn} type='text' placeholder='Enter the contact name'/>
              </div>

              <div className='x4'>
              <label htmlFor='number'>Phone Number</label>
              <input id='number' value={contactp} type='text' placeholder='Enter the contact phone number'/>
              </div>

              <button className='but5' type='button' onClick={this.add}>Add</button>
              </div>
              
        
              {there1 && (
                <ul className='card4'>{
                    list1.map(every=>
                        (<ContactItem details={every} key={every.id}/>))
                }</ul>
              )}
            
            </div>
        )
    }
}

export default Contacts