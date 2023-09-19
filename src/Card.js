import React from "react"
import "./App.css"
import data from "./data"

export default function Card(props) {

    let badgeText;
    if (props.item.openSpots===0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "Online"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge"> {badgeText} </div>}

            {/* varchya text madhye badgetext la jar konti value asli tar to truthy hoto, ani jar tyat kontich value nasli tar to falsy asto. Ata jar truthy asla tarach pudhcha code execute hoil, falsy asla tar skip kelya jail */}

            <img src={`../images/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}