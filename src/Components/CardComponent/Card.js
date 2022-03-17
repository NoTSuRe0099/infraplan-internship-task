import React from "react";
import style from "./Card.module.css";

const Card = (props) => {
    const user = props.user;
    console.log();
    return (
        <div className={style.card}>
            <img className={style.avatar} src={user.picture.large} alt="user" />

            <div className={style.user_info}>
                <h4>
                    {`${user.name.title}. ${user.name.first} ${user.name.last} | ${user.dob.age}`}
                </h4>

                <h4 className={style.user_email}>{user.email}</h4>
                <p className={(style.user_address, style.truncate)}>
                    {`${user.location.street.number},${user.location.street.name},${user.location.city},${user.location.state},${user.location.country},${user.location.postcode}.`}
                </p>
            </div>

            <h4 className={style.user_country}> {user.nat} </h4>
        </div>
    );
};

export default Card;
