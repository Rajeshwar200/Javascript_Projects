const trailerBtn = document.querySelector('.trailer-btn')

const crossBtn = document.querySelector('.close-icon');

const trailerBox = document.querySelector('.trailer-container');

const video = document.querySelector('video');

trailerBtn.addEventListener('click', ()=>{

    trailerBox.classList.remove('active');


})


crossBtn.addEventListener('click', ()=>{

    trailerBox.classList.add('active');
    video.pause();
    video.currentTime = 0;
})


// function addRemove(btn, change){

//     btn.addEventListener('click', ()=>{
//         trailerBox.classList[change]('active');
//     })

// }


// addRemove(trailerBtn,'remove');

// addRemove(crossBtn,'add');



