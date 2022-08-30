// Code your solution in this file!

const returnFirstTwoDrivers = names => {
    return [names[0], names[1]]; // i feel like there is another way to obtain the first two names without this static search
}

const returnLastTwoDrivers = names => {
    const lastTwoNames = names.length - 1;
    return [names[lastTwoNames-1], names[lastTwoNames]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (num) => {
    return function(fare){
        return fare * num;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrOfNames, whosName) => {
    return (whosName(arrOfNames));
}