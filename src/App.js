import React, {Component} from 'react';
import NavBar from './components/navbar/Navbar'
import Search from './components/search/Search'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css';



export default class App extends Component {


  render() {
    return (
    <MuiThemeProvider>
<div>

  <NavBar />
  <Search />
</div>


    </MuiThemeProvider>
    )
  }
}



