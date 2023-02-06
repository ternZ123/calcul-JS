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
let IMC=[12,18,24,36,48,60];
let insRate=[5,10,15,20,25,30,35,40,49]
let TYmas=[390,387]

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

    teIndexValue = IMC[+teIndex]//Я вывел все кридитнные месяцы в отдельный массив и уже работаю с масивом так как индекс у нас есть
    tetext.value = teIndexValue;
    TE=teIndexValue;
    calkk();
}, false);
te.addEventListener('input', function () {
    teIndex = this.value;

    teIndexValue = IMC[+teIndex]

    tetext.value = teIndexValue;
    TE=teIndexValue;

}, false);
tetext.addEventListener('input', function(){

    teIndexValue = this.value;

    te.value = IMC.indexOf(+teIndexValue) // находим в массиве наше значение и выводим индекс

    TE=teIndexValue;

    calkk();

})

let coIndex = 1;
let coIndexValue = 5;


co.addEventListener('change', function () {
    coIndex = this.value;

    coIndexValue=insRate[coIndex]//Я вывел все проценты в отдельный массив и уже работаю с масивом так как индекс у нас есть

    cotext.value = coIndexValue;
    calkk();
    coprofloat = (su.value/100)*coIndexValue;
    coprofloat = Math.round(coprofloat * Math.pow(10,2))/ Math.pow(10, 2);
    copro.textContent = numberWithSpaces(coprofloat);
}, false);
co.addEventListener('input', function () {
    coIndex = this.value;

    coIndexValue=insRate[coIndex]

    cotext.value = coIndexValue;
    CO = cotext.value;
}, false);
cotext.addEventListener('input', function(){

    coIndexValue = this.value;
    /*ищем массиве индекс входящего значения */
    co.value=insRate.indexOf(+coIndexValue)

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
    let i ,j
    for (let tyI of TYmas){
        if (TY===390){
            i= insRate.indexOf(+CO)
            j= IMC.indexOf(+TE)
            KEF = KEF1[i][j];
        }else if (TY===387){
            i= insRate.indexOf(+CO)
            j= IMC.indexOf(+TE)
            KEF = KEF2[i][j];
        }
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
