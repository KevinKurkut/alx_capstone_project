let menuList=document.getElementById("menuList");
menuList.style.maxHeight="0px";

function toggleBtn(){
    if(menuList.style.maxHeight=="0px"){
        menuList.style.maxHeight="300px";
        // menuList.style.filter="blur(0.4)";
    }else{
        menuList.style.maxHeight="0px";
    }
}