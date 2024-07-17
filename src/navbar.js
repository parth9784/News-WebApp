import React from "react";
import { useEffect, useState } from "react";
import Cardlist from "./cardlist";
import newslogorm from "./newslogorm.png"
import Newsdata from "./Newsdata";
import Loading from "./loading";
import NotFound from "./Nodata";
import { Link } from 'react-router-dom';
export default function Navbar(){
  const [alldata1, upalldata] = useState([]);
  const [q, upq] = useState("India");
  const[loading,uploading]=useState(true);

  useEffect(() => {
    const fetchData = async () => { 
      const response = await Newsdata(q);
      // console.log(response.data)
        upalldata(response.data);
        uploading(false);
    }
    fetchData();
  }, [q]);

  const handleNav = (category) => {
    upq(category);
  };
  const handlesearch= ()=>{
    let sq=document.getElementById("searchbox").value
    if(sq.length==0){}
    else{
      upq(sq);
    }
    
  }

    if(loading){
        return <Loading/>
    }
    if(alldata1.length===0){
        return <NotFound/>
    }


  return (
    <div>
      <div className=" Nav max-[663px]:flex max-[663px]:flex-col flex justify-between items-center flex-wrap bg-[#f3faff] pops shadow-md mt-3 fixed top-[0] left-[0] right-[0] mt-3 ">
        <Link to={"/"}>
          <img  src={newslogorm} className="w-[200px]" alt="logo" />
        </Link>
        <div className="">
          <ul className="flex gap-7">
            <li onClick={() => handleNav("Cricket")} className="hover:text-[#577592] cursor-pointer">Cricket</li>
            <li onClick={() => handleNav("Finance")} className="hover:text-[#577592] cursor-pointer">Finance</li>
            <li onClick={() => handleNav("Politics")} className="hover:text-[#577592] cursor-pointer">Politics</li>
          </ul>
        </div>
        <div className=" Search flex md:gap-2 pr-5 items-center popr mt-2 ml-2 max-[663px]:flex max-[663px]:flex-col max-[663px]:mt-6  ">
          <div className=" relative h-11 w-full min-w-[200px]">
            <input id="searchbox" placeholder="eg. Technology"
                   className=" max-[663px]:self-center peer h-full w-[95px] sm:w-[120px] md:w-[135px] border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
            <label
              className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-[150px] select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Search
            </label>
          </div>
          <button onClick={handlesearch} className="p-2 max-[663px]:h-[50px] bg-blue-600 w-[70px] h-[40px] rounded text-center text-white hover:bg-blue-700">Search</button>
        </div>
      </div>
      <div className="mt-8 max-[663px]:flex max-[663px]:flex-col ">
        <Cardlist detail={alldata1} />
      </div>
    </div>
  );
}