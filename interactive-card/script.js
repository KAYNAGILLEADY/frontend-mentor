// Campos do formulário
const formCampos = [document.getElementById('name'), 
    document.getElementById('number'),
    document.getElementById('mouth'),
    document.getElementById('year'),
    document.getElementById('cvc')];

// Campos do cartão
const cardName = document.getElementById('card-name');
const cardNumber = document.getElementById('card-number');
const cardMM = document.getElementById('card-mouth');
const cardYY = document.getElementById('card-year');
const cardCVC = document.getElementById('card-cvc');

const afterP = document.querySelectorAll('.after-p');
const form = document.querySelector('.form');
const finish = document.querySelector('.finish');

// Botão "Confirm" no formulário
const confirmButton = document.getElementById('button');




const validationInput = (input, index) => {
    if (input.value == '') {
        afterP[index].innerHTML = `Can't be blank`;
    }
    else if (input.value.length > 16 && index == 1) {
        afterP[index].innerHTML = `Wrong format, numbers only`;
    }
    else if (input.value.length > 2 && index == 2) {
        afterP[index].innerHTML = `Wrong format, numbers only`;
    }
    else if (input.value.length > 3 && index == 3) {
        afterP[index].innerHTML = `Wrong format, numbers only`;
    }
    else {
        afterP[index].innerHTML = ``;
    }
}

formCampos.forEach((e) => 
    e.addEventListener('keyup', (e) => {
        const valueInput = e.target.value == '' 
            ? e.target.placeholder.substring(4) 
            : e.target.value;

        switch(e.target.id) {
            case 'name':
                validationInput(e.target, 0);
                cardName.innerHTML = valueInput;
                break;
            
            case 'number':
                validationInput(e.target, 1);
                let parteValue = [
                    valueInput.substring(0,4),
                    valueInput.substring(4,8),
                    valueInput.substring(8,12),
                    valueInput.substring(12,16),
                ];
                cardNumber.innerHTML = 
                    `${parteValue[0]} ${parteValue[1]} ${parteValue[2]} ${parteValue[3]}`;
                break;
        
            case'mouth':
                validationInput(e.target, 2);
                cardMM.innerHTML = valueInput;
                break;

            case'year':
                validationInput(e.target, 2)
                cardYY.innerHTML = valueInput;
                break;

            case'cvc':
                validationInput(e.target, 3)
                cardCVC.innerHTML = valueInput;
                break;
            
            default: console.log('campo não encontrado');
        }
    })
)


function submit () {
    form.style.display = 'none';
    finish.style.display = 'block';
    formCampos.forEach(e => {e.value = ''});
}

confirmButton.addEventListener('click', (e) => {
    e.preventDefault();

    const condicao = formCampos[0].value != '' && formCampos[1].value.length == 16 && formCampos[2].value.length == 2 && parseInt(formCampos[2].value) <= 12 && parseInt(formCampos[2].value) > 0 && formCampos[3].value.length == 2 && formCampos[4].value.length == 3;

    if (condicao == true) {
        submit();
    }
    else {
        console.log('Está faltando algo.');
    }
})
