let scoreH = document.querySelector(".score-h")
let scoreV = document.querySelector(".score-v")
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let total = 0;


function addOneV() {
    count1 += 1
    total = count1 + count2 + count3
    scoreV.innerHTML = total

}

function addTwoV() {
    count2 += 2
    total = count1 + count2 + count3
    scoreV.innerHTML = total
    
}

function addThreeV() {
    count3 += 3
    total = count1 + count2 + count3
    scoreV.innerHTML = total

}
 


function addOne() {
    count4 += 1
    total = count4 + count5 + count6
    scoreH.innerHTML = total

}

function addTwo() {
    count5 += 2
    total = count4 + count5 + count6
    scoreH.innerHTML = total

}

function addThree() {
    count6 += 3
    total = count4 + count5 + count6
    scoreH.innerHTML = total

}

