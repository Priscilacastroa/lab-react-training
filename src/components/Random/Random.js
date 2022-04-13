import "../Random/Random.css"

function Random(props) {
    let resultado = Math.floor(Math.random() * props.max ) + props.min

    
    return (
    <div className="Random">
        Random Value Between {props.min} and {props.max} = {resultado}
    </div>
    )
}

export default Random;