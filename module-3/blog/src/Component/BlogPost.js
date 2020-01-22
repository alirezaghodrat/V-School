import React from "react"

function BlogPost(props){
    console.log(props)
    return(
        <div>
             <h1 className="h1">{props.arry.title}</h1>
             <p className="p"> {props.arry.subTitle}</p>
             <h6 className="h6">{props.arry.author} {props.arry.date}</h6>
             <hr />
        </div>
    )
}

export default BlogPost