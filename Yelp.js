const apiKey = "T9aEP7SDDlUWj26pyPTsJIh7o4kIX8XkkCOx-fmWbQA9SSxdX8ofINybf8982NMepHqU4auH0xjiOSOzFDYRVZcVLE6OyPHlEw86FlmOa0Gu-SWKdDLop12tZg4BYHYx";

const Yelp = {
    search(term, location, sortBy){
        console.log(term, location, sortBy)
        return (
         fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sortBy=${sortBy}`, {headers: {Authorization: `Bearer ${apiKey}`}})   
         .then( response => response.json () )
         .then( jsonResponse => {if(jsonResponse.businesses){return jsonResponse.businesses.map(business=> {
            console.log(jsonResponse)
            return {
                 id: business.id, 
                 imageSrc: business.image_url, 
                 name: business.name, 
                 address : business.location.address,
                 city: business.location.city, 
                 state: business.location.state, 
                 zipCode: business.location.zip_code, 
                 category: business.categories[0].title, 
                 rating: business.rating, 
                 reviewCount: business.review_count,
                 url: business.url   
             } 
          })  
        } else {
         console.log("No deliver")
        } 
      })
    )
   }
}

export default Yelp;

// 4k3SX6ovBLyBKmy9gHL2yQ

   

