console.log('inicio script');
let show = true
const btnTheme = document.getElementById('tema')
console.log('pegou o botao');

const supportsDarkMode = window.matches;

const spotfy = document.getElementById('img-spotfy')
const facebook = document.getElementById('img-facebook')
const linkedin = document.getElementById('img-linkedin')
const instagram = document.getElementById('img-instagram')
const youtube = document.getElementById('img-youtube')
const x = document.getElementById('img-x')


function enableDarkMode() {
    // Cria a classe dark-mode para estilezar 
    document.body.classList.add('dark-mode');

    // Altera  o icone das redes sociais para a cor verde (usado no dark-mode)
    facebook.setAttribute('src', './Assets/Imagens/facebook-verde.svg')
    linkedin.setAttribute('src', './Assets/Imagens/linkedin-verde.svg')
    instagram.setAttribute('src', './Assets/Imagens/instagram-verde.svg')
    spotfy.setAttribute('src', './Assets/Imagens/spotfy-verde.svg')
    youtube.setAttribute('src', './Assets/Imagens/youtube-verde.svg')
    x.setAttribute('src', './Assets/Imagens/x-verde.svg')

}

// Função para desativar o modo escuro
function disableDarkMode() {
    document.body.classList.remove('dark-mode');
}

function toggleDarkMode() {
    if (document.body.classList.contains('dark-mode')) {
        disableDarkMode();
        console.log('removeu');
    } else {
        enableDarkMode();
        console.log('adicionou');
    }
}

// Verifica se o usuário tem preferência por modo escuro e aplica-o se tiver
if (supportsDarkMode) {
    enableDarkMode();
}

document.getElementById('brn-tema').addEventListener('click', toggleDarkMode);
console.log('Fim');