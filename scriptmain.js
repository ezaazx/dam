window.onscroll = () => {
    document.querySelector(".zodiac").style.marginTop= scrollY*1.5 + "px";

    document.querySelector(".zodiac1").style.marginTop= scrollY*1.5 + "px";


    document.querySelector(".cloud").style.marginTop= scrollY*1.5 + "px";
    document.querySelector(".cloud1").style.marginTop= scrollY*1.5 + "px";

    document.querySelector(".cloud").style.marginRight= scrollY/2 + "px";
    document.querySelector(".cloud1").style.marginRight= scrollY/2 + "px";



    document.querySelector(".mnt1").style.marginRight= scrollY/2 + "px";
    
    document.querySelector(".mnt2").style.marginLeft= scrollY/2 + "px";

    document.querySelector(".ami").style.marginTop= scrollY/ 2.5 + "px";


};

