import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    function handleClick() {
         window.location.reload();
    }

    return (
        <div className="flex flex-wrap justify-center items-center">
            <lottie-player
                src="https://lottie.host/9a7e23a1-0fce-41e7-8f21-d93fd3071cb3/VSMMJtXM93.json"
                background="##FFFFFF"
                speed="1"
                style={{ width: "500px", height: "500px" }}
                loop
                autoplay
                direction="1"
                mode="normal"
            ></lottie-player>
            <div className="flex flex-col">
            <div className="h-[300px] w-[400px] pops flex justify-center items-center">
                <p>
                    Unfortunately, we couldn't find any articles matching your search criteria.
                    Please try adjusting your search terms or check back later for updates. We strive to
                    bring you the latest news and stories, so if you're having trouble, feel free to
                    reach out to our support team for assistance. Thank you for your understanding.
                </p>
            </div>
            <button
                type="button"
                onClick={handleClick}
                className="text-white  bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
            >
                Home Page
            </button>
            </div>
        </div>
    );
}
