const removeFromArray = function(arr, ...toRemove) {
//    index = arr.indexOf(toRemove);
//    arr.splice(index, 1);
//    return arr

    const arrRemove = Array.from(toRemove);
    let newArray = []

    for (let i = 0; i < arr.length; i++) {        
//        index = arr.indexOf(i);        
        if (arrRemove.includes(arr[i]) == false) {
            newArray.push(arr[i]);
        }else {
            continue;         
        }  
    }   return newArray;
}


// Do not edit below this line
module.exports = removeFromArray;
