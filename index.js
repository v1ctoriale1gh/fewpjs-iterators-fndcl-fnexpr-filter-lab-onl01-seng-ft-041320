

function findMatching(drivers, str) {
    let matching = drivers.filter(driver => {
        return driver.toLowerCase() === str.toLowerCase()
    })
    return matching
}

function fuzzyMatch(driver, string) {
    return driver.filter( driver => {
        let matchLetters = driver.split('').slice(0, string.length)
        matchLetters = matchLetters.join('')
        return matchLetters.toLowerCase() === string.toLowerCase()
    });
};

function matchName(ArrayOfObj, string) {
   return ArrayOfObj.filter(obj => {
        return obj.name === string
    })
};