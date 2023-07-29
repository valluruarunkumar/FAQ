import React from "react";
import { Component } from "react";
import './index.css'

class GoogleSerch extends Component {

    render() {

        const { searches } = this.props;
        return (
            <div>
                <div className="search-results">
                    <p>{searches.search}</p>
                </div>

            </div>
        );
    }
}




export default GoogleSerch