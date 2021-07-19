function daysIntoDates(date1, date2) {
    const ONE_DAY = 1000 * 60 * 60 * 24
    const DIFFERENCE =  Math.abs(date1 - date2)

    return Math.floor(DIFFERENCE / ONE_DAY) 
} 

const TODAY = new Date()
const BIRTH_DATE = new Date(2002, 3, 17)