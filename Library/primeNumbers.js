const primeNumbers = ( num => {
    primeArr=[];
    for( i=2; i<num; i++ ) {
        for( j=f=0; primeArr[j]*primeArr[j]<=i; j++ ) 
        f|=!(i%primeArr[j]);
        f||primeArr.push(i);
    }
    return primeArr;
});

console.log(primeNumbers(100));
