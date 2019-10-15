import React from 'react';
import './VideoItem.css';

const VideoDetails = (props) => {
    if(!props.selectedVideo){
        return <div></div>
    }

    const videoSrc = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`;

    return (
        <div className="video_selected">
            <div className="ui embed curved_border">
                <iframe title="Video Player" src={videoSrc} className="displayed_video"  width="560" height="349" />
            </div>
            <div className="ui segment">
                <div className="setWidth">
                    <h4>{props.selectedVideo.snippet.title}</h4>
                    <p>{props.selectedVideo.snippet.channelTitle}</p>
                </div>
            </div>
        </div>
    );
}

export default VideoDetails; 