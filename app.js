const navToggle = document.querySelector('.nav--toggle--btn');
const close =document.getElementById('close');
const open = document.getElementById('open');
const navMain = document.querySelector('.nav__main');


let navToggleOpen = 1;

const navOpen = () =>{

    navMain.style.display = 'block';
    open.style.visibility = 'hidden';
    close.style.visibility = 'visible';

}

const navClose = () =>{
    
    navMain.style.display = 'none';
    open.style.visibility = 'visible';
    close.style.visibility = 'hidden';
}


navToggle.addEventListener("click",()=> {

    if(navToggleOpen === 1){

        navOpen();

        navToggleOpen = 0;

    } else {
        
        navClose();

        navToggleOpen = 1;
    }

        
});

