import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Goal.css'
import { MdKeyboardArrowLeft } from 'react-icons/md'

export default function Goal() {

    const navigate = useNavigate();
    const [userData, setUserDate] = useState (() => {
        const savedUserDate= localStorage.getItem('userData');
        return savedUserDate ? JSON.parse(savedUserDate) : null
    });

    let goal = ''
    let cal = 0
    if (userData.information.goal === 'weight_loss') {
        goal = 'Lose Weight'
        cal = userData.dailyCal.lose_cal
    } else if (userData.information.goal === 'muscle_gain') {
        goal = 'Gain Muscle'
        cal = userData.dailyCal.gain_cal
    } else if (userData.information.goal === 'strength') {
        goal = 'Strength'
        cal = userData.dailyCal.maintain_cal
    } else if (userData.information.goal === 'overall_fitness') {
        goal = 'Overall Fitness'
        cal = userData.dailyCal.maintain_cal
    };

    function backBtn() {
        navigate(-1)
    }

    function randomNum() {
        return Math.floor(Math.random() * (50 - 0 + 1) + 0)
    }

    return (
        <div>
            <div className='container my-goal'>
                <div className='my-goal-content'>
                    <div className='my-goal-container'>
                        <div className='back-btn' onClick={backBtn}>
                            <MdKeyboardArrowLeft/>
                        </div>
                        <div className="goal-title">{userData.information.goal}</div>
                        <div className="goal-item">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const quotes = [
    "Strength does not come from physical capacity. It comes from an indomitable will.",
    "Success usually comes to those who are too busy to be looking for it.", 
    "If you want something you've never had, you must be willing to do something you've' never done.",
    "The body achieves what the mind believes.",
    "Once you are exercising regularly, the hardest thing is to stop it.",
    "If you don’t make time for exercise, you’ll probably have to make time for illness.", 
    "Dead last finish is greater than did not finish, which trumps did not start.",
    "The best way to predict the future is to create it.",
    "Rome wasn’t built in a day, but they worked on it every single day.",
    "All progress takes place outside the comfort zone.",,
    "Your body can stand almost anything. It’s your mind that you have to convince.",
    "What seems impossible today will one day become your warm-up.",
    "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.",
    "I don’t count my sit-ups. I only start counting when it starts hurting because they’re the only ones that count.",
    "Go the extra mile. It’s never crowded.",
    "If you change the way you look at things, the things you look at change.",
    "You just can’t beat the person who never gives up.",
    "Take care of your body. It’s the only place you have to live.",
    "Do something today that your future self will thank you for.",
    "You did not wake up today to be mediocre.",
    "Push harder than yesterday if you want a different tomorrow.",
    "Success is usually the culmination of controlling failure.",
    "Your health account, your bank account, they’re the same thing. The more you put in, the more you can take out.",
    "Don’t say ‘I can’t.’ Say, ‘I presently struggle with’.",
    "Motivation is what gets you started. Habit is what keeps you going.",
    "We are what we repeatedly do. Excellence then is not an act but a habit.",
    "Your body can stand almost anything. It’s your mind that you have to convince.",
    "Nobody who ever gave his best regretted it.",
    "There are two types of pain in this world: pain that hurts you, and pain that changes you.",
    "Ability is what you’re capable of doing. Motivation determines what you do. Attitude determines how well you do it.",
    "When you hit failure, your workout has just begun.",
    "The secret of getting ahead is getting started.",
    "You can either suffer the pain of discipline or the pain of regret.",
    "I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.'.",
    "No matter how slow you go you’re still lapping everyone on the couch.",
    "To keep the body in good health is a duty… otherwise we shall not be able to keep our mind strong and clear.",
    "When it comes to eating right and exercising, there is no ‘I’ll start tomorrow’.",
    "We do not stop exercising because we grow old- we grow old because we stop exercising.",
    "It never gets easier, you just get better.",
    "The gym is not the social club for the fit. It’s a training ground for everyone.",
    "The mind is the most important part of achieving any fitness goal. Mental change always comes before physical change.",
    "It always seems impossible until it is done.",
    "You don’t have to be good at it, you just have to do it.",
    "You have to push past your perceived limits, push past that point you thought was as far as you can go.",
    "In training, you listen to your body. In competition, you tell your body to shut up.",
    "I will beat her. I will train harder. I will eat cleaner. I know her strengths. I’ve lost to her before but not this time. She is going down. I have the advantage because I know her well. She is the old me.",
    "Good things come to those who sweat.",
    "You’re going to have to let it hurt. Let it suck. The harder you work, the better you will look. Your appearance isn’t parallel to how heavy you lift, it’s parallel to how hard you work.",
    "Don’t limit your challenges. Challenge your limits.",
    "Believe in yourself and all that you are. Know that there is something inside of you that is greater than any obstacle."
];