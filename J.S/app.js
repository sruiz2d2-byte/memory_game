
//Variables
let cards = []
let goodCards=[]

let img='';
let img2='';


let i=0;
let B=0;

const layout = document.querySelector('#layout');
const gBox=document.querySelector('#gBox');

Eventos()

function Eventos() {
    document.addEventListener('DOMContentLoaded', orderCards)






    layout.addEventListener('click', showCards
        //console.log(prueba.classList);

        //console.log(e.target.classList.contains('img'))

    )
}



//Funciones 
function showCards (e){
    
    cards=(e.target.parentElement).parentElement


    if(cards.classList.contains('card')){

        //Si las dos variables estan llenas return
        if(img!=''&&img2!=''){
            console.log('lleno los 2')


            return
        }
       
       //img1
        if(img==''){
            console.log('lleno img')
            img=cards.querySelector('div img');

            //Comprueba que la tarjeta selecionada no sea una ya completada
            if(goodCards.includes(img.getAttribute('src'))){
                console.log('esta tarjeta esta completada')
                img='';
                return
            }

            img.style.opacity='1';
        }

        //img2
        else if(img!=''){
            img2=cards.querySelector('div img');

             //Comprueba que la tarjeta selecionada no sea una ya completada
            if(goodCards.includes(img2.getAttribute('src'))){
                console.log('esta tarjeta esta completada')
                img2='';
                return
            }
             //Comprueba que no hayas selecionado la misma tarjeta 2 veces
            if(img2==img){
                setTimeout(()=>{
                    img2='';
        
                },1)
                return
            }
            console.log('lleno img2')
           
            img2.style.opacity='1';

            
            //Comprobación de pares
            if(img.getAttribute('src')==img2.getAttribute('src')){
                let goodCard=img.getAttribute('src');

                goodCards=[...goodCards,goodCard];
                console.log(goodCards);

                //Identifica cuando terminaste el memorama
                if(goodCards.length==10){
                    gBox.style.display='block';
                }

                
                (img.parentElement.parentElement.classList).add('fondoCarta');
                (img2.parentElement.parentElement.classList).add('fondoCarta');
                
        
                img.style.opacity='0.5';
                img2.style.opacity='0.5';

                img='';
                img2='';
                return
            }

            //Oculta las cartas si no son pares 
            setTimeout(()=>{
               
                img.style.opacity='0';
                img2.style.opacity='0';
        
                img='';
                img2='';
        
            },1000)
            
        }   
    }
}






function orderCards() {
   

    //Creamos un arreglo con 10 numeros aletorios del 1 al 20 sin repetir 
   let orderC = [];
   let j=0;
    while (j < 20) {
        let a = parseInt(Math.random() * (1 + 20 - 1) + 1);
      
        if (!orderC.includes(a)) {
            orderC[j] = a;
            
            j++;
           
        }
    }
    

    //Guardas las 20 cards en un arreglo 
   for (let i = 0; i < 20; i++) {
        cards[i] = layout.children[i];
        console.log(layout.children[i])
        
    } 

   cards.forEach((card,i) => {
        card.style.order= `${orderC[i]}`;
    });


}

