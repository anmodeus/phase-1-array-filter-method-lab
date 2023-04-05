function findMatching (array, driver){
    return array.filter(function(matchingDriver){
    return matchingDriver.toUpperCase()=== driver.toUpperCase()
    });
}

function fuzzyMatch(array, char) {
    return array.filter(function(drivers){
    return drivers.toUpperCase().indexOf(char.toUpperCase()) === 0;
    });
} 

function matchName(array, driver) {
    return array.filter(function(nameMatch) {
    return nameMatch.name === driver
    });
}