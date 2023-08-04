import React from 'react';
import styles from './Description.module.css'
function RecipeAuthor() {
    let authorLink;
    let authorPhoto;
    let authorName;

    return (
        <div className = {StyleSheet.recipeAuthorBlock}>
            <img src={authorphoto} alt=""
            className={StyleSheet.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Blog name </a>
                </div>
        </div>
        )};
