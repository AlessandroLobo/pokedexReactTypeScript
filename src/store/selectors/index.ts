import { selector } from "recoil"

//api
import { atomPokemon } from "../atoms"

//recoil:atoms
import { requester } from "../../api/requester"


export const selectorGetPokemon = selector({
    key: "selectorPokemonLength",
    get: async ({ get }) => {
        const pokemon = get(atomPokemon)

        if (pokemon) {
            const { data } = await requester({
                baseURL: "https://pokeapi.co/api/v2/"
            }).get(`/pokemon/${pokemon.toLowerCase().trim()}`)

            return data
        }
    }
})