//Difference of perfect squares displayed as sum of consecutive odd numbers 

function squaresToOdd(sqr1, sqr2){
    let difference = sqr1 - sqr2;
    const sqrDifference = sqr1**2 - sqr2**2;
    //calculate first consecutive odd number
    let oddNumber = (sqrDifference / difference) - (difference - 1);
    let consecutiveOdds = '';
    for (let i=1; i<=difference; i++) {
        if (i===difference) {
            consecutiveOdds = consecutiveOdds.concat(`${oddNumber}`);
            break;
        }
        consecutiveOdds = consecutiveOdds.concat(`${oddNumber} + `);
        oddNumber += 2;               
    }
    return `${sqr1}^2 - ${sqr2}^2 = ${consecutiveOdds} = ${sqrDifference}`
  };