import Pokecard from './Pokecard';
import './Pokedex.css'

const Pokedex = (props) => {
    let winMessage;
    if(props.isWinner){
        winMessage = <p className="Pokedex-win-message">WINNER!</p>
    }

    return (
        <div className="Pokedex">
            <div className="Pokedex-deck">
                {props.pokemon.map(p => (
                    <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>
                ))}
            </div>
            <h5>Total EXP: {props.exp}</h5>
            <b>{winMessage}</b>
        </div>
    )
}

export default Pokedex;