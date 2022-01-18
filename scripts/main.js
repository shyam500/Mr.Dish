const textInp = document.querySelector('#textinp'),
    btn = document.querySelector('#searchbtn'),
    result = document.querySelector('#result'),
    favItems = document.querySelector('#fav'),
    resHead = document.querySelector('#resHead');

btn.addEventListener('click', () => {
    if (textInp.value !== '') {
        inpFunc(textInp.value);
        textInp.value = '';
        result.innerHTML = '';
    } else alert('Enter a dish to search');
});

async function inpFunc(text) {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`);
        const data = await res.json();
        if (data.meals !== null) {
            resHead.textContent = `Showing results for ${text}`;
            data.meals.forEach(i => createFunc(i));
        }
        else alert('Sorry No Dish Found');
    } catch (err) {
        alert('Network Error,Check your connection');
    }
};

function createFunc(item) {
    result.innerHTML += `
    <section class="box" id=${item.idMeal}>
        <h2 class='boxhead' >${item.strMeal}</h2>
        <img src=${item.strMealThumb} alt=${item.strMeal} class='boxImg'>
        <p>INSTRUCTIONS </p>
        <p class="boxPara">${item.strInstructions}</p>
</section>
`;
};
