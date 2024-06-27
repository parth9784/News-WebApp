import React from "react";
export default function Newscard({title,desc,url,at,urlto}){
    function handleclick(urlto){
        window.open(urlto,"_blank");
    }
    return(
        <div id="card" onClick={()=>{handleclick(urlto)}} className="items-center w-[360px] min-h-[400px] mt-32 popr shadow-md rounded-lg overflow-hidden hover:bg-[#f9fdff] cursor-pointer">
            <div>
                <img  className="h-[200px] w-full" src={url} alt="news"/>
            </div>
            <div className="px-2">
            <h2 className="pops text-xl">{title}</h2>
            <h5 className="mt-1 text-sm">By {at}</h5>
            <p className="mt-2">{desc}</p>
            </div>
        </div>
    );
}