import React from "react";
export default function Newscard(){
    return(
        <div className="items-center w-[360px] min-h-[400px] mt-32 popr shadow-md rounded-lg overflow-hidden hover:bg-[#f9fdff]">
            <div>
                <img  className="h-[200px] w-full" src="https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D"/>
            </div>
            <div className="px-2">
            <h2 className="pops text-xl">This is the title</h2>
            <h5 className="mt-1 text-sm">By Aaj TAK 2024-8-8</h5>
                <p className="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
        </div>
    );
}