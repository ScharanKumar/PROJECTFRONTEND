import "./index.css"

const HomeItem=(props)=>{
    const {details}=props
    const {name,descrition,url}=details
   return (
    <li className="container0">
         <h1 className="head0">{name}</h1>
         <p className="para0">{descrition}</p>
         <img className="img0" src={url} alt="imageHome"/>
    </li>
   )
}
export default HomeItem