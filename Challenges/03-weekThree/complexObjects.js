let netflix = {
    id: 1,
    name: "The Office",
    season1: {
      seasonInfo: {
        episodeInfo: [
          {
            episode: 1,
            episodeName: "Pilot",
          },
          {
            episode: 2,
            episodeName: "Diversity Day",
          },
          {
            episode: 3,
            episodeName: "Health Care",
          },
          {
            episode: 4,
            episodeName: "The Alliance",
          },
          {
            episode: 5,
            episodeName: "Basketball",
          },
        ],
      },
    },
    season2: {},
    season3: {},
  };

  console.log(netflix.season1.seasonInfo.episodeInfo[1].episodeName);

  let contact = {};

  contact.name = "William";
  contact.phoneNumber ="8649348466"

//   console.log(contact);

  contact["notes"] = "Best frannnn";

  console.log(contact);

  let hasName = contact.hasOwnProperty("name");
delete contact.notes;

console.log(hasName);
console.log(contact);

let newArray = Object.keys(contact);

console.log(newArray);

let restaurant = {
  restaurantName: "Chickfila", 
  yearBuilt: 1946, 
  seating: ["10 - 20", "20 - 90", "90+"], 
  carryOut: true,
  entreeItems: ["Chicken Sandwich", "Chicken Mini's", "Chicken Biscuit", "Waffle Fries", "Chicken Nuggets"]
}

console.log(restaurant);
console.log(restaurant.restaurantName.yearBuilt)
console.log(restaurant.yearBuilt);