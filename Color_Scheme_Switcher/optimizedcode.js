const button = document.querySelectorAll('.button');
const body = document.querySelector('body');



console.log(button)


button.forEach( (btn)=>{

    console.log(btn);

    btn.addEventListener('click',function (e){
        console.log(e)
        console.log(e.target)

        // let validColors = ["white","yellow","green","blue","violet","black","grey"]

        // if(validColors.includes(e.target.id)){
        //     body.style.backgroundColor = e.target.id
        // }


        const color = e.target.id;
        body.style.backgroundColor = color;

    })
})
