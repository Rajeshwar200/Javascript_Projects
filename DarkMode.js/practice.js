const main = document.querySelector('#mainbox');
const small = document.querySelector('#smallbox');
const container = document.querySelector('.container');

const body = document.querySelector('body');


let isFullDarkMode = JSON.parse(localStorage.getItem('fullDarkModeCheckbox'));
let isContainerDarkMode = JSON.parse(localStorage.getItem('containerDarkModeCheckBox'));


if(isFullDarkMode){
    main.checked = true;
  
    body.classList.add('dark')
}
if(isContainerDarkMode){
    small.checked = true;
    container.classList.add('dark')

}


function changeState(checkbox, elementToChange, localStoragekey ){

    
    if(checkbox.checked){

        elementToChange.classList.add('dark');
        localStorage.setItem(localStoragekey, true)
    }
    else{
        elementToChange.classList.remove('dark');
        localStorage.setItem(localStoragekey, false)
    }


}


            main.addEventListener('change', ()=>{


                changeState(main, document.body, 'fullDarkModeCheckbox')

                small.checked = main.checked
                changeState(small, container, 'containerDarkModeCheckBox')


            })





            small.addEventListener('change',()=>{

                changeState(small, container, 'containerDarkModeCheckBox')
                
            })








// main.addEventListener('change', ()=>{

    //     if(main.checked){
    //         document.body.classList.add('dark');
    //     }
    //     else{
    //         document.body.classList.remove('dark');
    //     }
    
    //     small.checked = main.checked
    //     if(small.checked){
    //         container.classList.add('dark')
    //     }
    //     else{
    //         container.classList.remove('dark')
    //     }
    
    // })
    
    // small.addEventListener('change', ()=>{
    
    //     if(small.checked){
    //         container.classList.add('dark')
    //     }
    //     else{
    //         container.classList.remove('dark')
    //     }
    
    
    // })
    