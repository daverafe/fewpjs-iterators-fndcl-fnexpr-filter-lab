// Code your solution here
function findMatching(drivers, name) {
   let match = drivers.filter(driver => {
       if(driver == name || driver.localeCompare(name, undefined, {sensitivity: 'base'}) == 0)
        return driver 
    })
    return match 
}

function fuzzyMatch(drivers, letters) {
    let match = drivers.filter(driver => {
        let names = driver[0] + driver[1]
        if(names === letters) {
            return driver 
        }
    })
    return match 
}

function matchName(drivers, name) {
    let match = drivers.filter(driver => {
        if(driver.name === name) {
            return driver
        }
    })
    return match 
}
