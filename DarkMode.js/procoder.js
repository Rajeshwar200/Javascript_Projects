const fullDarkModeCheckBox = document.querySelector('#checkbox')

const containedDarkModeCheckBox = document.querySelector('#newcheck')

const container = document.querySelector('.container')


let isFullDarkMode = JSON.parse(localStorage.getItem('fullDarkModeCheckBox')) || false;
let isContainedDarkMode = JSON.parse(localStorage.getItem('containedDarkModeCheckBox')) || false;


if (isFullDarkMode) {
    fullDarkModeCheckBox.checked = true;
    
    document.body.classList.add('dark');



}
if (isContainedDarkMode) {
    containedDarkModeCheckBox.checked = true;
    
    container.classList.add('dark');


}









fullDarkModeCheckBox.addEventListener('change', function () {

    changeFullDarkMode();
    containerCheck();

})


containedDarkModeCheckBox.addEventListener('change', containerCheck)


function DarkModeChange(checkbox, element, localStoragekey) {
    if (checkbox.checked) {
        element.classList.add('dark');
        localStorage.setItem(localStoragekey, true);
    }
    else {
        element.classList.remove('dark')
        localStorage.setItem(localStoragekey, false);
    }

}

function changeFullDarkMode() {


    DarkModeChange(fullDarkModeCheckBox, document.body, 'fullDarkModeCheckBox');


    containedDarkModeCheckBox.checked = fullDarkModeCheckBox.checked
    localStorage.setItem('containedDarkModeCheckBox', fullDarkModeCheckBox.checked)
}


function containerCheck() {

    DarkModeChange(containedDarkModeCheckBox, container, 'containedDarkModeCheckBox');
}





