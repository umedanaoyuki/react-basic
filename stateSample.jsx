
import React, { useState } from "react";


const LikeButton = () => {

const [liked, setLiked] = useState(false);

const toggleLiked = () => setLiked(!liked);

return (
    
        <button onClick={toggleLiked}>{liked ? "いいね済" : "いいね前"}</button>
    );
}