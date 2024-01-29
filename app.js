//recuperation des boutons sur l'index
const buttons = [...document.querySelectorAll('.button')];
 //recuperation des data-key
const listeKeyCode = buttons.map(button =>button.dataset.key);

const ecran = document.querySelector('.ecran_affiche')

//L'ecoute des touches
document.addEventListener('keydown', (e) =>{
    const valeur = e.keyCode.toString();
    calculer(valeur);
});

document.addEventListener('click', (e)=>{
    const valeur = e.target.dataset.key;
    calculer(valeur);
})

const calculer = (valeur) => {
    if (listeKeyCode.includes(valeur)){
        switch(valeur){
            case '8':
                ecran.textContent = "";
                break;
            case '187':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeyCode = listeKeyCode.indexOf(valeur);
                const touche = buttons[indexKeyCode];
                ecran.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error' , (e) => {
    alert('Une erreur est survenue dans votre calcul: '+e.message);
});