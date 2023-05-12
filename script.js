function soruUret(){

    //!rastgele 2 sayı 
    let sayilar = [];
    for(let i=0;i<2;i++){
      let sayi = Math.floor(Math.random() * 10);
      sayilar.push(sayi)
    }
  
    //!rastegele bir işlem üretiyorum
    let islemler = ["+","-","*","/"];
    let rstİslem =  islemler[Math.floor(Math.random() * islemler.length)]
    
    //!ürütilen sayilar ve işlemi yan yana birleştirme
    totalSayi = sayilar[0] + rstİslem + sayilar[1]
  
    //!eval ile bana gelen string ifadeyi komutsal olarak işleme alma
    totalSayiNumber = parseInt(eval(totalSayi));
  
    document.querySelector(".soru").innerHTML=totalSayi;
    
    console.log(parseInt(totalSayiNumber))
    
  }
   //!sayfa başladığında fonksiyonum çalışsın ve bana değerler gelsin
  soruUret();
  
  //!kalan süreyi 1 dakika olarak hazır yapı kullandım
  dogruCevapSayisi = 0;
  sayac = 60;
  interval = setInterval(function() { //*sürekli olarak saniyeyi güncelledim
    document.querySelector(".sayac").innerHTML=`Kalan Saniyeniz : ${sayac}` //*saniye her güncellendiğinde saniyeyi ekrana yazdım
    sayac--; //*saniyeyi geriye doğru 1 eksilttim
    if (sayac < 0) { 
      clearInterval(interval); //*saniyem sıfırından küçük olduğu zaman clearInterval ile zamanlayıcı durdurdum
      document.querySelector(".sayac").innerHTML=`Süreniz Doldu! Puanınız:  ${dogruCevapSayisi*5}`;
      
    }
  }, 1000); //*süre bandını ayarlıyorum
  
  
  document.querySelector(".cevapla").addEventListener("click",function(){
    let girilenDeger = document.querySelector(".girilenDeger").value; //*input ile kullanıcıdan cevabını aldım
    if(girilenDeger==totalSayiNumber){ //*fonsksiyondan gelen random işlem doğruysa yani inputa eşitse
      document.querySelector(".cevapKontrol").innerHTML="DOĞRU BİLDİNİZ! (+2 saniye)"
      sayac+=2; //*soruyu her bildiğinde saniyeye 2 ekliyorum
      dogruCevapSayisi++; //*soruyu her bilidğinde doğru cevap sayısını arttırıyorum
      soruUret(); //*soruyu bildiği için yeni getiriyorum ve fonksiyonumu çalıştıryorum
    }
    else{
      document.querySelector(".cevapKontrol").innerHTML="HATALI CEVAP! (-5 saniye)"
      sayac-=5; //*soruyu yanlış bildiğinde saniyeden 5 eksilteceğim
    }
  })
  
  atlamaSayisi = 3; //*soruyu atlama sayısı belirliyorum
  document.querySelector(".atla").addEventListener("click",function(){
    atlamaSayisi-=1; //*soruyu her atladığımda -1 olacak
    document.querySelector(".atla").innerHTML=`Soruyu Atla! ${atlamaSayisi} Hak!`
    if (atlamaSayisi==0){ //*atlama sayısı sıfır olduğunda 
      document.querySelector(".atla").remove(); //*elementleri kaldıracak
      
    }
    soruUret();
  
  })