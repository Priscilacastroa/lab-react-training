export function Rating(rating) {
        
   
        const rounded = Math.round(rating)
        let starString = ""
        const fullStar  = "★"
        
        for (let i=0; i<rounded; i++){
            starString += fullStar
        }

        return starString.padEnd(5,"☆")
    }  

