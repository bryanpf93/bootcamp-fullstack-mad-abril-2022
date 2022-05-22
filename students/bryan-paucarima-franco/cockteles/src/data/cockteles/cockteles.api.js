
export const getCocktels = async () => {
    const r = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`)
    const data = await r.json();
    const cocktelList = data.drinks;
    return cocktelList;
}

