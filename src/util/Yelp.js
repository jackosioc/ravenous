const apiKey= 'wfxwIT-qH-Hzp1xLE3ZzUc7Q6TkNTrBsr8bvq9t0-x8O6TrW_C2I2gA6q8wUigmsS4MpQvSJFrUAOSNR-fWIujvqU2ZepCcbAShFG-uT10oSj-W_Z7imnPsu0s90X3Yx';

const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`
        ,{headers: {
            Authorization: `Bearer ${apiKey}`}
        }).then(response => {
            return response.json();
          }).then((jsonResponse) => {
              if (jsonResponse.businesses) {
               return jsonResponse.businesses.map(business => {
                   return{
                      id: business.id,
                      imageSrc: business.image_url,
                      name: business.name,
                      address: business.location.address,
                      city: business.location.city,
                      state: business.location.state,
                      zipCode: business.location.zipCode,
                      category: business.categories[0].title,
                      rating: business.rating,
                      reviewCount: business.reviewCount

              }})};
              } 
           );
    }
}

export default Yelp;