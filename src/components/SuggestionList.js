import React, { Component } from 'react';
import DropDownList from './DropDownList';
import axios from 'axios';

class SuggestionList extends Component {
    constructor(props){
        super(props);
        this.state = {
            textValue: "", 
            response: [] 
        };
        this.handleChange = this.handleChange.bind(this);
        this.loadSearchData = this.loadSearchData.bind(this);
    }
    
    handleChange = (event) => {
        this.setState({ textValue : event.target.value })
        this.loadSearchData(event.target.value);
    }

    loadSearchData = (searchText) => {
        var self = this;
        axios.get("https://api.github.com/search/users?q="+searchText+"+repos:%3E2+language:Javascript+location:India")
            .then(function(res){
                if (res.data.total_count === 0){
                    self.setState({ response : {status : "No Results Found"} });
                }else{
                    self.setState({ response : res.data });
                }
            })
            .catch(function(err){
                self.setState({ response : {status : "Server Error"} });
            })
    }

    selectedOption = (event) => {
        console.log(event.target.value);
    }

    render(){
        if ((this.state.textValue.length > 0) && (this.state.response.items)){
            return(
                <div>
                    <input type="text" id="search-area" placeholder="Type Item Name" value={this.state.textValue} onChange={ this.handleChange } />
                    <DropDownList response={this.state.response} update={this.selectedOption}></DropDownList>
                </div>
            );    
        }else{
            return (
                <div>
                    <input type="text" id="search-area" placeholder="Type Item Name" value={this.state.textValue} onChange={ this.handleChange } />
                    <div className="error">{this.state.response.status}</div>
                </div>
            );
        }
    }
}

export default SuggestionList;
