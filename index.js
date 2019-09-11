// Code your solution here:
// function driversWithRevenueOver(driversArray,revenue){
//   return driversArray.filter(function(driver){
//       return driver.revenue > revenue;
//   });
// }
// function driverNamesWithRevenueOver(driversArray,revenue){
//     return driversArray.filter(function(driver){
//         return driver.revenue > revenue;
//     }).map(function(driver){
//       return driver.name;
//     })
// }


function driversWithRevenueOver(driversArray,revenue){
  return driversArray.filter((driver) => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(driversArray,revenue){
  return driversArray.filter((driver) => driver.revenue > revenue).map((driver) => driver.name);
}

function exactMatch(driversArray,attribute){
    return driversArray.filter(function(driver){
      for (const k in attribute){
        return driver[k] === attribute[k]
      }
    });
  }

function exactMatchToList(driversArray,attribute){
      return driversArray.filter(function(driver){
        for(const k in attribute){
          return driver[k] === attribute[k]
        }
      }).map((driver) => driver.name)
  }
