import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import data from "./data"

console.log(data)

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
  
  const cards = data.map(item => {
    return (
      <Card 
      
      item = {item}
      
      // {...item}
      
      
      // img={item.coverImg} 
      // rating={item.stats.rating}
      // reviewCount={item.stats.reviewCount}
      // location={item.location}
      // title={item.title}
      // price={item.price}
      // openSpots = {item.openSpots}
      
      />
      )
    }
    
    )
    
    return (
      <div>
            <Hero />
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}