const ligne1 = document.querySelector('#ligne1');
const ligne2 = document.querySelector('#ligne2');
const coup = document.querySelector('#coup');

const NbUsers = document.querySelector('#nbuser')
let enter = document.querySelector('#valider')


function hideButton() {
    document.querySelector('#valider').disabled = true
}
function showButton() {

    document.querySelector('#valider').disabled = false
}
document.addEventListener('keyup', function (event) {
    if (event.key === 'Enter' && event.target === NbUsers) {
        Valider();
        NbUsers.value = "";
    }
});

let Ligne1 = ""; let Ligne2 = ""; let Coup = "";
Ligne1 = `<h4> J'ai géneré un nombre entre 1 et 50 inclus </h4>`
Ligne2 = `<h5>Essayez de le deviner en proposant ci-dessous</h5><br>`
Coup = `Nombre de coups : `
ligne1.innerHTML = Ligne1;
ligne2.innerHTML = Ligne2;
coup.innerHTML = Coup;
let x = Math.floor(Math.random() * 50) + 1
let compt = 0
Valider = () => {

    let nbUsers = Number(NbUsers.value)

    console.log(x)
    compt++
    Coup = `<p>Nombre de coups : ${compt}`
    afficherTab(compt, x, nbUsers)


    coup.innerHTML = Coup;
}
function afficherTab(compteur, x, userNb) {

    if (x === userNb) {
        Ligne1 = `<h4>Bravo, vous avez trouvé en ${compteur} coups !</h4><br>`;
        Ligne2 = `<h5>Le nombre mystère était le ${x}</h5> <br>`;
        hideButton()
        console.log(Ligne2)
    }
    else if (userNb < 1 || userNb > 50 || userNb === Number) {
        Ligne1 = `<h4>Le nombre se trouve entre 1 et 50 !! </h4><br>`
        Ligne2 = `<h5>Recommence !</h5>`
    }
    else if (x < userNb) {
        Ligne1 = `<h4>Le nombre mystère est plus petit que ${userNb} </h4><br> `
        Ligne2 = `<h5>Essayez de le deviner en proposant ci-dessous</h5>`
    }
    else if (x > userNb) {
        Ligne1 = `<h4>Le nombre mystère est plus grand que ${userNb}</h4><br> `
        Ligne2 = `<h5>Essayez de le deviner en proposant ci-dessous</h5>`
    }
    else {
        Ligne1 = `<h4>Il faut écrire un nombre entre 1 et 50 !!</h4><br> `
        Ligne2 = `<h5>Essayez de le deviner en proposant ci-dessous</h5>`
    }
    ligne1.innerHTML = Ligne1;
    ligne2.innerHTML = Ligne2;
}

Rejouer = () => {

    Ligne1 = `<h4>J'ai généré un nombre entre 1 et 50</h4><br>`
    Ligne2 = `<h5>Essayez de le deviner en proposant ci-dessous</h5>`;
    Reset()
    showButton()
    ligne1.innerHTML = Ligne1;
    ligne2.innerHTML = Ligne2;
}

Reset = () => {
    NbUsers.value = ""
    Ligne1 = `<h4>J'ai généré un nombre entre 1 et 50</h4><br>`
    Ligne2 = `<h5>Essayez de le deviner en proposant ci-dessous</h5>`;
    compt = 0
    x = Math.floor(Math.random() * 50) + 1
}
