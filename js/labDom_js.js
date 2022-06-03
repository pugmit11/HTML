function checkResult(){
    var luckyNumber=[];
    var ips=document.getElementsByClassName("ip");
    for(var i=0;i<ips.length;i++){
        var n= parseInt(ips[i].value);
        // for(var i=1;i<=6;i++){
        //     var n =parseInt(document.getElementById("oso"+i).value);
        if (isNaN(n) || n<0 || n>45 || luckyNumber.includes(n)) {
            document.getElementById("msg").style.display = "block";
            return;
        }
        luckyNumber.push(n);
    }

    var dem = 0;
    for (var i = 0; i < randomNumbers.length; i++) {
        if (luckyNumber.includes(randomNumbers[i])) {
            dem++;
        }
    }
    switch (dem) {
        case 6:alert("Trung 100ty");break;
        case 5:alert("Trung 10 trieu");break;
        case 4:alert("Trung 300.000");break;
        case 3:alert("Trung 50.000");break;
        default:alert("chuc may man lan sau");break;
    }
}
var randomNumbers = [];
while (randomNumbers.length < 6) {
    var r = Math.random();
    r = r * 46;
    r = parseInt(r);
    if (!randomNumbers.includes(r)) {
        randomNumbers.push(r);
    }
}
console.log(randomNumbers);