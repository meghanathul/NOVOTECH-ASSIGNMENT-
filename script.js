var milk = document.getElementsByClassName('milk')[0];
var coffe = document.getElementsByClassName('coffee')[0];
var water = document.getElementsByClassName('water')[0];
var tea = document.getElementsByClassName('tea')[0];
var sug = document.getElementsByClassName('sug')[0];
var total = document.getElementById('total')
var all = document.getElementsByClassName('all')[0]

var strong_coffee = document.getElementById('strong-coffee')
var light_coffee = document.getElementById('light-coffee')
var strong_tea = document.getElementById('strong-tea')
var light_tea = document.getElementById('light-tea')


function dispence() {

    //for strong coffee
    var selected = 'Strong coffee'
    if (strong_coffee.innerHTML == selected) {
        milk.innerText -= 50;
        sug.innerHTML -= 2;
        coffe.innerHTML -= 4;
        water.innerHTML -= 100;
        all.style.display = 'block'
        total.innerHTML = `Your total is Rs.17.5
       <br>
       Please take your order :)`


    }


    //for light coffe
    var selected = 'Light coffee'
    if (light_coffee.innerHTML == selected) {
        milk.innerText -= 60;
        sug.innerHTML -= 1.5;
        coffe.innerHTML -= 2;
        water.innerHTML -= 100;
        all.style.display = 'block'
        total.innerHTML = `Your total is Rs.16.5
       <br>
       Please take your order :)`
    }

    //for strong tea
    var selected = 'Strong Tea'
    if (strong_tea.innerHTML == selected) {
        milk.innerText -= 30;
        sug.innerHTML -= 2;
        tea.innerHTML -= 4;
        water.innerHTML -= 150;
        all.style.display = 'block'
        total.innerHTML = `Your total is Rs.15.50
       <br>
       Please take your order :)
       <br>
       `
    }
    //for light tea
    var selected = 'Light Tea'
    if (light_tea.innerHTML == selected) {
        milk.innerText -= 40;
        sug.innerHTML -= 1.5;
        tea.innerHTML -= 4;
        water.innerHTML -= 150;
        all.style.display = 'block'
        total.innerHTML = `Your total is Rs.15  
       <br>
       Please take your order :)`

    }

    //for quentity
    var cup = 10;
    var quentity = document.getElementById('que').value;
    if (quentity === '') {
        alert('Please select the quentity')
        all.style.display = 'none'
    }
    if (quentity >= cup) {
        alert('sorry cups are not available :(');
        quentity = ''
        all.style.display = 'none'

    }

    else {
        var cupdata = cup - quentity;
        var quedata = document.getElementById('quedata');
        quedata.innerHTML = `remaning cups are ` + cupdata

    }

    // console.log(quentity)
    // console.log(milk.innerText)
    // console.log(strong_coffee.innerHTML)
}

function clr() {
    milk.innerText = milk.innerText;
    // coffee.innerText =500;
    // sug.innerHTML =500;
    // tea.innerHTML =500;
    // water.innerHTML =1500;
    document.getElementById('que').value = ''
    document.getElementById('quedata').innerHTML = ''
    all.style.display = 'none'
}

//for sugar
function check() {
    var sugar = document.getElementById('sugar');
    if (sugar.checked) {
        // alert('yes')
        sug.innerHTML -= 50;

    }
    else {
        console.log('nothing')
    }
}
