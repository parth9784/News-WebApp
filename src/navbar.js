import React from "react";
import Cardlist from "./cardlist";
import newslogorm from "./newslogorm.png"
export default function Navbar(){
    return(
        <div>
        <div className="flex justify-between items-center bg-[#f3faff] pops shadow-md mt-3 fixed top-[0] left-[0] right-[0] ">
            <a>
                <img src={newslogorm} className="w-[200px]" alt="logo"/>
            </a>
            <div className="">
            <ul className="flex gap-7">
                <li className="hover:text-[#577592] cursor-pointer ">Cricket</li>
                <li className="hover:text-[#577592] cursor-pointer ">Finance</li>
                <li className="hover:text-[#577592] cursor-pointer">Politics</li>
            </ul>
            </div>
            <div className="flex gap-4 pr-5 items-center popr">
            <div class="relative h-11 w-full min-w-[200px]">
                 <input placeholder="eg. Technology"
                        class="peer h-full w-[150px] border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    <label
                        class="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-[150px] select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Search
                    </label>
            </div>
                <button className="p-2 bg-blue-600 w-[70px] h-[40px] rounded text-center text-white hover:bg-blue-700">Search</button>
            </div>
        </div>
        <div className="mt-8">
        <Cardlist/>

        </div>
        </div>
    );
}