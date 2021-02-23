 import React, {useState} from "react"
 
function VideoDisplay({video}){

    const [upvotes, setUpVotes] = useState(video.upvotes)
    const [downvotes, setDownvotes] = useState(video.downvotes)

    console.log(video.downvotes)

    function handleDownvote(){
        setDownvotes(downvotes + 1)
    }
    
    
    function handleUpvote(){
        setUpVotes(upvotes + 1 )
    }

    return(
     <div>

        <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameborder="0"
        allowfullscreen
        title={video.title}
        />
        <h1> {video.title} </h1>
        <p> {video.views} Views | {video.createdAt}</p>

       
       {/* <div> */}
        <button onClick={handleUpvote}>{upvotes} 👍 </button>
        <button onClick={handleDownvote}>{downvotes} 👎 </button>
       {/* </div> */}

     </div>
    )
    
     
}


export default VideoDisplay; 