module.exports = function makeExchange(currency) {
    let moneyExchange = {};
    let remainder;
    let currenctCoins;

 // H, Q, D, N and P

    if(!currency || currency < 0) {
    	return {};
    } else if(currency > 10000) {
    	return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    } else {

		currenctCoins = Math.floor(currency / 50);
		remainder = currenctCoins % 50;

		if(currenctCoins) 
			moneyExchange['H'] = currenctCoins;

 		remainder = currency % 50;
 		currenctCoins = Math.floor(remainder / 25);

 		if(currenctCoins)
 			moneyExchange['Q'] = currenctCoins;

 		remainder = remainder % 25;
		currenctCoins = Math.floor(remainder / 10);

 		if(currenctCoins)
 			moneyExchange['D'] = currenctCoins;

		remainder = remainder % 10;
 		currenctCoins = Math.floor(remainder / 5);

 		if(currenctCoins)
 			moneyExchange['N'] = currenctCoins;

 		remainder = remainder % 5;
		currenctCoins = Math.floor(remainder / 1);

 		if(currenctCoins)
 			moneyExchange['P'] = currenctCoins;
    }

    return moneyExchange;
}

// console.log(makeExchange(99999));