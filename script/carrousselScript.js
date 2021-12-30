

const arrayImg = document.querySelectorAll('img');

const countImg = arrayImg.length;
let count = 0;

const previous = document.querySelector(".left");
const following = document.querySelector(".rigth");

/**
 * remode attribut 
 * @param {NodeList<HTMLElement>} array 
 */
function removeClass(array){
    array[count].classList.remove('active');
}

/**
 * add attribut
 * @param {NodeList<HTMLElement>} array 
 */
function addClass(array){
    array[count].classList.add('active');
}

/**
 * add previous image
 */
function precedent(){
    
    removeClass(arrayImg);



        if(count > 0){
            count--
        } else {
            count = 0;
        }

        
       
    addClass(arrayImg);   
    
}
previous.addEventListener("click",precedent);

/**
 * follow next image
 */
function suivant (){
    
    removeClass(arrayImg);

    if(count < countImg - 1){
        count++
    }else {
        count = 0;
    }

    
    addClass(arrayImg);
    

}
following.addEventListener("click",suivant);
