import { useState, useEffect } from "react";
import { useFetch } from "../fetch/fetch.hooks";
import { getCocktels } from "./cockteles.api";

export const useCockteles = () => {
    const [cocktelList, updateCocktelList] = useState([]);
    useEffect( () => {
        const loadCocktels = async () => {
            const cocktels = await getCocktels();
            updateCocktelList(cocktels);
        }
        loadCocktels()
    },[])
    return [cocktelList];
}

export const useGetProductInfoByName = (name) => {
    const { data } = useFetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)

    return data ? data.drinks : []
}