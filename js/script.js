function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
function numberWithSpacesInput(x) {
    return x.value.replace(/[^\d]/g, '').replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
}
function numberNoSpacesInput(x) {
    return x.value.replace(/\s/g, '');
}

//РІС‹РїР°РґР°С€РєР°

// range


//РєР°Р»СЊРєСѓР»СЏС‚РѕСЂ
let newcalc = document.querySelector('#newcalc');
let sliderwidth = document.querySelector('#sliderwidth');
let sliderwidth2 = document.querySelector('#sliderwidth2');


let su = document.querySelector('#su');
let sutext = document.querySelector('#sutext');
let te = document.querySelector('#te');
let tetext = document.querySelector('#tetext');
let co = document.querySelector('#co');
let cotext = document.querySelector('#cotext');
let ty = document.querySelector('#ty');
let five = document.querySelector('#five');
let sub = document.querySelector('.sub');
let summ = document.querySelector('.summ');
let full = document.querySelector('.full');
let ud = document.querySelector('.ud');
let copro = document.querySelector('.copro');
let kef = document.querySelector('.kef');

let coprofloat=0;
let SU=2000000;
let TE=12;
let CO=5;
let TY=390;
let KEF;
let SUMM;
let FULL;
let YP;
let IMC={0:12, 1:18, 2:24, 3:36, 4:48, 5:60};

let KEF1 = [[1.09,1.13,1.17,1.24,1.32,1.40],
            [1.08,1.12,1.16,1.23,1.30,1.38],
            [1.08,1.11,1.15,1.22,1.29,1.35],
            [1.07,1.11,1.14,1.20,1.27,1.33],
            [1.07,1.10,1.13,1.19,1.25,1.31],
            [1.06,1.09,1.12,1.18,1.24,1.29],
            [1.06,1.09,1.11,1.16,1.22,1.27],
            [1.05,1.08,1.10,1.15,1.20,1.25],
            [1.05,1.07,1.09,1.13,1.17,1.21]];

let KEF2 = [[1.09,1.14,1.18,1.26,1.35,1.43],
            [1.09,1.13,1.17,1.25,1.33,1.41],
            [1.08,1.12,1.16,1.23,1.31,1.38],
            [1.08,1.11,1.15,1.22,1.29,1.36],
            [1.07,1.11,1.14,1.20,1.27,1.34],
            [1.07,1.10,1.13,1.19,1.25,1.31],
            [1.06,1.09,1.12,1.17,1.23,1.29],
            [1.05,1.08,1.10,1.15,1.20,1.24]];

sutext.value = 2000000;
su.value = 2000000;
te.value = 1;
co.value = 1;

su.addEventListener('change', function () {
    sutext.value = this.value;
    sutext.value = numberNoSpacesInput(this);
    calkk();
    coprofloat = (su.value/100)*co.value;
    coprofloat = Math.round(coprofloat * Math.pow(10,2))/ Math.pow(10, 2);
    copro.textContent = numberWithSpaces(coprofloat);
    sutext.value = numberWithSpacesInput(this);

    sliderwidthV = 100 * this.value / (this.max);
    sliderwidth.style.width = sliderwidthV + "%";


}, false);
su.addEventListener('input', function () {
    sutext.value = this.value;
    SU = su.value;
    sutext.value = numberWithSpacesInput(this);

    sliderwidthV = 100 * this.value / (this.max);
    sliderwidth.style.width = sliderwidthV + "%";

}, false);
sutext.addEventListener('input', function(){
    su.value = this.value;
    SU = su.value;
    sutext.value = numberNoSpacesInput(this);
    calkk();
    coprofloat = (su.value/100)*co.value;
    coprofloat = Math.round(coprofloat * Math.pow(10,2))/ Math.pow(10, 2);
    copro.textContent = numberWithSpaces(coprofloat);

    sliderwidthV = 100 * this.value / (su.max);
    sliderwidth.style.width = sliderwidthV + "%";

    if(sutext.value>120000000){
        sutext.value = 120000000;
    }
}, false)

let teIndex = 1;
let teIndexValue = 12;

te.addEventListener('change', function () {
    teIndex = this.value;

    teIndexValue = IMC[teIndex]//Я вывел все кридитнные месяцы в отдельный массив и уже работаю с масивом так как индекс у нас есть
    tetext.value = teIndexValue;
    TE=teIndexValue;
    calkk();

       /* sliderwidthV2 = 100 * this.value / (this.max);
       sliderwidth2.style.width = sliderwidthV2 + "%";*/

       /*console.log(this.max);
       console.log(this.min);
       console.log(this.value);*/


}, false);
te.addEventListener('input', function () {
    teIndex = this.value;

    teIndexValue = IMC[teIndex]

    tetext.value = teIndexValue;
    TE=teIndexValue;

}, false);
tetext.addEventListener('input', function(){

    teIndexValue = this.value;

    for ( let key in IMC){
        if (teIndexValue === IMC[key]) {
            teIndex = key;
        }
    }
    
    console.log(teIndexValue)

    te.value = teIndex;
    TE=teIndexValue;

    calkk();

})

var coIndex = 1;
var coIndexValue = 5;

co.addEventListener('change', function () {
    coIndex = this.value;

    if (coIndex === 1) {
        coIndexValue = 5;
    } else if (coIndex === 2) {
        coIndexValue = 10;
    } else if (coIndex === 3) {
        coIndexValue = 15;
    } else if (coIndex === 4) {
        coIndexValue = 20;
    } else if (coIndex === 5) {
        coIndexValue = 25;
    } else if (coIndex === 6) {
        coIndexValue = 30;
    } else if (coIndex === 7) {
        coIndexValue = 35;
    } else if (coIndex === 8) {
        coIndexValue = 40;
        // } else if (coIndex == 9) {
        //     coIndexValue = 45;
    } else {
        coIndexValue = 49;
    }

    cotext.value = coIndexValue;
    calkk();
    coprofloat = (su.value/100)*coIndexValue;
    coprofloat = Math.round(coprofloat * Math.pow(10,2))/ Math.pow(10, 2);
    copro.textContent = numberWithSpaces(coprofloat);
}, false);
co.addEventListener('input', function () {
    coIndex = this.value;

    if (coIndex === 1) {
        coIndexValue = 5;
    } else if (coIndex === 2) {
        coIndexValue = 10;
    } else if (coIndex === 3) {
        coIndexValue = 15;
    } else if (coIndex === 4) {
        coIndexValue = 20;
    } else if (coIndex === 5) {
        coIndexValue = 25;
    } else if (coIndex === 6) {
        coIndexValue = 30;
    } else if (coIndex === 7) {
        coIndexValue = 35;
    } else if (coIndex === 8) {
        coIndexValue = 40;
        // } else if (coIndex == 9) {
        //     coIndexValue = 45;
    } else {
        coIndexValue = 49;
    }

    cotext.value = coIndexValue;
    CO = cotext.value;
}, false);
cotext.addEventListener('input', function(){

    coIndexValue = this.value;

    if (coIndexValue === 5) {
        coIndex = 1;
    } else if (coIndexValue === 10) {
        coIndex = 2;
    } else if (coIndexValue === 15) {
        coIndex = 3;
    } else if (coIndexValue === 20) {
        coIndex = 4;
    } else if (coIndexValue === 25) {
        coIndex = 5;
    } else if (coIndexValue === 30) {
        coIndex = 6;
    } else if (coIndexValue === 35) {
        coIndex = 7;
    } else if (coIndexValue === 40) {
        coIndex = 8;
        // } else if (coIndexValue == 45) {
        //     coIndex = 9;
    } else {
        coIndex = 9;
    }

    co.value = coIndex;

    coprofloat = (su.value/100)*coIndexValue;
    coprofloat = Math.round(coprofloat * Math.pow(10,2))/ Math.pow(10, 2);
    copro.textContent = numberWithSpaces(coprofloat);
    CO = coIndexValue;
    calkk();
})

ty.addEventListener('input', function(){
    if(ty.value === 387){
        five.disabled = true;
        co.min = 2;
        co.value = 2;
        cotext.value = 10;
        CO = cotext.value;
        newcalc.classList.add('value2');
        newcalc.classList.remove('value1');
    }
    else{
        five.disabled = false;
        co.min = 1;
        newcalc.classList.add('value1');
        newcalc.classList.remove('value2');
    }
    TY = ty.value;
    calkk();
})



function calkk(){
    if(TY===390 && CO===5 && TE===12){
        KEF = KEF1[0][0];
    }
    if(TY===390 && CO===5 && TE===18){
        KEF = KEF1[0][1];
    }
    if(TY===390 && CO===5 && TE===24){
        KEF = KEF1[0][2];
    }
    if(TY===390 && CO===5 && TE===36){
        KEF = KEF1[0][3];
    }
    if(TY===390 && CO===5 && TE===48){
        KEF = KEF1[0][4];
    }
    if(TY===390 && CO===5 && TE===60){
        KEF = KEF1[0][5];
    }

    if(TY==390 && CO==10 && TE==12){
        KEF = KEF1[1][0];
    }
    if(TY==390 && CO==10 && TE==18){
        KEF = KEF1[1][1];
    }
    if(TY==390 && CO==10 && TE==24){
        KEF = KEF1[1][2];
    }
    if(TY==390 && CO==10 && TE==36){
        KEF = KEF1[1][3];
    }
    if(TY==390 && CO==10 && TE==48){
        KEF = KEF1[1][4];
    }
    if(TY==390 && CO==10 && TE==60){
        KEF = KEF1[1][5];
    }

    if(TY==390 && CO==15 && TE==12){
        KEF = KEF1[2][0];
    }
    if(TY==390 && CO==15 && TE==18){
        KEF = KEF1[2][1];
    }
    if(TY==390 && CO==15 && TE==24){
        KEF = KEF1[2][2];
    }
    if(TY==390 && CO==15 && TE==36){
        KEF = KEF1[2][3];
    }
    if(TY==390 && CO==15 && TE==48){
        KEF = KEF1[2][4];
    }
    if(TY==390 && CO==15 && TE==60){
        KEF = KEF1[2][5];
    }

    if(TY==390 && CO==20 && TE==12){
        KEF = KEF1[3][0];
    }
    if(TY==390 && CO==20 && TE==18){
        KEF = KEF1[3][1];
    }
    if(TY==390 && CO==20 && TE==24){
        KEF = KEF1[3][2];
    }
    if(TY==390 && CO==20 && TE==36){
        KEF = KEF1[3][3];
    }
    if(TY==390 && CO==20 && TE==48){
        KEF = KEF1[3][4];
    }
    if(TY==390 && CO==20 && TE==60){
        KEF = KEF1[3][5];
    }

    if(TY==390 && CO==25 && TE==12){
        KEF = KEF1[4][0];
    }
    if(TY==390 && CO==25 && TE==18){
        KEF = KEF1[4][1];
    }
    if(TY==390 && CO==25 && TE==24){
        KEF = KEF1[4][2];
    }
    if(TY==390 && CO==25 && TE==36){
        KEF = KEF1[4][3];
    }
    if(TY==390 && CO==25 && TE==48){
        KEF = KEF1[4][4];
    }
    if(TY==390 && CO==25 && TE==60){
        KEF = KEF1[4][5];
    }

    if(TY==390 && CO==30 && TE==12){
        KEF = KEF1[5][0];
    }
    if(TY==390 && CO==30 && TE==18){
        KEF = KEF1[5][1];
    }
    if(TY==390 && CO==30 && TE==24){
        KEF = KEF1[5][2];
    }
    if(TY==390 && CO==30 && TE==36){
        KEF = KEF1[5][3];
    }
    if(TY==390 && CO==30 && TE==48){
        KEF = KEF1[5][4];
    }
    if(TY==390 && CO==30 && TE==60){
        KEF = KEF1[5][5];
    }

    if(TY==390 && CO==35 && TE==12){
        KEF = KEF1[6][0];
    }
    if(TY==390 && CO==35 && TE==18){
        KEF = KEF1[6][1];
    }
    if(TY==390 && CO==35 && TE==24){
        KEF = KEF1[6][2];
    }
    if(TY==390 && CO==35 && TE==36){
        KEF = KEF1[6][3];
    }
    if(TY==390 && CO==35 && TE==48){
        KEF = KEF1[6][4];
    }
    if(TY==390 && CO==35 && TE==60){
        KEF = KEF1[6][5];
    }

    if(TY==390 && CO==40 && TE==12){
        KEF = KEF1[7][0];
    }
    if(TY==390 && CO==40 && TE==18){
        KEF = KEF1[7][1];
    }
    if(TY==390 && CO==40 && TE==24){
        KEF = KEF1[7][2];
    }
    if(TY==390 && CO==40 && TE==36){
        KEF = KEF1[7][3];
    }
    if(TY==390 && CO==40 && TE==48){
        KEF = KEF1[7][4];
    }
    if(TY==390 && CO==40 && TE==60){
        KEF = KEF1[7][5];
    }

    if(TY==390 && CO==49 && TE==12){
        KEF = KEF1[8][0];
    }
    if(TY==390 && CO==49 && TE==18){
        KEF = KEF1[8][1];
    }
    if(TY==390 && CO==49 && TE==24){
        KEF = KEF1[8][2];
    }
    if(TY==390 && CO==49 && TE==36){
        KEF = KEF1[8][3];
    }
    if(TY==390 && CO==49 && TE==48){
        KEF = KEF1[8][4];
    }
    if(TY==390 && CO==49 && TE==60){
        KEF = KEF1[8][5];
    }



    if(TY==387 && CO==10 && TE==12){
        KEF = KEF2[0][0];
    }
    if(TY==387 && CO==10 && TE==18){
        KEF = KEF2[0][1];
    }
    if(TY==387 && CO==10 && TE==24){
        KEF = KEF2[0][2];
    }
    if(TY==387 && CO==10 && TE==36){
        KEF = KEF2[0][3];
    }
    if(TY==387 && CO==10 && TE==48){
        KEF = KEF2[0][4];
    }
    if(TY==387 && CO==10 && TE==60){
        KEF = KEF2[0][5];
    }

    if(TY==387 && CO==15 && TE==12){
        KEF = KEF2[1][0];
    }
    if(TY==387 && CO==15 && TE==18){
        KEF = KEF2[1][1];
    }
    if(TY==387 && CO==15 && TE==24){
        KEF = KEF2[1][2];
    }
    if(TY==387 && CO==15 && TE==36){
        KEF = KEF2[1][3];
    }
    if(TY==387 && CO==15 && TE==48){
        KEF = KEF2[1][4];
    }
    if(TY==387 && CO==15 && TE==60){
        KEF = KEF2[1][5];
    }

    if(TY==387 && CO==20 && TE==12){
        KEF = KEF2[2][0];
    }
    if(TY==387 && CO==20 && TE==18){
        KEF = KEF2[2][1];
    }
    if(TY==387 && CO==20 && TE==24){
        KEF = KEF2[2][2];
    }
    if(TY==387 && CO==20 && TE==36){
        KEF = KEF2[2][3];
    }
    if(TY==387 && CO==20 && TE==48){
        KEF = KEF2[2][4];
    }
    if(TY==387 && CO==20 && TE==60){
        KEF = KEF2[2][5];
    }

    if(TY==387 && CO==25 && TE==12){
        KEF = KEF2[3][0];
    }
    if(TY==387 && CO==25 && TE==18){
        KEF = KEF2[3][1];
    }
    if(TY==387 && CO==25 && TE==24){
        KEF = KEF2[3][2];
    }
    if(TY==387 && CO==25 && TE==36){
        KEF = KEF2[3][3];
    }
    if(TY==387 && CO==25 && TE==48){
        KEF = KEF2[3][4];
    }
    if(TY==387 && CO==25 && TE==60){
        KEF = KEF2[3][5];
    }

    if(TY==387 && CO==30 && TE==12){
        KEF = KEF2[4][0];
    }
    if(TY==387 && CO==30 && TE==18){
        KEF = KEF2[4][1];
    }
    if(TY==387 && CO==30 && TE==24){
        KEF = KEF2[4][2];
    }
    if(TY==387 && CO==30 && TE==36){
        KEF = KEF2[4][3];
    }
    if(TY==387 && CO==30 && TE==48){
        KEF = KEF2[4][4];
    }
    if(TY==387 && CO==30 && TE==60){
        KEF = KEF2[4][5];
    }

    if(TY==387 && CO==35 && TE==12){
        KEF = KEF2[5][0];
    }
    if(TY==387 && CO==35 && TE==18){
        KEF = KEF2[5][1];
    }
    if(TY==387 && CO==35 && TE==24){
        KEF = KEF2[5][2];
    }
    if(TY==387 && CO==35 && TE==36){
        KEF = KEF2[5][3];
    }
    if(TY==387 && CO==35 && TE==48){
        KEF = KEF2[5][4];
    }
    if(TY==387 && CO==35 && TE==60){
        KEF = KEF2[5][5];
    }

    if(TY==387 && CO==40 && TE==12){
        KEF = KEF2[6][0];
    }
    if(TY==387 && CO==40 && TE==18){
        KEF = KEF2[6][1];
    }
    if(TY==387 && CO==40 && TE==24){
        KEF = KEF2[6][2];
    }
    if(TY==387 && CO==40 && TE==36){
        KEF = KEF2[6][3];
    }
    if(TY==387 && CO==40 && TE==48){
        KEF = KEF2[6][4];
    }
    if(TY==387 && CO==40 && TE==60){
        KEF = KEF2[6][5];
    }

    if(TY==387 && CO==49 && TE==12){
        KEF = KEF2[7][0];
    }
    if(TY==387 && CO==49 && TE==18){
        KEF = KEF2[7][1];
    }
    if(TY==387 && CO==49 && TE==24){
        KEF = KEF2[7][2];
    }
    if(TY==387 && CO==49 && TE==36){
        KEF = KEF2[7][3];
    }
    if(TY==387 && CO==49 && TE==48){
        KEF = KEF2[7][4];
    }
    if(TY==387 && CO==49 && TE==60){
        KEF = KEF2[7][5];
    }

    SUMM = (SU*KEF-SU*(CO/100))/TE;
    SUMM = Math.round(SUMM * Math.pow(10,2))/ Math.pow(10, 2);
    FULL = SU * KEF;
    FULL = Math.round(FULL * Math.pow(10,2))/ Math.pow(10, 2);
    YP=(KEF-1)*12/TE*100;
    YP = Math.round(YP * Math.pow(10,2))/ Math.pow(10, 2);

    ggoo();
}
function ggoo(){
    summ.textContent = numberWithSpaces(SUMM);
    full.textContent = numberWithSpaces(FULL);
    ud.textContent = YP;
    kef.textContent = KEF;
}
