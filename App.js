// import logo from './logo.svg';
import './App.css';
import React from 'react';
import BusinessList from '../BusinessList/BusinessList';
import Yelp from '../../util/Yelp';

import SearchBar from '../SearchBar/SearchBar';

// const business={
//   imageSrc:'./pizza.webp',
//   name: 'MarginOtto Pizzeria',
//   address: '1010 Paddington Way',
//   city: 'Flavortown',
//   state: 'NY',
//   zipCode: '10101',
//   category: 'Italian',
//   rating: 4.5,
//   reviewCount: 90
// }

// const businesses = [
//   business, business, business, business, business, business
// ]

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      businesses: [] 
    }
    this.searchYelp=this.searchYelp.bind(this);
}

searchYelp( term, location, sortBy){
//  console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`)
 Yelp.search( term, location, sortBy).then(businesses => {
   this.setState({
     businesses: businesses
   })
 })
}

  render(){
  return (
    <div className="App">

<h1>Apollo Project</h1>

<SearchBar searchYelp={this.searchYelp}/>

<BusinessList businesses={this.state.businesses}/>

</div>
  );
}
}
export default App;
