const input = document.querySelector('input');

const lowerCaseOutput = document.querySelector('#lower-case span')
const upperCaseOutput = document.querySelector('#Upper-case span')
const camelCaseOutput = document.querySelector('#camel-case span')
const PascalCaseOutput = document.querySelector('#Pascal-case span')
const snakeCaseOutput = document.querySelector('#Snake-case span')
const kebabCaseOutput = document.querySelector('#kebab-case span')
const trimCaseOutput = document.querySelector('#Trim span')



function toCapitalizeFirstWordString(str){

   return str.charAt(0).toUpperCase() + str.slice(1,str.length);

}

function toCamelCase(str){

    const lowerCaseString = str.toLowerCase();
    const splitString = lowerCaseString.split(' ');

     const camelCaseArray = splitString.map( (word,i)=>{
    if(i===0) return word
    return toCapitalizeFirstWordString(word);


    })
   
    return camelCaseArray.join('')

}


function toPascalCase(str){

    const lowerCaseString = str.toLowerCase();
    const splitString = lowerCaseString.split(' ');

    const toPascalCaseArray = splitString.map((word,i)=>{

        return toCapitalizeFirstWordString(word);



    })

    return toPascalCaseArray.join('')

}


function toSnakeCase(str){

        let lowerCaseString = str.toLowerCase();

        // const splitString  = lowerCaseString.split(' ');

        // return splitString.join('_');

        return lowerCaseString.replaceAll(' ', '_')
        
}

function toKebabCase(str){

    const lowerCaseString = str.toLowerCase();

    // const splitString = lowerCaseString.split(' ');

    // return splitString.join('-')

    return lowerCaseString.replaceAll(' ', '-')

}

function trim(str){

    return str.replaceAll(' ','');

}






function updateScreen(){


    lowerCaseOutput.innerHTML = input.value.toLowerCase();
    upperCaseOutput.innerHTML = input.value.toUpperCase();
     camelCaseOutput.innerHTML = toCamelCase(input.value);
     PascalCaseOutput.innerHTML = toPascalCase(input.value);
     snakeCaseOutput.innerHTML = toSnakeCase(input.value);
     kebabCaseOutput.innerHTML = toKebabCase(input.value);
     trimCaseOutput.innerHTML = trim(input.value);
}


updateScreen();



input.addEventListener('input', updateScreen)