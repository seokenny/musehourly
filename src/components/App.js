import React from 'react';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';
import SearchBar from './SearchBar';
import './normalize.css';

class App extends React.Component {
    state = { videosList: [], selectedVideo: null, activeVideo: true, videoKey: null };

    // componentDidMount() {
    //     this.onTermSubmit('lofi');
    // }

    componentDidMount() {
        document.title = 'Mix Hour';
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: '1 hour playlist ' + term
            }
        });

        this.setState({
            videosList: response.data.items,
            selectedVideo: response.data.items[0],
            videoKey: response.data.items[0].id.videoId
        });
        document.getElementById("search_bar_contain").classList.add("after_submit");
        document.querySelector(".enter_genre").classList.add("hidden");
    }

    onVideoClick = (singleVideoFromVideoItem, vidKey) => {
        this.setState({ selectedVideo: singleVideoFromVideoItem, videoKey: vidKey});
        this.changeVidColor();
    }
    
    componentDidUpdate() {
        var random = [];
        random = document.querySelectorAll(".vid_descript");
        for(var i = 0; i < random.length; i++){
            random[i].classList.remove("asddd");
        }
        this.changeVidColor();
    }

    changeVidColor = () => {
        var dSelectedVideo = "d"+this.state.selectedVideo.id.videoId;
        var dVideoKey = "d"+this.state.videoKey;
        if(dSelectedVideo === dVideoKey){
            document.getElementById(dVideoKey).querySelector(".vid_descript").classList.add("asddd");
        }
    }

    // videoClickColor = (vidColor) => {
    //     console.log(this.state.selectedVideo.id.videoId);
    //     console.log(vidColor);
    // }

    render() {
        return(
            <div>
                <div className="main_container">
                    <div className="olive_overlay">                        
                        <div>
                            <SearchBar onFormSubmit={this.onTermSubmit}/>
                        </div>
                        <div className="all_videos">
                            <VideoDetails selectedVideo={this.state.selectedVideo}/>
                            <VideoList videosList={this.state.videosList} onVideoClick={this.onVideoClick} scrollToTop={this.scrollToTop} videoClickColor={this.videoClickColor}/> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
