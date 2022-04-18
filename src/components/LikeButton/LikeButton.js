import { useState } from "react"; 

export function LikeButton() {

    const [estado, setEstado] = useState(0);

    function sum() {
        setEstado(estado +1);
        console.log(estado);
    }

    return (
        <>
            
            <button onClick={sum}>{estado} Likes</button>

        </>
    )

}
