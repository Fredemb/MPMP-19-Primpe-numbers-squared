//References to UI elements
let checkButton = document.getElementById("checkButton")
let checkOutput = document.getElementById("checkOutput")
let calculateButton = document.getElementById("calculateButton")
let calcOutputParagraph = document.getElementById("calcOutputParagraph")
let calcOutput = document.getElementById("calcOutput")

function isPrime(n) {
    for(var i=2; i<n; i++){
        if(n % i === 0) return false
    }
    return n > 1
}

function isPrimeGivenPrimes(n, arr) { //Can check if a number is prime, if fed with every smaller prime
    for(var i=0; i<arr.length; i++){
        if(n % arr[i] === 0) return false
    }
    return n > 1
}

function checkIfSolution() {
    console.log("check solution")
    var n = Number(document.getElementById("numberInput").value)
    var primeArray = [2]
    var sumOfSquares = 4
    for(var i=2; primeArray.length<n; i++){
        if(isPrimeGivenPrimes(i, primeArray)){
            primeArray.push(i)
            sumOfSquares += (i*i)
        }
    }
    if (sumOfSquares % n === 0){
        checkOutput.innerHTML = n + " IS a valid solution"
    }
    else {
        checkOutput.innerHTML = n + " IS NOT a valid solution"
    }
}

function findSolutions() {
    calcOutput.innerHTML = ""
    var max = Number(document.getElementById("maxNumInput").value)
    var primeArray = [2]
    var sumOfSquares = 4
    var solutionsArray = []
    for(var i=2; i<max; i++){
        if(isPrimeGivenPrimes(i,primeArray)){
            //console.log(i+" is prime")
            primeArray.push(i)
            sumOfSquares += (i*i)
            //console.log(sumOfSquares+" is the new sum")
            if(sumOfSquares % primeArray.length === 0){
                console.log(primeArray.length+" is a solution to the problem")
                solutionsArray.push(primeArray.length)
                var nextHTMLitem = document.createElement('li')
                nextHTMLitem.innerHTML = primeArray.length
                calcOutput.appendChild(nextHTMLitem)
            }
        }
    }
    calcOutputParagraph.innerHTML = "Found "+ primeArray.length +" primes, the largest being "+ primeArray[primeArray.length-1]
    console.log("Largest prime found: " + primeArray[primeArray.length-1])
}

checkButton.addEventListener("click",checkIfSolution)
calculateButton.addEventListener("click",findSolutions)