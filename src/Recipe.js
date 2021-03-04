import React  from "react";

const Recipe = ({ title, calories, image, ingredients,type }) =>{
    return(
        <div className='Recipe'>
            <h1> {title} </h1>
            <ol>
            {/* This doesn't work*/}

                {ingredients.map(ingredient => {
                    <li>{ingredient.text}</li>
                })
                }
            </ol>
            <p>{calories}</p>
            <img src={image} alt="" />
            <p>Preferred Meal Type:{type}</p>
        </div>
    )
}

export default Recipe ;