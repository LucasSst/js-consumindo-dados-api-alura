const city = document.querySelector('#cidade');
const publicPlace = document.querySelector('#endereco');
const state = document.querySelector('#estado')
const errorMessage = document.querySelector('#erro')
async function searchCEP(cep){
    errorMessage.innerHTML ='';
    try{
        let consultaCEP = await fetch (`https://viacep.com.br/ws/${cep}/json`);
        let consultaCEPJson = await consultaCEP.json();

        if(consultaCEPJson.erro){
            throw Error('CEP inexistente ');
        }

        city.value = consultaCEPJson.localidade;
        publicPlace.value = consultaCEPJson.logradouro;
        state.value = consultaCEPJson.uf;
        console.log(consultaCEPJson);
        return consultaCEPJson
    }catch (erro) {
        errorMessage.innerHTML = `<p>CEP inválido. Tente Novamente!</p>`;
        console.log(erro);
    }
}

const cep = document.querySelector('#cep');
cep.addEventListener('focusout', () => searchCEP(cep.value));