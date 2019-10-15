import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    const renderedList = props.videosList.map((video) => {
        return <VideoItem singleVideo={video} key={video.id.videoId} vidKey={video.id.videoId} onVideoClick={props.onVideoClick} scrollToTop={props.scrollToTop} videoClickColor={props.videoClickColor}/>;
    });

    return (
        <div className="video_list">
            {renderedList}
        </div>
    );
}

export default VideoList; 