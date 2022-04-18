import "../idCard/index.css"


function IdCard(props) {
        console.log(props)
    return (
        
       <div className="IdCard"> 
       <div>
       <img src= {props.picture} alt="" />
       </div>
       <div>
       <p><strong>firstName:</strong>{props.firstName}</p>
       <p><strong>lastName:</strong>{props.lastName}</p>
       <p><strong>gender:</strong>{props.gender}</p>
       <p><strong>height:</strong>{props.height}</p>
       </div>
       </div>
    )
}

export default IdCard;



