import React  from "react";
import Newscard from "./newscard";
export default function Cardlist(){
    return(
        <div className="flex flex-wrap gap-3 px-7 justify-around">
            <Newscard/>
            <Newscard/>
            <Newscard/>
            <Newscard/>
            <Newscard/>
            <Newscard/>
        </div>
    );
}