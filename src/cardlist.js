import React  from "react";
import Newscard from "./newscard";
export default function Cardlist({detail}){
    console.log(detail)
    return(
        <div className="flex flex-wrap gap-3 px-7 justify-around">
          {
            detail.map((i)=>{
                return <Newscard url={i.urlToImage} desc={i.description} title={i.title} by={i.author} at={i.source.name} />
            })
        }
        </div>
    );
}