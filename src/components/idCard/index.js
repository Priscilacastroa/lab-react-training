import "../idCard/index.css"
import homem from "./imagens/homem.jpg"
import mulher from "./imagens/mulher.jpg"

function IdCard(props) {
        console.log(props)
    return (
        
       <div className="IdCard"> 
       <img src={homem} alt="homem" class="homem"/>
       <img src={mulher} alt="mulher" class="mulher"/>
       <p><strong>firstName:</strong>{props.firstName}</p>
       <p><strong>lastName:</strong>{props.lastName}</p>
       <p><strong>gender:</strong>{props.gender}</p>
       <p><strong>height:</strong>{props.height}</p>
       </div>
    )
}

export default IdCard;



