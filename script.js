let menubar = document.querySelector('#menu-bar')
let nav = document.querySelector('.navbar')


menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    nav.classList.toggle('active')
  
    
}


const sr = ScrollReveal ({
    distance : '45px',
    duration : 2700,
    reset : true,
  })

  sr.reveal('.myimageabout',{ delay:150, origin:'left' })
  sr.reveal('.about-text-content',{ delay:150, origin:'right' })
  sr.reveal('.home-image',{ delay:150, origin:'left' })
  sr.reveal('.home-text-content',{ delay:150, origin:'right' })

  sr.reveal('.quality-content',{ delay:150, origin:'left' })
  sr.reveal('.qulity-image',{ delay:150, origin:'right' })
  sr.reveal('.gallery-image',{ delay:150, origin:'top' })
  sr.reveal('.menu-food-content',{ delay:150, origin:'top' })
  sr.reveal('.menu-food-text',{ delay:150, origin:'bottom' })
  sr.reveal('.food-main-content',{ delay:150, origin:'bottom' })
  sr.reveal('.before',{ delay:150, origin:'bottom' })
  sr.reveal('.footer-logo',{ delay:150, origin:'bottom' })























































// let menubar = document.querySelector('#menubar');
// let mynav = document.querySelector('.navbar');



// menubar.onclick = () =>{
//     menubar.classList.toggle('fa-times')
//     mynav.classList.toggle('active')
// }

// document.querySelector('#loginbtn').onclick = () =>{
//     document.querySelector('.login-form').classList.toggle('active');
//   }
//   document.querySelector('#closeloginform').onclick = () =>{
//     document.querySelector('.login-form').classList.remove('active');
//   }
