//calculator
var male = document.getElementById("m");
var female = document.getElementById("f");
var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var form = document.getElementById("form");

//resultpage
let headpop = document.querySelector(".headpop");

//resultbox
let result = document.querySelector(".result");
let bmi = document.querySelector(".bmi");
let result2 =document.querySelector(".result2");
let downloadbmi = document.querySelector(".downloadbmi");

//explanationbox
let statement = document.querySelector(".statement");
let explanation = document.querySelector(".explanation");
let advice =document.querySelector(".advice");

let consult_group = document.querySelector(".consult-group");

let disclaimer = document.querySelector(".disclaimer");

//deseasebox
let diag = document.querySelector(".bmi");
let desease =document.querySelector(".result2");

//apldownloadbutton
let apldownload = document.querySelector(".apldownload");
let apldownloadbutton = document.querySelector(".apldownloadbutton");


document.getElementById("calculate").addEventListener("click", validate);

function validate() {
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
        alert("All fields are required!");
        document
            .getElementById("calculate")
            .removeEventListener("click", countBmi);
  }else{
    countBmi();
  }
}

function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }

  var headpop = 'Hasil';

  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var result = '';
  if (bmi < 18.5) {
    result = "Kekurangan Berat Badan";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    result = "Normal (Ideal)";
  } else if (25 <= bmi && bmi <= 29.9) {
    result = "(Kelebihan Berat Badan)";
  } else if (30 <= bmi) {
    result = "Kegemukan (Obesitas)";
  } 

  var result2 = '';
  if (bmi < 18.5) {
    result2 = "Anda kekurangan berat badan";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    result2 = "Anda memiliki berat badan normal (Ideal)";
  } else if (25 <= bmi && bmi <= 29.9) {
    result2 = "Anda memiliki kelebihan berat badan";
  } else if (30 <= bmi) {
    result2 = "Anda berada pada ketegori kegemukan (Obesitas)";
  } 
  
  var downloadbmi = '<button type="button" id="downloadbmi">Download Hasil BMI</button>'

  var statement = '';
  if (bmi < 18.5) {
    statement = "Hasil BMI kurang dari 18.5.";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    statement = "Hasil BMI di antara 18.5 dan 24.9.";
  } else if (25 <= bmi && bmi <= 29.9) {
    statement = "Hasil BMI di antara 25 dan 29.9.";
  } else if (30 <= bmi) {
    statement = "Hasil BMI lebih dari 30.0.";
  } 

  var explanation = '';
  if (bmi < 18.5) {
    explanation = "Anda berada dalam kategori kekurangan berat badan.";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    explanation = "Anda berada dalam kategori berat badan yang normal.";
  } else if (25 <= bmi && bmi <= 29.9) {
    explanation = "Anda berada dalam kategori overweight atau berat badan berlebih.";
  } else if (30 <= bmi) {
    explanation = "Anda berada dalam kategori obesitas.";
  } 

  var advice = '';
  if (bmi < 18.5) {
    advice = "Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan berat badan dan kesehatan.";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    advice = "Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda. Konsultasi Ahli Gizi Via Aplikasi. ";
  } else if (25 <= bmi && bmi <= 29.9) {
    advice = "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
  } else if (30 <= bmi) {
    advice = "Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda. ";
  } 

  var consult_group = '<button type="button" id="consult">Konsultasi Ahli Gizi Via Aplikasi</button><button type="button" id="regist">Registrasi Online Ahli Gizi</button>';

  var disclaimer ='BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.'

  var diag = '';
  if (bmi < 18.5) {
    diag = "Berat badan rendah dapat menyebabkan berbagai masalah penyakit";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    diag = "";
  } else if (25 <= bmi && bmi <= 29.9) {
    diag = "Beberapa penyakit yang berasal dari kegemukan";
  } else if (30 <= bmi) {
    diag = "Beberapa penyakit yang berasal dari kegemukan";
  }
  
  var desease = '';
  if (bmi < 18.5) {
    desease = "<li>Infertilitas</li><li>Anemia</li><li>Osteoporosis</li><li>Sistem Imun Lemah</li>";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    desease = "";
  } else if (25 <= bmi && bmi <= 29.9) {
    desease = "<li>Diabetes</li><li>Hipertensi</li><li>Sakit Jantung</li><li>Osteoarthritis</li>";
  } else if (30 <= bmi) {
    desease = "<li>Diabetes</li></li>Hipertensi</li><li>Sakit Jantung</li><li>Osteoarthritis</li>";
  }
  
  var apldownload = 'Download Aplikasi'

  var apldownloadbutton = '<a href="#"><img src="https://static.rsmurniteguh.app/sites/Images/Content/google-play.png" alt></a><a href="#"><img src="https://static.rsmurniteguh.app/sites/Images/Content/app-store.png" alt></a>'


document.querySelector('.headpop').innerHTML = headpop;
document.querySelector(".result").innerHTML = result;
document.querySelector(".bmi").innerHTML = bmi.toFixed(2);
document.querySelector(".result2").innerHTML = result2;
document.querySelector(".downloadbmi").innerHTML = downloadbmi;
document.querySelector(".statement").innerHTML = statement;
document.querySelector(".explanation").innerHTML = explanation;
document.querySelector(".advice").innerHTML = advice;
document.querySelector(".consult-group").innerHTML = consult_group;
document.querySelector(".disclaimer").innerHTML = disclaimer;
document.querySelector(".diag").innerHTML = diag;
document.querySelector(".desease").innerHTML = desease;
document.querySelector(".consult-group2").innerHTML = consult_group;
document.querySelector(".apldownload").innerHTML = apldownload;
document.querySelector(".apldownloadbutton").innerHTML = apldownloadbutton;
}
