import "./index.css"
import HomeItem from "../HomeItem"
import Header from "../Header"
const list1=[
    {   
        id:1,
        name:"HTML",
        descrition :"HTML stands for HyperText Markup Language. It is used to design the web pages. With the help of HTML, you can create a complete website structure. HTML is the combination of Hypertext and Markup language. Hypertext defines the link between the web pages and markup language defines the text document within the tag that define the structure of web pages.",
        url: "https://w7.pngwing.com/pngs/363/9/png-transparent-html-computer-icons-html-css-angle-text-logo-thumbnail.png"
    },
    {   
        id:2,
        name:"CSS",
        descrition :"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.[2]",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
    },
    {   
        id:2,
        name:"JAVASCRIPT",
        descrition :"JavaScript (JS) is the most popular lightweight, interpreted compiled programming language. It can be used for both Client-side as well as Server-side developments. JavaScript also known as a scripting language for web pages. ",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png"
    }
]

const Home = ()=>{
     return (
        // <div className="cont">
           <div className="homecon">
              <Header/>
            <ul className="cont0">
                {
                    list1.map(every=>
                        (<HomeItem details={every} key={every.id}/>)
                        )
                }
            </ul>
        </div>
     )
}

export default Home

// https://projectcharan1.onrender.com/