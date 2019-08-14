import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import Select from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem';
import axios from "axios"
import ImageResults from '../image-results/ImageResults'





 class Search extends Component {
state = {
    searchText: " ",
    amount: 15,
    apiUrl: "https://pixabay.com/api/",
    apiKey: "13313633-724d4514208d0192320795dc7",
    images: []
}

//use arrow function instead of bind.this
//use axios instead of fetch

onTextChange = (e) => {  
    this.setState({[e.target.name]: e.target.value }, () => {
        axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
        .then(res => this.setState({images: res.data.hits}))
        .catch(err => console.log(err))
    })

}

onAmountChange = (e, index, value) => this.setState({amount: value})

    render() {
        console.log(this.state)
        return (
            <div>
                <TextField
                 id="standard-name"
                name="searchText"
                value={this.state.searchText}
                onChange={this.onTextChange}
                floatingLabelText="Search for Images"
                fullWidth={true}
                />
                       <br />
                       <Select
                       name="amount"
                       floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        
        >
          <MenuItem value={5} primaryText="5"/>
          <MenuItem value={10} primaryText="10"/>
          <MenuItem value={15} primaryText="15"/>
          <MenuItem value={30} primaryText="30"/>
        </Select>
        <br />
    
{this.state.images.length > 0 ? (<ImageResults images={this.state.images} />) : null} 

            </div> 
            //Add a Conditional terenary opperater for ... this.state.images is the array of images and if the length is greater than zero then we want to show ImageResults component and pass the array of images to load "this.state.images" as a property... else then Null
        )
    }
}
export default Search;