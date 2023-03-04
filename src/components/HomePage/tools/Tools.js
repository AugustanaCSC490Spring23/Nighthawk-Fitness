import React from 'react'
import './tools.css'

export default function Tools() {
  return (
    <div>
        <section className="home-container">
            <div className="tools-header">
                <h2>the tools for your goals</h2>
                <p>Trying to lose weight, bulk up, or invest
                in your overall health? We give you the right
                features to get there.</p>
            </div>
            <div className="tools-card">
                <div className="tools-item">
                    <div className="tools-img"></div>
                    <div className="tool-descriptions">
                        <h3>Learn. Track. Improve</h3>
                        <p>Explore a variety of training 
                        programs to enhance your fitness 
                        knowledge and stay consistent with 
                        the path you have chosen.</p>
                    </div>
                </div>
                <div className="tools-item"></div>
                <div className="tools-item"></div>
            </div>
        </section>
    </div>
  )
}
