import './Pokecard.css';

const Pokecard = (props) => {
    let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;

    return (
        <div className="Pokecard">
            <div>{props.name}</div>
            <img src={img} />
            <div>Type: {props.type}</div>
            <div>EXP: {props.exp}</div>
        </div>
    )
}

export default Pokecard;