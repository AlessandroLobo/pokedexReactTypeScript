import { useRecoilState, useRecoilValueLoadable } from "recoil";

import { useState } from 'react'

// recoil: atoms
import { atomPokemon } from "../../store/atoms";

// recoil: selectors
import { selectorGetPokemon } from "../../store/selectors";
import Card from "../../components/Card";



// ::
const HomePage = () => {
  // local: states
  const [searchPokemon, setSearchPokemon] = useState("")

  //recoil: states
  const [pokemon, setPokemon] = useRecoilState(atomPokemon);

  //recoil: loadable
  const getLoadablePokemon = useRecoilValueLoadable(selectorGetPokemon)

  console.log(getLoadablePokemon?.contents);



  return (
    <div>
      <input type="text" onChange={(event) => setSearchPokemon(event.target.value)} />
      <button onClick={() => setPokemon(searchPokemon)}>Procurar</button>
      {getLoadablePokemon?.state === "loading" && <div>Loading...</div>}
      {getLoadablePokemon?.state === 'hasValue' &&
        getLoadablePokemon?.contents !== undefined && (
          <Card
            image={getLoadablePokemon?.contents?.sprites?.other?.dream_world?.front_default}
            name={getLoadablePokemon?.contents?.name}
          />

        )}
    </div>
  );
};

export default HomePage

//tempo video 12:21