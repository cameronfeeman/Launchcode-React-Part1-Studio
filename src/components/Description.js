import styles from './Description.module.css';
import { Component } from 'react';

let recipeTitle = "Cinnamon Rolls";
let recipeShortDesc = "Delicious cinnamon rolls with frosting"

const RecipeAuthor = ()  =>{
    let authorLink = "https://www.kingarthurbaking.com/author/charlotte-rutledge";
    let authorPhoto = "https://www.kingarthurbaking.com/sites/default/files/styles/scaled_very_small_250w/public/2022-06/Charlotte-Rutledge-.jpg?itok=UJJypdjY";
    let authorName = "Charlotte Rutledge";

    return (
        <div className = {styles.recipeAuthorBlock}>
            <img src={authorPhoto} 
            alt="Charlotte Rutledge"
            className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}> Pastries for the Win </a>
                </div>
        </div>
        )};

        class RecipeDescription extends Component {
            render () {
                return(
                    <div>
                        <div>
                            <h1>{recipeTitle}</h1>
                            <p>{recipeShortDesc}</p>
                        </div>
                        <RecipeAuthor />
                    </div>
                )
            }

        }
        export default RecipeDescription;
