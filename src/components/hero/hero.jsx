import React from 'react'
import "./hero.css"

function Hero () {
  return (
    <section>
          {/* Introductory section */}
          <div className="introduction">
            <div className="content">
                <h1>Hi, i'm Favour</h1>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere cum quidem numquam vero saepe suscipit enim voluptatum modi delectus ullam adipisci soluta possimus rerum repellendus laudantium, inventore magnam dolores distinctio. Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div>
              <img className="photo" src="./images/doc1.jpeg" alt="" />
            </div>
          </div>
         </section>
        
  )
}
 

export default Hero;