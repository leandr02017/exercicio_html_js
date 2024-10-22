
const classeA = document.getElementById('classeA')
const classeB = document.getElementById('classeB')
const form = document.getElementById('form-campos')

function validaCampo(classeA, classeB){
    let numeroA = Number(classeA.value);
    let numeroB = Number(classeB.value);

    return numeroB > numeroA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = '<img src="./imagem/sucess.jpg" alt="sucess" width="800px"/>';
    const mensagemErro = '<img src="./imagem/errrou.jpg" alt="errou" width="800px"/>';
    
    formEValido = validaCampo(classeA, classeB);
    
    if (formEValido) {
        const containerImagemSucesso = document.querySelector('.sucess-message');
        containerImagemSucesso.innerHTML = mensagemSucesso;
        containerImagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';

        setTimeout(function() {
            containerImagemSucesso.style.display = 'none';
        }, 2000);

        
    } else {
        const containerImagemErro = document.querySelector('.error-message');
        containerImagemErro.innerHTML = mensagemErro;
        containerImagemErro.style.display = 'block';

       
        campoA.value = '';
        campoB.value = '';

        setTimeout(function() {
            containerImagemSucesso.style.display = 'none';
        }, 2000);
       
    }

})
