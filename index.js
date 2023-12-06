let ul = document.querySelector('#ul');
let js_m = document.querySelector('#js-m');
let js_x = document.querySelector('#js-x');

js_m.addEventListener('click',function(){
    ul.style.right = '0%';
    ul.style. transition = '0.6s';
})

js_x.addEventListener('click', function(){
    ul.style.right = '-100%';
    ul.style. transition = '1s';
});

// let dark_btn = document.querySelector('#dark-btn');

// dark_btn.addEventListener('click',function(){
//     body.style.color = "green";
// });

// let  = document.querySelector('#dark-btn');

// btn.addEventListener('click',function(){
//     btn.classList.toggle('click');
// });
