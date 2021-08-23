import Pokedex from './Pokedex';

const Pokegame = (props) => {
    let hand1 = [];
    let hand2 = [...props.pokemon];
    
    while(hand1.length < hand2.length){
        let randomIndex = Math.floor(Math.random() * hand2.length);
        let randomPokemon = hand2.splice(randomIndex, 1)[0];
        hand1.push(randomPokemon);
    }

    let h1Exp = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let h2Exp = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

    return (
        <div>
            <Pokedex pokemon={hand1} exp={h1Exp} isWinner={h1Exp > h2Exp}/>
            <Pokedex pokemon={hand2} exp={h2Exp} isWinner={h2Exp > h1Exp}/>
        </div>
    )
}

Pokegame.defaultProps = {
    pokemon: [
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
    ]
};

export default Pokegame;