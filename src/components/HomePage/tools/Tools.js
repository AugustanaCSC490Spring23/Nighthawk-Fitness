import React from 'react'
import './tools.css'
import {GiNotebook} from  'react-icons/gi'
import {ImCalculator} from 'react-icons/im'
import {FaNutritionix} from 'react-icons/fa'

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
                    <div className="tools-img">
                        <GiNotebook className='tool' />
                    </div>
                    <div className="tool-descriptions">
                        <h3>Learn. Track. Improve</h3>
                        <p>Explore a variety of training 
                        programs, enhance your fitness 
                        knowledge, stay consistent with 
                        your goals.</p>
                    </div>
                </div>
                <div className="tools-item">
                    <div className="tools-img">
                        <ImCalculator className='tool' />
                    </div>
                    <div className="tool-descriptions">
                        <h3>Compute Body Mass Index (BMI)</h3>
                        <p>Assess your weight status and make
                        informed decisions about your health.</p>
                    </div>
                </div>
                <div className="tools-item">
                    <div className="tools-img">
                        <FaNutritionix className='tool' />
                    </div>
                    <div className="tool-descriptions">
                        <h3>Tracking Nutrition</h3>
                        <p>Achieve specific nutrition goals,
                        and improve your overall health and
                        well-being.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
