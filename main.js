var button = document.getElementById('button')
var body = document.getElementById('body')
var text = document.getElementById('text')



body.style.backgroundColor = '#FF0000'
button.addEventListener('click',backgroundChange);

function backgroundChange(){
    var HEX = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    body.style.backgroundColor = HEX;
    var textvalue = HEX;
   
    text.innerHTML = textvalue;
    console.log("TEsts")
}
