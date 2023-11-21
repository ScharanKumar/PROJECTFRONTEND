import {Component} from 'react'
import TodoItem from '../TodoItem'
import Header from "../Header"
import "./index.css"
import {v4 as uuidv4} from 'uuid'

class Todolist extends Component{
    state={there1:true,list1:[],heading:"",description:""}
    fun=async(id)=>{
      const options1 = {
        method:"DELETE",
        headers: {
            "Content-Type": "application/json"
          }
    }
      const responsedata=await fetch(`https://projectcharan1.onrender.com/delete/todo/${id}`,options1) 
      const data = await responsedata.text()
      console.log(data)
      const options2 = {
        method:"GET",
        headers: {
            "Content-Type": "application/json"
          }
    }
      const responsedata1=await fetch("https://projectcharan1.onrender.com/todo/get/",options2) 
      const y = await responsedata1.json()
      this.setState({list1:y,there1:true,heading:"",description:""})
    }
    add=async()=>{
      const {heading,description}=this.state
      const id = uuidv4()
      if (heading!=="" && description!==""){
          const data = {
            id,
              heading,
              description
          }
          const options = {
              method:"POST",
              headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
          }
          const response=await fetch("https://projectcharan1.onrender.com/todo/post",options)
          const data1 = await response.text()
          console.log(data1)
          const options1 = {
            method:"GET",
            headers: {
                "Content-Type": "application/json"
              }
        }
          const responsedata=await fetch("https://projectcharan1.onrender.com/todo/get/",options1) 
          const y = await responsedata.json()
          this.setState({list1:y,there1:true,heading:"",description:""})
    }
  }
    y=(event)=>{
      this.setState({description:event.target.value})
  }
  x=(event)=>{
      this.setState({heading:event.target.value})
  }
  componentDidMount(){
    this.after()
  }
  after=async()=>{
    const options1 = {
      method:"GET",
      headers: {
          "Content-Type": "application/json"
        }
  }
    const responsedata=await fetch("https://projectcharan1.onrender.com/todo/get/",options1) 
    const y = await responsedata.json()
    this.setState({list1:y})
  }
    render(){
        const {there1,list1,heading,description}=this.state
        return(
            <div className='container3'>
              <Header/>
              <h1 className='head3'>Todo List</h1>

              <div className='box3'>
              <div className='x3'>
              <label htmlFor='todo'>Heading</label>
              <input onChange={this.x} className='' id='todo' value={heading} type='text' placeholder='Enter the todo heading'/>
              </div>

              <div className='x3'>
              <label htmlFor='todo'>Description</label>
              <input onChange={this.y} id='todo' value={description} type='text' placeholder='Enter the todo description'/>
              </div>

              <button className='but4' type='button' onClick={this.add}>Add</button>
              </div>
              
        
              {there1 && (
                <ul className='card3'>{
                    list1.map(every=>
                        (<TodoItem fun={this.fun} details={every} key={every.id}/>))
                }</ul>
              )}
            
            </div>
        )
    }
}

export default Todolist