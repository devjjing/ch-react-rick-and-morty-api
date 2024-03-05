import {useState} from 'react';
import {response} from "./API.ts";
import Character from "./Character.tsx";

interface CharacterType {
    id: number;
    name: string;
    status: string;
}

function Parent() {
    const [characters  ] = useState<CharacterType[]>(response.results);

// const filterCharacters = (searchTerm: string) => {
//     const newArr = response.filter((value:)) => {
//         return value.name.toLowerCase().startsWith(searchTerm) || value.status.toLowerCase().startsWith(searchTerm.toLowerCase())
//     });
//     setCharacters(newArr);
//     if (newArr.length === 0) {
//         setError("No Characters found");
//     } else {
//         setError(undefined)
//     }
//
// }

    return (
        <div>
            <ul>
                {characters.map((character) => (
                    <Character key={character.id}
                               id={character.id}
                               name={character.name}
                               status={character.status}/>
                ))}
            </ul>
        </div>
    );
}

export default Parent;
