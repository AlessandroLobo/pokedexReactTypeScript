import { useRecoilState, useRecoilValueLoadable } from "recoil"

import { useState } from "react"

// recoil: atoms
import { atomPokemon } from "../../store/atoms"

// recoil: selectors
import { selectorGetPokemon } from "../../store/selectors"
import Card from "../../components/Card"

// ::
const HomePage = () => {
  // local: states
  const [searchPokemon, setSearchPokemon] = useState("")

  //recoil: states
  const [pokemon, setPokemon] = useRecoilState(atomPokemon)

  //recoil: loadable
  const getLoadablePokemon = useRecoilValueLoadable(selectorGetPokemon)

  console.log(getLoadablePokemon?.contents)

  return (
    <div>
      <input
        type="text"
        onChange={(event) => setSearchPokemon(event.target.value)}
      />
      <button
        onClick={() => {
          if (searchPokemon === "") {
            alert("Por favor, digite o nome do Pokémon")
          } else {
            setPokemon(searchPokemon)
          }
        }}
      >
        Procurar
      </button>

      {getLoadablePokemon?.state === "loading" && <div>Loading...</div>}
      {getLoadablePokemon?.state === "hasValue" &&
        getLoadablePokemon?.contents !== undefined && (
          <Card
            id={getLoadablePokemon?.contents?.id}
            type={getLoadablePokemon?.contents?.type}
            preview={
              getLoadablePokemon?.contents?.preview?.sprites?.versions?.[
                "generation-v"
              ]?.["black-white"].animated?.front_default
            }
            image={
              getLoadablePokemon?.contents?.sprites?.other?.dream_world
                ?.front_default
            }
            name={getLoadablePokemon?.contents?.name}
          />
        )}

      {getLoadablePokemon?.state === "hasValue" &&
        getLoadablePokemon?.contents === undefined &&
        searchPokemon !== ""}
      {getLoadablePokemon?.state === "hasError" && (
        <div>
          Ocorreu um erro ao buscar o Pokémon! verifique se você digitou
          correto.
        </div>
      )}
    </div>
  )
}

export default HomePage
