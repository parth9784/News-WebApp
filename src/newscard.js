import React from "react";
export default function Newscard({title,desc,url,at,by}){
    console.log(title);
    return(
        <div className="items-center w-[360px] min-h-[400px] mt-32 popr shadow-md rounded-lg overflow-hidden hover:bg-[#f9fdff]">
            <div>
                <img  className="h-[200px] w-full" src={url}/>
            </div>
            <div className="px-2">
            <h2 className="pops text-xl">{title}</h2>
            <h5 className="mt-1 text-sm">By {by} &nbsp;{at}</h5>
            <p className="mt-2">{desc}</p>
            </div>
        </div>
    );
}