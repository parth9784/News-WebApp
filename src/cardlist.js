import React  from "react";
import Newscard from "./newscard";
export default function Cardlist({detail}){
    // console.log(detail)

    return(
        <div className="flex flex-wrap gap-3 px-7 justify-around">
          {
            detail.map((i)=>{
                if(!i.urlToImage){return}
                return <Newscard url={i.urlToImage} desc={i.description} title={i.title} at={i.source.name} urlto={i.url} />
            })
        }
        </div>
    );
}