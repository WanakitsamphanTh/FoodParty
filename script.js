let arr = [];
let n = 0;
for(let i = 0; i < 100; i++){
    do {
        n = Math.round(Math.random() * 100);
    } while(arr.includes(n))
    arr.push(n);
}
console.log(arr);

var btn = document.getElementById("gen");
let i = 0;
btn.onclick = function(e){
    document.getElementById("num").innerHTML = arr[i];
    console.log(arr[i], " passed")
    i++;
};

document.onkeydown = (e) => {
    if(e.code == 'Enter') btn.click();
};