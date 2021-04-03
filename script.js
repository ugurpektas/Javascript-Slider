    //araç bilgileri dizisi
var models = [
    {
        name: 'Bmw 418d',
        image: 'img/bmw.jpg',
        link: 'https://www.arabam.com/ilan/galeriden-satilik-bmw-4-serisi-418i-gran-coupe-prestige/2016-bmw-418i-grand-coupe-prestige-harman-kardon-isitma-full/17292601'
    },
    {
        name: 'Mazda CX-3',
        image: 'img/mazda.jpg',
        link: 'https://www.arabam.com/ilan/galeriden-satilik-mazda-cx-3-1-5-power/hatasiz-boyasiz-degisen-yok-ilk-elden-2015-model-mazda-cx-3/17273934'
    },
    {
        name: 'Volvo S60',
        image: 'img/volvo.jpg',
        link: 'https://www.arabam.com/ilan/galeriden-satilik-volvo-s60-2-0-d-r-design/vip-motors-dan-degisensiz-volvo-s60-2-0-d-r-desing/17252772'
    },
    {
        name: 'Skoda SUPER-B',
        image: 'img/skoda.jpg',
        link: 'https://www.arabam.com/ilan/galeriden-satilik-skoda-superb-1-6-tdi-style/2017-model-100-000-km-de-hatasiz-cam-tavanli-servis-bakimli-dizel-otomatik-superb/17255218'
    },
    {
        name: 'Honda CIVIC',
        image: 'img/honda.jpg',
        link: 'https://www.arabam.com/ilan/galeriden-satilik-honda-civic-1-6-i-vtec-elegance/otomatik-sonruflu-bol-ekstrali-honda-civic-1-6-i-vtec-elegance-2008-model-diyarbakir/17158614'
    }
];

var index = 0;
var slaytCount = models.length;
var settings = {
    duration : '2000',
    random : false
};
var interval;

init(settings);

    //sol ok butonu
document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);
});
    //sağ ok butonu
document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);
});
    //ok üzerine gelindiğinde
document.querySelectorAll('.arrow').forEach(function(item){ 
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);    
    })
});
    //ok üzerinden çıktığımızda
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
});

//setTimeOut => belli bir saniye sonra başlatmak için kullanılan kod
//setInterval => belli bir saniye aralığında bir sürekli tekrar eden kod
//clearInterval => setInterval ' kodunu durdurmaya yarar.
//math.floor() => virgüllü sayıları alta yuvarlar
//math.random() => 0 ile 1 arasında random sayı üretir.

function init(settings){    
    var prev;
    interval = setInterval(function(){
        if(settings.random){    //settings'in içerisindeki değer varsayılan olarak true ise slayt random devam edicek
            //random index üretmek
            do {
                index = Math.floor(Math.random() * slaytCount);
            }while (index == prev)  // eşitlik olduğu sürece döngü devam edicek
            prev = index;
        }else {                 // false ise slayt sıra ile devam edicek
            //artan index
            if(slaytCount == index+1 ){
                index = -1;
            }
            showSlide(index);
            index++;
        }

        console.log(index);
        showSlide(index);

    },settings.duration)
}


function showSlide(i) {

    index = i;
    if (i<0) {
        index = slaytCount - 1;
    }
    if (i >= slaytCount){
        index = 0;
    }

    //başlık isim
document.querySelector('.card-title').textContent = models[index].name;
    //resim
document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    //link
document.querySelector('.card-link').setAttribute('href',models[index].link);
}