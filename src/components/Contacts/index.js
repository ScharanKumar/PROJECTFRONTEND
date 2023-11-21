import {Component} from 'react'
import ContactItem from '../ContactItem'
import Header from "../Header"
import "./index.css"
import {v4 as uuidv4} from 'uuid'

class Contacts extends Component{
    state={there1:true,list1:[],name:"",number:""}

    fun=async(id)=>{
      const options1 = {
        method:"DELETE",
        headers: {
            "Content-Type": "application/json"
          }
    }
      const responsedata=await fetch(`https://projectcharan1.onrender.com/delete/contact/${id}`,options1) 
      const data = await responsedata.text()
      console.log(data)
      const options2 = {
        method:"GET",
        headers: {
            "Content-Type": "application/json"
          }
    }
      const responsedata1=await fetch("https://projectcharan1.onrender.com/contact/get/",options2) 
      const y = await responsedata1.json()
      this.setState({list1:y,there1:true,name:"",number:""})
    }

    add=async()=>{
      const {name,number}=this.state
      const id = uuidv4()
      if (name!=="" && number!==""){
          const data = {
            name,
            id,
              number
          }
          const options = {
              method:"POST",
              headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
          }
          const response=await fetch("https://projectcharan1.onrender.com/contact/post",options)
          const data1 = await response.text()
          console.log(data1)
          const options1 = {
            method:"GET",
            headers: {
                "Content-Type": "application/json"
              }
        }
          const responsedata=await fetch("https://projectcharan1.onrender.com/contact/get/",options1) 
          const y = await responsedata.json()
          this.setState({list1:y,there1:true,name:"",number:""})
    }
  }

  y=(event)=>{
    this.setState({name:event.target.value})
}
x=(event)=>{
    this.setState({number:event.target.value})
}
componentDidMount(){
  console.log("cdm")
  this.after()
}
after=async()=>{
  const options1 = {
    method:"GET",
    headers: {
        "Content-Type": "application/json"
      }
}
  const responsedata=await fetch("https://projectcharan1.onrender.com/contact/get/",options1) 
  const y = await responsedata.json()
  console.log(y)
  this.setState({list1:y})
}

    render(){
        const {there1,list1,name,number}=this.state
        return(
            <div className='container4'>
              <Header/>
              <h1 className='head4'>Contacts List</h1>
              

              <div className='box4'>
              <div className='x4'>
              <label htmlFor='name1'>Name</label>
              <input onChange={this.y} className='' id='name1' value={name} type='text' placeholder='Enter the contact name'/>
              </div>

              <div className='x4'>
              <label htmlFor='number'>Phone Number</label>
              <input onChange={this.x} id='number' value={number} type='text' placeholder='Enter the contact phone number'/>
              </div>

              <button className='but5' type='button' onClick={this.add}>Add</button>
              </div>
              
        
              {there1 && (
                <ul className='card4'>{
                    list1.map(every=>
                        (<ContactItem fun={this.fun} details={every} key={every.id}/>))
                }</ul>
              )}
            
            </div>
        )
    }
}

export default Contacts