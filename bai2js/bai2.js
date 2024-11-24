function calculateRectangleArea(){
    var D=parseFloat(document.getElementById('NhapD').value);
    var R=parseFloat(document.getElementById('NhapR').value); 

   if(!D || !R || D<=0 || R <= 0){
    alert("Vui lòng nhập số hợp lệ!");
    return;
   }

   const SHCN = D*R;
   document.getElementById('ketquahcn').value=SHCN;
}
function calculateTriangleArea(){
    var Đ = parseFloat(document.getElementById('Nhapday').value);
    var C = parseFloat(document.getElementById('Nhapcao').value);

    if(!Đ || !C || Đ <= 0 || C<=0){
        alert("Vui lòng nhập số hợp lệ!");
        return;
    }
    const STG = (Đ*C)/2;
    document.getElementById('ketquatg').value=STG;
}
function calculateSquareArea(){
    var CN = parseFloat(document.getElementById('Nhapcanh').value);
    if(!CN || CN <= 0){
        alert("Vui lòng nhập số hợp lệ!");
        return;
    }
    const SHV = CN*CN;
    document.getElementById('ketquahv').value = SHV;
}