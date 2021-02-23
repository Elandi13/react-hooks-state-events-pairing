import video from "../data/video.js";
import VideoDisplay from "./VideoDisplay.js";
import Comments from "./Comments"

console.log(video.title)

function App() {
  // console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoDisplay video={video}/>
      {/* <hr> */}
      <Comments comments ={video.comments}/>
    </div>
  );
}

export default App;

