import {useState} from 'react';

interface Character {
    id: number;
    name: string;
}

function Character() {
    const [characters] = useState<Character[]>([]);

    return (
        <div>
            <h1>Characters</h1>
            <ul>
                {characters.map((character) => (
                    <li key={character.id}>{character.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Character;
