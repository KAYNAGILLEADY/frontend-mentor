const idAdvice = document.getElementById('id-advice');
const advice = document.getElementById('advice');
const dice = document.getElementById('dice');

const url = `https://api.adviceslip.com/advice`;

const fetchApi = async() => {
  try{
    const response = await fetch(url,
      { method: 'GET', mode: 'cors', cache: 'no-cache' })
    if (response.ok) {
      return Promise.resolve(response.json())
        .then(e => e.slip)
    }
    else {
      return Promise.reject(response)
    }
  }
  catch (error){
    advice.innerHTML = 'Erro!!'
  }
}

const renderTexts = () => {
  idAdvice.innerHTML = "Loading..."
  advice.innerHTML = "Loading..."

  setTimeout(async() => {
    await fetchApi().then(e => {
      idAdvice.innerHTML = `ADVICE #${e.id}`
      advice.innerHTML = `"${e.advice}"`
    })
    .catch(e => {
      console.log(e.status)
    });
  }, 500);
}

dice.addEventListener("click", (e) => {
  e.stopPropagation();
  renderTexts();
});


renderTexts();