const removeFromArray = function(inputArray, ...toRemove) {
    //subtractArray = Array.from(toRemove);

   // toRemove.map((args) => {

   // });

    let outputArray = inputArray.filter(x => !toRemove.includes(x));
        
/*        
        {

    });



    let subLength = subtractArray.length;
    for (let i = 0; i < subLength; i++) {
        //find index

    }
    
    let outputArray = inputArray.slice(index 1, 2, 3 etc)



*/


    return outputArray;
};



removeFromArray([9, 7, "E", 4], "E", 7)

// Do not edit below this line
module.exports = removeFromArray;
