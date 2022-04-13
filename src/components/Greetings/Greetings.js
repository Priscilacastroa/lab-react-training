import "../Greetings/Greeting.css"

function Greetings(props) {
    if(props.lang === "de") {
        return ( 
        <div className="Greetings">
     
            Hallo {props.children}
        </div>
        )
    } 
    if(props.lang === "fr") {
        return ( 
        <div className="Greetings">
     
            Bonjour {props.children}
        </div>
        )
    }
}

export default Greetings;