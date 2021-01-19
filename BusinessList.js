import React from 'react';
import './BusinessList.css'
import Business from '../Business/Business.js'
class BusinessList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
    return ( 
     <div className="BusinessList">
      {this.props.businesses.map(business => 
         <Business key={business.id} business={business}/>
         )}
      </div>
         );
    }
}
export default BusinessList;