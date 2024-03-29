import {useState} from 'react';
import {response} from "./API.ts";

interface CharacterType {
    id: number;
    name: string;
    status: string;
}

function Character(props: CharacterType) {
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
        <div className={"DisplayCharacter"}>
            {props.id}   {props.name}   {props.status}
        </div>
    );
}

export default Character;
