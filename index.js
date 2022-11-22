function writeCards(names, string){
    const newArray =[];
    for (let i=0; i < names.length; i++) {
  newArray.push(`Thank you, ${names[i]}, for the wonderful ${string} gift!`)
    }
    return newArray;
}

    function countDown(newYears) {
        while(newYears >= 0) {
           console.log(newYears); 
           newYears--;
        }
    } 
