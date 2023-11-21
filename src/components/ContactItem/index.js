const ContactItem=(props)=>{
    const {details,fun}=props
    const {name,number,id}=details
    const x=()=>{
       fun(id)
    }
   return(
       <div>
        <h1>{name}</h1>
        <p>{number}</p>
        <button type="button" onClick={x}>DELETE</button>
       </div>
   )
}
export default ContactItem