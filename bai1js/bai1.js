function chuyendoi(){
    var doC = parseFloat(document.getElementById('doC').value);
    var doF = (doC * (9/5)) + 32;
    document.getElementById('doF').value = doF;
}