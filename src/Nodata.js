import React from "react";
export default function NotFound(){
    return (
        <div className="flex flex-wrap  justify-center items-center">
            <lottie-player src="https://lottie.host/9a7e23a1-0fce-41e7-8f21-d93fd3071cb3/VSMMJtXM93.json" background="##FFFFFF" speed="1" style={{width: "500px", height: "500px"}} loop autoplay direction="1" mode="normal"></lottie-player>
            <div className="h-[300px] w-[400px] pops flex justify-center items-center">
                <p>Unfortunately, we couldn't find any articles matching your search criteria. Please try adjusting your search terms or check back later for updates. We strive to bring you the latest news and stories, so if you're having trouble, feel free to reach out to our support team for assistance. Thank you for your understanding.</p>
            </div>
        </div>
    );
}