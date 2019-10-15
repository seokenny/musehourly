import React from 'react';
import VideoDetails from './VideoDetails';

class SearchBar extends React.Component {
    state = { searchTerm: ''};

    onFormSubmit = (e) => {
        e.preventDefault();

        //TODO: Make sure we call callback function from parent component (App.js)
        this.props.onFormSubmit(this.state.searchTerm);
        // document.getElementById("search_bar_contain").classList.remove("wt_center");
        // document.getElementById("search_bar_contain").classList.remove("before_submit");
        // document.getElementById("search_bar_contain").classList.add("after_submit");
        // document.querySelector(".enter_genre").classList.add("hidden");
    }

    onInputChange = (e) => {
        this.setState({ searchTerm: e.target.value });
    }

    fadeInVideo = () => {
        document.querySelector(".all_videos").classList.add("fadeIn");
    }

    render() {
        return (
            <div>
                <div id="search_bar_contain" className="before_submit">
                    <form onSubmit={this.onFormSubmit}>
                        <div>
                            <input 
                                type="text" 
                                value={this.state.searchTerm} 
                                onChange={this.onInputChange} 
                                placeholder="music" 
                                spellCheck="false"
                                className="search_bar"/>
                                <p className="enter_genre">Enter music genre</p>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;