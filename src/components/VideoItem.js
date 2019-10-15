import React from 'react';
import './VideoItem.css';

const VideoItem = (props) => {
    // var newString;
    // shortenTitle = () => {
    //     var full = this.props.singleVideo.snippet.title;
    //     var length = 10;
    //     newString = full.substring(0,length);
    // }

    return (
        <div className="item" onClick={() =>  props.onVideoClick(props.singleVideo, props.vidKey)} id={"d"+props.vidKey}>
            <div className="content">
                <img src={props.singleVideo.snippet.thumbnails.high.url} className="curved_border_icon sm_thumb_image"/>
                <div className="vid_descript">
                    <a className="header">{props.singleVideo.snippet.title}</a>
                    <div className="description">{props.singleVideo.snippet.channelTitle}</div>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;