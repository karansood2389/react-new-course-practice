import { Fragment } from "react";

import mealsImage from "../../../assets/meals.jpg";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
import classes from "./header.module.css";

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShow}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of meals"/>
            </div>
        </Fragment>
    )
}

export default Header;
