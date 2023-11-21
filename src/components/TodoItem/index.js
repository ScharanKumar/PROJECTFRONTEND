const TodoItem=(props)=>{
    const {details,fun}=props
    const {heading,description,id}=details
    const x=()=>{
       fun(id)
    }
   return(
       <div>
        <h1>{heading}</h1>
        <p>{description}</p>
        <button type="button" onClick={x}>DELETE</button>
       </div>
   )
}
export default TodoItem