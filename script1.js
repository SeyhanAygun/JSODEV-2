function hesap(){
    
let sinav1=document.getElementById("sinav1").value;
let sinav2=document.getElementById("sinav2").value;
let sinav3=document.getElementById("sinav3").value;
let sonuc=document.getElementById("sonuc");

let ortalama=(sinav1*1+sinav2*1+sinav3*1)/3;

if (ortalama>=50){
    sonuc.innerHTML="Tebrikler Sınıfı Geçtiniz!!  Ortalamanız: " +ortalama.toFixed(4);
}
else {
    sonuc.innerHTML="Sınıfı Geçemediniz!  Ortalamanız: " +ortalama.toFixed(4);
  }

}