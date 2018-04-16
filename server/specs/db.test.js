const db = require('../db.js');


describe('DB', () => {
  
  test('Should return an array when asked for similar listings', (done) => {
    db.getSimilarListings(1, (err, result) => {
      expect(Array.isArray(result)).toBe(true);
      done();
    });
  });

  // test('Should return correct data for given location id', (done) => {
  //   db.get(5, (err, result1) => {
  //     expect(result1[0].src).toBe('https://s3.amazonaws.com/fantasybnb-images/5-2.jpg');
  //     db.get(5, (err, result2) => {
  //       expect(result2[0].src).toBe('https://s3.amazonaws.com/fantasybnb-images/5-2.jpg');
  //       done();
  //     });
  //   });
  // });

});




// describe('DB', () => {
//   test('Should save a new listing', (done) => {
//     let testData = { keywords: [ 'animated', 'happy', 'home' ],
//     id: 7777,
//     imageUrl: 'https://s3.us-east-2.amazonaws.com/fantasybnb/images/1.jpg',
//     description: 'ENTIRE HOUSE 1 BED',
//     title: '124 Conch Street',
//     price: 45,
//     num_reviews: 96,
//     avg_rating: 4.78};

//     db.save(testData, (err, listing)=> {
//       if (listing) {
        
//         db.Listing.findOne({id: testData.id}, (data) => {
//           let listing = data;
//           expect(listing.title).toBe('124 Conch Street');
//         });
//       }
//     });


//     //db delete entry
//     db.Listing.deleteOne({ id: 7777}, (err, results) => {
//       console.log(err, results);
//     });

//     done();
//   });

//   test('Should find listings with similar keywords and price', (done) => {

//     let testData1 = { keywords: [ 'abcde'],
//     id: 9999,
//     imageUrl: 'https://s3.us-east-2.amazonaws.com/fantasybnb/images/1.jpg',
//     description: 'ENTIRE HOUSE 1 BED',
//     title: '124 Conch Street',
//     price: 45,
//     num_reviews: 96,
//     avg_rating: 4.78};

//     let testData2 = { keywords: [ 'real' ],
//     id: 8888,
//     imageUrl: 'https://s3.us-east-2.amazonaws.com/fantasybnb/images/2.jpg',
//     description: 'ENTIRE APARTMENT 1 BED',
//     title: '221b Baker Street',
//     price: 199,
//     num_reviews: 47,
//     avg_rating: 3.29}

//     let testData3 = { keywords: [ 'home', 'abcde' ],
//     id: 7777,
//     imageUrl: 'https://s3.us-east-2.amazonaws.com/fantasybnb/images/4.jpg',
//     description: 'ENTIRE HOUSE 3 BEDS',
//     title: '742 Evergreen Terrace',
//     price: 125,
//     num_reviews: 28,
//     avg_rating: 2.35}

//     db.save(testData1, (err, success) => {
//       console.log(err, success);
//     })



//     //   if (success) {
//     //     db.save(testData2, (err, success) => {
//     //       if (success) {
//     //         db.save(testData3, (err, success) => {
//     //           if (success) {
//     //             db.getSimilarListings(9999, (similarListings) => {
//     //               console.log('here are the similar listings', similarListings);
//     //               //expect similar listings to include 7777
//     //               expect(similarListings[0].title).toBe('742 Evergreen Terrace');
//     //               // //expect similar listings to not include 8888
//     //               expect(similarListings.length).toBe(1);
//     //               // //delete all three datapoints
//     //               db.Listing.deleteOne({ id: 9999});
//     //               db.Listing.deleteOne({ id: 8888});
//     //               db.Listing.deleteOne({ id: 7777});
//     //               done();
//     //             })
//     //           }
//     //         });
//     //       }
//     //     });
//     //   }
//     // });
//   });
// });