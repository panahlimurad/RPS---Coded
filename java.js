var compXod = [`k`, `t`, `m`]

// hesablamaq
var oyuncu1 = 0
var oyuncu2 = 0

var player1ResultPanel = document.querySelector(`#player1ResultPanel`)
var player2ResultPanel = document.querySelector(`#player2ResultPanel`)
// ekranda yazilan netice win draw
var netice1 = document.querySelector('#player1')
var netice2 = document.querySelector('#player2')
// shekiller
var playerFirstImg = document.querySelector('#player1Img')
var playerSecondImg = document.querySelector('#player2Img')
// oyuncu adlari
var name = document.querySelector('#player1Name')
var name = document.querySelector('#player2Name')



function comp(arr){

    let compRandom = Math.floor(Math.random() * arr.length);

    return arr[compRandom]
}



function startGame(e){
    
    var userAttack = e.key;
    var compAttack = comp(compXod);

    
    if(compXod.indexOf(userAttack) === -1){
        alert(`zehmet olmasa k, t, m herflerinden birini secin`)
        
        return;
    }

    playerFirstImg.src = `./img/${userAttack}.png`
    playerSecondImg.src = `./img/${compAttack}.png`

    if(userAttack === "t" && compAttack === "m"){
        console.log("User Win");

        oyuncu1++

        player1ResultPanel.innerHTML = `Point : ${oyuncu1}`

        netice1.innerHTML = 'WIN'
        netice2.innerHTML = 'LOSE'
    }else if(userAttack === "k" && compAttack === "t"){
        console.log("User Win");
        oyuncu1++

        player1ResultPanel.innerHTML = `Point : ${oyuncu1}`

        netice1.innerHTML = 'WIN'
        netice2.innerHTML = 'LOSE'
    }else if(userAttack === "m" && compAttack === "k"){
        console.log("User Win");
        oyuncu1++

        player1ResultPanel.innerHTML = `Point : ${oyuncu1}`

          netice1.innerHTML = 'WIN'
        netice2.innerHTML = 'LOSE'
    }else if(userAttack === compAttack){
        console.log("Draw-Draw");

           netice1.innerHTML = 'DRAW'
        netice2.innerHTML = 'DRAW'
    }else{
        console.log("Comp Win");
        oyuncu2++

        player2ResultPanel.innerHTML = `Point : ${oyuncu2}`

         netice1.innerHTML = 'LOSE'
        netice2.innerHTML = 'WIN'
    }
    
    console.log("user" , userAttack);
    console.log("comp" , compAttack);
    console.log("------------");
}


window.onkeydown = startGame