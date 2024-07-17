import React  from "react";
import Newscard from "./newscard";
function formatISODate(isoDateString) {
    const date = new Date(isoDateString);

    // Format the date and time into a human-readable string
    const formattedDate = date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    });

    return formattedDate;
}
export default function Cardlist({detail}){
    return(
        <div className="flex flex-wrap gap-3 px-7 justify-around">
        {detail.map((i, index) => {
            if((i.urlToImage)){
                return (
          <Newscard
            url={i.urlToImage}
            desc={i.description}
            title={i.title}
            at={i.source.name}
            by={formatISODate(i.publishedAt)}
            urlto={i.url}
          />
        );
            }
       
      })}

        </div>
    );
}