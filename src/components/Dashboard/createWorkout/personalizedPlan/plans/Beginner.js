 

const beginner = {
    weight_loss: {
        two_three: {
            workout: {
                name: 'Full Body Cardio',
                schedule:
                    [
                        {
                            session:
                            {
                                day: 1,
                                warm_up:
                                    [
                                        {
                                            name: 'Jumping Jacks',
                                            instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Jumping_Jacks.jpg'
                                        }
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Stationary Bike',
                                        instruction: 'If you stand next to an upright bike, the seat should be level with the top of your hips. You should have a slight bend in the knees at the bottom of the pedal stroke. Adjust the seat, handles, and pedals to match your height and reach. Learn how to adjust the resistance during the workout as you will be changing it during different intervals.',
                                        Reps: '10 minutes',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Stationary_Bike.jpg'
                                    },
                                    {
                                        name: 'Rowing Machine',
                                        instruction: 'To use a rowing machine, you need to set it up correctly, adjust the footplate and the performance monitor, and sit tall on the seat with your arms straight and your shins vertical. Then, you need to perform two phases of the stroke: the drive and the recovery. The drive is when you push with your legs, lean back slightly, and pull the handle to your chest. The recovery is when you extend your arms, lean forward slightly, and slide back to the start position',
                                        Reps: '5 minutes',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Rowing_Machine.jpg'
                                    },
                                    {
                                        name: 'Russian Twist',
                                        instruction: 'Sit on the floor with a light dumbbell, weight plate, or kettlebell by your side.  Grab the weight with both hands and hold it in front of your chest with your elbows bent. Lean your torso slightly back and engage your abs to stay in position. Cross your feet, bend your knees slightly, and lift your feet a few inches off the floor. Doing so will allow your body to form a V-shape. With your feet steady, take a breath, and twist your torso to the right. Initiate the movement from your midsection and allow your arms to follow naturally. Don’t twist with your arms first because doing so will prevent optimal core engagement. Once you’ve twisted to the right, exhale. As you bring your torso to the left, take another breath and immediately twist to the left. Keep alternating between left and right, breathing as you do.',
                                        Reps: '20',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Russian_Twist.jpg'
                                    },
                                    {
                                        name: 'Treadmill',
                                        instruction: 'Jog on the treadmill, swinging your arms oppisite to the foot that you are moving towards the front',
                                        Reps: '5 minutes',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Treadmill.jpg'
                                    },

                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Seated Toe Touches',
                                        instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                        Reps: '30 seconds',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                                    },
                                    {
                                        name: 'Quad Stretch',
                                        instruction: 'Stand on one leg. If you need support, hold onto something solid, such as a wall or chair, for support. Bend your right knee and bring your heel toward your buttock. Reach for your ankle with your opposite (left) hand. Stand up straight and pull in your abdominal muscles. Try to keep your knees next to each other. Relax your shoulders. As you hold your leg in the bent position you will feel a slight pull along the front of your thigh and hip.Breathe deeply and hold the stretch for 20-30 seconds, release and repeat on the left leg, this time holding your ankle with your right hand. Stretch each leg one to five times in a stretching session.',
                                        Reps: '30 seconds',
                                        Sets: '4',
                                        photoURL: process.env.PUBLIC_URL + '/img/Quad_Stretch.jpg'
                                    }

                                ]
                            }
                        },
                        'rest',
                        {
                            session:
                            {
                                day: 3,
                                warm_up:
                                    [
                                        {
                                            name: 'Jumping Jacks',
                                            instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Jumping_Jacks.jpg'
                                        }
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Stair Master',
                                        instruction: ' After using the assists and mounting the machine, make sure to use the handles on the side to rest your arms on and keep balance while performing the workout. Press the big green button or select your desired workout and start stepping. It will start out very slow, but you can use the up and down buttons mentioned before to set your desired intensity. A very important part of using the Stairmaster, as a matter of fact doing any sort of exercise, is to maintain your form. This will make sure that you avoid any sort of injuries and that you get the most benefit out of your workout',
                                        Reps: '8 minutes',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Stair_Master.jpg'
                                    },
                                    {
                                        name: 'Elliptical Machine',
                                        instruction: 'Step onto the machine facing the monitor. Be careful stepping onto the machine. The pedals may start to move as you do and it can be easy to lose your balance. Grab the handlebars as you step on to help you stay balanced. Begin pedaling to turn it on. Taking a few steps forward on the machine should power up the display. If not, look for a start button. Start pedaling at an even pace. Your arms should be swinging with the handles. When your left foot goes down, straightening your leg, the right handle should be pulled toward your body. Same for when your right leg goes down.',
                                        Reps: '15 minutes',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Elliptical_Machine.jpg'
                                    },
                                    {
                                        name: 'High Knees',
                                        instruction: 'Begin in the standing position. Raise and lower one knee at a time as if running in place. Bring the knees to the same height as the hips and keep your thighs parallel to the ground. Alternate legs and go as fast as you can',
                                        Reps: '30 seconds',
                                        Sets: '2',
                                        photoURL: process.env.PUBLIC_URL + '/img/High_Knees.jpg'
                                    },
                                    {
                                        name: 'Situps',
                                        instruction: 'Lie down on your back. Bend your legs and place feet firmly on the ground to stabilize your lower body. Cross your hands to opposite shoulders or place them behind your ears, without pulling on your neck. Curl your upper body all the way up toward your knees. Exhale as you lift. Slowly, lower yourself down, returning to your starting point. Inhale as you lower.',
                                        Reps: '20',
                                        Sets: '2',
                                        photoURL: process.env.PUBLIC_URL + '/img/Situps.jpg'
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Seated Toe Touches',
                                        instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                        Reps: '30 seconds',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                                    },
                                    {
                                        name: 'Quad Stretch',
                                        instruction: 'Stand on one leg. If you need support, hold onto something solid, such as a wall or chair, for support. Bend your right knee and bring your heel toward your buttock. Reach for your ankle with your opposite (left) hand. Stand up straight and pull in your abdominal muscles. Try to keep your knees next to each other. Relax your shoulders. As you hold your leg in the bent position you will feel a slight pull along the front of your thigh and hip.Breathe deeply and hold the stretch for 20-30 seconds, release and repeat on the left leg, this time holding your ankle with your right hand. Stretch each leg one to five times in a stretching session.',
                                        Reps: '30 seconds',
                                        Sets: '4',
                                        photoURL: process.env.PUBLIC_URL + '/img/Quad_Stretch.jpg'
                                    }

                                ]
                            }
                        },
                        'rest',
                        {
                            session:
                            {
                                day: 5,
                                warm_up:
                                    [
                                        {
                                            name: 'Jumping Jacks',
                                            instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Jumping_Jacks.jpg'
                                        }
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Mountain Climbers',
                                        instruction: 'Start in a plank with your shoulders directly over your wrists. Keep your back flat and your hips down, maintaining a neutral spine. Engage your core, and lift your right leg, drawing your knee in toward your chest. Return the right foot to the starting position as you simultaneously drive your left knee toward your chest. Return to the starting position. Continue alternating sides. To increase the intensity, pick up the pace until it feels like you are "running" in place in a plank position.',
                                        Reps: '1 minute',
                                        Sets: '2',
                                        photoURL: process.env.PUBLIC_URL + '/img/Mountain_Climbers.jpg'
                                    },

                                    {
                                        name: 'Rowing Machine',
                                        instruction: 'To use a rowing machine, you need to set it up correctly, adjust the footplate and the performance monitor, and sit tall on the seat with your arms straight and your shins vertical. Then, you need to perform two phases of the stroke: the drive and the recovery. The drive is when you push with your legs, lean back slightly, and pull the handle to your chest. The recovery is when you extend your arms, lean forward slightly, and slide back to the start position',
                                        Reps: '5 minutes',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Rowing_Machine.jpg'
                                    },
                                    {
                                        name: 'Stationary Bike',
                                        instruction: 'If you stand next to an upright bike, the seat should be level with the top of your hips. You should have a slight bend in the knees at the bottom of the pedal stroke. Adjust the seat, handles, and pedals to match your height and reach. Learn how to adjust the resistance during the workout as you will be changing it during different intervals.',
                                        Reps: '600',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Stationary_Bike.jpg'
                                    },


                                    {
                                        name: 'Treadmill',
                                        instruction: 'Jog on the treadmill, swinging your arms oppisite to the foot that you are moving towards the front',
                                        Reps: '5 minutes',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Treadmill.jpg'
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Seated Toe Touches',
                                        instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                        Reps: '30 seconds',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                                    },
                                    {
                                        name: 'Quad Stretch',
                                        instruction: 'Stand on one leg. If you need support, hold onto something solid, such as a wall or chair, for support. Bend your right knee and bring your heel toward your buttock. Reach for your ankle with your opposite (left) hand. Stand up straight and pull in your abdominal muscles. Try to keep your knees next to each other. Relax your shoulders. As you hold your leg in the bent position you will feel a slight pull along the front of your thigh and hip.Breathe deeply and hold the stretch for 20-30 seconds, release and repeat on the left leg, this time holding your ankle with your right hand. Stretch each leg one to five times in a stretching session.',
                                        Reps: '30 seconds',
                                        Sets: '4',
                                        photoURL: process.env.PUBLIC_URL + '/img/Quad_Stretch.jpg'
                                    }

                                ]
                            }
                        },
                        'rest',
                        'rest'
                    ]
            }
        },

        four_six: {
            workout: {
                name: 'Full Body Cardio',

                schedule:
                    [
                        {
                            session:
                            {
                                day: 1,
                                warm_up:
                                    [
                                        {
                                            name: 'Jumping Jacks',
                                            instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Jumping_Jacks.jpg'
                                        }
                                    ],

                                main_workout: [
                                    {
                                        name: 'Stationary Bike',
                                        instruction: 'If you stand next to an upright bike, the seat should be level with the top of your hips. You should have a slight bend in the knees at the bottom of the pedal stroke. Adjust the seat, handles, and pedals to match your height and reach. Learn how to adjust the resistance during the workout as you will be changing it during different intervals.',
                                        Reps: '10 minutes',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Stationary_Bike.jpg'
                                    },
                                    {
                                        name: 'Rowing Machine',
                                        instruction: 'To use a rowing machine, you need to set it up correctly, adjust the footplate and the performance monitor, and sit tall on the seat with your arms straight and your shins vertical. Then, you need to perform two phases of the stroke: the drive and the recovery. The drive is when you push with your legs, lean back slightly, and pull the handle to your chest. The recovery is when you extend your arms, lean forward slightly, and slide back to the start position',
                                        Reps: '5 minutes',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Rowing_Machine.jpg'
                                    },
                                    {
                                        name: 'Russian Twist',
                                        instruction: 'Sit on the floor with a light dumbbell, weight plate, or kettlebell by your side.  Grab the weight with both hands and hold it in front of your chest with your elbows bent. Lean your torso slightly back and engage your abs to stay in position. Cross your feet, bend your knees slightly, and lift your feet a few inches off the floor. Doing so will allow your body to form a V-shape. With your feet steady, take a breath, and twist your torso to the right. Initiate the movement from your midsection and allow your arms to follow naturally. Don’t twist with your arms first because doing so will prevent optimal core engagement. Once you’ve twisted to the right, exhale. As you bring your torso to the left, take another breath and immediately twist to the left. Keep alternating between left and right, breathing as you do.',
                                        Reps: '20',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Russian_Twist.jpg'
                                    },
                                    {
                                        name: 'Treadmill',
                                        instruction: 'Jog on the treadmill, swinging your arms oppisite to the foot that you are moving towards the front',
                                        Reps: '5 minutes',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Treadmill.jpg'
                                    },

                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Seated Toe Touches',
                                        instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                        Reps: '30 seconds',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                                    },
                                    {
                                        name: 'Quad Stretch',
                                        instruction: 'Stand on one leg. If you need support, hold onto something solid, such as a wall or chair, for support. Bend your right knee and bring your heel toward your buttock. Reach for your ankle with your opposite (left) hand. Stand up straight and pull in your abdominal muscles. Try to keep your knees next to each other. Relax your shoulders. As you hold your leg in the bent position you will feel a slight pull along the front of your thigh and hip.Breathe deeply and hold the stretch for 20-30 seconds, release and repeat on the left leg, this time holding your ankle with your right hand. Stretch each leg one to five times in a stretching session.',
                                        Reps: '30 seconds',
                                        Sets: '4',
                                        photoURL: process.env.PUBLIC_URL + '/img/Quad_Stretch.jpg'
                                    }

                                ]
                            }
                        },

                        {
                            session:
                            {
                                day: 2,
                                warm_up:
                                    [
                                        {
                                            name: 'Jumping Jacks',
                                            instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Jumping_Jacks.jpg'
                                        }
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Stair Master',
                                        instruction: ' After using the assists and mounting the machine, make sure to use the handles on the side to rest your arms on and keep balance while performing the workout. Press the big green button or select your desired workout and start stepping. It will start out very slow, but you can use the up and down buttons mentioned before to set your desired intensity. A very important part of using the Stairmaster, as a matter of fact doing any sort of exercise, is to maintain your form. This will make sure that you avoid any sort of injuries and that you get the most benefit out of your workout',
                                        Reps: '8 minutes',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Stair_Master.jpg'
                                    },
                                    {
                                        name: 'Elliptical Machine',
                                        instruction: 'Step onto the machine facing the monitor. Be careful stepping onto the machine. The pedals may start to move as you do and it can be easy to lose your balance. Grab the handlebars as you step on to help you stay balanced. Begin pedaling to turn it on. Taking a few steps forward on the machine should power up the display. If not, look for a start button. Start pedaling at an even pace. Your arms should be swinging with the handles. When your left foot goes down, straightening your leg, the right handle should be pulled toward your body. Same for when your right leg goes down.',
                                        Reps: '15 minutes',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Elliptical_Machine.jpg'
                                    },
                                    {
                                        name: 'High Knees',
                                        instruction: 'Begin in the standing position. Raise and lower one knee at a time as if running in place. Bring the knees to the same height as the hips and keep your thighs parallel to the ground. Alternate legs and go as fast as you can',
                                        Reps: '30 seconds',
                                        Sets: '2',
                                        photoURL: process.env.PUBLIC_URL + '/img/High_Knees.jpg'
                                    },
                                    {
                                        name: 'Situps',
                                        instruction: 'Lie down on your back. Bend your legs and place feet firmly on the ground to stabilize your lower body. Cross your hands to opposite shoulders or place them behind your ears, without pulling on your neck. Curl your upper body all the way up toward your knees. Exhale as you lift. Slowly, lower yourself down, returning to your starting point. Inhale as you lower.',
                                        Reps: '20',
                                        Sets: '2',
                                        photoURL: process.env.PUBLIC_URL + '/img/Situps.jpg'
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Seated Toe Touches',
                                        instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                        Reps: '30 seconds',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                                    },
                                    {
                                        name: 'Quad Stretch',
                                        instruction: 'Stand on one leg. If you need support, hold onto something solid, such as a wall or chair, for support. Bend your right knee and bring your heel toward your buttock. Reach for your ankle with your opposite (left) hand. Stand up straight and pull in your abdominal muscles. Try to keep your knees next to each other. Relax your shoulders. As you hold your leg in the bent position you will feel a slight pull along the front of your thigh and hip.Breathe deeply and hold the stretch for 20-30 seconds, release and repeat on the left leg, this time holding your ankle with your right hand. Stretch each leg one to five times in a stretching session.',
                                        Reps: '30 seconds',
                                        Sets: '4',
                                        photoURL: process.env.PUBLIC_URL + '/img/Quad_Stretch.jpg'
                                    }

                                ]
                            }
                        }, {
                            session:
                            {
                                day: 3,
                                warm_up:
                                    [
                                        {
                                            name: 'Jumping Jacks',
                                            instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Jumping_Jacks.jpg'
                                        }
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Mountain Climbers',
                                        instruction: 'Start in a plank with your shoulders directly over your wrists. Keep your back flat and your hips down, maintaining a neutral spine. Engage your core, and lift your right leg, drawing your knee in toward your chest. Return the right foot to the starting position as you simultaneously drive your left knee toward your chest. Return to the starting position. Continue alternating sides. To increase the intensity, pick up the pace until it feels like you are "running" in place in a plank position.',
                                        Reps: '1 minute',
                                        Sets: '2',
                                        photoURL: process.env.PUBLIC_URL + '/img/Mountain_Climbers.jpg'
                                    },

                                    {
                                        name: 'Rowing Machine',
                                        instruction: 'To use a rowing machine, you need to set it up correctly, adjust the footplate and the performance monitor, and sit tall on the seat with your arms straight and your shins vertical. Then, you need to perform two phases of the stroke: the drive and the recovery. The drive is when you push with your legs, lean back slightly, and pull the handle to your chest. The recovery is when you extend your arms, lean forward slightly, and slide back to the start position',
                                        Reps: '5 minutes',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Rowing_Machine.jpg'
                                    },
                                    {
                                        name: 'Stationary Bike',
                                        instruction: 'If you stand next to an upright bike, the seat should be level with the top of your hips. You should have a slight bend in the knees at the bottom of the pedal stroke. Adjust the seat, handles, and pedals to match your height and reach. Learn how to adjust the resistance during the workout as you will be changing it during different intervals.',
                                        Reps: '600',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Stationary_Bike.jpg'
                                    },


                                    {
                                        name: 'Treadmill',
                                        instruction: 'Jog on the treadmill, swinging your arms oppisite to the foot that you are moving towards the front',
                                        Reps: '5 minutes',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Treadmill.jpg'
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Seated Toe Touches',
                                        instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                        Reps: '30 seconds',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                                    },
                                    {
                                        name: 'Quad Stretch',
                                        instruction: 'Stand on one leg. If you need support, hold onto something solid, such as a wall or chair, for support. Bend your right knee and bring your heel toward your buttock. Reach for your ankle with your opposite (left) hand. Stand up straight and pull in your abdominal muscles. Try to keep your knees next to each other. Relax your shoulders. As you hold your leg in the bent position you will feel a slight pull along the front of your thigh and hip.Breathe deeply and hold the stretch for 20-30 seconds, release and repeat on the left leg, this time holding your ankle with your right hand. Stretch each leg one to five times in a stretching session.',
                                        Reps: '30 seconds',
                                        Sets: '4',
                                        photoURL: process.env.PUBLIC_URL + '/img/Quad_Stretch.jpg'
                                    }

                                ]
                            }
                        },
                        'rest',
                        {
                            session: {
                                day: 5,
                                warm_up:
                                    [
                                        {
                                            name: 'Jumping Jacks',
                                            instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Jumping_Jacks.jpg'
                                        }
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Situps',
                                        instruction: 'Lie down on your back. Bend your legs and place feet firmly on the ground to stabilize your lower body. Cross your hands to opposite shoulders or place them behind your ears, without pulling on your neck. Curl your upper body all the way up toward your knees. Exhale as you lift. Slowly, lower yourself down, returning to your starting point. Inhale as you lower.',
                                        Reps: '20',
                                        Sets: '2',
                                        photoURL: process.env.PUBLIC_URL + '/img/Situps.jpg'
                                    },
                                    {
                                        name: 'Elliptical Machine',
                                        instruction: 'Step onto the machine facing the monitor. Be careful stepping onto the machine. The pedals may start to move as you do and it can be easy to lose your balance. Grab the handlebars as you step on to help you stay balanced. Begin pedaling to turn it on. Taking a few steps forward on the machine should power up the display. If not, look for a start button. Start pedaling at an even pace. Your arms should be swinging with the handles. When your left foot goes down, straightening your leg, the right handle should be pulled toward your body. Same for when your right leg goes down.',
                                        Reps: '15 minutes',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Elliptical_Machine.jpg'
                                    },
                                    {
                                        name: 'High Knees',
                                        instruction: 'Begin in the standing position. Raise and lower one knee at a time as if running in place. Bring the knees to the same height as the hips and keep your thighs parallel to the ground. Alternate legs and go as fast as you can',
                                        Reps: '30 seconds',
                                        Sets: '2',
                                        photoURL: process.env.PUBLIC_URL + '/img/High_Knees.jpg'
                                    },
                                    {
                                        name: 'Treadmill',
                                        instruction: 'Jog on the treadmill, swinging your arms oppisite to the foot that you are moving towards the front',
                                        Reps: '5 minutes',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Treadmill.jpg'
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Seated Toe Touches',
                                        instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                        Reps: '30 seconds',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                                    },
                                    {
                                        name: 'Quad Stretch',
                                        instruction: 'Stand on one leg. If you need support, hold onto something solid, such as a wall or chair, for support. Bend your right knee and bring your heel toward your buttock. Reach for your ankle with your opposite (left) hand. Stand up straight and pull in your abdominal muscles. Try to keep your knees next to each other. Relax your shoulders. As you hold your leg in the bent position you will feel a slight pull along the front of your thigh and hip.Breathe deeply and hold the stretch for 20-30 seconds, release and repeat on the left leg, this time holding your ankle with your right hand. Stretch each leg one to five times in a stretching session.',
                                        Reps: '30 seconds',
                                        Sets: '4',
                                        photoURL: process.env.PUBLIC_URL + '/img/Quad_Stretch.jpg'
                                    }

                                ]
                            }
                        },
                        {
                            session: {
                                day: 6,
                                warm_up:
                                    [
                                        {
                                            name: 'Jumping Jacks',
                                            instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Jumping_Jacks.jpg'
                                        }
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Russian Twist',
                                        instruction: 'Sit on the floor with a light dumbbell, weight plate, or kettlebell by your side.  Grab the weight with both hands and hold it in front of your chest with your elbows bent. Lean your torso slightly back and engage your abs to stay in position. Cross your feet, bend your knees slightly, and lift your feet a few inches off the floor. Doing so will allow your body to form a V-shape. With your feet steady, take a breath, and twist your torso to the right. Initiate the movement from your midsection and allow your arms to follow naturally. Don’t twist with your arms first because doing so will prevent optimal core engagement. Once you’ve twisted to the right, exhale. As you bring your torso to the left, take another breath and immediately twist to the left. Keep alternating between left and right, breathing as you do.',
                                        Reps: '20',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Russian_Twist.jpg'
                                    },
                                    {
                                        name: 'Rowing Machine',
                                        instruction: 'To use a rowing machine, you need to set it up correctly, adjust the footplate and the performance monitor, and sit tall on the seat with your arms straight and your shins vertical. Then, you need to perform two phases of the stroke: the drive and the recovery. The drive is when you push with your legs, lean back slightly, and pull the handle to your chest. The recovery is when you extend your arms, lean forward slightly, and slide back to the start position',
                                        Reps: '5 minutes',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Rowing_Machine.jpg'
                                    },
                                    {
                                        name: 'Elliptical Machine',
                                        instruction: 'Step onto the machine facing the monitor. Be careful stepping onto the machine. The pedals may start to move as you do and it can be easy to lose your balance. Grab the handlebars as you step on to help you stay balanced. Begin pedaling to turn it on. Taking a few steps forward on the machine should power up the display. If not, look for a start button. Start pedaling at an even pace. Your arms should be swinging with the handles. When your left foot goes down, straightening your leg, the right handle should be pulled toward your body. Same for when your right leg goes down.',
                                        Reps: '15 minutes',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Elliptical_Machine.jpg'
                                    },
                                    {
                                        name: 'Treadmill',
                                        instruction: 'Jog on the treadmill, swinging your arms oppisite to the foot that you are moving towards the front',
                                        Reps: '5 minutes',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Treadmill.jpg'
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Seated Toe Touches',
                                        instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                        Reps: '30 seconds',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                                    },
                                    {
                                        name: 'Quad Stretch',
                                        instruction: 'Stand on one leg. If you need support, hold onto something solid, such as a wall or chair, for support. Bend your right knee and bring your heel toward your buttock. Reach for your ankle with your opposite (left) hand. Stand up straight and pull in your abdominal muscles. Try to keep your knees next to each other. Relax your shoulders. As you hold your leg in the bent position you will feel a slight pull along the front of your thigh and hip.Breathe deeply and hold the stretch for 20-30 seconds, release and repeat on the left leg, this time holding your ankle with your right hand. Stretch each leg one to five times in a stretching session.',
                                        Reps: '30 seconds',
                                        Sets: '4',
                                        photoURL: process.env.PUBLIC_URL + '/img/Quad_Stretch.jpg'
                                    }

                                ]
                            }
                        },
                        {
                            session: {
                                day: 7,
                                warm_up:
                                    [
                                        {
                                            name: 'Jumping Jacks',
                                            instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Jumping_Jacks.jpg'
                                        }
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Stair Master',
                                        instruction: ' After using the assists and mounting the machine, make sure to use the handles on the side to rest your arms on and keep balance while performing the workout. Press the big green button or select your desired workout and start stepping. It will start out very slow, but you can use the up and down buttons mentioned before to set your desired intensity. A very important part of using the Stairmaster, as a matter of fact doing any sort of exercise, is to maintain your form. This will make sure that you avoid any sort of injuries and that you get the most benefit out of your workout',
                                        Reps: '8 minutes',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Stair_Master.jpg'
                                    },
                                    {
                                        name: 'Rowing Machine',
                                        instruction: 'To use a rowing machine, you need to set it up correctly, adjust the footplate and the performance monitor, and sit tall on the seat with your arms straight and your shins vertical. Then, you need to perform two phases of the stroke: the drive and the recovery. The drive is when you push with your legs, lean back slightly, and pull the handle to your chest. The recovery is when you extend your arms, lean forward slightly, and slide back to the start position',
                                        Reps: '5 minutes',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Rowing_Machine.jpg'
                                    },
                                    {
                                        name: 'High Knees',
                                        instruction: 'Begin in the standing position. Raise and lower one knee at a time as if running in place. Bring the knees to the same height as the hips and keep your thighs parallel to the ground. Alternate legs and go as fast as you can',
                                        Reps: '30 seconds',
                                        Sets: '2',
                                        photoURL: process.env.PUBLIC_URL + '/img/High_Knees.jpg'
                                    },


                                    {
                                        name: 'Treadmill',
                                        instruction: 'Jog on the treadmill, swinging your arms oppisite to the foot that you are moving towards the front',
                                        Reps: '5 minutes',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Treadmill.jpg'
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Seated Toe Touches',
                                        instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                        Reps: '30 seconds',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                                    },
                                    {
                                        name: 'Quad Stretch',
                                        instruction: 'Stand on one leg. If you need support, hold onto something solid, such as a wall or chair, for support. Bend your right knee and bring your heel toward your buttock. Reach for your ankle with your opposite (left) hand. Stand up straight and pull in your abdominal muscles. Try to keep your knees next to each other. Relax your shoulders. As you hold your leg in the bent position you will feel a slight pull along the front of your thigh and hip.Breathe deeply and hold the stretch for 20-30 seconds, release and repeat on the left leg, this time holding your ankle with your right hand. Stretch each leg one to five times in a stretching session.',
                                        Reps: '30 seconds',
                                        Sets: '4',
                                        photoURL: process.env.PUBLIC_URL + '/img/Quad_Stretch.jpg'
                                    }

                                ]
                            }
                        }
                    ]
            }
        }

    },
    strength: {
        two_three: {
            workout: {
                name: 'Muscle Strength',
                schedule:
                    [
                        {
                            session:
                            {
                                day: 1,
                                warm_up:
                                    [
                                        {
                                            name: 'Jumping Jacks',
                                            instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Jumping_Jacks.jpg'
                                        }
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Bench Press',
                                        instruction: 'To do a bench press, lie on a flat bench with your eyes under the bar and your feet on the ground12. Grab the bar with a medium grip-width and your thumbs around the bar1. Unrack the bar by straightening your arms and keep it over your shoulders123. Lower the bar to your mid-chest or just below your clavicle, while keeping your elbows slightly tucked in and your chest high134. Pause on your chest without bouncing the bar4. Press the bar back up until your arms are straight, while flaring your elbows out and exhaling.',
                                        Weight: '45',
                                        Reps: '8',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Bench_Press.jpg'
                                    },

                                    {
                                        name: 'Shoulder Press',
                                        instruction: 'Place a barbell with the desired weight on a rack, making sure that it’s at shoulder height. Dip under the bar and place yourself underneath the barbell, picking it up as you slowly straighten yourself up. If this is done correctly, the barbell should then rest at the top of your shoulders. Grab the bar with your palms facing upwards — your elbows should point straight ahead. Make sure that your back is straight to secure proper form. Gently step back from the rack, keeping your back tall — then, simply press the barbell overhead. Once you can’t extend your arms any further, slowly return the barbell to your shoulders and repeat as many times as you need to. After the final repetition, step into the rack and leave the barbell at shoulder height once again. Finally, dip under the bar and step away from the rack without the bar.',
                                        weight: '45',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Shoulder_Press.jpg'
                                    },
                                    {
                                        name: 'Lat Pulldown',
                                        instruction: 'Start by sitting at a lat pull machine, facing the bar. Reach up and grasp the bar a little wider than shoulder width. Pull the bar down toward your upper chest, aiming for just below your collarbone. Hold the bar at your mid to upper chest for 1–2 seconds while squeezing your shoulder blades back and down. Slowly return to the starting position.',
                                        Weight: '40',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Lat_Pulldown.jpg'
                                    },
                                    {
                                        name: 'Shoulder Shrugs',
                                        instruction: 'Begin with your feet underneath your hips, standing tall with the dumbbells at your sides and palms facing inwards. Engage your core by drawing your belly button to your spine. Initiate the movement by drawing your shoulders upwards whilst keeping the chest open and chin in place. Avoid rounding the shoulders and jutting your chin forward. Lift the shoulders to the end of your range of movement, this is very individual so it’s important to work within your capabilities. Squeeze the traps at the top of the movement for a beat and then reverse the movement slowly. This ensures the reps are controlled and maximises on the downward portion of the rep.',
                                        Weight: '20',
                                        Reps: '8',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Shoulder_Shrugs.jpg'
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Up Dog',
                                        instruction: ' Begin lying face down on your mat with head slightly lifted and hand sitting directly under shoulders. Point your toes so the tops of you feet are on the mat. As you exhale, press through your hands and the tops of your feet raising your body and legs up off the ground until arms are straight.',
                                        Reps: '1 minute',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Up_Dog.jpg'
                                    },


                                ]
                            }

                        },
                        'rest',
                        {
                            session:
                            {
                                day: 3,
                                warm_up:
                                    [
                                        {
                                            name: 'High Knees',
                                            instruction: 'Begin in the standing position. Raise and lower one knee at a time as if running in place. Bring the knees to the same height as the hips and keep your thighs parallel to the ground. Alternate legs and go as fast as you can',
                                            Reps: '30 seconds',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/High_Knees.jpg'
                                        },
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Leg Curls',
                                        instruction: 'Exhale and flex your knees, pulling your ankles as close to your buttocks as possible. Keep your hips firmly on the bench. Hold briefly. Inhale as you return your feet to the starting position in a slow and controlled movement.',
                                        Weight: '30',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Leg_Curls.jpg'
                                    },
                                    {
                                        name: 'Front Squat',
                                        instruction: 'Grip the bar slightly wider than shoulder-width. Inhale and brace your core slightly, and unrack the bar. Take two steps back, and adjust your foot position. Squat as deep as possible with good technique. With control, stop and reverse the movement, extending your hips and legs again. Exhale on the way up or exchange air in the top position. Breathe in and repeat for reps.',
                                        weight: '65',
                                        Reps: '5',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Front_Squat.jpg'
                                    },
                                    {
                                        name: 'Calf Raises',
                                        instruction: 'Place your feet on the ground or elevated surface, about hip-distance apart, with the toes and knees straight ahead. Your foot should be in line with your ankle and your bodyweight be pressing evenly on the ball of your foot. Extend the ankle and rise up on the toes, flexing your calf muscle. Lower down with control and return to the initial position.',
                                        Weight: '30',
                                        Reps: '10',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Calf_Raises.jpg'
                                    },
                                    {
                                        name: 'Leg Press',
                                        instruction: 'Sit on the leg press and slide your butt down and into the bottom of the seat. Extend your legs and press the weight up. Bend your knees and descend as far as your flexibility and knee health allows. Without bouncing, drive the weight back up, stopping just short of full knee extension.',
                                        Weight: '50',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Leg_Press.jpg'
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Seated Toe Touches',
                                        instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                        Reps: '30 seconds',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                                    },

                                ]
                            }

                        },
                        'rest',
                        {
                            session:
                            {
                                day: 5,
                                warm_up:
                                    [
                                        {
                                            name: 'Elliptical Machine',
                                            instruction: 'Step onto the machine facing the monitor. Be careful stepping onto the machine. The pedals may start to move as you do and it can be easy to lose your balance. Grab the handlebars as you step on to help you stay balanced. Begin pedaling to turn it on. Taking a few steps forward on the machine should power up the display. If not, look for a start button. Start pedaling at an even pace. Your arms should be swinging with the handles. When your left foot goes down, straightening your leg, the right handle should be pulled toward your body. Same for when your right leg goes down.',
                                            Reps: '15 minutes',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Elliptical_Machine.jpg'
                                        },
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Bicep Curls',
                                        instruction: 'The upward motion of a dumbbell curl is one of the best ways to build your biceps. Stand with your feet shoulder-width apart. Hold a dumbbell in either hand at your sides, with your arms fully extended and your palms turned in. Curl the dumbbells to your chest, then slowly lower them back down.',
                                        Weight: '20',
                                        Reps: '8',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Bicep_Curls.jpg'
                                    },
                                    {
                                        name: 'Cable Tricep Pulldown',
                                        instruction: 'Firstly, attach the EZ-curl bar on the cable machine hook and then adjust the machine level to shoulder height. Kneel down and hold the EZ-curl bar. Make sure that the bar is behind your neck and keep your palms facing your feet. Lower your upper body until the elbows reach the knees. Repeat the moves until you reach the number of your preferred reps.',
                                        weight: '40',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Cable_Tricep_Pulldown.jpg'
                                    },
                                    {
                                        name: 'Lat Pulldown',
                                        instruction: 'Start by sitting at a lat pull machine, facing the bar. Reach up and grasp the bar a little wider than shoulder width. Pull the bar down toward your upper chest, aiming for just below your collarbone. Hold the bar at your mid to upper chest for 1–2 seconds while squeezing your shoulder blades back and down. Slowly return to the starting position.',
                                        Weight: '40',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Lat_Pulldown.jpg'
                                    },
                                    {
                                        name: 'Shoulder Shrugs',
                                        instruction: 'Begin with your feet underneath your hips, standing tall with the dumbbells at your sides and palms facing inwards. Engage your core by drawing your belly button to your spine. Initiate the movement by drawing your shoulders upwards whilst keeping the chest open and chin in place. Avoid rounding the shoulders and jutting your chin forward. Lift the shoulders to the end of your range of movement, this is very individual so it’s important to work within your capabilities. Squeeze the traps at the top of the movement for a beat and then reverse the movement slowly. This ensures the reps are controlled and maximises on the downward portion of the rep.',
                                        Weight: '20',
                                        Reps: '8',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Shoulder_Shrugs.jpg'
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Up Dog',
                                        instruction: ' Begin lying face down on your mat with head slightly lifted and hand sitting directly under shoulders. Point your toes so the tops of you feet are on the mat. As you exhale, press through your hands and the tops of your feet raising your body and legs up off the ground until arms are straight.',
                                        Reps: '1 minute',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Up_Dog.jpg'
                                    },

                                ]
                            }

                        }
                    ]
            }
        },
        four_six: {
            workout: {
                name: 'Upper/Lower Split',
                schedule:
                    [
                        {
                            session:
                            {
                                day: 1,
                                warm_up:
                                    [
                                        {
                                            name: 'Jumping Jacks',
                                            instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Jumping_Jacks.jpg'
                                        }
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Bench Press',
                                        instruction: 'To do a bench press, lie on a flat bench with your eyes under the bar and your feet on the ground12. Grab the bar with a medium grip-width and your thumbs around the bar1. Unrack the bar by straightening your arms and keep it over your shoulders123. Lower the bar to your mid-chest or just below your clavicle, while keeping your elbows slightly tucked in and your chest high134. Pause on your chest without bouncing the bar4. Press the bar back up until your arms are straight, while flaring your elbows out and exhaling.',
                                        Weight: '45',
                                        Reps: '8',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Bench_Press.jpg'
                                    },

                                    {
                                        name: 'Shoulder Press',
                                        instruction: 'Place a barbell with the desired weight on a rack, making sure that it’s at shoulder height. Dip under the bar and place yourself underneath the barbell, picking it up as you slowly straighten yourself up. If this is done correctly, the barbell should then rest at the top of your shoulders. Grab the bar with your palms facing upwards — your elbows should point straight ahead. Make sure that your back is straight to secure proper form. Gently step back from the rack, keeping your back tall — then, simply press the barbell overhead. Once you can’t extend your arms any further, slowly return the barbell to your shoulders and repeat as many times as you need to. After the final repetition, step into the rack and leave the barbell at shoulder height once again. Finally, dip under the bar and step away from the rack without the bar.',
                                        weight: '45',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Shoulder_Press.jpg'
                                    },
                                    {
                                        name: 'Lat Pulldown',
                                        instruction: 'Start by sitting at a lat pull machine, facing the bar. Reach up and grasp the bar a little wider than shoulder width. Pull the bar down toward your upper chest, aiming for just below your collarbone. Hold the bar at your mid to upper chest for 1–2 seconds while squeezing your shoulder blades back and down. Slowly return to the starting position.',
                                        Weight: '40',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Lat_Pulldown.jpg'
                                    },
                                    {
                                        name: 'Shoulder Shrugs',
                                        instruction: 'Begin with your feet underneath your hips, standing tall with the dumbbells at your sides and palms facing inwards. Engage your core by drawing your belly button to your spine. Initiate the movement by drawing your shoulders upwards whilst keeping the chest open and chin in place. Avoid rounding the shoulders and jutting your chin forward. Lift the shoulders to the end of your range of movement, this is very individual so it’s important to work within your capabilities. Squeeze the traps at the top of the movement for a beat and then reverse the movement slowly. This ensures the reps are controlled and maximises on the downward portion of the rep.',
                                        Weight: '20',
                                        Reps: '8',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Shoulder_Shrugs.jpg'
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Up Dog',
                                        instruction: ' Begin lying face down on your mat with head slightly lifted and hand sitting directly under shoulders. Point your toes so the tops of you feet are on the mat. As you exhale, press through your hands and the tops of your feet raising your body and legs up off the ground until arms are straight.',
                                        Reps: '1 minute',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Up_Dog.jpg'
                                    },


                                ]
                            }

                        },
                        {
                            session:
                            {
                                day: 2,
                                warm_up:
                                    [
                                        {
                                            name: 'High Knees',
                                            instruction: 'Begin in the standing position. Raise and lower one knee at a time as if running in place. Bring the knees to the same height as the hips and keep your thighs parallel to the ground. Alternate legs and go as fast as you can',
                                            Reps: '30 seconds',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/High_Knees.jpg'
                                        },
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Leg Curls',
                                        instruction: 'Exhale and flex your knees, pulling your ankles as close to your buttocks as possible. Keep your hips firmly on the bench. Hold briefly. Inhale as you return your feet to the starting position in a slow and controlled movement.',
                                        Weight: '30',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Leg_Curls.jpg'
                                    },
                                    {
                                        name: 'Front Squat',
                                        instruction: 'Grip the bar slightly wider than shoulder-width. Inhale and brace your core slightly, and unrack the bar. Take two steps back, and adjust your foot position. Squat as deep as possible with good technique. With control, stop and reverse the movement, extending your hips and legs again. Exhale on the way up or exchange air in the top position. Breathe in and repeat for reps.',
                                        weight: '65',
                                        Reps: '5',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Front_Squat.jpg'
                                    },
                                    {
                                        name: 'Calf Raises',
                                        instruction: 'Place your feet on the ground or elevated surface, about hip-distance apart, with the toes and knees straight ahead. Your foot should be in line with your ankle and your bodyweight be pressing evenly on the ball of your foot. Extend the ankle and rise up on the toes, flexing your calf muscle. Lower down with control and return to the initial position.',
                                        Weight: '30',
                                        Reps: '10',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Calf_Raises.jpg'
                                    },
                                    {
                                        name: 'Leg Press',
                                        instruction: 'Sit on the leg press and slide your butt down and into the bottom of the seat. Extend your legs and press the weight up. Bend your knees and descend as far as your flexibility and knee health allows. Without bouncing, drive the weight back up, stopping just short of full knee extension.',
                                        Weight: '50',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Leg_Press.jpg'
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Seated Toe Touches',
                                        instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                        Reps: '30 seconds',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                                    },

                                ]
                            }

                        },
                        {
                            session:
                            {
                                day: 3,
                                warm_up:
                                    [
                                        {
                                            name: 'Elliptical Machine',
                                            instruction: 'Step onto the machine facing the monitor. Be careful stepping onto the machine. The pedals may start to move as you do and it can be easy to lose your balance. Grab the handlebars as you step on to help you stay balanced. Begin pedaling to turn it on. Taking a few steps forward on the machine should power up the display. If not, look for a start button. Start pedaling at an even pace. Your arms should be swinging with the handles. When your left foot goes down, straightening your leg, the right handle should be pulled toward your body. Same for when your right leg goes down.',
                                            Reps: '15 minutes',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Elliptical_Machine.jpg'
                                        },
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Bicep Curls',
                                        instruction: 'The upward motion of a dumbbell curl is one of the best ways to build your biceps. Stand with your feet shoulder-width apart. Hold a dumbbell in either hand at your sides, with your arms fully extended and your palms turned in. Curl the dumbbells to your chest, then slowly lower them back down.',
                                        Weight: '20',
                                        Reps: '8',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Bicep_Curls.jpg'
                                    },

                                    {
                                        name: 'Cable Tricep Pulldown',
                                        instruction: 'Firstly, attach the EZ-curl bar on the cable machine hook and then adjust the machine level to shoulder height. Kneel down and hold the EZ-curl bar. Make sure that the bar is behind your neck and keep your palms facing your feet. Lower your upper body until the elbows reach the knees. Repeat the moves until you reach the number of your preferred reps.',
                                        weight: '40',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Cable_Tricep_Pulldown.jpg'
                                    },
                                    {
                                        name: 'Lat Pulldown',
                                        instruction: 'Start by sitting at a lat pull machine, facing the bar. Reach up and grasp the bar a little wider than shoulder width. Pull the bar down toward your upper chest, aiming for just below your collarbone. Hold the bar at your mid to upper chest for 1–2 seconds while squeezing your shoulder blades back and down. Slowly return to the starting position.',
                                        Weight: '40',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Lat_Pulldown.jpg'
                                    },
                                    {
                                        name: 'Shoulder Shrugs',
                                        instruction: 'Begin with your feet underneath your hips, standing tall with the dumbbells at your sides and palms facing inwards. Engage your core by drawing your belly button to your spine. Initiate the movement by drawing your shoulders upwards whilst keeping the chest open and chin in place. Avoid rounding the shoulders and jutting your chin forward. Lift the shoulders to the end of your range of movement, this is very individual so it’s important to work within your capabilities. Squeeze the traps at the top of the movement for a beat and then reverse the movement slowly. This ensures the reps are controlled and maximises on the downward portion of the rep.',
                                        Weight: '20',
                                        Reps: '8',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Shoulder_Shrugs.jpg'
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Up Dog',
                                        instruction: ' Begin lying face down on your mat with head slightly lifted and hand sitting directly under shoulders. Point your toes so the tops of you feet are on the mat. As you exhale, press through your hands and the tops of your feet raising your body and legs up off the ground until arms are straight.',
                                        Reps: '1 minute',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Up_Dog.jpg'
                                    },

                                ]
                            }

                        },
                        'rest',
                        {
                            session:
                            {
                                day: 5,
                                warm_up:
                                    [
                                        {
                                            name: 'Elliptical Machine',
                                            instruction: 'Step onto the machine facing the monitor. Be careful stepping onto the machine. The pedals may start to move as you do and it can be easy to lose your balance. Grab the handlebars as you step on to help you stay balanced. Begin pedaling to turn it on. Taking a few steps forward on the machine should power up the display. If not, look for a start button. Start pedaling at an even pace. Your arms should be swinging with the handles. When your left foot goes down, straightening your leg, the right handle should be pulled toward your body. Same for when your right leg goes down.',
                                            Reps: '15 minutes',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Elliptical_Machine.jpg'
                                        },
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Pinch Plate Pressout',
                                        instruction: 'Step 1: Grab 2 to 3 plates and squeeze them together with your palms. Barbells weight plate in gym room. You will want to start off with two 10-pound plates, as this is likely enough for a first time doing this exercise. You will squeeze them together using your palms. You can have more plates but this will make the exercise harder to do, even if the weight comes out the same as it will challenge your ability to grip. Bring the plates to the middle of your chest. Next, you will want to bring the plates to the middle of your chest while your fingertips are pointing away from your body, pressing your palms together as hard as you can against the plates. Retract your shoulder blades and keep your chest up. You need to make sure that your shoulder blades are properly retracted and that your (upper) back is not. Your chest must be up so that you are properly and fully isolating your chest muscles and not accidentally using other muscle groups such as your lats or your shoulders. Extend your arms forward and slightly upward. Before you do this step, you need to make sure that you are pressing your hands together against the plates as hard as you possibly can. Then, you will want to extend your arms forward - at this point, you will feel your chest working very hard, and you will want to use a controlled tempo to keep bringing your arms both up and forward. You need to make sure that you are going both forward and up, as going forward and down will be easier, but it will not work out your pec muscles nearly as much. Contract your chest as hard as possible. At no point during this exercise should you relax your muscles. The point of the plate pinch press is that you will have your pec muscles contracted at every turn so that your core is properly exercised. Make sure you are contracting and squeezing as hard as you can for the full duration of the movement. Also, make sure that your spine is in a neutral setting so that you are only working out your pecs and not something else. Reverse your arms in the exact same movement pattern  Once your arms have been extended fully, you may start bringing the plates back to the starting position. Make sure you are not dropping your arms low, and that you are always contracting your chest muscles so that you can keep the concentration in your core.',
                                        Weight: '25',
                                        Reps: '8',
                                        Sets: '2',
                                        photoURL: process.env.PUBLIC_URL + '/img/Pinch_Plate_Pressout.jpg'
                                    },

                                    {
                                        name: 'Shoulder Press',
                                        instruction: 'Place a barbell with the desired weight on a rack, making sure that it’s at shoulder height. Dip under the bar and place yourself underneath the barbell, picking it up as you slowly straighten yourself up. If this is done correctly, the barbell should then rest at the top of your shoulders. Grab the bar with your palms facing upwards — your elbows should point straight ahead. Make sure that your back is straight to secure proper form. Gently step back from the rack, keeping your back tall — then, simply press the barbell overhead. Once you can’t extend your arms any further, slowly return the barbell to your shoulders and repeat as many times as you need to. After the final repetition, step into the rack and leave the barbell at shoulder height once again. Finally, dip under the bar and step away from the rack without the bar.',
                                        weight: '45',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Shoulder_Press.jpg'
                                    },
                                    {
                                        name: 'Bench Press',
                                        instruction: 'To do a bench press, lie on a flat bench with your eyes under the bar and your feet on the ground12. Grab the bar with a medium grip-width and your thumbs around the bar1. Unrack the bar by straightening your arms and keep it over your shoulders123. Lower the bar to your mid-chest or just below your clavicle, while keeping your elbows slightly tucked in and your chest high134. Pause on your chest without bouncing the bar4. Press the bar back up until your arms are straight, while flaring your elbows out and exhaling.',
                                        Weight: '45',
                                        Reps: '8',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Bench_Press.jpg'
                                    },
                                    {
                                        name: 'Dumbell Skull Crushers',
                                        instruction: 'Grab a pair of dumbbells with a neutral grip and then lie on a weight bench. Press the dumbbells up so that they’re directly over the end of the weight bench. Lower the dumbbells behind your head by breaking at your elbows and moving your shoulders backward. Keep going until you feel a huge stretch in the long (inner) head of your triceps.',
                                        Weight: '10',
                                        Reps: '8',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Dumbell_Skull_Crushers.jpg'
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Arm Circles',
                                        instruction: 'Stand upright with a shoulder-wide stance. Extend your arms to your sides. They should be parallel to the floor. Push your shoulders back and down to get in position. Rotate your arms clockwise at your shoulders. Arm circles are usually performed until you feel a burn in your shoulders or if you can’t hold your arms parallel to the floor.',
                                        Reps: '1 min',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Arm_Circles.jpg'
                                    }
                                ]
                            }

                        },
                        {
                            session:
                            {
                                day: 6,
                                warm_up:
                                    [
                                        {
                                            name: 'Jumping Jacks',
                                            instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Jumping_Jacks.jpg'
                                        }
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Preacher Curls',
                                        instruction: 'To do this exercise, you’ll need a preacher bench and an E-Z bar. Grasp the inner handle of the E-Z curl bar with your palms facing forward. Due to the bar’s form, your palms should be tilted inwards somewhat and your hands should be positioned so that they face forward. With the upper arms placed against the preacher bench pad and the chest pressed into it, grasp the E-Z Curl Bar at shoulder length. This will be your starting point. As you inhale, lower the bar slowly (under control) until your upper arm is fully extended and your biceps are completely stretched. Raise the weight up by curling your biceps while exhaling, bringing the bar to shoulder height. Squeeze your biceps as hard as you can and hold this position for a second.',
                                        Weight: '30',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Dumbell Row',
                                        instruction: 'Grab a dumbbell in each hand. If it is your first time, grab a light weight that feels doable. Stagger your legs. Place one leg in front of the other, and then bow down. “You want to [imagine] a straight line from the top of your head all the way to your bottom almost as if you had a quarter and you place it on the top of your head it would gently roll all the way down your back and then from there, place the weights in front of your toes,” explains Jones. Slide your elbows along your side and squeeze your shoulder blades together as you lift the weights. Make sure that your shoulders are held down your back and your neck is long. Hold for a second and then gently extend your arms while placing the weight back to the start position. When returning to the starting position, the dumbbells will be in line with your feet.',
                                        Weight: '25',
                                        Reps: '12',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Dumbell_Row.jpg'
                                    },
                                    {
                                        name: 'Lat Pulldown',
                                        instruction: 'Start by sitting at a lat pull machine, facing the bar. Reach up and grasp the bar a little wider than shoulder width. Pull the bar down toward your upper chest, aiming for just below your collarbone. Hold the bar at your mid to upper chest for 1–2 seconds while squeezing your shoulder blades back and down. Slowly return to the starting position.',
                                        Weight: '40',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Lat_Pulldown.jpg'
                                    },
                                    {
                                        name: 'Hammer Curls',
                                        instruction: 'Stand up, grab two dumbbells with a neutral grip and then hold them by your sides. Brace your core and then curl the weights to your shoulders by flexing your elbows. Squeeze your biceps at the top of the rep and then lower the dumbbells under control until your elbows are fully extended.',
                                        weight: '20',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Hammer_Curls.jpg'
                                    }
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Childs Pose',
                                        instruction: 'Begin on your yoga mat on all fours supported by your hands and knees. Make sure your hands are directly beneath your shoulders, knees directly beneath your hips, and your feet directly behind your knees. Sit back onto your feet, keeping your feet and knees hip’s width apart. The soles of the feet will be facing the sky in the pose. Gently lower your upper body forward, resting your forehead on the floor. Allow your arms to rest loosely by your sides, hands by your feet, with palms facing the sky. Inhale, lengthening your spine. Exhale, relaxing your shoulders.',
                                        Reps: '1 minute',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Childs_Pose.jpg'
                                    }

                                ]
                            }

                        },
                        {
                            session:
                            {
                                day: 7,
                                warm_up:
                                    [
                                        {
                                            name: 'Jumping Jacks',
                                            instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Jumping_Jacks.jpg'
                                        }
                                    ],


                                main_workout: [
                                    {
                                        name: 'Leg Curls',
                                        instruction: 'Exhale and flex your knees, pulling your ankles as close to your buttocks as possible. Keep your hips firmly on the bench. Hold briefly. Inhale as you return your feet to the starting position in a slow and controlled movement.',
                                        Weight: '30',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Leg_Curls.jpg'
                                    },
                                    {
                                        name: 'Front Squat',
                                        instruction: 'Grip the bar slightly wider than shoulder-width. Inhale and brace your core slightly, and unrack the bar. Take two steps back, and adjust your foot position. Squat as deep as possible with good technique. With control, stop and reverse the movement, extending your hips and legs again. Exhale on the way up or exchange air in the top position. Breathe in and repeat for reps.',
                                        weight: '65',
                                        Reps: '5',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Front_Squat.jpg'
                                    },
                                    {
                                        name: 'Calf Raises',
                                        instruction: 'Place your feet on the ground or elevated surface, about hip-distance apart, with the toes and knees straight ahead. Your foot should be in line with your ankle and your bodyweight be pressing evenly on the ball of your foot. Extend the ankle and rise up on the toes, flexing your calf muscle. Lower down with control and return to the initial position.',
                                        Weight: '30',
                                        Reps: '10',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Calf_Raises.jpg'
                                    },
                                    {
                                        name: 'Leg Press',
                                        instruction: 'Sit on the leg press and slide your butt down and into the bottom of the seat. Extend your legs and press the weight up. Bend your knees and descend as far as your flexibility and knee health allows. Without bouncing, drive the weight back up, stopping just short of full knee extension.',
                                        Weight: '50',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Leg_Press.jpg'
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Seated Toe Touches',
                                        instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                        Reps: '30 seconds',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                                    },

                                ]
                            }

                        }
                    ]
            }
        }
    },
    Ab_Armagedon: {
        two_three: {
            workout: {
                name: 'Six-Pack Abs',
                schedule:
                    [
                        {
                            session:
                            {
                                day: 1,
                                warm_up:
                                    [
                                        {
                                            name: 'Jumping Jacks',
                                            instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Jumping_Jacks.jpg'
                                        }
                                    ]
                                ,
                                main_workout:
                                    [
                                        {
                                            name: 'Deadbug',
                                            instruction: 'Allow your shoulders and lower back to fall heavy to the floor. Draw your shoulders down away from your ears. To get into the starting position, lift your hands so your elbows are above your shoulders with your fists facing in toward each other. Lift your legs so your knees are directly over your hips. On an exhale, slowly lower your right arm and left leg until they’re just above the floor. On an inhale, bring them back to the starting position. Repeat on the opposite side.',
                                            Reps: '15',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Deadbug.jpg'
                                        },
                                        {
                                            name:'Plank',
                                            instruction: 'Lie facedown with your forearms on the floor, with your legs extended and your feet together. You can use a mat or towel to make this more comfortable. Push into your forearms as you raise your body so it forms a straight line from your head and neck to your feet. (Do not let your hips rise or sag.) Keep your gaze down and hold this position as you engage your abdominal muscles. Take steady, even breaths.',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Plank.jpg'
                                        },
                                        {
                                            name:'Reverse Crunch',
                                            instruction: 'Bend your legs at the knee and brace your abs to slowly raise your legs so the knees are directly over your hips and your lower legs are parallel to the floor (bent 90 degrees). This is the starting position. Brace the abdominal muscles and hold a neutral spine position with a slight natural curve in the lower back (lumbar) region yet with the back firmly against the floor. Exhale as you contract the abs to curl your hips and knees toward your chest, with only your hips coming off the mat as you curl. Your knees should remain at the same angle throughout this upward phase. Your head should be kept straight and the neck and shoulders should remain relaxed and on the mat. Hold when you cannot curl without your back coming off the mat. Inhale and slowly return to the starting position with your hips back on the mat and your knees over your hips, still bent 90 degrees.',
                                            Reps: '10',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Reverse_Crunch.jpg'
                                        },
                                        {
                                            name:'Side Plank',
                                            instruction: 'Engage your abdominal muscles, drawing your navel toward your spine. Lift your hips and knees from the mat while exhaling. Your torso is straight in line with no sagging or bending. Hold the position. After several breaths, inhale and return to the starting position. The goal should be to hold for 60 seconds. Change sides and repeat.',
                                            Reps: '45 seconds',
                                            Sets: '4',
                                            photoURL: process.env.PUBLIC_URL + '/img/Side_Planks.jpg'
                                        },
                                        {
                                            name:'Glute Bridges',
                                            instruction: 'Lie on back with bent knees hip distance apart, and feet flat on mat stacked under the knees. Engage the core and squeeze your glutes as you lift your hips to a bridge. Hold, squeezing tight and return to mat with control.',
                                            Reps: '20',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Glute_Bridges.jpg'
                                        }
                                    ]
                                ,

                                cool_down:
                                    [
                                        {
                                            name: 'Up Dog',
                                            instruction: ' Begin lying face down on your mat with head slightly lifted and hand sitting directly under shoulders. Point your toes so the tops of you feet are on the mat. As you exhale, press through your hands and the tops of your feet raising your body and legs up off the ground until arms are straight.',
                                            Reps: '1 minute',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Up_Dog.jpg'
                                        },
                                    ]

                            }

                        },
                        'rest',
                        {
                            session:
                            {
                                day: 3,
                                warm_up:
                                    [
                                        {
                                            name: 'Elliptical Machine',
                                            instruction: 'Step onto the machine facing the monitor. Be careful stepping onto the machine. The pedals may start to move as you do and it can be easy to lose your balance. Grab the handlebars as you step on to help you stay balanced. Begin pedaling to turn it on. Taking a few steps forward on the machine should power up the display. If not, look for a start button. Start pedaling at an even pace. Your arms should be swinging with the handles. When your left foot goes down, straightening your leg, the right handle should be pulled toward your body. Same for when your right leg goes down.',
                                            Reps: '15 minutes',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Elliptical_Machine.jpg'
                                        }
                                    ]
                                ,
                                main_workout:
                                    [
                                        {
                                            name: 'Situps',
                                            instruction: 'Lie down on your back. Bend your legs and place feet firmly on the ground to stabilize your lower body. Cross your hands to opposite shoulders or place them behind your ears, without pulling on your neck. Curl your upper body all the way up toward your knees. Exhale as you lift. Slowly, lower yourself down, returning to your starting point. Inhale as you lower.',
                                            Reps: '20',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Situps.jpg'
                                        },
                                        {
                                            name:'Plank',
                                            instruction: 'Lie facedown with your forearms on the floor, with your legs extended and your feet together. You can use a mat or towel to make this more comfortable. Push into your forearms as you raise your body so it forms a straight line from your head and neck to your feet. (Do not let your hips rise or sag.) Keep your gaze down and hold this position as you engage your abdominal muscles. Take steady, even breaths.',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Plank.jpg'
                                        },
                                        {
                                            name: 'Russian Twist',
                                            instruction: 'Sit on the floor with a light dumbbell, weight plate, or kettlebell by your side.  Grab the weight with both hands and hold it in front of your chest with your elbows bent. Lean your torso slightly back and engage your abs to stay in position. Cross your feet, bend your knees slightly, and lift your feet a few inches off the floor. Doing so will allow your body to form a V-shape. With your feet steady, take a breath, and twist your torso to the right. Initiate the movement from your midsection and allow your arms to follow naturally. Don’t twist with your arms first because doing so will prevent optimal core engagement. Once you’ve twisted to the right, exhale. As you bring your torso to the left, take another breath and immediately twist to the left. Keep alternating between left and right, breathing as you do.',
                                            Reps: '20',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Russian_Twist.jpg'
                                        },
                                        {
                                            name:'Side Plank',
                                            instruction: 'Engage your abdominal muscles, drawing your navel toward your spine. Lift your hips and knees from the mat while exhaling. Your torso is straight in line with no sagging or bending. Hold the position. After several breaths, inhale and return to the starting position. The goal should be to hold for 60 seconds. Change sides and repeat.',
                                            Reps: '45 seconds',
                                            Sets: '4',
                                            photoURL: process.env.PUBLIC_URL + '/img/Side_Planks.jpg'
                                        },
                                        {
                                            name:'Glute Bridges',
                                            instruction: 'Lie on back with bent knees hip distance apart, and feet flat on mat stacked under the knees. Engage the core and squeeze your glutes as you lift your hips to a bridge. Hold, squeezing tight and return to mat with control.',
                                            Reps: '20',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Glute_Bridges.jpg'
                                        }
                                    ]
                                ,

                                cool_down:
                                    [
                                        {
                                            name: 'Bear Crawls',
                                            instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                            Reps: '60',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Bear_Crawl.jpg'
                                        }
                                    ]

                            }

                        },
                        'rest',
                        {
                            session:
                            {
                                day: 5,
                                warm_up:
                                    [
                                        {
                                            name: 'Jumping Jacks',
                                            instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Jumping_Jacks.jpg'
                                        }
                                    ]
                                ,
                                main_workout:
                                    [
                                        {
                                            name: 'Bird to Dog',
                                            instruction: 'Start on your hands and knees with the hands under the shoulders and the knees under the hips. Extend one leg and the opposite arm at the same time. Pause for 3 to 5 seconds, return to the starting position, and switch sides.',
                                            Reps: '10',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Bird_To_Dog.jpg'
                                        },
                                        {
                                            name:'Plank',
                                            instruction: 'Lie facedown with your forearms on the floor, with your legs extended and your feet together. You can use a mat or towel to make this more comfortable. Push into your forearms as you raise your body so it forms a straight line from your head and neck to your feet. (Do not let your hips rise or sag.) Keep your gaze down and hold this position as you engage your abdominal muscles. Take steady, even breaths.',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Plank.jpg'
                                        },
                                        {
                                            name:'Reverse Crunch',
                                            instruction: 'Bend your legs at the knee and brace your abs to slowly raise your legs so the knees are directly over your hips and your lower legs are parallel to the floor (bent 90 degrees). This is the starting position. Brace the abdominal muscles and hold a neutral spine position with a slight natural curve in the lower back (lumbar) region yet with the back firmly against the floor. Exhale as you contract the abs to curl your hips and knees toward your chest, with only your hips coming off the mat as you curl. Your knees should remain at the same angle throughout this upward phase. Your head should be kept straight and the neck and shoulders should remain relaxed and on the mat. Hold when you cannot curl without your back coming off the mat. Inhale and slowly return to the starting position with your hips back on the mat and your knees over your hips, still bent 90 degrees.',
                                            Reps: '10',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Reverse_Crunch.jpg'
                                        },
                                        {
                                            name:'Side Plank',
                                            instruction: 'Engage your abdominal muscles, drawing your navel toward your spine. Lift your hips and knees from the mat while exhaling. Your torso is straight in line with no sagging or bending. Hold the position. After several breaths, inhale and return to the starting position. The goal should be to hold for 60 seconds. Change sides and repeat.',
                                            Reps: '45 seconds',
                                            Sets: '4',
                                            photoURL: process.env.PUBLIC_URL + '/img/Side_Planks.jpg'
                                        },
                                        {
                                            name: 'Leg Raises',
                                            instruction: 'Lie on your back, legs straight and together. Keep your legs straight and lift them all the way up to the ceiling until your butt comes off the floor. Slowly lower your legs back down till they are just above the floor. Hold for a moment. Raise your legs back up.',
                                            Reps: '15',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Leg_Raises.jpg'
                                        },
                                    ]
                                ,

                                cool_down:
                                    [
                                        {
                                            name: 'Up Dog',
                                            instruction: ' Begin lying face down on your mat with head slightly lifted and hand sitting directly under shoulders. Point your toes so the tops of you feet are on the mat. As you exhale, press through your hands and the tops of your feet raising your body and legs up off the ground until arms are straight.',
                                            Reps: '1 minute',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Up_Dog.jpg'
                                        },
                                    ]

                            }

                        },
                    ]
            }
        },
        four_six: {
            workout: {
                name: 'Six-Pack Abs',
                schedule:
                    [
                        {
                            session:
                            {
                                day: 1,
                                warm_up:
                                    [
                                        {
                                            name: 'Jumping Jacks',
                                            instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Jumping_Jacks.jpg'
                                        }
                                    ]
                                ,
                                main_workout:
                                    [
                                        {
                                            name: 'Deadbug',
                                            instruction: 'Allow your shoulders and lower back to fall heavy to the floor. Draw your shoulders down away from your ears. To get into the starting position, lift your hands so your elbows are above your shoulders with your fists facing in toward each other. Lift your legs so your knees are directly over your hips. On an exhale, slowly lower your right arm and left leg until they’re just above the floor. On an inhale, bring them back to the starting position. Repeat on the opposite side.',
                                            Reps: '15',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Deadbug.jpg'
                                        },
                                        {
                                            name:'Plank',
                                            instruction: 'Lie facedown with your forearms on the floor, with your legs extended and your feet together. You can use a mat or towel to make this more comfortable. Push into your forearms as you raise your body so it forms a straight line from your head and neck to your feet. (Do not let your hips rise or sag.) Keep your gaze down and hold this position as you engage your abdominal muscles. Take steady, even breaths.',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Plank.jpg'
                                        },
                                        {
                                            name:'Reverse Crunch',
                                            instruction: 'Bend your legs at the knee and brace your abs to slowly raise your legs so the knees are directly over your hips and your lower legs are parallel to the floor (bent 90 degrees). This is the starting position. Brace the abdominal muscles and hold a neutral spine position with a slight natural curve in the lower back (lumbar) region yet with the back firmly against the floor. Exhale as you contract the abs to curl your hips and knees toward your chest, with only your hips coming off the mat as you curl. Your knees should remain at the same angle throughout this upward phase. Your head should be kept straight and the neck and shoulders should remain relaxed and on the mat. Hold when you cannot curl without your back coming off the mat. Inhale and slowly return to the starting position with your hips back on the mat and your knees over your hips, still bent 90 degrees.',
                                            Reps: '10',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Reverse_Crunch.jpg'
                                        },
                                        {
                                            name:'Side Plank',
                                            instruction: 'Engage your abdominal muscles, drawing your navel toward your spine. Lift your hips and knees from the mat while exhaling. Your torso is straight in line with no sagging or bending. Hold the position. After several breaths, inhale and return to the starting position. The goal should be to hold for 60 seconds. Change sides and repeat.',
                                            Reps: '45 seconds',
                                            Sets: '4',
                                            photoURL: process.env.PUBLIC_URL + '/img/Side_Planks.jpg'
                                        },
                                        {
                                            name:'Glute Bridges',
                                            instruction: 'Lie on back with bent knees hip distance apart, and feet flat on mat stacked under the knees. Engage the core and squeeze your glutes as you lift your hips to a bridge. Hold, squeezing tight and return to mat with control.',
                                            Reps: '20',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Glute_Bridges.jpg'
                                        }
                                    ]
                                ,

                                cool_down:
                                    [
                                        {
                                            name: 'Up Dog',
                                            instruction: ' Begin lying face down on your mat with head slightly lifted and hand sitting directly under shoulders. Point your toes so the tops of you feet are on the mat. As you exhale, press through your hands and the tops of your feet raising your body and legs up off the ground until arms are straight.',
                                            Reps: '1 minute',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Up_Dog.jpg'
                                        },
                                    ]

                            }

                        },
                        {
                            session:
                            {
                                day: 2,
                                warm_up:
                                    [
                                        {
                                            name: 'Elliptical Machine',
                                            instruction: 'Step onto the machine facing the monitor. Be careful stepping onto the machine. The pedals may start to move as you do and it can be easy to lose your balance. Grab the handlebars as you step on to help you stay balanced. Begin pedaling to turn it on. Taking a few steps forward on the machine should power up the display. If not, look for a start button. Start pedaling at an even pace. Your arms should be swinging with the handles. When your left foot goes down, straightening your leg, the right handle should be pulled toward your body. Same for when your right leg goes down.',
                                            Reps: '15 minutes',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Elliptical_Machine.jpg'
                                        },
                                    ]
                                ,
                                main_workout:
                                    [
                                        {
                                            name: 'Situps',
                                            instruction: 'Lie down on your back. Bend your legs and place feet firmly on the ground to stabilize your lower body. Cross your hands to opposite shoulders or place them behind your ears, without pulling on your neck. Curl your upper body all the way up toward your knees. Exhale as you lift. Slowly, lower yourself down, returning to your starting point. Inhale as you lower.',
                                            Reps: '20',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Situps.jpg'
                                        },
                                        {
                                            name:'Plank',
                                            instruction: 'Lie facedown with your forearms on the floor, with your legs extended and your feet together. You can use a mat or towel to make this more comfortable. Push into your forearms as you raise your body so it forms a straight line from your head and neck to your feet. (Do not let your hips rise or sag.) Keep your gaze down and hold this position as you engage your abdominal muscles. Take steady, even breaths.',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Plank.jpg'
                                        },
                                        {
                                            name: 'Russian Twist',
                                            instruction: 'Sit on the floor with a light dumbbell, weight plate, or kettlebell by your side.  Grab the weight with both hands and hold it in front of your chest with your elbows bent. Lean your torso slightly back and engage your abs to stay in position. Cross your feet, bend your knees slightly, and lift your feet a few inches off the floor. Doing so will allow your body to form a V-shape. With your feet steady, take a breath, and twist your torso to the right. Initiate the movement from your midsection and allow your arms to follow naturally. Don’t twist with your arms first because doing so will prevent optimal core engagement. Once you’ve twisted to the right, exhale. As you bring your torso to the left, take another breath and immediately twist to the left. Keep alternating between left and right, breathing as you do.',
                                            Reps: '20',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Russian_Twist.jpg'
                                        },
                                        {
                                            name:'Side Plank',
                                            instruction: 'Engage your abdominal muscles, drawing your navel toward your spine. Lift your hips and knees from the mat while exhaling. Your torso is straight in line with no sagging or bending. Hold the position. After several breaths, inhale and return to the starting position. The goal should be to hold for 60 seconds. Change sides and repeat.',
                                            Reps: '45 seconds',
                                            Sets: '4',
                                            photoURL: process.env.PUBLIC_URL + '/img/Side_Planks.jpg'
                                        },
                                        {
                                            name:'Glute Bridges',
                                            instruction: 'Lie on back with bent knees hip distance apart, and feet flat on mat stacked under the knees. Engage the core and squeeze your glutes as you lift your hips to a bridge. Hold, squeezing tight and return to mat with control.',
                                            Reps: '20',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Glute_Bridges.jpg'
                                        }
                                    ]
                                ,

                                cool_down:
                                    [
                                        {
                                            name: 'Bear Crawls',
                                            instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                            Reps: '60',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Bear_Crawl.jpg'
                                        }
                                    ]

                            }

                        },
                        {
                            session:
                            {
                                day: 3,
                                warm_up:
                                    [
                                        {
                                            name: 'Jumping Jacks',
                                            instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Jumping_Jacks.jpg'
                                        }
                                    ]
                                ,
                                main_workout:
                                    [
                                        {
                                            name: 'Bird to Dog',
                                            instruction: 'Start on your hands and knees with the hands under the shoulders and the knees under the hips. Extend one leg and the opposite arm at the same time. Pause for 3 to 5 seconds, return to the starting position, and switch sides.',
                                            Reps: '10',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Bird_To_Dog.jpg'
                                        },
                                        {
                                            name:'Plank',
                                            instruction: 'Lie facedown with your forearms on the floor, with your legs extended and your feet together. You can use a mat or towel to make this more comfortable. Push into your forearms as you raise your body so it forms a straight line from your head and neck to your feet. (Do not let your hips rise or sag.) Keep your gaze down and hold this position as you engage your abdominal muscles. Take steady, even breaths.',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Plank.jpg'
                                        },
                                        {
                                            name:'Reverse Crunch',
                                            instruction: 'Bend your legs at the knee and brace your abs to slowly raise your legs so the knees are directly over your hips and your lower legs are parallel to the floor (bent 90 degrees). This is the starting position. Brace the abdominal muscles and hold a neutral spine position with a slight natural curve in the lower back (lumbar) region yet with the back firmly against the floor. Exhale as you contract the abs to curl your hips and knees toward your chest, with only your hips coming off the mat as you curl. Your knees should remain at the same angle throughout this upward phase. Your head should be kept straight and the neck and shoulders should remain relaxed and on the mat. Hold when you cannot curl without your back coming off the mat. Inhale and slowly return to the starting position with your hips back on the mat and your knees over your hips, still bent 90 degrees.',
                                            Reps: '10',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Reverse_Crunch.jpg'
                                        },
                                        {
                                            name:'Side Plank',
                                            instruction: 'Engage your abdominal muscles, drawing your navel toward your spine. Lift your hips and knees from the mat while exhaling. Your torso is straight in line with no sagging or bending. Hold the position. After several breaths, inhale and return to the starting position. The goal should be to hold for 60 seconds. Change sides and repeat.',
                                            Reps: '45 seconds',
                                            Sets: '4',
                                            photoURL: process.env.PUBLIC_URL + '/img/Side_Planks.jpg'
                                        },
                                        {
                                            name: 'Leg Raises',
                                            instruction: 'Lie on your back, legs straight and together. Keep your legs straight and lift them all the way up to the ceiling until your butt comes off the floor. Slowly lower your legs back down till they are just above the floor. Hold for a moment. Raise your legs back up.',
                                            Reps: '15',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Leg_Raises.jpg'
                                        },
                                    ]
                                ,

                                cool_down:
                                    [
                                        {
                                            name: 'Up Dog',
                                            instruction: ' Begin lying face down on your mat with head slightly lifted and hand sitting directly under shoulders. Point your toes so the tops of you feet are on the mat. As you exhale, press through your hands and the tops of your feet raising your body and legs up off the ground until arms are straight.',
                                            Reps: '1 minute',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Up_Dog.jpg'
                                        },
                                    ]

                            }

                        },
                        'rest',
                        {
                            session:
                            {
                                day: 4,
                                warm_up:
                                    [
                                        {
                                            name: 'Elliptical Machine',
                                            instruction: 'Step onto the machine facing the monitor. Be careful stepping onto the machine. The pedals may start to move as you do and it can be easy to lose your balance. Grab the handlebars as you step on to help you stay balanced. Begin pedaling to turn it on. Taking a few steps forward on the machine should power up the display. If not, look for a start button. Start pedaling at an even pace. Your arms should be swinging with the handles. When your left foot goes down, straightening your leg, the right handle should be pulled toward your body. Same for when your right leg goes down.',
                                            Reps: '15 minutes',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Elliptical_Machine.jpg'
                                        }
                                    ]
                                ,
                                main_workout:
                                    [
                                        {
                                            name: 'Bird to Dog',
                                            instruction: 'Start on your hands and knees with the hands under the shoulders and the knees under the hips. Extend one leg and the opposite arm at the same time. Pause for 3 to 5 seconds, return to the starting position, and switch sides.',
                                            Reps: '10',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Bird_To_Dog.jpg'
                                        },
                                        {
                                            name:'Plank',
                                            instruction: 'Lie facedown with your forearms on the floor, with your legs extended and your feet together. You can use a mat or towel to make this more comfortable. Push into your forearms as you raise your body so it forms a straight line from your head and neck to your feet. (Do not let your hips rise or sag.) Keep your gaze down and hold this position as you engage your abdominal muscles. Take steady, even breaths.',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Plank.jpg'
                                        },
                                        {
                                            name: 'Farmers Carry',
                                            instruction: 'Squat down and grab a weight in each hand. Engage the core and pull your shoulder blades down and back while standing back up, returning to an upright posture. Step forward and begin walking. Keep your head up, shoulders back, and core muscles engaged. Continue walking for your desired time or distance.',
                                            Weight: '30',
                                            Reps: '50 meter',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Farmers_Carry.jpg'
                                        
                                        },
                                        {
                                            name:'Glute Bridges',
                                            instruction: 'Lie on back with bent knees hip distance apart, and feet flat on mat stacked under the knees. Engage the core and squeeze your glutes as you lift your hips to a bridge. Hold, squeezing tight and return to mat with control.',
                                            Reps: '20',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Glute_Bridges.jpg'
                                        },
                                        {
                                            name: 'Leg Raises',
                                            instruction: 'Lie on your back, legs straight and together. Keep your legs straight and lift them all the way up to the ceiling until your butt comes off the floor. Slowly lower your legs back down till they are just above the floor. Hold for a moment. Raise your legs back up.',
                                            Reps: '15',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Leg_Raises.jpg'
                                        },
                                    ]
                                ,

                                cool_down:
                                    [
                                        {
                                            name: 'Up Dog',
                                            instruction: ' Begin lying face down on your mat with head slightly lifted and hand sitting directly under shoulders. Point your toes so the tops of you feet are on the mat. As you exhale, press through your hands and the tops of your feet raising your body and legs up off the ground until arms are straight.',
                                            Reps: '1 minute',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Up_Dog.jpg'
                                        },
                                    ]

                            },

                        },
                        {
                            session:
                            {
                                day: 5,
                                warm_up:
                                    [
                                        {
                                            name: 'Bear Crawls',
                                            instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                            Reps: '60',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Bear_Crawl.jpg'
                                        }
                                    ]
                                ,
                                main_workout:
                                    [
                                        {
                                            name: 'Deadbug',
                                            instruction: 'Allow your shoulders and lower back to fall heavy to the floor. Draw your shoulders down away from your ears. To get into the starting position, lift your hands so your elbows are above your shoulders with your fists facing in toward each other. Lift your legs so your knees are directly over your hips. On an exhale, slowly lower your right arm and left leg until they’re just above the floor. On an inhale, bring them back to the starting position. Repeat on the opposite side.',
                                            Reps: '15',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Deadbug.jpg'
                                        },
                                        {
                                            name:'Plank',
                                            instruction: 'Lie facedown with your forearms on the floor, with your legs extended and your feet together. You can use a mat or towel to make this more comfortable. Push into your forearms as you raise your body so it forms a straight line from your head and neck to your feet. (Do not let your hips rise or sag.) Keep your gaze down and hold this position as you engage your abdominal muscles. Take steady, even breaths.',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Plank.jpg'
                                        },
                                        {
                                            name: 'Bird to Dog',
                                            instruction: 'Start on your hands and knees with the hands under the shoulders and the knees under the hips. Extend one leg and the opposite arm at the same time. Pause for 3 to 5 seconds, return to the starting position, and switch sides.',
                                            Reps: '10',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Bird_To_Dog.jpg'
                                        },
                                        {
                                            name:'Side Plank',
                                            instruction: 'Engage your abdominal muscles, drawing your navel toward your spine. Lift your hips and knees from the mat while exhaling. Your torso is straight in line with no sagging or bending. Hold the position. After several breaths, inhale and return to the starting position. The goal should be to hold for 60 seconds. Change sides and repeat.',
                                            Reps: '45 seconds',
                                            Sets: '4',
                                            photoURL: process.env.PUBLIC_URL + '/img/Side_Planks.jpg'
                                        },
                                        {
                                            name:'V-Ups',
                                            instruction: 'Lie on your back with your arms extended above your head. Keep your legs straight and feet together. Point your toes and engage your core to lift your feet about 6 inches off the floor. Exhale as you engage your core to lift your torso and legs at the same time to create a "V" shape with your body.',
                                            Reps: '10',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/V-Ups.jpg'
                                        }
                                    ]
                                ,

                                cool_down:
                                    [
                                        {
                                            name: 'Up Dog',
                                            instruction: ' Begin lying face down on your mat with head slightly lifted and hand sitting directly under shoulders. Point your toes so the tops of you feet are on the mat. As you exhale, press through your hands and the tops of your feet raising your body and legs up off the ground until arms are straight.',
                                            Reps: '1 minute',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Up_Dog.jpg'
                                        },
                                    ]

                            },

                        },
                        {
                            session:
                            {
                                day: 7,
                                warm_up:
                                    [
                                        {
                                            name: 'Jumping Jacks',
                                            instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Jumping_Jacks.jpg'
                                        }
                                    ]
                                ,
                                main_workout:
                                    [
                                        {
                                            name: 'Bird to Dog',
                                            instruction: 'Start on your hands and knees with the hands under the shoulders and the knees under the hips. Extend one leg and the opposite arm at the same time. Pause for 3 to 5 seconds, return to the starting position, and switch sides.',
                                            Reps: '10',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Bird_To_Dog.jpg'
                                        },
                                        {
                                            name: 'Leg Raises',
                                            instruction: 'Lie on your back, legs straight and together. Keep your legs straight and lift them all the way up to the ceiling until your butt comes off the floor. Slowly lower your legs back down till they are just above the floor. Hold for a moment. Raise your legs back up.',
                                            Reps: '15',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Leg_Raises.jpg'
                                        },
                                        {
                                            name: 'Deadbug',
                                            instruction: 'Allow your shoulders and lower back to fall heavy to the floor. Draw your shoulders down away from your ears. To get into the starting position, lift your hands so your elbows are above your shoulders with your fists facing in toward each other. Lift your legs so your knees are directly over your hips. On an exhale, slowly lower your right arm and left leg until they’re just above the floor. On an inhale, bring them back to the starting position. Repeat on the opposite side.',
                                            Reps: '15',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Deadbug.jpg'
                                        },
                                        {
                                            name: 'Farmers Carry',
                                            instruction: 'Squat down and grab a weight in each hand. Engage the core and pull your shoulder blades down and back while standing back up, returning to an upright posture. Step forward and begin walking. Keep your head up, shoulders back, and core muscles engaged. Continue walking for your desired time or distance.',
                                            Weight: '30',
                                            Reps: '50 meter',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Farmers_Carry.jpg'
                                        
                                        },
                                        {
                                            name:'Plank',
                                            instruction: 'Lie facedown with your forearms on the floor, with your legs extended and your feet together. You can use a mat or towel to make this more comfortable. Push into your forearms as you raise your body so it forms a straight line from your head and neck to your feet. (Do not let your hips rise or sag.) Keep your gaze down and hold this position as you engage your abdominal muscles. Take steady, even breaths.',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Plank.jpg'
                                        }
                                    ]
                                ,

                                cool_down:
                                    [
                                        {
                                            name: 'Up Dog',
                                            instruction: ' Begin lying face down on your mat with head slightly lifted and hand sitting directly under shoulders. Point your toes so the tops of you feet are on the mat. As you exhale, press through your hands and the tops of your feet raising your body and legs up off the ground until arms are straight.',
                                            Reps: '1 minute',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Up_Dog.jpg'
                                        },
                                    ]

                            },

                        },
                    ]
            }
        }
    },
    overall_fitness: {
        two_three: {
            workout: {
                name: 'Beginner Calisthenics',
                schedule:
                    [
                        {
                            session:
                            {
                                day: 1,
                                warm_up:
                                [
                                    {
                                            name: 'Jumping Jacks',
                                            instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Jumping_Jacks.jpg'
                                        },
                                        {
                                            name: 'Mountain Climbers',
                                            instruction: 'Start in a plank with your shoulders directly over your wrists. Keep your back flat and your hips down, maintaining a neutral spine. Engage your core, and lift your right leg, drawing your knee in toward your chest. Return the right foot to the starting position as you simultaneously drive your left knee toward your chest. Return to the starting position. Continue alternating sides. To increase the intensity, pick up the pace until it feels like you are "running" in place in a plank position.',
                                            Reps: '1 minute',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Mountain_Climbers.jpg'
                                        },
                                        {
                                            name: 'Arm Circles',
                                            instruction: 'Stand upright with a shoulder-wide stance. Extend your arms to your sides. They should be parallel to the floor. Push your shoulders back and down to get in position. Rotate your arms clockwise at your shoulders. Arm circles are usually performed until you feel a burn in your shoulders or if you can’t hold your arms parallel to the floor.',
                                            Reps: '1 minute',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Arm_Circles.jpg'
                                        }
                                ],
                                main_workout:
                                    [
                                        {
                                            name: 'Burpees',
                                            instruction: 'Begin in a standing position. Position your feet shoulder-width apart. Keep your back straight, your chest out and your arms at your sides. Drop into a squat. Bend your knees, driving them out slightly past your toes, while bringing your butt down. Keep your feet flat on the floor. Place your hands on the floor in front of your feet. Kick your legs back into a high plank position. Your body should be in a straight line from shoulders to heels. Lock your arms in place. Keep your head straight, eyes looking slightly ahead. Lower toward the ground. Bend your elbows and bring your body toward the floor. (Basically, the bottom part of a push-up.) Keep your body straight and your core tight. Rise back to high plank. Focus on keeping your body straight. Return to a squat position. Jump your legs forward. When you land, make sure your feet are flat on the floor. Jump! Reach your arms up as you launch toward the ceiling.',
                                            Reps: '10',
                                            photoURL: process.env.PUBLIC_URL + '/img/Pushups.jpg'
                                        },
                                        {
                                            name:'Pullups',
                                            instruction: 'Start by standing directly below a pull-up bar. Place your hands in an overhand grip (palms facing away from your body) with your hands slightly further than shoulder-width apart. If you can’t reach the bar from standing on the floor, you can place a box beneath you and stand on that. Once your hands are holding onto the bar, you’re in your starting position. Inhale, then exhale. Lift your feet up from the floor or box so that you’re hanging from the bar, and engage your core by pulling your belly button in toward your spine. Pull your shoulders back and down. Engaging the muscles in your arms and back, bend your elbows and raise your upper body up toward the bar until your chin is over the bar. You can imagine bringing your elbows toward your hips if that makes the movement easier. As you move, avoid swinging your legs around or shrugging your shoulders up. You want to make sure your shoulder blades remain back and down throughout the exercise. At the top of the movement, inhale. Then extend your elbows and lower your body back down to the starting position.',
                                            Reps: '8',
                                            photoURL: process.env.PUBLIC_URL + '/img/Pullups.jpg'
                                        },
                                        {
                                            name: 'Hanging Leg Raises',
                                            instruction: 'Exhale as you lift your feet off the ground, raising your straight legs outward in front of you. Tilt your pelvis slightly back and engage your abdominals and hip flexors to assist with the movement. Raise your legs to a level that feels challenging but still enables you to keep good form. Strive to get them parallel to the ground (so that your hips are bent at 90 degrees), or a little higher if you can. Lower your legs back down slowly until they return to the starting position, inhaling during this portion of the exercise. Maintain your posterior pelvic tilt, even at the bottom of the movement.',
                                            Reps: '8',
                                            photoURL: process.env.PUBLIC_URL + '/img/Hanging_Leg_Raises.jpg'
                                        },
                                        {
                                            name: 'Squats',
                                            instruction: 'Stand with feet a little wider than hip width, toes facing front. Drive your hips back—bending at the knees and ankles and pressing your knees slightly open. Sit into a squat position while still keeping your heels and toes on the ground, chest up and shoulders back. Strive to eventually reach parallel, meaning knees are bent to a 90-degree angle. Press into your heels and straighten legs to return to a standing upright position.',
                                            Reps: '20',
                                            photoURL: process.env.PUBLIC_URL + '/img/Squats.jpg'
                                        },
                                        {
                                            name: 'Bench Dips',
                                            instruction: 'Sit on the edge of a bench, with your arms extended and your hands on the bench. To start, keep your feet flat on the floor with your knees bent. As you progress, you can straighten your legs and rest your heels on the ground to ramp up the difficulty. Importantly, your hands should be placed on the bench so that your hands are facing out away from yourself. If you keep your knuckles facing forward, you will put your shoulders into an internally rotated position. Push up off the bench, which will help you to drive your shoulder blades down and create scapular depression. Squeeze your shoulder blades to create tension. Lower down with control to a depth that feels comfortable. You should not lose tension in your mid-back. Your elbows should never exceed your shoulder height. Extend your elbows and squeeze your triceps hard to raise back up.',
                                            Reps: '10',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Bench_Dips.jpg'
                                        },
                                        {
                                            name: 'Rest',
                                            instruction:'Rest 1 minute, then repeat 6 times'
                                        }
                                    ],
                                cool_down:
                                    [
                                        {
                                            name: 'Frog Stands',
                                            instruction: 'Start the exercise by getting into the bottom of the squat position and placing the hands on the ground in front of the feet, next to the toes. Now move the knees so that they are resting against the bent elbows for support (with your knees in this position your legs will help carry some of your bodyweight to make the hold possible). Lean forward into the hold taking the weight onto the hands so the feet are raised completely from the floor. Beginners may not be able to lift the feet entirely off the ground but with regular practice balance and strength skills will develop to accommodate the exercise. Hold the position. Beginners should start with a few seconds or so and build up to a minute before considering the frog stand progression exercises.',
                                            Reps: '30 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Frog_Stands.jpg'
                                        },
                                        {
                                            name: 'Trunk Twists',
                                            instruction: 'Sit with your legs crossed. Reach your left hand toward your left foot, and place your right hand at your side for support. Slowly twist your torso to your right. Switch your hands and twist to your left.',
                                            Reps: '10',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Trunk_Twists.jpg'
                                        },
                                        {
                                            name: 'Wrist Stretch',
                                            instruction: 'Extend your arm in front of you with your palm down. Bend your wrist, pointing your hand toward the floor. With your other hand, gently bend your wrist farther until you feel a mild to moderate stretch in your forearm.',
                                            Reps: '30 seconds',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Wrist_Stretch.jpg'
                                        }
                                    ]
                            }
                        },
                        'rest',
                        {
                            session:
                            {
                                day: 3,
                                warm_up:
                                    [
                                        {
                                            name: 'Jumping Jacks',
                                            instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Jumping_Jacks.jpg'
                                        },
                                        {
                                            name: 'Mountain Climbers',
                                            instruction: 'Start in a plank with your shoulders directly over your wrists. Keep your back flat and your hips down, maintaining a neutral spine. Engage your core, and lift your right leg, drawing your knee in toward your chest. Return the right foot to the starting position as you simultaneously drive your left knee toward your chest. Return to the starting position. Continue alternating sides. To increase the intensity, pick up the pace until it feels like you are "running" in place in a plank position.',
                                            Reps: '1 minute',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Mountain_Climbers.jpg'
                                        },
                                        {
                                            name: 'Arm Circles',
                                            instruction: 'Stand upright with a shoulder-wide stance. Extend your arms to your sides. They should be parallel to the floor. Push your shoulders back and down to get in position. Rotate your arms clockwise at your shoulders. Arm circles are usually performed until you feel a burn in your shoulders or if you can’t hold your arms parallel to the floor.',
                                            Reps: '1 minute',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Arm_Circles.jpg'
                                        }
                                    ],
                                main_workout:
                                    [
                                        {
                                            name: 'Diamond Pushups',
                                            instruction: 'Move into push up position. Face the mat and stretch out your arms and legs a bit to get ready. Place your hands under your chest and make a diamond shape. Touch your forefingers together and your thumbs together. This forms your diamond, also known as a pyramid. Lower yourself to the ground, then push up. Keep your back straight and tense your abs and chest. Make sure to keep your fingers in the correct diamond position.',
                                            Reps: '8',
                                            photoURL: process.env.PUBLIC_URL + '/img/Diamond_Pushups.jpg'
                                        },
                                        {
                                            name:'Pullups',
                                            instruction: 'Start by standing directly below a pull-up bar. Place your hands in an overhand grip (palms facing away from your body) with your hands slightly further than shoulder-width apart. If you can’t reach the bar from standing on the floor, you can place a box beneath you and stand on that. Once your hands are holding onto the bar, you’re in your starting position. Inhale, then exhale. Lift your feet up from the floor or box so that you’re hanging from the bar, and engage your core by pulling your belly button in toward your spine. Pull your shoulders back and down. Engaging the muscles in your arms and back, bend your elbows and raise your upper body up toward the bar until your chin is over the bar. You can imagine bringing your elbows toward your hips if that makes the movement easier. As you move, avoid swinging your legs around or shrugging your shoulders up. You want to make sure your shoulder blades remain back and down throughout the exercise. At the top of the movement, inhale. Then extend your elbows and lower your body back down to the starting position.',
                                            Reps: '8',
                                            photoURL: process.env.PUBLIC_URL + '/img/Pullups.jpg'
                                        },
                                        {
                                            name:'Inverted Rows',
                                            instruction: 'Set the bar around waist height. The lower the bar, the more difficult the movement becomes. Position yourself under the bar lying face up. Lie on the floor underneath the bar (which should be set just above where you can reach from the ground). Grab the bar with an overhand grip, slightly wider than shoulder-width (palms facing AWAY from you). Contract your abs and butt, and keep your body a completely straight line. Your ears, shoulders, hips legs, and feet should all be in a straight line. Pull yourself up to the bar until your chest touches the bar. Lower yourself back down.',
                                            Reps:'10',
                                            photoURL: process.env.PUBLIC_URL + '/img/Inverted_Row.jpg'
                                        },
                                        {
                                            name: 'Jumping Lunges',
                                            instruction: 'Take a large step backward and lower your hips, so that your back knee is just above the floor, and your front thigh is parallel to the floor. Jump into the air and switch leg positions. Jump again and return to the starting position.',
                                            Reps: '20',
                                            photoURL: process.env.PUBLIC_URL + '/img/Lunges.jpg'
                                        },
                                        {
                                            name:'Plank',
                                            instruction: 'Lie facedown with your forearms on the floor, with your legs extended and your feet together. You can use a mat or towel to make this more comfortable. Push into your forearms as you raise your body so it forms a straight line from your head and neck to your feet. (Do not let your hips rise or sag.) Keep your gaze down and hold this position as you engage your abdominal muscles. Take steady, even breaths.',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Plank.jpg'
                                        },
                                        {
                                            name:'Rest',
                                            instruction: 'Rest 1 minute, then repeat 5 times'
                                        }
                                    ],
                                cool_down:
                                    [
                                        {
                                            name: 'Handstand Kick Up',
                                            instruction: 'Get your hips over your shoulders(which, in turn, should already be over your hands)  / get hips as high as possible. Use your shoulder strength to kind of push back, and prevent them from falling forwards when you kick up. Keep them tight, and in position over your hands. When you kick, also make a small jump with the other leg. Let the second leg stay down until you’ve gained balance. When you’ve created balance, then slowly bring the second leg together with the first. Throwing up your second leg too soon or too hard is a major source of inconsistency in correctly performing the kick-up.',
                                            Reps: '20 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Handstand_Kickup.jpg'
                                        },
                                        {
                                            name: 'Seated Toe Touches',
                                            instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                            Reps: '30 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                                        },
                                        {
                                            name:'Reach For The Sky',
                                            instruction: 'Start in the seated position. Place the left hand in your lap and stretch the right hand towards. the sky. Bend slightly to your left side, feeling a light stretch along your. right side. Count to 10 while breathing slowly. Switch to the left hand and repeat.',
                                            Reps: '15 seconds',
                                            Sets: '4',
                                            photoURL: process.env.PUBLIC_URL + '/img/Reach_For_The_Sky.jpg'
                                        }
                                    ]
                            }
                        },
                        'rest',
                        {
                            session:
                            {
                                day: 5,
                                warm_up:
                                    [
                                        {
                                            name: 'Lunges',
                                            instruction: 'Stand with your feet hip-width apart. Step forward and bend both knees, lowering until your knees are bent at a 90-degree angle. Shift forward onto the lead leg. Push off on both legs and step through, lifting your back leg and bringing it forward so your rear foot lands ahead of you in a lunge position.',
                                            Reps: '20',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Lunges.jpg'
                                        },
                                        {
                                            name: 'Squats',
                                            instruction: 'Stand with feet a little wider than hip width, toes facing front. Drive your hips back—bending at the knees and ankles and pressing your knees slightly open. Sit into a squat position while still keeping your heels and toes on the ground, chest up and shoulders back. Strive to eventually reach parallel, meaning knees are bent to a 90-degree angle. Press into your heels and straighten legs to return to a standing upright position.',
                                            Reps: '20',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Squats.jpg'
                                        },
                                        {
                                            name: 'Back Extentions',
                                            instruction: 'Lie on a mat on your stomach and straighten your legs behind you. Place your elbows on the ground and slide your shoulders down. Lift your upper back, pressing your hips into the mat. Keep your head and neck neutral. Hold for 30 seconds. Lower to starting position.',
                                            Reps: '30 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Back_Extentions.jpg'
                                        }
                                    ],
                                main_workout:
                                    [
                                        {
                                            name: 'Pistol Squat',
                                            instruction: 'With a kettlebell or dumbbell at your chest, stand on left leg, right leg held out straight and off the floor. Perform the pistol squat by sending hips down and back, keeping the chest tall and right leg lifted. Drive through left foot to stand back up.',
                                            Reps: '5',
                                            photoURL: process.env.PUBLIC_URL + '/img/Pistol_Squat.jpg'
                                        },
                                        {
                                            name:'Incline Push-ups',
                                            instruction: 'Stand facing the bench, table, or the edge of a bed. Place your hands on the edge of the bench just slightly wider than shoulder width. Your arms are straight but elbows are not locked. Align your feet so that your arms and body are completely straight. Bend your elbows to slowly lower your chest to the edge of the bench while inhaling. Keep your body straight and rigid throughout the movement. Push your body away from the bench until your elbows are extended, but not locked. Exhale as you push up.',
                                            Reps: '5',
                                            photoURL: process.env.PUBLIC_URL + '/img/Incline_Pushup.jpg'
                                        },
                                        {
                                            name: 'Clap Push-ups',
                                            instruction: 'Get down on all fours and place your hands on the floor so that they’re slightly wider than and in line with your shoulders. Squeeze your glutes and brace your abdominals—as if you were about to be punched in the gut. Maintain these contractions for the duration of this exercise.Your body should form a straight line from your ankles to your head. Lower your body until your chest nearly touches the floor. Pause at the bottom, and then explosively push your body away from the ground with enough force to clap your hands once beneath your chest before returning them to the ground.',
                                            Reps: '5',
                                            photoURL: process.env.PUBLIC_URL + '/img/Clap_Pushups.jpg'
                                        },
                                        {
                                            name:'Pullups',
                                            instruction: 'Start by standing directly below a pull-up bar. Place your hands in an overhand grip (palms facing away from your body) with your hands slightly further than shoulder-width apart. If you can’t reach the bar from standing on the floor, you can place a box beneath you and stand on that. Once your hands are holding onto the bar, you’re in your starting position. Inhale, then exhale. Lift your feet up from the floor or box so that you’re hanging from the bar, and engage your core by pulling your belly button in toward your spine. Pull your shoulders back and down. Engaging the muscles in your arms and back, bend your elbows and raise your upper body up toward the bar until your chin is over the bar. You can imagine bringing your elbows toward your hips if that makes the movement easier. As you move, avoid swinging your legs around or shrugging your shoulders up. You want to make sure your shoulder blades remain back and down throughout the exercise. At the top of the movement, inhale. Then extend your elbows and lower your body back down to the starting position.',
                                            Reps: '8',
                                            photoURL: process.env.PUBLIC_URL + '/img/Pullups.jpg'
                                        },
                                        {
                                            name: 'Burpees',
                                            instruction: 'Begin in a standing position. Position your feet shoulder-width apart. Keep your back straight, your chest out and your arms at your sides. Drop into a squat. Bend your knees, driving them out slightly past your toes, while bringing your butt down. Keep your feet flat on the floor. Place your hands on the floor in front of your feet. Kick your legs back into a high plank position. Your body should be in a straight line from shoulders to heels. Lock your arms in place. Keep your head straight, eyes looking slightly ahead. Lower toward the ground. Bend your elbows and bring your body toward the floor. (Basically, the bottom part of a push-up.) Keep your body straight and your core tight. Rise back to high plank. Focus on keeping your body straight. Return to a squat position. Jump your legs forward. When you land, make sure your feet are flat on the floor. Jump! Reach your arms up as you launch toward the ceiling.',
                                            Reps: '10',
                                            photoURL: process.env.PUBLIC_URL + '/img/Pushups.jpg'
                                        },
                                        {
                                            name: 'rest',
                                            instruction: 'rest 1 minute, then repeat 5 times'
                                        }

                                    ],
                                cool_down:
                                    [
                                        {
                                            name: 'Jumping Muscle Ups', 
                                            instruction: 'The first important tip is that you need to create a swing. Why? Because the goal is to go around the bar and to get on top of the bar. With a swing, you can create momentum and move diagonally. In comparison with a regular pull-up, you pull yourself straight up without swing. This makes it impossible to get over the bar because you can’t bring your elbows around the bar. The next important tip which you need to implement if you want to know how to do a muscle-up is to learn at which exact moment you need to pull yourself up. So, you create a swing as mentioned above. When you are as forward as possible during the swing you need to pull yourself up diagonally. Or, in other words, at the exact moment that your swing is going backward instead of forward, you need to pull yourself up diagonally. To make this technique a little bit easier for yourself, you can imagine that there is a trampoline in front of you. When you are approaching the pretended trampoline you have to imagine jumping into it to create momentum and pull yourself up directly. Another very helpful tip is to use your knees to create even more momentum to get over the bar. Kipping your knees will make it easier. We know that this is not a strict form muscle-up, but you can learn that later. This tutorial is about learning your first muscle-up. In this stadium, it is important that you learn how to get over the bar. Therefore your muscle-up doesn’t have to be perfect. This important tip is all about ‘How to pull’. Normally we see a lot of people performing a pull-up and then they won’t make it to get over the bar. This is because you should not bring your chest to the bar. The goal is to bring your hips to the bar. You can do this by doing a straight arm pull down movement. This will make it way easier to get over the bar. The last tip is about where you should stand if you start with the muscle-up. You should not start below the bar but behind the bar. Then you jump into the bar and swing yourself forward. The first time you get in front of the bar (during your swing), you should pull yourself up immediately. Why can’t you just hang on the bar and start swinging until you feel like it is the right moment for you? Because it takes way more energy which you can use to pull yourself up.',
                                            Reps: '5',
                                            photoURL: process.env.PUBLIC_URL + '/img/Pullup.jpg'
                                        },
                                        {
                                            name: 'Childs Pose',
                                            instruction: 'Begin on your yoga mat on all fours supported by your hands and knees. Make sure your hands are directly beneath your shoulders, knees directly beneath your hips, and your feet directly behind your knees. Sit back onto your feet, keeping your feet and knees hip’s width apart. The soles of the feet will be facing the sky in the pose. Gently lower your upper body forward, resting your forehead on the floor. Allow your arms to rest loosely by your sides, hands by your feet, with palms facing the sky. Inhale, lengthening your spine. Exhale, relaxing your shoulders.',
                                            Reps: '1 minute',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Childs_Pose.jpg'
                                        },
                                        {
                                            name: 'Up Dog',
                                            instruction: ' Begin lying face down on your mat with head slightly lifted and hand sitting directly under shoulders. Point your toes so the tops of you feet are on the mat. As you exhale, press through your hands and the tops of your feet raising your body and legs up off the ground until arms are straight.',
                                            Reps: '1 minute',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Up_Dog.jpg'
                                        },

                                    ]
                            }
                        },
                    ]
            }
        },
        four_six: {
            workout: {
                name: 'Beginner Calisthenics',
                schedule:
                    [
                        {
                            session:
                            {
                                day: 1,
                                warm_up:
                                [
                                    {
                                            name: 'Jumping Jacks',
                                            instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Jumping_Jacks.jpg'
                                        },
                                        {
                                            name: 'Mountain Climbers',
                                            instruction: 'Start in a plank with your shoulders directly over your wrists. Keep your back flat and your hips down, maintaining a neutral spine. Engage your core, and lift your right leg, drawing your knee in toward your chest. Return the right foot to the starting position as you simultaneously drive your left knee toward your chest. Return to the starting position. Continue alternating sides. To increase the intensity, pick up the pace until it feels like you are "running" in place in a plank position.',
                                            Reps: '1 minute',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Mountain_Climbers.jpg'
                                        },
                                        {
                                            name: 'Arm Circles',
                                            instruction: 'Stand upright with a shoulder-wide stance. Extend your arms to your sides. They should be parallel to the floor. Push your shoulders back and down to get in position. Rotate your arms clockwise at your shoulders. Arm circles are usually performed until you feel a burn in your shoulders or if you can’t hold your arms parallel to the floor.',
                                            Reps: '1 minute',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Arm_Circles.jpg'
                                        }
                                ],
                                main_workout:
                                    [
                                        {
                                            name: 'Burpees',
                                            instruction: 'Begin in a standing position. Position your feet shoulder-width apart. Keep your back straight, your chest out and your arms at your sides. Drop into a squat. Bend your knees, driving them out slightly past your toes, while bringing your butt down. Keep your feet flat on the floor. Place your hands on the floor in front of your feet. Kick your legs back into a high plank position. Your body should be in a straight line from shoulders to heels. Lock your arms in place. Keep your head straight, eyes looking slightly ahead. Lower toward the ground. Bend your elbows and bring your body toward the floor. (Basically, the bottom part of a push-up.) Keep your body straight and your core tight. Rise back to high plank. Focus on keeping your body straight. Return to a squat position. Jump your legs forward. When you land, make sure your feet are flat on the floor. Jump! Reach your arms up as you launch toward the ceiling.',
                                            Reps: '10',
                                            photoURL: process.env.PUBLIC_URL + '/img/Pushups.jpg'
                                        },
                                        {
                                            name:'Pullups',
                                            instruction: 'Start by standing directly below a pull-up bar. Place your hands in an overhand grip (palms facing away from your body) with your hands slightly further than shoulder-width apart. If you can’t reach the bar from standing on the floor, you can place a box beneath you and stand on that. Once your hands are holding onto the bar, you’re in your starting position. Inhale, then exhale. Lift your feet up from the floor or box so that you’re hanging from the bar, and engage your core by pulling your belly button in toward your spine. Pull your shoulders back and down. Engaging the muscles in your arms and back, bend your elbows and raise your upper body up toward the bar until your chin is over the bar. You can imagine bringing your elbows toward your hips if that makes the movement easier. As you move, avoid swinging your legs around or shrugging your shoulders up. You want to make sure your shoulder blades remain back and down throughout the exercise. At the top of the movement, inhale. Then extend your elbows and lower your body back down to the starting position.',
                                            Reps: '8',
                                            photoURL: process.env.PUBLIC_URL + '/img/Pullups.jpg'
                                        },
                                        {
                                            name: 'Hanging Leg Raises',
                                            instruction: 'Exhale as you lift your feet off the ground, raising your straight legs outward in front of you. Tilt your pelvis slightly back and engage your abdominals and hip flexors to assist with the movement. Raise your legs to a level that feels challenging but still enables you to keep good form. Strive to get them parallel to the ground (so that your hips are bent at 90 degrees), or a little higher if you can. Lower your legs back down slowly until they return to the starting position, inhaling during this portion of the exercise. Maintain your posterior pelvic tilt, even at the bottom of the movement.',
                                            Reps: '8',
                                            photoURL: process.env.PUBLIC_URL + '/img/Hanging_Leg_Raises.jpg'
                                        },
                                        {
                                            name: 'Squats',
                                            instruction: 'Stand with feet a little wider than hip width, toes facing front. Drive your hips back—bending at the knees and ankles and pressing your knees slightly open. Sit into a squat position while still keeping your heels and toes on the ground, chest up and shoulders back. Strive to eventually reach parallel, meaning knees are bent to a 90-degree angle. Press into your heels and straighten legs to return to a standing upright position.',
                                            Reps: '20',
                                            photoURL: process.env.PUBLIC_URL + '/img/Squats.jpg'
                                        },
                                        {
                                            name: 'Bench Dips',
                                            instruction: 'Sit on the edge of a bench, with your arms extended and your hands on the bench. To start, keep your feet flat on the floor with your knees bent. As you progress, you can straighten your legs and rest your heels on the ground to ramp up the difficulty. Importantly, your hands should be placed on the bench so that your hands are facing out away from yourself. If you keep your knuckles facing forward, you will put your shoulders into an internally rotated position. Push up off the bench, which will help you to drive your shoulder blades down and create scapular depression. Squeeze your shoulder blades to create tension. Lower down with control to a depth that feels comfortable. You should not lose tension in your mid-back. Your elbows should never exceed your shoulder height. Extend your elbows and squeeze your triceps hard to raise back up.',
                                            Reps: '10',
                                            photoURL: process.env.PUBLIC_URL + '/img/Bench_Dips.jpg'
                                        },
                                        {
                                            name: 'Rest',
                                            instructions: 'Rest 1 minute, then repeat 6 times'
                                        }
                                    ],
                                cool_down:
                                    [
                                        {
                                            name: 'Frog Stands',
                                            instruction: 'Start the exercise by getting into the bottom of the squat position and placing the hands on the ground in front of the feet, next to the toes. Now move the knees so that they are resting against the bent elbows for support (with your knees in this position your legs will help carry some of your bodyweight to make the hold possible). Lean forward into the hold taking the weight onto the hands so the feet are raised completely from the floor. Beginners may not be able to lift the feet entirely off the ground but with regular practice balance and strength skills will develop to accommodate the exercise. Hold the position. Beginners should start with a few seconds or so and build up to a minute before considering the frog stand progression exercises.',
                                            Reps: '30 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Frog_Stands.jpg'
                                        },
                                        {
                                            name: 'Trunk Twists',
                                            instruction: 'Sit with your legs crossed. Reach your left hand toward your left foot, and place your right hand at your side for support. Slowly twist your torso to your right. Switch your hands and twist to your left.',
                                            Reps: '10',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Trunk_Twists.jpg'
                                        },
                                        {
                                            name: 'Wrist Stretch',
                                            instruction: 'Extend your arm in front of you with your palm down. Bend your wrist, pointing your hand toward the floor. With your other hand, gently bend your wrist farther until you feel a mild to moderate stretch in your forearm.',
                                            Reps: '30 seconds',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Wrist_Stretch.jpg'
                                        }
                                    ]
                            }
                        },
                        {
                            session:
                            {
                                day: 2,
                                warm_up:
                                    [
                                        {
                                            name: 'Jumping Jacks',
                                            instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Jumping_Jacks.jpg'
                                        },
                                        {
                                            name: 'Mountain Climbers',
                                            instruction: 'Start in a plank with your shoulders directly over your wrists. Keep your back flat and your hips down, maintaining a neutral spine. Engage your core, and lift your right leg, drawing your knee in toward your chest. Return the right foot to the starting position as you simultaneously drive your left knee toward your chest. Return to the starting position. Continue alternating sides. To increase the intensity, pick up the pace until it feels like you are "running" in place in a plank position.',
                                            Reps: '1 minute',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Mountain_Climbers.jpg'
                                        },
                                        {
                                            name: 'Arm Circles',
                                            instruction: 'Stand upright with a shoulder-wide stance. Extend your arms to your sides. They should be parallel to the floor. Push your shoulders back and down to get in position. Rotate your arms clockwise at your shoulders. Arm circles are usually performed until you feel a burn in your shoulders or if you can’t hold your arms parallel to the floor.',
                                            Reps: '1 minute',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Arm_Circles.jpg'
                                        }
                                    ],
                                main_workout:
                                    [
                                        {
                                            name: 'Diamond Pushups',
                                            instruction: 'Move into push up position. Face the mat and stretch out your arms and legs a bit to get ready. Place your hands under your chest and make a diamond shape. Touch your forefingers together and your thumbs together. This forms your diamond, also known as a pyramid. Lower yourself to the ground, then push up. Keep your back straight and tense your abs and chest. Make sure to keep your fingers in the correct diamond position.',
                                            Reps: '8',
                                            photoURL: process.env.PUBLIC_URL + '/img/Diamond_Pushups.jpg'
                                        },
                                        {
                                            name:'Pullups',
                                            instruction: 'Start by standing directly below a pull-up bar. Place your hands in an overhand grip (palms facing away from your body) with your hands slightly further than shoulder-width apart. If you can’t reach the bar from standing on the floor, you can place a box beneath you and stand on that. Once your hands are holding onto the bar, you’re in your starting position. Inhale, then exhale. Lift your feet up from the floor or box so that you’re hanging from the bar, and engage your core by pulling your belly button in toward your spine. Pull your shoulders back and down. Engaging the muscles in your arms and back, bend your elbows and raise your upper body up toward the bar until your chin is over the bar. You can imagine bringing your elbows toward your hips if that makes the movement easier. As you move, avoid swinging your legs around or shrugging your shoulders up. You want to make sure your shoulder blades remain back and down throughout the exercise. At the top of the movement, inhale. Then extend your elbows and lower your body back down to the starting position.',
                                            Reps: '8',
                                            photoURL: process.env.PUBLIC_URL + '/img/Pullups.jpg'
                                        },
                                        {
                                            name:'Inverted Rows',
                                            instruction: 'Set the bar around waist height. The lower the bar, the more difficult the movement becomes. Position yourself under the bar lying face up. Lie on the floor underneath the bar (which should be set just above where you can reach from the ground). Grab the bar with an overhand grip, slightly wider than shoulder-width (palms facing AWAY from you). Contract your abs and butt, and keep your body a completely straight line. Your ears, shoulders, hips legs, and feet should all be in a straight line. Pull yourself up to the bar until your chest touches the bar. Lower yourself back down.',
                                            Reps:'10',
                                            photoURL: process.env.PUBLIC_URL + '/img/Inverted_Row.jpg'
                                        },
                                        {
                                            name: 'Jumping Lunges',
                                            instruction: 'Take a large step backward and lower your hips, so that your back knee is just above the floor, and your front thigh is parallel to the floor. Jump into the air and switch leg positions. Jump again and return to the starting position.',
                                            Reps: '20',
                                            photoURL: process.env.PUBLIC_URL + '/img/Lunges.jpg'
                                        },
                                        {
                                            name:'Plank',
                                            instruction: 'Lie facedown with your forearms on the floor, with your legs extended and your feet together. You can use a mat or towel to make this more comfortable. Push into your forearms as you raise your body so it forms a straight line from your head and neck to your feet. (Do not let your hips rise or sag.) Keep your gaze down and hold this position as you engage your abdominal muscles. Take steady, even breaths.',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Plank.jpg'
                                        },
                                        {
                                            name:'Rest',
                                            instruction: 'Rest 1 minute, then repeat 5 times'
                                        }
                                    ],
                                cool_down:
                                    [
                                        {
                                            name: 'Handstand Kick Up',
                                            instruction: 'Get your hips over your shoulders(which, in turn, should already be over your hands)  / get hips as high as possible. Use your shoulder strength to kind of push back, and prevent them from falling forwards when you kick up. Keep them tight, and in position over your hands. When you kick, also make a small jump with the other leg. Let the second leg stay down until you’ve gained balance. When you’ve created balance, then slowly bring the second leg together with the first. Throwing up your second leg too soon or too hard is a major source of inconsistency in correctly performing the kick-up.',
                                            Reps: '20 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Handstand_Kickup.jpg'
                                        },
                                        {
                                            name: 'Seated Toe Touches',
                                            instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                            Reps: '30 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                                        },
                                        {
                                            name:'Reach For The Sky',
                                            instruction: 'Start in the seated position. Place the left hand in your lap and stretch the right hand towards. the sky. Bend slightly to your left side, feeling a light stretch along your. right side. Count to 10 while breathing slowly. Switch to the left hand and repeat.',
                                            Reps: '15 seconds',
                                            Sets: '4',
                                            photoURL: process.env.PUBLIC_URL + '/img/Reach_For_The_Sky.jpg'
                                        }
                                    ]
                            }
                        },
                        'rest',
                        {
                            session:
                            {
                                day: 4,
                                warm_up:
                                    [
                                        {
                                            name: 'Lunges',
                                            instruction: 'Stand with your feet hip-width apart. Step forward and bend both knees, lowering until your knees are bent at a 90-degree angle. Shift forward onto the lead leg. Push off on both legs and step through, lifting your back leg and bringing it forward so your rear foot lands ahead of you in a lunge position.',
                                            Reps: '20',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Lunges.jpg'
                                        },
                                        {
                                            name: 'Squats',
                                            instruction: 'Stand with feet a little wider than hip width, toes facing front. Drive your hips back—bending at the knees and ankles and pressing your knees slightly open. Sit into a squat position while still keeping your heels and toes on the ground, chest up and shoulders back. Strive to eventually reach parallel, meaning knees are bent to a 90-degree angle. Press into your heels and straighten legs to return to a standing upright position.',
                                            Reps: '20',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Squats.jpg'
                                        },
                                        {
                                            name: 'Back Extentions',
                                            instruction: 'Lie on a mat on your stomach and straighten your legs behind you. Place your elbows on the ground and slide your shoulders down. Lift your upper back, pressing your hips into the mat. Keep your head and neck neutral. Hold for 30 seconds. Lower to starting position.',
                                            Reps: '30 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Back_Extentions.jpg'
                                        }
                                    ],
                                main_workout:
                                    [
                                        {
                                            name: 'Pistol Squat',
                                            instruction: 'With a kettlebell or dumbbell at your chest, stand on left leg, right leg held out straight and off the floor. Perform the pistol squat by sending hips down and back, keeping the chest tall and right leg lifted. Drive through left foot to stand back up.',
                                            Reps: '5',
                                            photoURL: process.env.PUBLIC_URL + '/img/Pistol_Squat.jpg'
                                        },
                                        {
                                            name:'Incline Push-ups',
                                            instruction: 'Stand facing the bench, table, or the edge of a bed. Place your hands on the edge of the bench just slightly wider than shoulder width. Your arms are straight but elbows are not locked. Align your feet so that your arms and body are completely straight. Bend your elbows to slowly lower your chest to the edge of the bench while inhaling. Keep your body straight and rigid throughout the movement. Push your body away from the bench until your elbows are extended, but not locked. Exhale as you push up.',
                                            Reps: '5',
                                            photoURL: process.env.PUBLIC_URL + '/img/Incline_Pushup.jpg'
                                        },
                                        {
                                            name: 'Clap Push-ups',
                                            instruction: 'Get down on all fours and place your hands on the floor so that they’re slightly wider than and in line with your shoulders. Squeeze your glutes and brace your abdominals—as if you were about to be punched in the gut. Maintain these contractions for the duration of this exercise.Your body should form a straight line from your ankles to your head. Lower your body until your chest nearly touches the floor. Pause at the bottom, and then explosively push your body away from the ground with enough force to clap your hands once beneath your chest before returning them to the ground.',
                                            Reps: '5',
                                            photoURL: process.env.PUBLIC_URL + '/img/Clap_Pushups.jpg'
                                        },
                                        {
                                            name:'Pullups',
                                            instruction: 'Start by standing directly below a pull-up bar. Place your hands in an overhand grip (palms facing away from your body) with your hands slightly further than shoulder-width apart. If you can’t reach the bar from standing on the floor, you can place a box beneath you and stand on that. Once your hands are holding onto the bar, you’re in your starting position. Inhale, then exhale. Lift your feet up from the floor or box so that you’re hanging from the bar, and engage your core by pulling your belly button in toward your spine. Pull your shoulders back and down. Engaging the muscles in your arms and back, bend your elbows and raise your upper body up toward the bar until your chin is over the bar. You can imagine bringing your elbows toward your hips if that makes the movement easier. As you move, avoid swinging your legs around or shrugging your shoulders up. You want to make sure your shoulder blades remain back and down throughout the exercise. At the top of the movement, inhale. Then extend your elbows and lower your body back down to the starting position.',
                                            Reps: '8',
                                            photoURL: process.env.PUBLIC_URL + '/img/Pullups.jpg'
                                        },
                                        {
                                            name: 'Burpees',
                                            instruction: 'Begin in a standing position. Position your feet shoulder-width apart. Keep your back straight, your chest out and your arms at your sides. Drop into a squat. Bend your knees, driving them out slightly past your toes, while bringing your butt down. Keep your feet flat on the floor. Place your hands on the floor in front of your feet. Kick your legs back into a high plank position. Your body should be in a straight line from shoulders to heels. Lock your arms in place. Keep your head straight, eyes looking slightly ahead. Lower toward the ground. Bend your elbows and bring your body toward the floor. (Basically, the bottom part of a push-up.) Keep your body straight and your core tight. Rise back to high plank. Focus on keeping your body straight. Return to a squat position. Jump your legs forward. When you land, make sure your feet are flat on the floor. Jump! Reach your arms up as you launch toward the ceiling.',
                                            Reps: '10',
                                            photoURL: process.env.PUBLIC_URL + '/img/Pushups.jpg'
                                        },
                                        {
                                            name: 'rest',
                                            instruction: 'rest 1 minute, then repeat 5 times'
                                        }

                                    ],
                                cool_down:
                                    [
                                        {
                                            name: 'Jumping Muscle Ups', 
                                            instruction: 'The first important tip is that you need to create a swing. Why? Because the goal is to go around the bar and to get on top of the bar. With a swing, you can create momentum and move diagonally. In comparison with a regular pull-up, you pull yourself straight up without swing. This makes it impossible to get over the bar because you can’t bring your elbows around the bar. The next important tip which you need to implement if you want to know how to do a muscle-up is to learn at which exact moment you need to pull yourself up. So, you create a swing as mentioned above. When you are as forward as possible during the swing you need to pull yourself up diagonally. Or, in other words, at the exact moment that your swing is going backward instead of forward, you need to pull yourself up diagonally. To make this technique a little bit easier for yourself, you can imagine that there is a trampoline in front of you. When you are approaching the pretended trampoline you have to imagine jumping into it to create momentum and pull yourself up directly. Another very helpful tip is to use your knees to create even more momentum to get over the bar. Kipping your knees will make it easier. We know that this is not a strict form muscle-up, but you can learn that later. This tutorial is about learning your first muscle-up. In this stadium, it is important that you learn how to get over the bar. Therefore your muscle-up doesn’t have to be perfect. This important tip is all about ‘How to pull’. Normally we see a lot of people performing a pull-up and then they won’t make it to get over the bar. This is because you should not bring your chest to the bar. The goal is to bring your hips to the bar. You can do this by doing a straight arm pull down movement. This will make it way easier to get over the bar. The last tip is about where you should stand if you start with the muscle-up. You should not start below the bar but behind the bar. Then you jump into the bar and swing yourself forward. The first time you get in front of the bar (during your swing), you should pull yourself up immediately. Why can’t you just hang on the bar and start swinging until you feel like it is the right moment for you? Because it takes way more energy which you can use to pull yourself up.',
                                            Reps: '5',
                                            photoURL: process.env.PUBLIC_URL + '/img/Pullup.jpg'
                                        },
                                        {
                                            name: 'Childs Pose',
                                            instruction: 'Begin on your yoga mat on all fours supported by your hands and knees. Make sure your hands are directly beneath your shoulders, knees directly beneath your hips, and your feet directly behind your knees. Sit back onto your feet, keeping your feet and knees hip’s width apart. The soles of the feet will be facing the sky in the pose. Gently lower your upper body forward, resting your forehead on the floor. Allow your arms to rest loosely by your sides, hands by your feet, with palms facing the sky. Inhale, lengthening your spine. Exhale, relaxing your shoulders.',
                                            Reps: '1 minute',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Childs_Pose.jpg'
                                        },
                                        {
                                            name: 'Up Dog',
                                            instruction: ' Begin lying face down on your mat with head slightly lifted and hand sitting directly under shoulders. Point your toes so the tops of you feet are on the mat. As you exhale, press through your hands and the tops of your feet raising your body and legs up off the ground until arms are straight.',
                                            Reps: '1 minute',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Up_Dog.jpg'
                                        },

                                    ]
                            }
                        },
                        {
                            session:
                            {
                                day: 5,
                                warm_up:
                                [
                                    {
                                        name: 'Lunges',
                                        instruction: 'Stand with your feet hip-width apart. Step forward and bend both knees, lowering until your knees are bent at a 90-degree angle. Shift forward onto the lead leg. Push off on both legs and step through, lifting your back leg and bringing it forward so your rear foot lands ahead of you in a lunge position.',
                                        Reps: '20',
                                        Sets: '2',
                                        photoURL: process.env.PUBLIC_URL + '/img/Lunges.jpg'
                                    },
                                    {
                                        name: 'Squats',
                                        instruction: 'Stand with feet a little wider than hip width, toes facing front. Drive your hips back—bending at the knees and ankles and pressing your knees slightly open. Sit into a squat position while still keeping your heels and toes on the ground, chest up and shoulders back. Strive to eventually reach parallel, meaning knees are bent to a 90-degree angle. Press into your heels and straighten legs to return to a standing upright position.',
                                        Reps: '20',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Squats.jpg'
                                    },
                                    {
                                        name: 'Back Extentions',
                                        instruction: 'Lie on a mat on your stomach and straighten your legs behind you. Place your elbows on the ground and slide your shoulders down. Lift your upper back, pressing your hips into the mat. Keep your head and neck neutral. Hold for 30 seconds. Lower to starting position.',
                                        Reps: '30 seconds',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Back_Extentions.jpg'
                                    }
                                ],
                                main_workout:
                                    [
                                        {
                                            name: 'Squat Jumps',
                                            instruction: 'Stand with feet shoulder width and knees slightly bent. Bend your knees and descend to a full squat position. Engage through the quads, glutes, and hamstrings and propel the body up and off the floor, extending through the legs. With the legs fully extended, the feet will be a few inches (or more) off the floor. Descend and control your landing by going through your foot (toes, ball, arches, heel) and descend into the squat again for another explosive jump. Upon landing immediately repeat the next jump.',
                                            Reps: '15',
                                            photoURL: process.env.PUBLIC_URL + '/img/Squat_Jumps.jpg'
                                        },
                                        {
                                            name: 'Leg Raises',
                                            instruction: 'Lie on your back, legs straight and together. Keep your legs straight and lift them all the way up to the ceiling until your butt comes off the floor. Slowly lower your legs back down till they are just above the floor. Hold for a moment. Raise your legs back up.',
                                            Reps: '15',
                                            photoURL: process.env.PUBLIC_URL + '/img/Leg_Raises.jpg'
                                        },
                                        {
                                            name: 'Windshield Wipers',
                                            instruction: 'Lie on your back with your arms straight out to the sides. Rotate the hips to one side, without letting the legs touch the floor. Lift your legs and return to the starting position. Rotate the hips to the opposite side and repeat until set is complete',
                                            Reps: '10',
                                            photoURL: process.env.PUBLIC_URL + '/img/Windshield_Wipers.jpg'
                                        },
                                        {
                                            name:'Pushups',
                                            instruction: 'Get down on all fours, placing your hands slightly wider than your shoulders. Straighten your arms and legs. Lower your body until your chest nearly touches the floor. Pause, then push yourself back up.',
                                            Reps:'15',
                                            photoURL: process.env.PUBLIC_URL + '/img/Pushups.jpg'
                                        },
                                        {
                                            name: 'Bench Dips',
                                            instruction: 'Sit on the edge of a bench, with your arms extended and your hands on the bench. To start, keep your feet flat on the floor with your knees bent. As you progress, you can straighten your legs and rest your heels on the ground to ramp up the difficulty. Importantly, your hands should be placed on the bench so that your hands are facing out away from yourself. If you keep your knuckles facing forward, you will put your shoulders into an internally rotated position. Push up off the bench, which will help you to drive your shoulder blades down and create scapular depression. Squeeze your shoulder blades to create tension. Lower down with control to a depth that feels comfortable. You should not lose tension in your mid-back. Your elbows should never exceed your shoulder height. Extend your elbows and squeeze your triceps hard to raise back up.',
                                            Reps: '10',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Bench_Dips.jpg'
                                        },
                                        {
                                            name:'Side Plank',
                                            instruction: 'Engage your abdominal muscles, drawing your navel toward your spine. Lift your hips and knees from the mat while exhaling. Your torso is straight in line with no sagging or bending. Hold the position. After several breaths, inhale and return to the starting position. The goal should be to hold for 60 seconds. Change sides and repeat.',
                                            Reps: '45 seconds',
                                            Sets: '4',
                                            photoURL: process.env.PUBLIC_URL + '/img/Side_Planks.jpg'
                                        },
                                        {
                                            name: 'rest',
                                            instruction: 'Rest 1 minute, then repeat 4 times'
                                        }
                                    ],
                                cool_down:
                                    [
                                        {
                                            name: 'Seated L-Sits',
                                            instruction: 'If using two boxes, benches, or parallettes, set them up so that they are a little narrower than shoulder-width apart. Stand between them and place palms on each side, under shoulders. Straighten arms, lock elbows at sides, pull shoulder blades down and away from ears, and engage lats. Then, pushing down into palms, engage core and lift legs (straight and together) off the floor until parallel with (or close to parallel with) the floor. Hold, keeping knees straight, squeezing quads together tightly, pointing toes, and looking straight ahead to maintain neutral neck.',
                                            Reps: '30 seconds',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Seated_LSits.jpg'
                                        },
                                        {
                                            name: 'Childs Pose',
                                            instruction: 'Begin on your yoga mat on all fours supported by your hands and knees. Make sure your hands are directly beneath your shoulders, knees directly beneath your hips, and your feet directly behind your knees. Sit back onto your feet, keeping your feet and knees hip’s width apart. The soles of the feet will be facing the sky in the pose. Gently lower your upper body forward, resting your forehead on the floor. Allow your arms to rest loosely by your sides, hands by your feet, with palms facing the sky. Inhale, lengthening your spine. Exhale, relaxing your shoulders.',
                                            Reps: '1 minute',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Childs_Pose.jpg'
                                        },
                                        {
                                            name: 'Up Dog',
                                            instruction: ' Begin lying face down on your mat with head slightly lifted and hand sitting directly under shoulders. Point your toes so the tops of you feet are on the mat. As you exhale, press through your hands and the tops of your feet raising your body and legs up off the ground until arms are straight.',
                                            Reps: '1 minute',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Up_Dog.jpg'
                                        },
                                    ]
                            }
                        },
                        'rest',
                        {
                            session:
                            {
                                day: 7,
                                warm_up:
                                [
                                    {
                                        name: 'Lunges',
                                        instruction: 'Stand with your feet hip-width apart. Step forward and bend both knees, lowering until your knees are bent at a 90-degree angle. Shift forward onto the lead leg. Push off on both legs and step through, lifting your back leg and bringing it forward so your rear foot lands ahead of you in a lunge position.',
                                        Reps: '20',
                                        Sets: '2',
                                        photoURL: process.env.PUBLIC_URL + '/img/Lunges.jpg'
                                    },
                                    {
                                        name: 'Squats',
                                        instruction: 'Stand with feet a little wider than hip width, toes facing front. Drive your hips back—bending at the knees and ankles and pressing your knees slightly open. Sit into a squat position while still keeping your heels and toes on the ground, chest up and shoulders back. Strive to eventually reach parallel, meaning knees are bent to a 90-degree angle. Press into your heels and straighten legs to return to a standing upright position.',
                                        Reps: '20',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Squats.jpg'
                                    },
                                    {
                                        name: 'Back Extentions',
                                        instruction: 'Lie on a mat on your stomach and straighten your legs behind you. Place your elbows on the ground and slide your shoulders down. Lift your upper back, pressing your hips into the mat. Keep your head and neck neutral. Hold for 30 seconds. Lower to starting position.',
                                        Reps: '30 seconds',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Back_Extentions.jpg'
                                    }
                                ],
                                main_workout:
                                    [
                                        {
                                            name: 'Duck Walk',
                                            instruction: 'Lower yourself into a crouch. The most recognizable characteristic of the duck walk is its low position. Start by sinking into a squat, your center of gravity aligned over your heels. Get as deep as you comfortably can. You may want to lightly warm up and stretch your hips, knees and ankles beforehand to make working through the motion easier. Keep your weight on your heels. To aid in stability, keep your entire foot in contact with the ground and rest most of your weight over your heels. This will ensure that you’re taking advantage of the most surface area possible and will allow you to use minor adjustments to keep your weight evenly distributed. Tense the muscles in your legs the whole time you’re in the bottom position—relaxing could cause you to lose tightness and fall over. Balance your weight on one foot. At the bottom of the squat, lift one foot off the ground slowly. All of your weight will now be poised over your other foot. Spend a few seconds getting used to maintaining your balance in this posture. While duck walking, you will essentially alternate between single-foot balancing in a low crouch. Take a step forward. While balancing on your first foot, bring your opposite foot forward and across your body and set it down in front. Then, shift your weight to your front foot, pushing your back knee forward as you do so. Get centered over your front foot to stay upright. Get into a rhythm. Now repeat the stepping action using both legs to start walking. Make sure you shift your balance carefully when transitioning from one foot to the other. Duck walking can be quite strenuous at first, as you’re basically holding yourself in a one-leg squat, but it will gradually become easier with practice.',
                                            Reps: '50 meter',
                                            photoURL: process.env.PUBLIC_URL + '/img/Duck_Walk.jpg'
                                        },
                                        {
                                            name: 'Box Jumps',
                                            instruction: 'Facing the box with your feet shoulder width apart, bend your knees and push your hips back in a hinge motion. Propel yourself into a jump using the balls of your feet as your base, swinging your arms forward to launch yourself onto the top of the box.',
                                            Reps: '15',
                                            photoURL: process.env.PUBLIC_URL + '/img/Box_Jumps.jpg'
                                        },
                                        {
                                            name:'Pushups',
                                            instruction: 'Get down on all fours, placing your hands slightly wider than your shoulders. Straighten your arms and legs. Lower your body until your chest nearly touches the floor. Pause, then push yourself back up.',
                                            Reps:'15',
                                            photoURL: process.env.PUBLIC_URL + '/img/Pushups.jpg'
                                        },
                                        {
                                            name:'Inverted Rows',
                                            instruction: 'Set the bar around waist height. The lower the bar, the more difficult the movement becomes. Position yourself under the bar lying face up. Lie on the floor underneath the bar (which should be set just above where you can reach from the ground). Grab the bar with an overhand grip, slightly wider than shoulder-width (palms facing AWAY from you). Contract your abs and butt, and keep your body a completely straight line. Your ears, shoulders, hips legs, and feet should all be in a straight line. Pull yourself up to the bar until your chest touches the bar. Lower yourself back down.',
                                            Reps:'10',
                                            photoURL: process.env.PUBLIC_URL + '/img/Inverted_Row.jpg'
                                        },
                                        {
                                            name:'Pullups',
                                            instruction: 'Start by standing directly below a pull-up bar. Place your hands in an overhand grip (palms facing away from your body) with your hands slightly further than shoulder-width apart. If you can’t reach the bar from standing on the floor, you can place a box beneath you and stand on that. Once your hands are holding onto the bar, you’re in your starting position. Inhale, then exhale. Lift your feet up from the floor or box so that you’re hanging from the bar, and engage your core by pulling your belly button in toward your spine. Pull your shoulders back and down. Engaging the muscles in your arms and back, bend your elbows and raise your upper body up toward the bar until your chin is over the bar. You can imagine bringing your elbows toward your hips if that makes the movement easier. As you move, avoid swinging your legs around or shrugging your shoulders up. You want to make sure your shoulder blades remain back and down throughout the exercise. At the top of the movement, inhale. Then extend your elbows and lower your body back down to the starting position.',
                                            Reps: '8',
                                            photoURL: process.env.PUBLIC_URL + '/img/Pullups.jpg'
                                        },
                                        {
                                            name: 'Leg Raises',
                                            instruction: 'Lie on your back, legs straight and together. Keep your legs straight and lift them all the way up to the ceiling until your butt comes off the floor. Slowly lower your legs back down till they are just above the floor. Hold for a moment. Raise your legs back up.',
                                            Reps: '15',
                                            photoURL: process.env.PUBLIC_URL + '/img/Leg_Raises.jpg'
                                        },
                                        {
                                            name:'Plank',
                                            instruction: 'Lie facedown with your forearms on the floor, with your legs extended and your feet together. You can use a mat or towel to make this more comfortable. Push into your forearms as you raise your body so it forms a straight line from your head and neck to your feet. (Do not let your hips rise or sag.) Keep your gaze down and hold this position as you engage your abdominal muscles. Take steady, even breaths.',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Plank.jpg'
                                        },
                                        {
                                            name: 'Rest',
                                            instruction:'Rest 1 minute, then repeat 4 times'
                                        }
                                    ],
                                cool_down:
                                    [
                                        {
                                            name: 'Handstand Kick Up',
                                            instruction: 'Get your hips over your shoulders(which, in turn, should already be over your hands)  / get hips as high as possible. Use your shoulder strength to kind of push back, and prevent them from falling forwards when you kick up. Keep them tight, and in position over your hands. When you kick, also make a small jump with the other leg. Let the second leg stay down until you’ve gained balance. When you’ve created balance, then slowly bring the second leg together with the first. Throwing up your second leg too soon or too hard is a major source of inconsistency in correctly performing the kick-up.',
                                            Reps: '20 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Handstand_Kickup.jpg'
                                        },
                                        {
                                            name: 'Childs Pose',
                                            instruction: 'Begin on your yoga mat on all fours supported by your hands and knees. Make sure your hands are directly beneath your shoulders, knees directly beneath your hips, and your feet directly behind your knees. Sit back onto your feet, keeping your feet and knees hip’s width apart. The soles of the feet will be facing the sky in the pose. Gently lower your upper body forward, resting your forehead on the floor. Allow your arms to rest loosely by your sides, hands by your feet, with palms facing the sky. Inhale, lengthening your spine. Exhale, relaxing your shoulders.',
                                            Reps: '1 minute',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Childs_Pose.jpg'
                                        },
                                        {
                                            name: 'Up Dog',
                                            instruction: ' Begin lying face down on your mat with head slightly lifted and hand sitting directly under shoulders. Point your toes so the tops of you feet are on the mat. As you exhale, press through your hands and the tops of your feet raising your body and legs up off the ground until arms are straight.',
                                            Reps: '1 minute',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Up_Dog.jpg'
                                        },
                                    ]
                            }
                        },
                        
                    ]
            }
        }
    },
    muscle_gain: {
        four_six: {
            workout: {
                name: 'Full Body Flexibility',
                schedule:
                    [
                        {
                            session:
                            {
                                day: 1,
                                warm_up:
                                    [
                                        {
                                            name: 'Seated Toe Touches',
                                            instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                            Reps: '30 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                                        },
                                        {
                                            name:'Back Scratch',
                                            instruction: 'Stand straight, placing the back of your hand on the side you want to stretch flat against your lower back. Throw one end of a towel over your shoulder. Grab it behind your back with your other hand. Pull down gently on the towel with your front arm. Let your back arm slide up as high as is comfortable. You’ll feel a stretch in your shoulder. Hold the stretch for a few seconds.',
                                            Reps: '45 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Back_Scratch.jpg'
                                        },
                                        {
                                            name:'Butterfly Stretch',
                                            instruction:'Sit down on the floor or ground with your legs in front of you. Reach forward and grab your right foot. It is OK to bend your knee to help your hand and foot connect. Gently pull your right foot up towards your groin bending until it is at a comfortable spot and the sole of the foot is facing your left thigh. Bend your left knee to bring your left foot toward your groin so that its sole touches the sole of your right foot. Hold your feet with your hands and rest your elbows on your knees. While keeping your back straight (no slouching), allow your knees to fall towards the ground. You can apply gentle pressure on the inner thigh by pressing gently on the knees with the elbows. You should feel gentle pulling and tension in the groin.',
                                            Reps: '30 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Butterfly_Stretch.jpg'
                                        }
                                    ],
                                main_workout:
                                    [
                                        {
                                            name: 'Dumbell Row',
                                            instruction: 'Grab a dumbbell in each hand. If it is your first time, grab a light weight that feels doable. Stagger your legs. Place one leg in front of the other, and then bow down. “You want to [imagine] a straight line from the top of your head all the way to your bottom almost as if you had a quarter and you place it on the top of your head it would gently roll all the way down your back and then from there, place the weights in front of your toes,” explains Jones. Slide your elbows along your side and squeeze your shoulder blades together as you lift the weights. Make sure that your shoulders are held down your back and your neck is long. Hold for a second and then gently extend your arms while placing the weight back to the start position. When returning to the starting position, the dumbbells will be in line with your feet.',
                                            Weight: '25',
                                            Reps: '12',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Dumbell_Row.jpg'
                                        },
                                        {
                                            name:'Deadlift',
                                            instruction: 'Position the feet shoulder-width apart (or not much more) with toes under the bar. The feet point straight ahead, or they can angle out slightly. Heels should stay flat on the surface. When you lift, the bar will travel close to the shins and may even graze them. Maintain a neutral spine position. Stabilize the abdominal muscles by bracing them. Squat down, bending at the knees. The form for descending to the bar is similar (but not identical) to the squat, with your back straight or arched slightly and not rounded at the shoulders or spine. Grasp the bar just outside the line of the knees with an overhand or mixed grip. Lift the bar by pushing upward with the legs from the knees. Breathe out on exertion. Be careful not to raise the hips first so the trunk moves forward and the back becomes rounded. Don’t try to haul the bar up with your arms. The arms stay extended under tension while gripping the bar as the legs push up. Think of the legs and shoulders moving upward in unison with the hips, the balancing point. The bar should almost graze the shins and rest around thigh level as you reach full height. Pull the shoulders back as much as possible without bending backward. Lower the bar to the floor with a reverse motion ensuring a straight back.',
                                            weight: '120',
                                            Reps: '6',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Deadlift.jpg'
                                        },
                                        {
                                            name: 'Squats',
                                            instruction: 'Stand with feet a little wider than hip width, toes facing front. Drive your hips back—bending at the knees and ankles and pressing your knees slightly open. Sit into a squat position while still keeping your heels and toes on the ground, chest up and shoulders back. Strive to eventually reach parallel, meaning knees are bent to a 90-degree angle. Press into your heels and straighten legs to return to a standing upright position.',
                                            Reps: '20',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Squats.jpg'
                                        },
                                        {
                                            name: 'Lat Pulldown',
                                            instruction: 'Start by sitting at a lat pull machine, facing the bar. Reach up and grasp the bar a little wider than shoulder width. Pull the bar down toward your upper chest, aiming for just below your collarbone. Hold the bar at your mid to upper chest for 1–2 seconds while squeezing your shoulder blades back and down. Slowly return to the starting position.',
                                            Weight: '40',
                                            Reps: '6',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Lat_Pulldown.jpg'
                                        }
                                    ],
                                cool_down:
                                    [
                                        {
                                            name: 'Trunk Twists',
                                            instruction: 'Sit with your legs crossed. Reach your left hand toward your left foot, and place your right hand at your side for support. Slowly twist your torso to your right. Switch your hands and twist to your left.',
                                            Reps: '10',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Trunk_Twists.jpg'
                                        },
                                        {
                                            name: 'Childs Pose',
                                            instruction: 'Begin on your yoga mat on all fours supported by your hands and knees. Make sure your hands are directly beneath your shoulders, knees directly beneath your hips, and your feet directly behind your knees. Sit back onto your feet, keeping your feet and knees hip’s width apart. The soles of the feet will be facing the sky in the pose. Gently lower your upper body forward, resting your forehead on the floor. Allow your arms to rest loosely by your sides, hands by your feet, with palms facing the sky. Inhale, lengthening your spine. Exhale, relaxing your shoulders.',
                                            Reps: '1 minute',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Childs_Pose.jpg'
                                        }
                                    ]
                            }
                        },
                        {
                            session:
                            {
                                day: 2,
                                warm_up:
                                    [
                                        {
                                            name: 'Seated Toe Touches',
                                            instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                            Reps: '30 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                                        },
                                        {
                                            name:'Butterfly Stretch',
                                            instruction:'Sit down on the floor or ground with your legs in front of you. Reach forward and grab your right foot. It is OK to bend your knee to help your hand and foot connect. Gently pull your right foot up towards your groin bending until it is at a comfortable spot and the sole of the foot is facing your left thigh. Bend your left knee to bring your left foot toward your groin so that its sole touches the sole of your right foot. Hold your feet with your hands and rest your elbows on your knees. While keeping your back straight (no slouching), allow your knees to fall towards the ground. You can apply gentle pressure on the inner thigh by pressing gently on the knees with the elbows. You should feel gentle pulling and tension in the groin.',
                                            Reps: '30 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Butterfly_Stretch.jpg'
                                        },
                                        {
                                            name: 'Quad Stretch',
                                            instruction: 'Stand on one leg. If you need support, hold onto something solid, such as a wall or chair, for support. Bend your right knee and bring your heel toward your buttock. Reach for your ankle with your opposite (left) hand. Stand up straight and pull in your abdominal muscles. Try to keep your knees next to each other. Relax your shoulders. As you hold your leg in the bent position you will feel a slight pull along the front of your thigh and hip.Breathe deeply and hold the stretch for 20-30 seconds, release and repeat on the left leg, this time holding your ankle with your right hand. Stretch each leg one to five times in a stretching session.',
                                            Reps: '30 seconds',
                                            Sets: '4',
                                            photoURL: process.env.PUBLIC_URL + '/img/Quad_Stretch.jpg'
                                        }
                                    ],
                                main_workout:
                                    [
                                        {
                                            name: 'Squats',
                                            instruction: 'Stand with feet a little wider than hip width, toes facing front. Drive your hips back—bending at the knees and ankles and pressing your knees slightly open. Sit into a squat position while still keeping your heels and toes on the ground, chest up and shoulders back. Strive to eventually reach parallel, meaning knees are bent to a 90-degree angle. Press into your heels and straighten legs to return to a standing upright position.',
                                            Reps: '20',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Squats.jpg'
                                        },
                                        {
                                            name: 'Leg Press',
                                            instruction: 'Sit on the leg press and slide your butt down and into the bottom of the seat. Extend your legs and press the weight up. Bend your knees and descend as far as your flexibility and knee health allows. Without bouncing, drive the weight back up, stopping just short of full knee extension.',
                                            Weight: '50',
                                            Reps: '6',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Leg_Press.jpg'
                                        },
                                        {
                                            name:'Toe Taps',
                                            instruction: 'Push off the ground with your left foot and switch legs mid-air, so your left foot touches the platform and your right foot is on the ground. Your arms can remain at your sides or alternate with your legs, like they do when running.Repeat alternating toe taps. If you are new to this exercise, go slowly until you feel comfortable with the movement pattern and your technique is correct. Once, you are ready, speed up the pace, merely tapping the edge of the platform when alternating feet. Step both feet back and onto the floor to end this exercise.',
                                            Reps: '40',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Toe_Taps.jpg'
                                        },
                                        {
                                            name: 'Front Squat',
                                            instruction: 'Grip the bar slightly wider than shoulder-width. Inhale and brace your core slightly, and unrack the bar. Take two steps back, and adjust your foot position. Squat as deep as possible with good technique. With control, stop and reverse the movement, extending your hips and legs again. Exhale on the way up or exchange air in the top position. Breathe in and repeat for reps.',
                                            weight: '65',
                                            Reps: '5',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Front_Squat.jpg'
                                        },
                                        {
                                            name:'Glute Bridges',
                                            instruction: 'Lie on back with bent knees hip distance apart, and feet flat on mat stacked under the knees. Engage the core and squeeze your glutes as you lift your hips to a bridge. Hold, squeezing tight and return to mat with control.',
                                            Reps: '20',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Glute_Bridges.jpg'
                                        }
                                    ],
                                cool_down:
                                    [
                                        {
                                            name: 'Standing Toe Touches',
                                            instruction: 'Stand with some space in front and behind you. Bend at the waist, keeping your legs straight, until you can relax and let your upper body hang down in front of you. Let your arms and hands hang down naturally. Hold for 10 to 20 seconds.',
                                            Reps: '15 seconds',
                                            Sets: '4',
                                            photoURL: process.env.PUBLIC_URL + '/img/Standing_Toe_Touches.jpg'
                                        },
                                        {
                                            name: 'Cross Body Glute Pull',
                                            instruction: 'Start on your back with your legs extended and your feet flexed upward. Bend and lift your right knee and place your hands around your knee. Pull your right knee up toward your left shoulder. Hold for 20–30 seconds. Return your right leg to the starting position. Straighten your right leg and repeat with your left leg.',
                                            Reps: '30 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Cross_Body_Glute_Pull.jpg'
                                        }
                                    ]
                            }
                        },
                        {
                            session:
                            {
                                day: 3,
                                warm_up:
                                    [
                                        {
                                            name: 'Arm Circles',
                                            instruction: 'Stand upright with a shoulder-wide stance. Extend your arms to your sides. They should be parallel to the floor. Push your shoulders back and down to get in position. Rotate your arms clockwise at your shoulders. Arm circles are usually performed until you feel a burn in your shoulders or if you can’t hold your arms parallel to the floor.',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Arm_Circles.jpg'
                                        },
                                        {
                                            name: 'Seated Toe Touches',
                                            instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                            Reps: '30 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                                        },
                                        {
                                            name: 'Jumping Jacks',
                                            instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Jumping_Jacks.jpg'
                                        }
                                    ],
                                main_workout:
                                    [
                                        {
                                            name: 'Lateral Raise',
                                            instruction: 'Stand tall, a dumbbell in each hand. Arms are at your sides, palms facing in. Position your feet roughly hip-distance apart. Check your posture—roll your shoulders back, engage your core, and look straight ahead. Raise your arms simultaneously just a couple inches out to each side and pause. This momentary pause should help ensure you disengage your trapezius muscle from the movement, targeting the deltoids as intended. Lift the dumbbells up and out to each side, keeping your arms almost completely straight, stopping when your elbows reach shoulder-height and your body is forming a "T" shape. Breathe in as you lift. Pause and hold for a second at the top of the movement. Lower the weights slowly (take about twice as long to lower the weights as you took to lift them), bringing your arms back to your sides. Breathe out as you lower the dumbbells.',
                                            Weight: '20',
                                            Reps: '8',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Lateral_Raise.jpg'
                                        },
                                        {
                                            name: 'Bench Press',
                                            instruction: 'To do a bench press, lie on a flat bench with your eyes under the bar and your feet on the ground12. Grab the bar with a medium grip-width and your thumbs around the bar1. Unrack the bar by straightening your arms and keep it over your shoulders123. Lower the bar to your mid-chest or just below your clavicle, while keeping your elbows slightly tucked in and your chest high134. Pause on your chest without bouncing the bar4. Press the bar back up until your arms are straight, while flaring your elbows out and exhaling.',
                                            Weight: '45',
                                            Reps: '8',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Bench_Press.jpg'
                                        },
                                        {
                                            name:'Romanian Deadlift',
                                            instruction: 'Hold your weight (dumbbells or a barbell) in front of your thighs, and lower to the ground by pushing your hips back. As you lower the weight, keep your shoulder blades drawn towards each other and your chest open and wide. When the weight is below your knees, thrust your hips forward and return to the starting position.',
                                            Weight: '100',
                                            Reps: '8',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Romanian_Deadlift.jpg'
                                        },
                                        {
                                            name: 'Dumbell Row',
                                            instruction: 'Grab a dumbbell in each hand. If it is your first time, grab a light weight that feels doable. Stagger your legs. Place one leg in front of the other, and then bow down. “You want to [imagine] a straight line from the top of your head all the way to your bottom almost as if you had a quarter and you place it on the top of your head it would gently roll all the way down your back and then from there, place the weights in front of your toes,” explains Jones. Slide your elbows along your side and squeeze your shoulder blades together as you lift the weights. Make sure that your shoulders are held down your back and your neck is long. Hold for a second and then gently extend your arms while placing the weight back to the start position. When returning to the starting position, the dumbbells will be in line with your feet.',
                                            Weight: '25',
                                            Reps: '12',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Dumbell_Row.jpg'
                                        },
                                        {
                                            name: 'Dumbell Walking Lunges',
                                            instruction: 'Set up with your feet shoulder width apart and a dumbbell in each hand. Step forward with one leg and allow both knees to bend simultaneously. Descend until the back knee touches the floor. Drive through the front foot and extend the knee as you stand up fully and return to the starting position. Repeat on the opposite leg.', 
                                            Weight: '20',
                                            Reps: '12',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Dumbell_Walking_Lunges.jpg'
                                        }
                                    ],
                                cool_down:
                                    [
                                        {
                                            name: 'Overhead Shoulder Stretch',
                                            instruction: 'Stand straight with your feet shoulders width apart. Reach your arms straight overhead and interlace your fingers with the palms facing upward. Raise your arms upward as you press your shoulders down. Hold for the rep count',
                                            Reps: '15 seconds',
                                            Sets: '4',
                                            photoURL: process.env.PUBLIC_URL + '/img/Overhead_Shoulder_Stretch.jpg'
                                        },
                                        {
                                            name:'Butterfly Stretch',
                                            instruction:'Sit down on the floor or ground with your legs in front of you. Reach forward and grab your right foot. It is OK to bend your knee to help your hand and foot connect. Gently pull your right foot up towards your groin bending until it is at a comfortable spot and the sole of the foot is facing your left thigh. Bend your left knee to bring your left foot toward your groin so that its sole touches the sole of your right foot. Hold your feet with your hands and rest your elbows on your knees. While keeping your back straight (no slouching), allow your knees to fall towards the ground. You can apply gentle pressure on the inner thigh by pressing gently on the knees with the elbows. You should feel gentle pulling and tension in the groin.',
                                            Reps: '30 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Butterfly_Stretch.jpg'
                                        },
                                        {
                                            name:'Back Scratch',
                                            instruction: 'Stand straight, placing the back of your hand on the side you want to stretch flat against your lower back. Throw one end of a towel over your shoulder. Grab it behind your back with your other hand. Pull down gently on the towel with your front arm. Let your back arm slide up as high as is comfortable. You’ll feel a stretch in your shoulder. Hold the stretch for a few seconds.',
                                            Reps: '45 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Back_Scratch.jpg'
                                        }
                                    ]
                            }
                        },
                        {
                        session: {
                        day: 4,
                        warm_up: [
                            {
                                name: 'Seated Toe Touches',
                                instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                Reps: '30 seconds',
                                Sets: '3',
                                photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                            }
                        ],
                            main_workout: 
                            [
                                {
                                    name:'Back Scratch',
                                    instruction: 'Stand straight, placing the back of your hand on the side you want to stretch flat against your lower back. Throw one end of a towel over your shoulder. Grab it behind your back with your other hand. Pull down gently on the towel with your front arm. Let your back arm slide up as high as is comfortable. You’ll feel a stretch in your shoulder. Hold the stretch for a few seconds.',
                                    Reps: '45 seconds',
                                    Sets: '3',
                                    photoURL: process.env.PUBLIC_URL + '/img/Back_Scratch.jpg'
                                },
                                {
                                    name:'Butterfly Stretch',
                                    instruction:'Sit down on the floor or ground with your legs in front of you. Reach forward and grab your right foot. It is OK to bend your knee to help your hand and foot connect. Gently pull your right foot up towards your groin bending until it is at a comfortable spot and the sole of the foot is facing your left thigh. Bend your left knee to bring your left foot toward your groin so that its sole touches the sole of your right foot. Hold your feet with your hands and rest your elbows on your knees. While keeping your back straight (no slouching), allow your knees to fall towards the ground. You can apply gentle pressure on the inner thigh by pressing gently on the knees with the elbows. You should feel gentle pulling and tension in the groin.',
                                    Reps: '30 seconds',
                                    Sets: '3',
                                    photoURL: process.env.PUBLIC_URL + '/img/Butterfly_Stretch.jpg'
                                },
                                {
                                    name: 'Childs Pose',
                                    instruction: 'Begin on your yoga mat on all fours supported by your hands and knees. Make sure your hands are directly beneath your shoulders, knees directly beneath your hips, and your feet directly behind your knees. Sit back onto your feet, keeping your feet and knees hip’s width apart. The soles of the feet will be facing the sky in the pose. Gently lower your upper body forward, resting your forehead on the floor. Allow your arms to rest loosely by your sides, hands by your feet, with palms facing the sky. Inhale, lengthening your spine. Exhale, relaxing your shoulders.',
                                    Reps: '1 minute',
                                    Sets: '1',
                                    photoURL: process.env.PUBLIC_URL + '/img/Childs_Pose.jpg'
                                },
                                {
                                    name: 'Quad Stretch',
                                    instruction: 'Stand on one leg. If you need support, hold onto something solid, such as a wall or chair, for support. Bend your right knee and bring your heel toward your buttock. Reach for your ankle with your opposite (left) hand. Stand up straight and pull in your abdominal muscles. Try to keep your knees next to each other. Relax your shoulders. As you hold your leg in the bent position you will feel a slight pull along the front of your thigh and hip.Breathe deeply and hold the stretch for 20-30 seconds, release and repeat on the left leg, this time holding your ankle with your right hand. Stretch each leg one to five times in a stretching session.',
                                    Reps: '30 seconds',
                                    Sets: '4',
                                    photoURL: process.env.PUBLIC_URL + '/img/Quad_Stretch.jpg'
                                },
                                {
                                    name: 'Arm Circles',
                                    instruction: 'Stand upright with a shoulder-wide stance. Extend your arms to your sides. They should be parallel to the floor. Push your shoulders back and down to get in position. Rotate your arms clockwise at your shoulders. Arm circles are usually performed until you feel a burn in your shoulders or if you can’t hold your arms parallel to the floor.',
                                    Reps: '1 minute',
                                    Sets: '3',
                                    photoURL: process.env.PUBLIC_URL + '/img/Arm_Circles.jpg'
                                }
                            ],
                            cool_down: [
                                {
                                    name: 'Cross Body Glute Pull',
                                    instruction: 'Start on your back with your legs extended and your feet flexed upward. Bend and lift your right knee and place your hands around your knee. Pull your right knee up toward your left shoulder. Hold for 20–30 seconds. Return your right leg to the starting position. Straighten your right leg and repeat with your left leg.',
                                    Reps: '30 seconds',
                                    Sets: '3',
                                    photoURL: process.env.PUBLIC_URL + '/img/Cross_Body_Glute_Pull.jpg'
                                }
                            ]
                        
                        }
                        },
                        {
                            session:
                            {
                                day: 5,
                                warm_up:
                                [
                                    {
                                        name: 'Seated Toe Touches',
                                        instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                        Reps: '30 seconds',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                                    },
                                    {
                                        name:'Back Scratch',
                                        instruction: 'Stand straight, placing the back of your hand on the side you want to stretch flat against your lower back. Throw one end of a towel over your shoulder. Grab it behind your back with your other hand. Pull down gently on the towel with your front arm. Let your back arm slide up as high as is comfortable. You’ll feel a stretch in your shoulder. Hold the stretch for a few seconds.',
                                        Reps: '45 seconds',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Back_Scratch.jpg'
                                    },
                                    {
                                        name:'Butterfly Stretch',
                                        instruction:'Sit down on the floor or ground with your legs in front of you. Reach forward and grab your right foot. It is OK to bend your knee to help your hand and foot connect. Gently pull your right foot up towards your groin bending until it is at a comfortable spot and the sole of the foot is facing your left thigh. Bend your left knee to bring your left foot toward your groin so that its sole touches the sole of your right foot. Hold your feet with your hands and rest your elbows on your knees. While keeping your back straight (no slouching), allow your knees to fall towards the ground. You can apply gentle pressure on the inner thigh by pressing gently on the knees with the elbows. You should feel gentle pulling and tension in the groin.',
                                        Reps: '30 seconds',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Butterfly_Stretch.jpg'
                                    }
                                ],
                                main_workout:
                                [
                                    {
                                        name: 'Dumbell Row',
                                        instruction: 'Grab a dumbbell in each hand. If it is your first time, grab a light weight that feels doable. Stagger your legs. Place one leg in front of the other, and then bow down. “You want to [imagine] a straight line from the top of your head all the way to your bottom almost as if you had a quarter and you place it on the top of your head it would gently roll all the way down your back and then from there, place the weights in front of your toes,” explains Jones. Slide your elbows along your side and squeeze your shoulder blades together as you lift the weights. Make sure that your shoulders are held down your back and your neck is long. Hold for a second and then gently extend your arms while placing the weight back to the start position. When returning to the starting position, the dumbbells will be in line with your feet.',
                                        Weight: '25',
                                        Reps: '12',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Dumbell_Row.jpg'
                                    },
                                    {
                                        name:'Deadlift',
                                        instruction: 'Position the feet shoulder-width apart (or not much more) with toes under the bar. The feet point straight ahead, or they can angle out slightly. Heels should stay flat on the surface. When you lift, the bar will travel close to the shins and may even graze them. Maintain a neutral spine position. Stabilize the abdominal muscles by bracing them. Squat down, bending at the knees. The form for descending to the bar is similar (but not identical) to the squat, with your back straight or arched slightly and not rounded at the shoulders or spine. Grasp the bar just outside the line of the knees with an overhand or mixed grip. Lift the bar by pushing upward with the legs from the knees. Breathe out on exertion. Be careful not to raise the hips first so the trunk moves forward and the back becomes rounded. Don’t try to haul the bar up with your arms. The arms stay extended under tension while gripping the bar as the legs push up. Think of the legs and shoulders moving upward in unison with the hips, the balancing point. The bar should almost graze the shins and rest around thigh level as you reach full height. Pull the shoulders back as much as possible without bending backward. Lower the bar to the floor with a reverse motion ensuring a straight back.',
                                        weight: '120',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Deadlift.jpg'
                                    },
                                    {
                                        name: 'Squats',
                                        instruction: 'Stand with feet a little wider than hip width, toes facing front. Drive your hips back—bending at the knees and ankles and pressing your knees slightly open. Sit into a squat position while still keeping your heels and toes on the ground, chest up and shoulders back. Strive to eventually reach parallel, meaning knees are bent to a 90-degree angle. Press into your heels and straighten legs to return to a standing upright position.',
                                        Reps: '20',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Squats.jpg'
                                    },
                                    {
                                        name: 'Lat Pulldown',
                                        instruction: 'Start by sitting at a lat pull machine, facing the bar. Reach up and grasp the bar a little wider than shoulder width. Pull the bar down toward your upper chest, aiming for just below your collarbone. Hold the bar at your mid to upper chest for 1–2 seconds while squeezing your shoulder blades back and down. Slowly return to the starting position.',
                                        Weight: '40',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Lat_Pulldown.jpg'
                                    }
                                ],
                                cool_down:
                                    [
                                        {
                                            name: 'Trunk Twists',
                                            instruction: 'Sit with your legs crossed. Reach your left hand toward your left foot, and place your right hand at your side for support. Slowly twist your torso to your right. Switch your hands and twist to your left.',
                                            Reps: '10',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Trunk_Twists.jpg'
                                        },
                                        {
                                            name: 'Childs Pose',
                                            instruction: 'Begin on your yoga mat on all fours supported by your hands and knees. Make sure your hands are directly beneath your shoulders, knees directly beneath your hips, and your feet directly behind your knees. Sit back onto your feet, keeping your feet and knees hip’s width apart. The soles of the feet will be facing the sky in the pose. Gently lower your upper body forward, resting your forehead on the floor. Allow your arms to rest loosely by your sides, hands by your feet, with palms facing the sky. Inhale, lengthening your spine. Exhale, relaxing your shoulders.',
                                            Reps: '1 minute',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Childs_Pose.jpg'
                                        }
                                    ]
                            }
                        },
                        {
                            session:
                            {
                                day: 6,
                                warm_up:
                                [
                                    {
                                        name: 'Seated Toe Touches',
                                        instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                        Reps: '30 seconds',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                                    },
                                    {
                                        name:'Butterfly Stretch',
                                        instruction:'Sit down on the floor or ground with your legs in front of you. Reach forward and grab your right foot. It is OK to bend your knee to help your hand and foot connect. Gently pull your right foot up towards your groin bending until it is at a comfortable spot and the sole of the foot is facing your left thigh. Bend your left knee to bring your left foot toward your groin so that its sole touches the sole of your right foot. Hold your feet with your hands and rest your elbows on your knees. While keeping your back straight (no slouching), allow your knees to fall towards the ground. You can apply gentle pressure on the inner thigh by pressing gently on the knees with the elbows. You should feel gentle pulling and tension in the groin.',
                                        Reps: '30 seconds',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Butterfly_Stretch.jpg'
                                    },
                                    {
                                        name: 'Quad Stretch',
                                        instruction: 'Stand on one leg. If you need support, hold onto something solid, such as a wall or chair, for support. Bend your right knee and bring your heel toward your buttock. Reach for your ankle with your opposite (left) hand. Stand up straight and pull in your abdominal muscles. Try to keep your knees next to each other. Relax your shoulders. As you hold your leg in the bent position you will feel a slight pull along the front of your thigh and hip.Breathe deeply and hold the stretch for 20-30 seconds, release and repeat on the left leg, this time holding your ankle with your right hand. Stretch each leg one to five times in a stretching session.',
                                        Reps: '30 seconds',
                                        Sets: '4',
                                        photoURL: process.env.PUBLIC_URL + '/img/Quad_Stretch.jpg'
                                    }
                                ],
                                main_workout:
                                [
                                    {
                                        name: 'Squats',
                                        instruction: 'Stand with feet a little wider than hip width, toes facing front. Drive your hips back—bending at the knees and ankles and pressing your knees slightly open. Sit into a squat position while still keeping your heels and toes on the ground, chest up and shoulders back. Strive to eventually reach parallel, meaning knees are bent to a 90-degree angle. Press into your heels and straighten legs to return to a standing upright position.',
                                        Reps: '20',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Squats.jpg'
                                    },
                                    {
                                        name: 'Leg Press',
                                        instruction: 'Sit on the leg press and slide your butt down and into the bottom of the seat. Extend your legs and press the weight up. Bend your knees and descend as far as your flexibility and knee health allows. Without bouncing, drive the weight back up, stopping just short of full knee extension.',
                                        Weight: '50',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Leg_Press.jpg'
                                    },
                                    {
                                        name:'Toe Taps',
                                        instruction: 'Push off the ground with your left foot and switch legs mid-air, so your left foot touches the platform and your right foot is on the ground. Your arms can remain at your sides or alternate with your legs, like they do when running.Repeat alternating toe taps. If you are new to this exercise, go slowly until you feel comfortable with the movement pattern and your technique is correct. Once, you are ready, speed up the pace, merely tapping the edge of the platform when alternating feet. Step both feet back and onto the floor to end this exercise.',
                                        Reps: '40',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Toe_Taps.jpg'
                                    },
                                    {
                                        name: 'Front Squat',
                                        instruction: 'Grip the bar slightly wider than shoulder-width. Inhale and brace your core slightly, and unrack the bar. Take two steps back, and adjust your foot position. Squat as deep as possible with good technique. With control, stop and reverse the movement, extending your hips and legs again. Exhale on the way up or exchange air in the top position. Breathe in and repeat for reps.',
                                        weight: '65',
                                        Reps: '5',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Front_Squat.jpg'
                                    },
                                    {
                                        name:'Glute Bridges',
                                        instruction: 'Lie on back with bent knees hip distance apart, and feet flat on mat stacked under the knees. Engage the core and squeeze your glutes as you lift your hips to a bridge. Hold, squeezing tight and return to mat with control.',
                                        Reps: '20',
                                        Sets: '2',
                                        photoURL: process.env.PUBLIC_URL + '/img/Glute_Bridges.jpg'
                                    }
                                ],
                                cool_down:
                                    [
                                        {
                                            name: 'Standing Toe Touches',
                                            instruction: 'Stand with some space in front and behind you. Bend at the waist, keeping your legs straight, until you can relax and let your upper body hang down in front of you. Let your arms and hands hang down naturally. Hold for 10 to 20 seconds.',
                                            Reps: '15 seconds',
                                            Sets: '4',
                                            photoURL: process.env.PUBLIC_URL + '/img/Standing_Toe_Touches.jpg'
                                        },
                                        {
                                            name: 'Cross Body Glute Pull',
                                            instruction: 'Start on your back with your legs extended and your feet flexed upward. Bend and lift your right knee and place your hands around your knee. Pull your right knee up toward your left shoulder. Hold for 20–30 seconds. Return your right leg to the starting position. Straighten your right leg and repeat with your left leg.',
                                            Reps: '30 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Cross_Body_Glute_Pull.jpg'
                                        }
                                    ]
                            }
                        }, 
                        'rest'
                        
                    ]
            }
        },
        two_three: {
            workout: {
                name: 'Full Body Flexibility',
                schedule:
                    [
                        {
                            session:
                            {
                                day: 1,
                                warm_up:
                                    [
                                        {
                                            name: 'Seated Toe Touches',
                                            instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                            Reps: '30 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                                        },
                                        {
                                            name:'Back Scratch',
                                            instruction: 'Stand straight, placing the back of your hand on the side you want to stretch flat against your lower back. Throw one end of a towel over your shoulder. Grab it behind your back with your other hand. Pull down gently on the towel with your front arm. Let your back arm slide up as high as is comfortable. You’ll feel a stretch in your shoulder. Hold the stretch for a few seconds.',
                                            Reps: '45 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Back_Scratch.jpg'
                                        },
                                        {
                                            name:'Butterfly Stretch',
                                            instruction:'Sit down on the floor or ground with your legs in front of you. Reach forward and grab your right foot. It is OK to bend your knee to help your hand and foot connect. Gently pull your right foot up towards your groin bending until it is at a comfortable spot and the sole of the foot is facing your left thigh. Bend your left knee to bring your left foot toward your groin so that its sole touches the sole of your right foot. Hold your feet with your hands and rest your elbows on your knees. While keeping your back straight (no slouching), allow your knees to fall towards the ground. You can apply gentle pressure on the inner thigh by pressing gently on the knees with the elbows. You should feel gentle pulling and tension in the groin.',
                                            Reps: '30 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Butterfly_Stretch.jpg'
                                        }
                                    ],
                                main_workout:
                                    [
                                        {
                                            name: 'Dumbell Row',
                                            instruction: 'Grab a dumbbell in each hand. If it is your first time, grab a light weight that feels doable. Stagger your legs. Place one leg in front of the other, and then bow down. “You want to [imagine] a straight line from the top of your head all the way to your bottom almost as if you had a quarter and you place it on the top of your head it would gently roll all the way down your back and then from there, place the weights in front of your toes,” explains Jones. Slide your elbows along your side and squeeze your shoulder blades together as you lift the weights. Make sure that your shoulders are held down your back and your neck is long. Hold for a second and then gently extend your arms while placing the weight back to the start position. When returning to the starting position, the dumbbells will be in line with your feet.',
                                            Weight: '25',
                                            Reps: '12',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Dumbell_Row.jpg'
                                        },
                                        {
                                            name:'Deadlift',
                                            instruction: 'Position the feet shoulder-width apart (or not much more) with toes under the bar. The feet point straight ahead, or they can angle out slightly. Heels should stay flat on the surface. When you lift, the bar will travel close to the shins and may even graze them. Maintain a neutral spine position. Stabilize the abdominal muscles by bracing them. Squat down, bending at the knees. The form for descending to the bar is similar (but not identical) to the squat, with your back straight or arched slightly and not rounded at the shoulders or spine. Grasp the bar just outside the line of the knees with an overhand or mixed grip. Lift the bar by pushing upward with the legs from the knees. Breathe out on exertion. Be careful not to raise the hips first so the trunk moves forward and the back becomes rounded. Don’t try to haul the bar up with your arms. The arms stay extended under tension while gripping the bar as the legs push up. Think of the legs and shoulders moving upward in unison with the hips, the balancing point. The bar should almost graze the shins and rest around thigh level as you reach full height. Pull the shoulders back as much as possible without bending backward. Lower the bar to the floor with a reverse motion ensuring a straight back.',
                                            weight: '120',
                                            Reps: '6',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Deadlift.jpg'
                                        },
                                        {
                                            name: 'Squats',
                                            instruction: 'Stand with feet a little wider than hip width, toes facing front. Drive your hips back—bending at the knees and ankles and pressing your knees slightly open. Sit into a squat position while still keeping your heels and toes on the ground, chest up and shoulders back. Strive to eventually reach parallel, meaning knees are bent to a 90-degree angle. Press into your heels and straighten legs to return to a standing upright position.',
                                            Reps: '20',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Squats.jpg'
                                        },
                                        {
                                            name: 'Lat Pulldown',
                                            instruction: 'Start by sitting at a lat pull machine, facing the bar. Reach up and grasp the bar a little wider than shoulder width. Pull the bar down toward your upper chest, aiming for just below your collarbone. Hold the bar at your mid to upper chest for 1–2 seconds while squeezing your shoulder blades back and down. Slowly return to the starting position.',
                                            Weight: '40',
                                            Reps: '6',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Lat_Pulldown.jpg'
                                        }
                                    ],
                                cool_down:
                                    [
                                        {
                                            name: 'Trunk Twists',
                                            instruction: 'Sit with your legs crossed. Reach your left hand toward your left foot, and place your right hand at your side for support. Slowly twist your torso to your right. Switch your hands and twist to your left.',
                                            Reps: '10',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Trunk_Twists.jpg'
                                        },
                                        {
                                            name: 'Childs Pose',
                                            instruction: 'Begin on your yoga mat on all fours supported by your hands and knees. Make sure your hands are directly beneath your shoulders, knees directly beneath your hips, and your feet directly behind your knees. Sit back onto your feet, keeping your feet and knees hip’s width apart. The soles of the feet will be facing the sky in the pose. Gently lower your upper body forward, resting your forehead on the floor. Allow your arms to rest loosely by your sides, hands by your feet, with palms facing the sky. Inhale, lengthening your spine. Exhale, relaxing your shoulders.',
                                            Reps: '1 minute',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Childs_Pose.jpg'
                                        }
                                    ]
                            }
                        },
                        {
                            session: {
                                day: 2,
                                warm_up: [
                                    {
                                        name: 'Seated Toe Touches',
                                        instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                        Reps: '30 seconds',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                                    },
                                ],
                                    main_workout: 
                                    [
                                        {
                                            name:'Back Scratch',
                                            instruction: 'Stand straight, placing the back of your hand on the side you want to stretch flat against your lower back. Throw one end of a towel over your shoulder. Grab it behind your back with your other hand. Pull down gently on the towel with your front arm. Let your back arm slide up as high as is comfortable. You’ll feel a stretch in your shoulder. Hold the stretch for a few seconds.',
                                            Reps: '45 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Back_Scratch.jpg'
                                        },
                                        {
                                            name:'Butterfly Stretch',
                                            instruction:'Sit down on the floor or ground with your legs in front of you. Reach forward and grab your right foot. It is OK to bend your knee to help your hand and foot connect. Gently pull your right foot up towards your groin bending until it is at a comfortable spot and the sole of the foot is facing your left thigh. Bend your left knee to bring your left foot toward your groin so that its sole touches the sole of your right foot. Hold your feet with your hands and rest your elbows on your knees. While keeping your back straight (no slouching), allow your knees to fall towards the ground. You can apply gentle pressure on the inner thigh by pressing gently on the knees with the elbows. You should feel gentle pulling and tension in the groin.',
                                            Reps: '30 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Butterfly_Stretch.jpg'
                                        },
                                        {
                                            name: 'Childs Pose',
                                            instruction: 'Begin on your yoga mat on all fours supported by your hands and knees. Make sure your hands are directly beneath your shoulders, knees directly beneath your hips, and your feet directly behind your knees. Sit back onto your feet, keeping your feet and knees hip’s width apart. The soles of the feet will be facing the sky in the pose. Gently lower your upper body forward, resting your forehead on the floor. Allow your arms to rest loosely by your sides, hands by your feet, with palms facing the sky. Inhale, lengthening your spine. Exhale, relaxing your shoulders.',
                                            Reps: '1 minute',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Childs_Pose.jpg'
                                        },
                                        {
                                            name: 'Quad Stretch',
                                            instruction: 'Stand on one leg. If you need support, hold onto something solid, such as a wall or chair, for support. Bend your right knee and bring your heel toward your buttock. Reach for your ankle with your opposite (left) hand. Stand up straight and pull in your abdominal muscles. Try to keep your knees next to each other. Relax your shoulders. As you hold your leg in the bent position you will feel a slight pull along the front of your thigh and hip.Breathe deeply and hold the stretch for 20-30 seconds, release and repeat on the left leg, this time holding your ankle with your right hand. Stretch each leg one to five times in a stretching session.',
                                            Reps: '30 seconds',
                                            Sets: '4',
                                            photoURL: process.env.PUBLIC_URL + '/img/Quad_Stretch.jpg'
                                        },
                                        {
                                            name: 'Arm Circles',
                                            instruction: 'Stand upright with a shoulder-wide stance. Extend your arms to your sides. They should be parallel to the floor. Push your shoulders back and down to get in position. Rotate your arms clockwise at your shoulders. Arm circles are usually performed until you feel a burn in your shoulders or if you can’t hold your arms parallel to the floor.',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Arm_Circles.jpg'
                                        }
                                    ],
                                    cool_down: [
                                        {
                                            name: 'Cross Body Glute Pull',
                                            instruction: 'Start on your back with your legs extended and your feet flexed upward. Bend and lift your right knee and place your hands around your knee. Pull your right knee up toward your left shoulder. Hold for 20–30 seconds. Return your right leg to the starting position. Straighten your right leg and repeat with your left leg.',
                                            Reps: '30 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Cross_Body_Glute_Pull.jpg'
                                        }
                                    ]
                                
                                }
                            },
                            'rest',
                        {
                            session:
                            {
                                day: 4,
                                warm_up:
                                [
                                    {
                                        name: 'Seated Toe Touches',
                                        instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                        Reps: '30 seconds',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                                    },
                                    {
                                        name:'Butterfly Stretch',
                                        instruction:'Sit down on the floor or ground with your legs in front of you. Reach forward and grab your right foot. It is OK to bend your knee to help your hand and foot connect. Gently pull your right foot up towards your groin bending until it is at a comfortable spot and the sole of the foot is facing your left thigh. Bend your left knee to bring your left foot toward your groin so that its sole touches the sole of your right foot. Hold your feet with your hands and rest your elbows on your knees. While keeping your back straight (no slouching), allow your knees to fall towards the ground. You can apply gentle pressure on the inner thigh by pressing gently on the knees with the elbows. You should feel gentle pulling and tension in the groin.',
                                        Reps: '30 seconds',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Butterfly_Stretch.jpg'
                                    },
                                    {
                                        name: 'Quad Stretch',
                                        instruction: 'Stand on one leg. If you need support, hold onto something solid, such as a wall or chair, for support. Bend your right knee and bring your heel toward your buttock. Reach for your ankle with your opposite (left) hand. Stand up straight and pull in your abdominal muscles. Try to keep your knees next to each other. Relax your shoulders. As you hold your leg in the bent position you will feel a slight pull along the front of your thigh and hip.Breathe deeply and hold the stretch for 20-30 seconds, release and repeat on the left leg, this time holding your ankle with your right hand. Stretch each leg one to five times in a stretching session.',
                                        Reps: '30 seconds',
                                        Sets: '4',
                                        photoURL: process.env.PUBLIC_URL + '/img/Quad_Stretch.jpg'
                                    }
                                ],
                                main_workout:
                                [
                                    {
                                        name: 'Squats',
                                        instruction: 'Stand with feet a little wider than hip width, toes facing front. Drive your hips back—bending at the knees and ankles and pressing your knees slightly open. Sit into a squat position while still keeping your heels and toes on the ground, chest up and shoulders back. Strive to eventually reach parallel, meaning knees are bent to a 90-degree angle. Press into your heels and straighten legs to return to a standing upright position.',
                                        Reps: '20',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Squats.jpg'
                                    },
                                    {
                                        name: 'Leg Press',
                                        instruction: 'Sit on the leg press and slide your butt down and into the bottom of the seat. Extend your legs and press the weight up. Bend your knees and descend as far as your flexibility and knee health allows. Without bouncing, drive the weight back up, stopping just short of full knee extension.',
                                        Weight: '50',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Leg_Press.jpg'
                                    },
                                    {
                                        name:'Toe Taps',
                                        instruction: 'Push off the ground with your left foot and switch legs mid-air, so your left foot touches the platform and your right foot is on the ground. Your arms can remain at your sides or alternate with your legs, like they do when running.Repeat alternating toe taps. If you are new to this exercise, go slowly until you feel comfortable with the movement pattern and your technique is correct. Once, you are ready, speed up the pace, merely tapping the edge of the platform when alternating feet. Step both feet back and onto the floor to end this exercise.',
                                        Reps: '40',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Toe_Taps.jpg'
                                    },
                                    {
                                        name: 'Front Squat',
                                        instruction: 'Grip the bar slightly wider than shoulder-width. Inhale and brace your core slightly, and unrack the bar. Take two steps back, and adjust your foot position. Squat as deep as possible with good technique. With control, stop and reverse the movement, extending your hips and legs again. Exhale on the way up or exchange air in the top position. Breathe in and repeat for reps.',
                                        weight: '65',
                                        Reps: '5',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Front_Squat.jpg'
                                    },
                                    {
                                        name:'Glute Bridges',
                                        instruction: 'Lie on back with bent knees hip distance apart, and feet flat on mat stacked under the knees. Engage the core and squeeze your glutes as you lift your hips to a bridge. Hold, squeezing tight and return to mat with control.',
                                        Reps: '20',
                                        Sets: '2',
                                        photoURL: process.env.PUBLIC_URL + '/img/Glute_Bridges.jpg'
                                    }
                                ],
                                cool_down:
                                    [
                                        {
                                            name: 'Standing Toe Touches',
                                            instruction: 'Stand with some space in front and behind you. Bend at the waist, keeping your legs straight, until you can relax and let your upper body hang down in front of you. Let your arms and hands hang down naturally. Hold for 10 to 20 seconds.',
                                            Reps: '15 seconds',
                                            Sets: '4',
                                            photoURL: process.env.PUBLIC_URL + '/img/Standing_Toe_Touches.jpg'
                                        },
                                        {
                                            name: 'Cross Body Glute Pull',
                                            instruction: 'Start on your back with your legs extended and your feet flexed upward. Bend and lift your right knee and place your hands around your knee. Pull your right knee up toward your left shoulder. Hold for 20–30 seconds. Return your right leg to the starting position. Straighten your right leg and repeat with your left leg.',
                                            Reps: '30 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Cross_Body_Glute_Pull.jpg'
                                        }
                                    ]
                            }
                        },
                        {
                            session: {
                                day: 5,
                                warm_up: [
                                    {
                                        name: 'Seated Toe Touches',
                                        instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                        Reps: '30 seconds',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                                    }
                                ],
                                    main_workout: 
                                    [
                                        {
                                            name:'Back Scratch',
                                            instruction: 'Stand straight, placing the back of your hand on the side you want to stretch flat against your lower back. Throw one end of a towel over your shoulder. Grab it behind your back with your other hand. Pull down gently on the towel with your front arm. Let your back arm slide up as high as is comfortable. You’ll feel a stretch in your shoulder. Hold the stretch for a few seconds.',
                                            Reps: '45 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Back_Scratch.jpg'
                                        },
                                        {
                                            name:'Butterfly Stretch',
                                            instruction:'Sit down on the floor or ground with your legs in front of you. Reach forward and grab your right foot. It is OK to bend your knee to help your hand and foot connect. Gently pull your right foot up towards your groin bending until it is at a comfortable spot and the sole of the foot is facing your left thigh. Bend your left knee to bring your left foot toward your groin so that its sole touches the sole of your right foot. Hold your feet with your hands and rest your elbows on your knees. While keeping your back straight (no slouching), allow your knees to fall towards the ground. You can apply gentle pressure on the inner thigh by pressing gently on the knees with the elbows. You should feel gentle pulling and tension in the groin.',
                                            Reps: '30 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Butterfly_Stretch.jpg'
                                        },
                                        {
                                            name: 'Childs Pose',
                                            instruction: 'Begin on your yoga mat on all fours supported by your hands and knees. Make sure your hands are directly beneath your shoulders, knees directly beneath your hips, and your feet directly behind your knees. Sit back onto your feet, keeping your feet and knees hip’s width apart. The soles of the feet will be facing the sky in the pose. Gently lower your upper body forward, resting your forehead on the floor. Allow your arms to rest loosely by your sides, hands by your feet, with palms facing the sky. Inhale, lengthening your spine. Exhale, relaxing your shoulders.',
                                            Reps: '1 minute',
                                            Sets: '1',
                                            photoURL: process.env.PUBLIC_URL + '/img/Childs_Pose.jpg'
                                        },
                                        {
                                            name: 'Quad Stretch',
                                            instruction: 'Stand on one leg. If you need support, hold onto something solid, such as a wall or chair, for support. Bend your right knee and bring your heel toward your buttock. Reach for your ankle with your opposite (left) hand. Stand up straight and pull in your abdominal muscles. Try to keep your knees next to each other. Relax your shoulders. As you hold your leg in the bent position you will feel a slight pull along the front of your thigh and hip.Breathe deeply and hold the stretch for 20-30 seconds, release and repeat on the left leg, this time holding your ankle with your right hand. Stretch each leg one to five times in a stretching session.',
                                            Reps: '30 seconds',
                                            Sets: '4',
                                            photoURL: process.env.PUBLIC_URL + '/img/Quad_Stretch.jpg'
                                        },
                                        {
                                            name: 'Arm Circles',
                                            instruction: 'Stand upright with a shoulder-wide stance. Extend your arms to your sides. They should be parallel to the floor. Push your shoulders back and down to get in position. Rotate your arms clockwise at your shoulders. Arm circles are usually performed until you feel a burn in your shoulders or if you can’t hold your arms parallel to the floor.',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Arm_Circles.jpg'
                                        }
                                    ],
                                    cool_down: [
                                        {
                                            name: 'Cross Body Glute Pull',
                                            instruction: 'Start on your back with your legs extended and your feet flexed upward. Bend and lift your right knee and place your hands around your knee. Pull your right knee up toward your left shoulder. Hold for 20–30 seconds. Return your right leg to the starting position. Straighten your right leg and repeat with your left leg.',
                                            Reps: '30 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Cross_Body_Glute_Pull.jpg'
                                        }
                                    ]
                                
                                }
                            },
                        {
                            session:
                            {
                                day: 6,
                                warm_up:
                                    [
                                        {
                                            name: 'Arm Circles',
                                            instruction: 'Stand upright with a shoulder-wide stance. Extend your arms to your sides. They should be parallel to the floor. Push your shoulders back and down to get in position. Rotate your arms clockwise at your shoulders. Arm circles are usually performed until you feel a burn in your shoulders or if you can’t hold your arms parallel to the floor.',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Arm_Circles.jpg'
                                        },
                                        {
                                            name: 'Seated Toe Touches',
                                            instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                            Reps: '30 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                                        },
                                        {
                                            name: 'Jumping Jacks',
                                            instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                            Reps: '1 minute',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Jumping_Jacks.jpg'
                                        }
                                    ],
                                main_workout:
                                    [
                                        {
                                            name: 'Lateral Raise',
                                            instruction: 'Stand tall, a dumbbell in each hand. Arms are at your sides, palms facing in. Position your feet roughly hip-distance apart. Check your posture—roll your shoulders back, engage your core, and look straight ahead. Raise your arms simultaneously just a couple inches out to each side and pause. This momentary pause should help ensure you disengage your trapezius muscle from the movement, targeting the deltoids as intended. Lift the dumbbells up and out to each side, keeping your arms almost completely straight, stopping when your elbows reach shoulder-height and your body is forming a "T" shape. Breathe in as you lift. Pause and hold for a second at the top of the movement. Lower the weights slowly (take about twice as long to lower the weights as you took to lift them), bringing your arms back to your sides. Breathe out as you lower the dumbbells.',
                                            Weight: '20',
                                            Reps: '8',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Lateral_Raise.jpg'
                                        },
                                        {
                                            name: 'Bench Press',
                                            instruction: 'To do a bench press, lie on a flat bench with your eyes under the bar and your feet on the ground12. Grab the bar with a medium grip-width and your thumbs around the bar1. Unrack the bar by straightening your arms and keep it over your shoulders123. Lower the bar to your mid-chest or just below your clavicle, while keeping your elbows slightly tucked in and your chest high134. Pause on your chest without bouncing the bar4. Press the bar back up until your arms are straight, while flaring your elbows out and exhaling.',
                                            Weight: '45',
                                            Reps: '8',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Bench_Press.jpg'
                                        },
                                        {
                                            name:'Romanian Deadlift',
                                            instruction: 'Hold your weight (dumbbells or a barbell) in front of your thighs, and lower to the ground by pushing your hips back. As you lower the weight, keep your shoulder blades drawn towards each other and your chest open and wide. When the weight is below your knees, thrust your hips forward and return to the starting position.',
                                            Weight: '100',
                                            Reps: '8',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Romanian_Deadlift.jpg'
                                        },
                                        {
                                            name: 'Dumbell Row',
                                            instruction: 'Grab a dumbbell in each hand. If it is your first time, grab a light weight that feels doable. Stagger your legs. Place one leg in front of the other, and then bow down. “You want to [imagine] a straight line from the top of your head all the way to your bottom almost as if you had a quarter and you place it on the top of your head it would gently roll all the way down your back and then from there, place the weights in front of your toes,” explains Jones. Slide your elbows along your side and squeeze your shoulder blades together as you lift the weights. Make sure that your shoulders are held down your back and your neck is long. Hold for a second and then gently extend your arms while placing the weight back to the start position. When returning to the starting position, the dumbbells will be in line with your feet.',
                                            Weight: '25',
                                            Reps: '12',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Dumbell_Row.jpg'
                                        },
                                        {
                                            name: 'Dumbell Walking Lunges',
                                            instruction: 'Set up with your feet shoulder width apart and a dumbbell in each hand. Step forward with one leg and allow both knees to bend simultaneously. Descend until the back knee touches the floor. Drive through the front foot and extend the knee as you stand up fully and return to the starting position. Repeat on the opposite leg.', 
                                            Weight: '20',
                                            Reps: '12',
                                            Sets: '2',
                                            photoURL: process.env.PUBLIC_URL + '/img/Dumbell_Walking_Lunges.jpg'
                                        }
                                    ],
                                cool_down:
                                    [
                                        {
                                            name: 'Overhead Shoulder Stretch',
                                            instruction: 'Stand straight with your feet shoulders width apart. Reach your arms straight overhead and interlace your fingers with the palms facing upward. Raise your arms upward as you press your shoulders down. Hold for the rep count',
                                            Reps: '15 seconds',
                                            Sets: '4',
                                            photoURL: process.env.PUBLIC_URL + '/img/Overhead_Shoulder_Stretch.jpg'
                                        },
                                        {
                                            name:'Butterfly Stretch',
                                            instruction:'Sit down on the floor or ground with your legs in front of you. Reach forward and grab your right foot. It is OK to bend your knee to help your hand and foot connect. Gently pull your right foot up towards your groin bending until it is at a comfortable spot and the sole of the foot is facing your left thigh. Bend your left knee to bring your left foot toward your groin so that its sole touches the sole of your right foot. Hold your feet with your hands and rest your elbows on your knees. While keeping your back straight (no slouching), allow your knees to fall towards the ground. You can apply gentle pressure on the inner thigh by pressing gently on the knees with the elbows. You should feel gentle pulling and tension in the groin.',
                                            Reps: '30 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Butterfly_Stretch.jpg'
                                        },
                                        {
                                            name:'Back Scratch',
                                            instruction: 'Stand straight, placing the back of your hand on the side you want to stretch flat against your lower back. Throw one end of a towel over your shoulder. Grab it behind your back with your other hand. Pull down gently on the towel with your front arm. Let your back arm slide up as high as is comfortable. You’ll feel a stretch in your shoulder. Hold the stretch for a few seconds.',
                                            Reps: '45 seconds',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Back_Scratch.jpg'
                                        }
                                    ]
                            }
                        },
                        'rest'
                    ]
                }
        }
    },
    muscle_gain: {
        four_six: {
            workout: {
                name: 'Push/Pull/Legs',
                schedule:
                    [
                        {
                            session: 
                                {
                                    day: 1,
                                        warm_up: 
                                            [
                                                {
                                                    name: 'Overhead Shoulder Stretch',
                                                    instruction: 'Stand straight with your feet shoulders width apart. Reach your arms straight overhead and interlace your fingers with the palms facing upward. Raise your arms upward as you press your shoulders down. Hold for the rep count',
                                                    Reps: '15 seconds',
                                                    Sets: '4',
                                                    photoURL: process.env.PUBLIC_URL + '/img/Overhead_Shoulder_Stretch.jpg'
                                                },
                                                {
                                                    name: 'Arm Circles',
                                                    instruction: 'Stand upright with a shoulder-wide stance. Extend your arms to your sides. They should be parallel to the floor. Push your shoulders back and down to get in position. Rotate your arms clockwise at your shoulders. Arm circles are usually performed until you feel a burn in your shoulders or if you can’t hold your arms parallel to the floor.',
                                                    Reps: '1 minute',
                                                    Sets: '3',
                                                    photoURL: process.env.PUBLIC_URL + '/img/Arm_Circles.jpg'
                                                }
                                            ]
                                    ,
                                    
                                        main_workout: [
                                            {
                                                name: 'Bench Press',
                                                instruction: 'To do a bench press, lie on a flat bench with your eyes under the bar and your feet on the ground12. Grab the bar with a medium grip-width and your thumbs around the bar1. Unrack the bar by straightening your arms and keep it over your shoulders123. Lower the bar to your mid-chest or just below your clavicle, while keeping your elbows slightly tucked in and your chest high134. Pause on your chest without bouncing the bar4. Press the bar back up until your arms are straight, while flaring your elbows out and exhaling.',
                                                Weight: '45',
                                                Reps: '8',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Bench_Press.jpg'
                                            },
                                            {
                                                name: 'Shoulder Press',
                                                instruction: 'Place a barbell with the desired weight on a rack, making sure that it’s at shoulder height. Dip under the bar and place yourself underneath the barbell, picking it up as you slowly straighten yourself up. If this is done correctly, the barbell should then rest at the top of your shoulders. Grab the bar with your palms facing upwards — your elbows should point straight ahead. Make sure that your back is straight to secure proper form. Gently step back from the rack, keeping your back tall — then, simply press the barbell overhead. Once you can’t extend your arms any further, slowly return the barbell to your shoulders and repeat as many times as you need to. After the final repetition, step into the rack and leave the barbell at shoulder height once again. Finally, dip under the bar and step away from the rack without the bar.',
                                                weight: '45',
                                                Reps: '6',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Shoulder_Press.jpg'
                                            },
                                            {
                                                name: 'Incline Dumbbell Press',
                                                instruction: 'Sit on a bench, and lift a pair of dumbbells up to the starting position. Press the dumbbells up to straight arms, while exhaling. Inhale at the top, or while lowering the dumbbells with control back to your shoulders.',
                                                Weight: '30',
                                                Reps: '8',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Incline_Dumbell_Press.jpg'
                                            },
                                            {
                                                name: 'Lateral Raise',
                                                instruction: 'Stand tall, a dumbbell in each hand. Arms are at your sides, palms facing in. Position your feet roughly hip-distance apart. Check your posture—roll your shoulders back, engage your core, and look straight ahead. Raise your arms simultaneously just a couple inches out to each side and pause. This momentary pause should help ensure you disengage your trapezius muscle from the movement, targeting the deltoids as intended. Lift the dumbbells up and out to each side, keeping your arms almost completely straight, stopping when your elbows reach shoulder-height and your body is forming a "T" shape. Breathe in as you lift. Pause and hold for a second at the top of the movement. Lower the weights slowly (take about twice as long to lower the weights as you took to lift them), bringing your arms back to your sides. Breathe out as you lower the dumbbells.',
                                                Weight: '20',
                                                Reps: '8',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Lateral_Raise.jpg'
                                            },
                                            {
                                                name: 'Tricep Pushdowns',
                                                instruction: 'Start by bracing your abdominals. Tuck your elbows in at your sides and position your feet slightly apart. Inhale. Push down until your elbows are fully extended but not yet in the straight, locked position. Keep your elbows close to your body and bend your knees slightly on the pushdown. Resist bending forward. Try to keep your back as straight as possible as you push down. As you exhale, return to the starting point using a controlled movement. Try not to crash the weights.',
                                                Weight: '40',
                                                Reps: '8',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Tricep_PushDowns.jpg'
                                            },
                                            {
                                                name: 'Overhead Triceps Extension',
                                                instruction: 'Lift the dumbbell directly overhead. Ensure the head stays aligned over the chest, the core remains engaged, and the shoulders are relaxed. Extend both arms fully, then exhale and slowly lower the weight, bringing the weight behind the head by bending at the elbows. Be sure the chest stays aligned over the hips and the back does not arch. Inhale and reverse the movement once you reach a 90-degree bend at the elbow or slightly further, lifting the weight back to the starting position. The weight should not touch the back of the head when it is in its lowest position.',
                                                Weight: '25',
                                                Reps: '8',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Overhead_Tricep_Extention.jpg'
                                            }
                                        ] 
                                    ,
                                    
                                        cool_down:[
                                            {
                                                name:'Reach For The Sky',
                                                instruction: 'Start in the seated position. Place the left hand in your lap and stretch the right hand towards. the sky. Bend slightly to your left side, feeling a light stretch along your. right side. Count to 10 while breathing slowly. Switch to the left hand and repeat.',
                                                Reps: '15 seconds',
                                                Sets: '4',
                                                photoURL: process.env.PUBLIC_URL + '/img/Reach_For_The_Sky.jpg'
                                            },
                                        ]
                                }
                        },
                        {
                            session: 
                                {
                                    day: 2,
                                        warm_up: 
                                            [
                                                {
                                                    name:'Back Scratch',
                                                    instruction: 'Stand straight, placing the back of your hand on the side you want to stretch flat against your lower back. Throw one end of a towel over your shoulder. Grab it behind your back with your other hand. Pull down gently on the towel with your front arm. Let your back arm slide up as high as is comfortable. You’ll feel a stretch in your shoulder. Hold the stretch for a few seconds.',
                                                    Reps: '45 seconds',
                                                    Sets: '3',
                                                    photoURL: process.env.PUBLIC_URL + '/img/Back_Scratch.jpg'
                                                },
                                                {
                                                    name: 'Jumping Jacks',
                                                    instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                                    Reps: '1 minute',
                                                    Sets: '3',
                                                    photoURL: process.env.PUBLIC_URL + '/img/Jumping_Jacks.jpg'
                                                }
                                            ]
                                    ,
                                    
                                        main_workout: [
                                            {
                                                name: 'Dumbell Row',
                                                instruction: 'Grab a dumbbell in each hand. If it is your first time, grab a light weight that feels doable. Stagger your legs. Place one leg in front of the other, and then bow down. “You want to [imagine] a straight line from the top of your head all the way to your bottom almost as if you had a quarter and you place it on the top of your head it would gently roll all the way down your back and then from there, place the weights in front of your toes,” explains Jones. Slide your elbows along your side and squeeze your shoulder blades together as you lift the weights. Make sure that your shoulders are held down your back and your neck is long. Hold for a second and then gently extend your arms while placing the weight back to the start position. When returning to the starting position, the dumbbells will be in line with your feet.',
                                                Weight: '25',
                                                Reps: '12',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Dumbell_Row.jpg'
                                            },
                                            {
                                                name:'Pullups',
                                                instruction: 'Start by standing directly below a pull-up bar. Place your hands in an overhand grip (palms facing away from your body) with your hands slightly further than shoulder-width apart. If you can’t reach the bar from standing on the floor, you can place a box beneath you and stand on that. Once your hands are holding onto the bar, you’re in your starting position. Inhale, then exhale. Lift your feet up from the floor or box so that you’re hanging from the bar, and engage your core by pulling your belly button in toward your spine. Pull your shoulders back and down. Engaging the muscles in your arms and back, bend your elbows and raise your upper body up toward the bar until your chin is over the bar. You can imagine bringing your elbows toward your hips if that makes the movement easier. As you move, avoid swinging your legs around or shrugging your shoulders up. You want to make sure your shoulder blades remain back and down throughout the exercise. At the top of the movement, inhale. Then extend your elbows and lower your body back down to the starting position.',
                                                Reps: '8',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Pullups.jpg'
                                            },
                                            {
                                                name: 'Barbell Shrug',
                                                instruction: 'Use an alternated grip, one hand pronated (overhand) and one hand supinated (underhand), about shoulder-width apart. Place feet hip-width apart, brace the core and stand tall with the bar Now shrug up, visualizing touching your traps to your ears. Do NOT ‘roll’ the shoulders. Shrug straight up and down. Control the weight back down to the starting position and repeat.',
                                                Weight: '65',
                                                Reps: '8',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Barbell_Shrug.jpg'
                                            },
                                            {
                                                name: 'Face Pulls',
                                                instruction: 'Set up a cable pulley machine so the pulley system is positioned slightly above your head. Use the rope attachment that features two hand-holds for this exercise. Reach up and grasp the handles with both hands with your palms facing in. Step back until your arms are fully extended, then engage your core and lean back slightly, positioning your body at a roughly 20-degree angle. Pull the rope toward you just enough to start lifting the weight from the stack, then engage your shoulders, rolling them back to create good posture—you do not want your shoulders hunching or rolling forward. This is your starting position. Pull the handles of the attachment straight toward your forehead. Keep your palms facing in as your elbows flare outward toward the sides, engaging the rear delts. Reverse the movement and slowly extend your arms without allowing your shoulders or chest to roll forward as you extend. You want to maintain good posture throughout the exercise.',
                                                Weight: '30',
                                                Reps: '20',
                                                Sets: '2',
                                                photoURL: process.env.PUBLIC_URL + '/img/Face_Pulls.jpg'
                                            },
                                            {
                                                name: 'Barbell Curl',
                                                instruction: 'Stand erect with the shoulder blades down the back, chest up, and shoulder pulled back. The grip should be slightly wider than hip-width (can vary), with the palms facing away from the body. This is something so few lifters do, and as a result, they flare their elbows out and leave a rep (or two) in the tank. the chest collapsing, and the biceps lacking width and fullness. Squeezing the bar will activate all of the muscles in your forearms and upper arm, which will generally activate the target muscles more. Also, you’ll be tight and less prone to flaring your arms out or performing generally sloppy reps. Instead of dragging the bar up the body, think about keeping the elbows slightly in front of the body at all times. Imagine yourself curling from a side view — your elbows should travel slightly in front of your torso. Continue to curl up, focusing on not letting the shoulders come forwards. Your shoulders will slightly — slightly! — come into to play when your elbows drift forward. Remember to primarily curl with your biceps. The point of letting your elbows come forward a bit is to further isolate the biceps. Curl the bar until it’s about an inch or two from the front of your shoulders. This is just a suggestion. Really, curl until you feel your biceps contract the most. Find that spot, hold the weight there for a beat, and then find that spot again on your next rep. The goal here is about gaining a contraction.',
                                                Weight: '45',
                                                Reps: '8',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Barbell_Curl.jpg'
                                            },
                                            {
                                                name: 'Hammer Curls',
                                                instruction: 'Stand up, grab two dumbbells with a neutral grip and then hold them by your sides. Brace your core and then curl the weights to your shoulders by flexing your elbows. Squeeze your biceps at the top of the rep and then lower the dumbbells under control until your elbows are fully extended.',
                                                weight: '20',
                                                Reps: '6',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Hammer_Curls.jpg'
                                            }
                                        ] 
                                    ,
                                    
                                        cool_down:[
                                            {
                                                name:'Reach For The Sky',
                                                instruction: 'Start in the seated position. Place the left hand in your lap and stretch the right hand towards. the sky. Bend slightly to your left side, feeling a light stretch along your. right side. Count to 10 while breathing slowly. Switch to the left hand and repeat.',
                                                Reps: '15 seconds',
                                                Sets: '4',
                                                photoURL: process.env.PUBLIC_URL + '/img/Reach_For_The_Sky.jpg'
                                            },
                                        ]
                                }
                        },  
                        {
                            session: 
                                {
                                    day: 3,
                                        warm_up: 
                                            [
                                                {
                                                    name: 'Seated Toe Touches',
                                                    instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                                    Reps: '30 seconds',
                                                    Sets: '3',
                                                    photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                                                },
                                                {
                                                    name:'Butterfly Stretch',
                                                    instruction:'Sit down on the floor or ground with your legs in front of you. Reach forward and grab your right foot. It is OK to bend your knee to help your hand and foot connect. Gently pull your right foot up towards your groin bending until it is at a comfortable spot and the sole of the foot is facing your left thigh. Bend your left knee to bring your left foot toward your groin so that its sole touches the sole of your right foot. Hold your feet with your hands and rest your elbows on your knees. While keeping your back straight (no slouching), allow your knees to fall towards the ground. You can apply gentle pressure on the inner thigh by pressing gently on the knees with the elbows. You should feel gentle pulling and tension in the groin.',
                                                    Reps: '30 seconds',
                                                    Sets: '3',
                                                    photoURL: process.env.PUBLIC_URL + '/img/Butterfly_Stretch.jpg'
                                                }
                                            ]
                                    ,
                                    
                                        main_workout: [
                                            {
                                                name: 'Squats',
                                                instruction: 'Stand with feet a little wider than hip width, toes facing front. Drive your hips back—bending at the knees and ankles and pressing your knees slightly open. Sit into a squat position while still keeping your heels and toes on the ground, chest up and shoulders back. Strive to eventually reach parallel, meaning knees are bent to a 90-degree angle. Press into your heels and straighten legs to return to a standing upright position.',
                                                Reps: '20',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Squats.jpg'
                                            },
                                            {
                                                name:'Romanian Deadlift',
                                                instruction: 'Hold your weight (dumbbells or a barbell) in front of your thighs, and lower to the ground by pushing your hips back. As you lower the weight, keep your shoulder blades drawn towards each other and your chest open and wide. When the weight is below your knees, thrust your hips forward and return to the starting position.',
                                                Weight: '100',
                                                Reps: '8',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Romanian_Deadlift.jpg'
                                            },
                                            {
                                                name: 'Leg Press',
                                                instruction: 'Sit on the leg press and slide your butt down and into the bottom of the seat. Extend your legs and press the weight up. Bend your knees and descend as far as your flexibility and knee health allows. Without bouncing, drive the weight back up, stopping just short of full knee extension.',
                                                Weight: '50',
                                                Reps: '6',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Leg_Press.jpg'
                                            },
                                            {
                                                name: 'Leg Curls',
                                                instruction: 'Exhale and flex your knees, pulling your ankles as close to your buttocks as possible. Keep your hips firmly on the bench. Hold briefly. Inhale as you return your feet to the starting position in a slow and controlled movement.',
                                                Weight: '30',
                                                Reps: '6',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Leg_Curls.jpg'
                                            },
                                            {
                                                name: 'Calf Raises',
                                                instruction: 'Place your feet on the ground or elevated surface, about hip-distance apart, with the toes and knees straight ahead. Your foot should be in line with your ankle and your bodyweight be pressing evenly on the ball of your foot. Extend the ankle and rise up on the toes, flexing your calf muscle. Lower down with control and return to the initial position.',
                                                Weight: '30',
                                                Reps: '10',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Calf_Raises.jpg'
                                            },
                                            {
                                                name: 'Hanging Leg Raises',
                                                instruction: 'Exhale as you lift your feet off the ground, raising your straight legs outward in front of you. Tilt your pelvis slightly back and engage your abdominals and hip flexors to assist with the movement. Raise your legs to a level that feels challenging but still enables you to keep good form. Strive to get them parallel to the ground (so that your hips are bent at 90 degrees), or a little higher if you can. Lower your legs back down slowly until they return to the starting position, inhaling during this portion of the exercise. Maintain your posterior pelvic tilt, even at the bottom of the movement.',
                                                Reps: '8',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Hanging_Leg_Raises.jpg'
                                            } 
                                        ] 
                                    ,
                                    
                                        cool_down:[
                                            {
                                                name: 'Cross Body Glute Pull',
                                                instruction: 'Start on your back with your legs extended and your feet flexed upward. Bend and lift your right knee and place your hands around your knee. Pull your right knee up toward your left shoulder. Hold for 20–30 seconds. Return your right leg to the starting position. Straighten your right leg and repeat with your left leg.',
                                                Reps: '30 seconds',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Cross_Body_Glute_Pull.jpg'
                                            },
                                            {
                                                name: 'Childs Pose',
                                                instruction: 'Begin on your yoga mat on all fours supported by your hands and knees. Make sure your hands are directly beneath your shoulders, knees directly beneath your hips, and your feet directly behind your knees. Sit back onto your feet, keeping your feet and knees hip’s width apart. The soles of the feet will be facing the sky in the pose. Gently lower your upper body forward, resting your forehead on the floor. Allow your arms to rest loosely by your sides, hands by your feet, with palms facing the sky. Inhale, lengthening your spine. Exhale, relaxing your shoulders.',
                                                Reps: '1 minute',
                                                Sets: '1',
                                                photoURL: process.env.PUBLIC_URL + '/img/Childs_Pose.jpg'
                                            }
                                        ]
                                }
                        },
                        {
                            session: 
                                {
                                    day: 4,
                                        warm_up: 
                                            [
                                                {
                                                    name: 'Elliptical Machine',
                                                    instruction: 'Step onto the machine facing the monitor. Be careful stepping onto the machine. The pedals may start to move as you do and it can be easy to lose your balance. Grab the handlebars as you step on to help you stay balanced. Begin pedaling to turn it on. Taking a few steps forward on the machine should power up the display. If not, look for a start button. Start pedaling at an even pace. Your arms should be swinging with the handles. When your left foot goes down, straightening your leg, the right handle should be pulled toward your body. Same for when your right leg goes down.',
                                                    Reps: '15 minutes',
                                                    Sets: '1',
                                                    photoURL: process.env.PUBLIC_URL + '/img/Elliptical_Machine.jpg'
                                                },
                                            ]
                                    ,
                                    
                                        main_workout: [
                                            {
                                                name: 'Bench Press',
                                                instruction: 'To do a bench press, lie on a flat bench with your eyes under the bar and your feet on the ground12. Grab the bar with a medium grip-width and your thumbs around the bar1. Unrack the bar by straightening your arms and keep it over your shoulders123. Lower the bar to your mid-chest or just below your clavicle, while keeping your elbows slightly tucked in and your chest high134. Pause on your chest without bouncing the bar4. Press the bar back up until your arms are straight, while flaring your elbows out and exhaling.',
                                                Weight: '45',
                                                Reps: '8',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Bench_Press.jpg'
                                            },
                                            {
                                                name: 'Shoulder Press',
                                                instruction: 'Place a barbell with the desired weight on a rack, making sure that it’s at shoulder height. Dip under the bar and place yourself underneath the barbell, picking it up as you slowly straighten yourself up. If this is done correctly, the barbell should then rest at the top of your shoulders. Grab the bar with your palms facing upwards — your elbows should point straight ahead. Make sure that your back is straight to secure proper form. Gently step back from the rack, keeping your back tall — then, simply press the barbell overhead. Once you can’t extend your arms any further, slowly return the barbell to your shoulders and repeat as many times as you need to. After the final repetition, step into the rack and leave the barbell at shoulder height once again. Finally, dip under the bar and step away from the rack without the bar.',
                                                weight: '45',
                                                Reps: '6',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Shoulder_Press.jpg'
                                            },
                                            {
                                                name: 'Incline Dumbbell Press',
                                                instruction: 'Sit on a bench, and lift a pair of dumbbells up to the starting position. Press the dumbbells up to straight arms, while exhaling. Inhale at the top, or while lowering the dumbbells with control back to your shoulders.',
                                                Weight: '30',
                                                Reps: '8',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Incline_Dumbell_Press.jpg'
                                            },
                                            {
                                                name: 'Lateral Raise',
                                                instruction: 'Stand tall, a dumbbell in each hand. Arms are at your sides, palms facing in. Position your feet roughly hip-distance apart. Check your posture—roll your shoulders back, engage your core, and look straight ahead. Raise your arms simultaneously just a couple inches out to each side and pause. This momentary pause should help ensure you disengage your trapezius muscle from the movement, targeting the deltoids as intended. Lift the dumbbells up and out to each side, keeping your arms almost completely straight, stopping when your elbows reach shoulder-height and your body is forming a "T" shape. Breathe in as you lift. Pause and hold for a second at the top of the movement. Lower the weights slowly (take about twice as long to lower the weights as you took to lift them), bringing your arms back to your sides. Breathe out as you lower the dumbbells.',
                                                Weight: '20',
                                                Reps: '8',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Lateral_Raise.jpg'
                                            },
                                            {
                                                name: 'Tricep Pushdowns',
                                                instruction: 'Start by bracing your abdominals. Tuck your elbows in at your sides and position your feet slightly apart. Inhale. Push down until your elbows are fully extended but not yet in the straight, locked position. Keep your elbows close to your body and bend your knees slightly on the pushdown. Resist bending forward. Try to keep your back as straight as possible as you push down. As you exhale, return to the starting point using a controlled movement. Try not to crash the weights.',
                                                Weight: '40',
                                                Reps: '8',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Tricep_PushDowns.jpg'
                                            },
                                            {
                                                name: 'Overhead Triceps Extension',
                                                instruction: 'Lift the dumbbell directly overhead. Ensure the head stays aligned over the chest, the core remains engaged, and the shoulders are relaxed. Extend both arms fully, then exhale and slowly lower the weight, bringing the weight behind the head by bending at the elbows. Be sure the chest stays aligned over the hips and the back does not arch. Inhale and reverse the movement once you reach a 90-degree bend at the elbow or slightly further, lifting the weight back to the starting position. The weight should not touch the back of the head when it is in its lowest position.',
                                                Weight: '25',
                                                Reps: '8',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Overhead_Tricep_Extention.jpg'
                                            } 
                                        ] 
                                    ,
                                    
                                        cool_down:[
                                            {
                                                name: 'Overhead Shoulder Stretch',
                                                instruction: 'Stand straight with your feet shoulders width apart. Reach your arms straight overhead and interlace your fingers with the palms facing upward. Raise your arms upward as you press your shoulders down. Hold for the rep count',
                                                Reps: '15 seconds',
                                                Sets: '4',
                                                photoURL: process.env.PUBLIC_URL + '/img/Overhead_Shoulder_Stretch.jpg'
                                            },
                                            {
                                                name:'Reach For The Sky',
                                                instruction: 'Start in the seated position. Place the left hand in your lap and stretch the right hand towards. the sky. Bend slightly to your left side, feeling a light stretch along your. right side. Count to 10 while breathing slowly. Switch to the left hand and repeat.',
                                                Reps: '15 seconds',
                                                Sets: '4',
                                                photoURL: process.env.PUBLIC_URL + '/img/Reach_For_The_Sky.jpg'
                                            }
                                        ]
                                }
                        },
                        {
                            session: 
                                {
                                    day: 5,
                                        warm_up: 
                                            [
                                                {
                                                    name:'Back Scratch',
                                                    instruction: 'Stand straight, placing the back of your hand on the side you want to stretch flat against your lower back. Throw one end of a towel over your shoulder. Grab it behind your back with your other hand. Pull down gently on the towel with your front arm. Let your back arm slide up as high as is comfortable. You’ll feel a stretch in your shoulder. Hold the stretch for a few seconds.',
                                                    Reps: '45 seconds',
                                                    Sets: '3',
                                                    photoURL: process.env.PUBLIC_URL + '/img/Back_Scratch.jpg'
                                                },
                                                {
                                                    name:'Reach For The Sky',
                                                    instruction: 'Start in the seated position. Place the left hand in your lap and stretch the right hand towards. the sky. Bend slightly to your left side, feeling a light stretch along your. right side. Count to 10 while breathing slowly. Switch to the left hand and repeat.',
                                                    Reps: '15 seconds',
                                                    Sets: '4',
                                                    photoURL: process.env.PUBLIC_URL + '/img/Reach_For_The_Sky.jpg'
                                                }
                                            ]
                                    ,
                                    
                                        main_workout: [
                                            {
                                                name: 'Dumbell Row',
                                                instruction: 'Grab a dumbbell in each hand. If it is your first time, grab a light weight that feels doable. Stagger your legs. Place one leg in front of the other, and then bow down. “You want to [imagine] a straight line from the top of your head all the way to your bottom almost as if you had a quarter and you place it on the top of your head it would gently roll all the way down your back and then from there, place the weights in front of your toes,” explains Jones. Slide your elbows along your side and squeeze your shoulder blades together as you lift the weights. Make sure that your shoulders are held down your back and your neck is long. Hold for a second and then gently extend your arms while placing the weight back to the start position. When returning to the starting position, the dumbbells will be in line with your feet.',
                                                Weight: '25',
                                                Reps: '12',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Dumbell_Row.jpg'
                                            },
                                            {
                                                name:'Pullups',
                                                instruction: 'Start by standing directly below a pull-up bar. Place your hands in an overhand grip (palms facing away from your body) with your hands slightly further than shoulder-width apart. If you can’t reach the bar from standing on the floor, you can place a box beneath you and stand on that. Once your hands are holding onto the bar, you’re in your starting position. Inhale, then exhale. Lift your feet up from the floor or box so that you’re hanging from the bar, and engage your core by pulling your belly button in toward your spine. Pull your shoulders back and down. Engaging the muscles in your arms and back, bend your elbows and raise your upper body up toward the bar until your chin is over the bar. You can imagine bringing your elbows toward your hips if that makes the movement easier. As you move, avoid swinging your legs around or shrugging your shoulders up. You want to make sure your shoulder blades remain back and down throughout the exercise. At the top of the movement, inhale. Then extend your elbows and lower your body back down to the starting position.',
                                                Reps: '8',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Pullups.jpg'
                                            },
                                            {
                                                name: 'Barbell Shrug',
                                                instruction: 'Use an alternated grip, one hand pronated (overhand) and one hand supinated (underhand), about shoulder-width apart. Place feet hip-width apart, brace the core and stand tall with the bar Now shrug up, visualizing touching your traps to your ears. Do NOT ‘roll’ the shoulders. Shrug straight up and down. Control the weight back down to the starting position and repeat.',
                                                Weight: '65',
                                                Reps: '8',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Barbell_Shrug.jpg'
                                            },
                                            {
                                                name: 'Face Pulls',
                                                instruction: 'Set up a cable pulley machine so the pulley system is positioned slightly above your head. Use the rope attachment that features two hand-holds for this exercise. Reach up and grasp the handles with both hands with your palms facing in. Step back until your arms are fully extended, then engage your core and lean back slightly, positioning your body at a roughly 20-degree angle. Pull the rope toward you just enough to start lifting the weight from the stack, then engage your shoulders, rolling them back to create good posture—you do not want your shoulders hunching or rolling forward. This is your starting position. Pull the handles of the attachment straight toward your forehead. Keep your palms facing in as your elbows flare outward toward the sides, engaging the rear delts. Reverse the movement and slowly extend your arms without allowing your shoulders or chest to roll forward as you extend. You want to maintain good posture throughout the exercise.',
                                                Weight: '30',
                                                Reps: '20',
                                                Sets: '2',
                                                photoURL: process.env.PUBLIC_URL + '/img/Face_Pulls.jpg'
                                            },
                                            {
                                                name: 'Barbell Curl',
                                                instruction: 'Stand erect with the shoulder blades down the back, chest up, and shoulder pulled back. The grip should be slightly wider than hip-width (can vary), with the palms facing away from the body. This is something so few lifters do, and as a result, they flare their elbows out and leave a rep (or two) in the tank. the chest collapsing, and the biceps lacking width and fullness. Squeezing the bar will activate all of the muscles in your forearms and upper arm, which will generally activate the target muscles more. Also, you’ll be tight and less prone to flaring your arms out or performing generally sloppy reps. Instead of dragging the bar up the body, think about keeping the elbows slightly in front of the body at all times. Imagine yourself curling from a side view — your elbows should travel slightly in front of your torso. Continue to curl up, focusing on not letting the shoulders come forwards. Your shoulders will slightly — slightly! — come into to play when your elbows drift forward. Remember to primarily curl with your biceps. The point of letting your elbows come forward a bit is to further isolate the biceps. Curl the bar until it’s about an inch or two from the front of your shoulders. This is just a suggestion. Really, curl until you feel your biceps contract the most. Find that spot, hold the weight there for a beat, and then find that spot again on your next rep. The goal here is about gaining a contraction.',
                                                Weight: '45',
                                                Reps: '8',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Barbell_Curl.jpg'
                                            },
                                            {
                                                name: 'Hammer Curls',
                                                instruction: 'Stand up, grab two dumbbells with a neutral grip and then hold them by your sides. Brace your core and then curl the weights to your shoulders by flexing your elbows. Squeeze your biceps at the top of the rep and then lower the dumbbells under control until your elbows are fully extended.',
                                                weight: '20',
                                                Reps: '6',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Hammer_Curls.jpg'
                                            }
                                        ] 
                                    ,
                                    
                                        cool_down:[
                                            {
                                                name: 'Arm Circles',
                                                instruction: 'Stand upright with a shoulder-wide stance. Extend your arms to your sides. They should be parallel to the floor. Push your shoulders back and down to get in position. Rotate your arms clockwise at your shoulders. Arm circles are usually performed until you feel a burn in your shoulders or if you can’t hold your arms parallel to the floor.',
                                                Reps: '1 minute',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Arm_Circles.jpg'
                                            }
                                        ]
                                }
                        },
                        'rest',
                        'rest'
                   ]
            }
        },
        two_three: {
            workout: {
                name: 'Upper/Lower/Full Body',
                
                schedule:
                    [
                        {
                            session: 
                                {
                                    day: 1,
                                        warm_up: 
                                            [
                                                {
                                                    name:'Back Scratch',
                                                    instruction: 'Stand straight, placing the back of your hand on the side you want to stretch flat against your lower back. Throw one end of a towel over your shoulder. Grab it behind your back with your other hand. Pull down gently on the towel with your front arm. Let your back arm slide up as high as is comfortable. You’ll feel a stretch in your shoulder. Hold the stretch for a few seconds.',
                                                    Reps: '45 seconds',
                                                    Sets: '3',
                                                    photoURL: process.env.PUBLIC_URL + '/img/Back_Scratch.jpg'
                                                },
                                                {
                                                    name:'Butterfly Stretch',
                                                    instruction:'Sit down on the floor or ground with your legs in front of you. Reach forward and grab your right foot. It is OK to bend your knee to help your hand and foot connect. Gently pull your right foot up towards your groin bending until it is at a comfortable spot and the sole of the foot is facing your left thigh. Bend your left knee to bring your left foot toward your groin so that its sole touches the sole of your right foot. Hold your feet with your hands and rest your elbows on your knees. While keeping your back straight (no slouching), allow your knees to fall towards the ground. You can apply gentle pressure on the inner thigh by pressing gently on the knees with the elbows. You should feel gentle pulling and tension in the groin.',
                                                    Reps: '30 seconds',
                                                    Sets: '3',
                                                    photoURL: process.env.PUBLIC_URL + '/img/Butterfly_Stretch.jpg'
                                                }
                                            ]
                                    ,
                                    
                                        main_workout: [
                                            {
                                                name: 'Front Squat',
                                                instruction: 'Grip the bar slightly wider than shoulder-width. Inhale and brace your core slightly, and unrack the bar. Take two steps back, and adjust your foot position. Squat as deep as possible with good technique. With control, stop and reverse the movement, extending your hips and legs again. Exhale on the way up or exchange air in the top position. Breathe in and repeat for reps.',
                                                weight: '65',
                                                Reps: '5',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Front_Squat.jpg'
                                            },
                                            {
                                                name:'Romanian Deadlift',
                                                instruction: 'Hold your weight (dumbbells or a barbell) in front of your thighs, and lower to the ground by pushing your hips back. As you lower the weight, keep your shoulder blades drawn towards each other and your chest open and wide. When the weight is below your knees, thrust your hips forward and return to the starting position.',
                                                Weight: '100',
                                                Reps: '8',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Romanian_Deadlift.jpg'
                                            },
                                            {
                                                name: 'Bench Press',
                                                instruction: 'To do a bench press, lie on a flat bench with your eyes under the bar and your feet on the ground12. Grab the bar with a medium grip-width and your thumbs around the bar1. Unrack the bar by straightening your arms and keep it over your shoulders123. Lower the bar to your mid-chest or just below your clavicle, while keeping your elbows slightly tucked in and your chest high134. Pause on your chest without bouncing the bar4. Press the bar back up until your arms are straight, while flaring your elbows out and exhaling.',
                                                Weight: '45',
                                                Reps: '8',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Bench_Press.jpg'
                                            },
                                            {
                                                name:'Pullups',
                                                instruction: 'Start by standing directly below a pull-up bar. Place your hands in an overhand grip (palms facing away from your body) with your hands slightly further than shoulder-width apart. If you can’t reach the bar from standing on the floor, you can place a box beneath you and stand on that. Once your hands are holding onto the bar, you’re in your starting position. Inhale, then exhale. Lift your feet up from the floor or box so that you’re hanging from the bar, and engage your core by pulling your belly button in toward your spine. Pull your shoulders back and down. Engaging the muscles in your arms and back, bend your elbows and raise your upper body up toward the bar until your chin is over the bar. You can imagine bringing your elbows toward your hips if that makes the movement easier. As you move, avoid swinging your legs around or shrugging your shoulders up. You want to make sure your shoulder blades remain back and down throughout the exercise. At the top of the movement, inhale. Then extend your elbows and lower your body back down to the starting position.',
                                                Reps: '8',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Pullups.jpg'
                                            },
                                            {
                                                name: 'Barbell Row',
                                                instruction: 'Stand with your mid-foot under the bar (medium stance) Bend over and grab the bar (palms down, medium-grip). Unlock your knees while keeping your hips high. Lift your chest and straighten your back. Pull the bar against your lower chest',
                                                Weight: '65',
                                                Reps: '6',
                                                Sets: '4',
                                                photoURL: process.env.PUBLIC_URL + '/img/Barbell_Row.jpg'
                                            },
                                            {
                                                name: 'Barbell Curl',
                                                instruction: 'Stand erect with the shoulder blades down the back, chest up, and shoulder pulled back. The grip should be slightly wider than hip-width (can vary), with the palms facing away from the body. This is something so few lifters do, and as a result, they flare their elbows out and leave a rep (or two) in the tank. the chest collapsing, and the biceps lacking width and fullness. Squeezing the bar will activate all of the muscles in your forearms and upper arm, which will generally activate the target muscles more. Also, you’ll be tight and less prone to flaring your arms out or performing generally sloppy reps. Instead of dragging the bar up the body, think about keeping the elbows slightly in front of the body at all times. Imagine yourself curling from a side view — your elbows should travel slightly in front of your torso. Continue to curl up, focusing on not letting the shoulders come forwards. Your shoulders will slightly — slightly! — come into to play when your elbows drift forward. Remember to primarily curl with your biceps. The point of letting your elbows come forward a bit is to further isolate the biceps. Curl the bar until it’s about an inch or two from the front of your shoulders. This is just a suggestion. Really, curl until you feel your biceps contract the most. Find that spot, hold the weight there for a beat, and then find that spot again on your next rep. The goal here is about gaining a contraction.',
                                                Weight: '45',
                                                Reps: '8',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Barbell_Curl.jpg'
                                            },
                                            {
                                                name: 'Tricep Pushdowns',
                                                instruction: 'Start by bracing your abdominals. Tuck your elbows in at your sides and position your feet slightly apart. Inhale. Push down until your elbows are fully extended but not yet in the straight, locked position. Keep your elbows close to your body and bend your knees slightly on the pushdown. Resist bending forward. Try to keep your back as straight as possible as you push down. As you exhale, return to the starting point using a controlled movement. Try not to crash the weights.',
                                                Weight: '40',
                                                Reps: '8',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Tricep_PushDowns.jpg'
                                            } 
                                        ] 
                                    ,
                                    
                                        cool_down:[
                                            {
                                                name: 'Cross Body Glute Pull',
                                                instruction: 'Start on your back with your legs extended and your feet flexed upward. Bend and lift your right knee and place your hands around your knee. Pull your right knee up toward your left shoulder. Hold for 20–30 seconds. Return your right leg to the starting position. Straighten your right leg and repeat with your left leg.',
                                                Reps: '30 seconds',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Cross_Body_Glute_Pull.jpg'
                                            },
                                            {
                                                name: 'Childs Pose',
                                                instruction: 'Begin on your yoga mat on all fours supported by your hands and knees. Make sure your hands are directly beneath your shoulders, knees directly beneath your hips, and your feet directly behind your knees. Sit back onto your feet, keeping your feet and knees hip’s width apart. The soles of the feet will be facing the sky in the pose. Gently lower your upper body forward, resting your forehead on the floor. Allow your arms to rest loosely by your sides, hands by your feet, with palms facing the sky. Inhale, lengthening your spine. Exhale, relaxing your shoulders.',
                                                Reps: '1 minute',
                                                Sets: '1',
                                                photoURL: process.env.PUBLIC_URL + '/img/Childs_Pose.jpg'
                                            }
                                        ]
                                }
                        },
                        'rest',
                        {
                            session: 
                                {
                                    day: 3,
                                        warm_up: 
                                            [
                                                {
                                                    name: 'Elliptical Machine',
                                                    instruction: 'Step onto the machine facing the monitor. Be careful stepping onto the machine. The pedals may start to move as you do and it can be easy to lose your balance. Grab the handlebars as you step on to help you stay balanced. Begin pedaling to turn it on. Taking a few steps forward on the machine should power up the display. If not, look for a start button. Start pedaling at an even pace. Your arms should be swinging with the handles. When your left foot goes down, straightening your leg, the right handle should be pulled toward your body. Same for when your right leg goes down.',
                                                    Reps: '15 minutes',
                                                    Sets: '1',
                                                    photoURL: process.env.PUBLIC_URL + '/img/Elliptical_Machine.jpg'
                                                },
                                            ]
                                    ,
                                    
                                        main_workout: [
                                            {
                                                name:'Deadlift',
                                                instruction: 'Position the feet shoulder-width apart (or not much more) with toes under the bar. The feet point straight ahead, or they can angle out slightly. Heels should stay flat on the surface. When you lift, the bar will travel close to the shins and may even graze them. Maintain a neutral spine position. Stabilize the abdominal muscles by bracing them. Squat down, bending at the knees. The form for descending to the bar is similar (but not identical) to the squat, with your back straight or arched slightly and not rounded at the shoulders or spine. Grasp the bar just outside the line of the knees with an overhand or mixed grip. Lift the bar by pushing upward with the legs from the knees. Breathe out on exertion. Be careful not to raise the hips first so the trunk moves forward and the back becomes rounded. Don’t try to haul the bar up with your arms. The arms stay extended under tension while gripping the bar as the legs push up. Think of the legs and shoulders moving upward in unison with the hips, the balancing point. The bar should almost graze the shins and rest around thigh level as you reach full height. Pull the shoulders back as much as possible without bending backward. Lower the bar to the floor with a reverse motion ensuring a straight back.',
                                                weight: '120',
                                                Reps: '6',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Deadlift.jpg'
                                            },
                                            {
                                                name: 'Leg Press',
                                                instruction: 'Sit on the leg press and slide your butt down and into the bottom of the seat. Extend your legs and press the weight up. Bend your knees and descend as far as your flexibility and knee health allows. Without bouncing, drive the weight back up, stopping just short of full knee extension.',
                                                Weight: '50',
                                                Reps: '6',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Leg_Press.jpg'
                                            },
                                            {
                                                name: 'Bench Press',
                                                instruction: 'To do a bench press, lie on a flat bench with your eyes under the bar and your feet on the ground12. Grab the bar with a medium grip-width and your thumbs around the bar1. Unrack the bar by straightening your arms and keep it over your shoulders123. Lower the bar to your mid-chest or just below your clavicle, while keeping your elbows slightly tucked in and your chest high134. Pause on your chest without bouncing the bar4. Press the bar back up until your arms are straight, while flaring your elbows out and exhaling.',
                                                Weight: '45',
                                                Reps: '8',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Bench_Press.jpg'
                                            },
                                            {
                                                name: 'Seated Cable Row',
                                                instruction: 'Pull the handle and weight back toward the lower abdomen while trying not to use the momentum of the row too much by moving the torso backward with the arms. Target the middle to upper back by keeping your back straight and squeezing your shoulder blades together as you row, keeping your chest out. Return the handle forward under tension to full stretch, remembering to keep that back straight even though flexed at the hips.',
                                                Weight: '60',
                                                Reps: '10',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Seated_Cable_Row.jpg'
                                            },
                                            {
                                                name: 'Shoulder Press',
                                                instruction: 'Place a barbell with the desired weight on a rack, making sure that it’s at shoulder height. Dip under the bar and place yourself underneath the barbell, picking it up as you slowly straighten yourself up. If this is done correctly, the barbell should then rest at the top of your shoulders. Grab the bar with your palms facing upwards — your elbows should point straight ahead. Make sure that your back is straight to secure proper form. Gently step back from the rack, keeping your back tall — then, simply press the barbell overhead. Once you can’t extend your arms any further, slowly return the barbell to your shoulders and repeat as many times as you need to. After the final repetition, step into the rack and leave the barbell at shoulder height once again. Finally, dip under the bar and step away from the rack without the bar.',
                                                weight: '45',
                                                Reps: '6',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Shoulder_Press.jpg'
                                            },
                                            {
                                                name: 'Hammer Curls',
                                                instruction: 'Stand up, grab two dumbbells with a neutral grip and then hold them by your sides. Brace your core and then curl the weights to your shoulders by flexing your elbows. Squeeze your biceps at the top of the rep and then lower the dumbbells under control until your elbows are fully extended.',
                                                weight: '20',
                                                Reps: '6',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Hammer_Curls.jpg'
                                            },
                                            {
                                                name: 'Overhead Triceps Extension',
                                                instruction: 'Lift the dumbbell directly overhead. Ensure the head stays aligned over the chest, the core remains engaged, and the shoulders are relaxed. Extend both arms fully, then exhale and slowly lower the weight, bringing the weight behind the head by bending at the elbows. Be sure the chest stays aligned over the hips and the back does not arch. Inhale and reverse the movement once you reach a 90-degree bend at the elbow or slightly further, lifting the weight back to the starting position. The weight should not touch the back of the head when it is in its lowest position.',
                                                Weight: '25',
                                                Reps: '8',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Overhead_Tricep_Extention.jpg'
                                            } 
                                        ] 
                                    ,
                                    
                                        cool_down:[
                                            {
                                                name:'Reach For The Sky',
                                                instruction: 'Start in the seated position. Place the left hand in your lap and stretch the right hand towards. the sky. Bend slightly to your left side, feeling a light stretch along your. right side. Count to 10 while breathing slowly. Switch to the left hand and repeat.',
                                                Reps: '15 seconds',
                                                Sets: '4',
                                                photoURL: process.env.PUBLIC_URL + '/img/Reach_For_The_Sky.jpg'
                                            },
                                            {
                                                name:'Butterfly Stretch',
                                                instruction:'Sit down on the floor or ground with your legs in front of you. Reach forward and grab your right foot. It is OK to bend your knee to help your hand and foot connect. Gently pull your right foot up towards your groin bending until it is at a comfortable spot and the sole of the foot is facing your left thigh. Bend your left knee to bring your left foot toward your groin so that its sole touches the sole of your right foot. Hold your feet with your hands and rest your elbows on your knees. While keeping your back straight (no slouching), allow your knees to fall towards the ground. You can apply gentle pressure on the inner thigh by pressing gently on the knees with the elbows. You should feel gentle pulling and tension in the groin.',
                                                Reps: '30 seconds',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Butterfly_Stretch.jpg'
                                            }
                                        ]
                                },
                                
                        },
                        'rest',
                        {
                            session: 
                                {
                                    day: 5,
                                        warm_up: 
                                            [
                                                {
                                                    name: 'Seated Toe Touches',
                                                    instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                                    Reps: '30 seconds',
                                                    Sets: '3',
                                                    photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                                                },
                                                {
                                                    name:'Butterfly Stretch',
                                                    instruction:'Sit down on the floor or ground with your legs in front of you. Reach forward and grab your right foot. It is OK to bend your knee to help your hand and foot connect. Gently pull your right foot up towards your groin bending until it is at a comfortable spot and the sole of the foot is facing your left thigh. Bend your left knee to bring your left foot toward your groin so that its sole touches the sole of your right foot. Hold your feet with your hands and rest your elbows on your knees. While keeping your back straight (no slouching), allow your knees to fall towards the ground. You can apply gentle pressure on the inner thigh by pressing gently on the knees with the elbows. You should feel gentle pulling and tension in the groin.',
                                                    Reps: '30 seconds',
                                                    Sets: '3',
                                                    photoURL: process.env.PUBLIC_URL + '/img/Butterfly_Stretch.jpg'
                                                }
                                            ]
                                    ,
                                    
                                        main_workout: [
                                            {
                                                name: 'Squats',
                                                instruction: 'Stand with feet a little wider than hip width, toes facing front. Drive your hips back—bending at the knees and ankles and pressing your knees slightly open. Sit into a squat position while still keeping your heels and toes on the ground, chest up and shoulders back. Strive to eventually reach parallel, meaning knees are bent to a 90-degree angle. Press into your heels and straighten legs to return to a standing upright position.',
                                                Reps: '20',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Squats.jpg'
                                            },
                                            {
                                                name:'Romanian Deadlift',
                                                instruction: 'Hold your weight (dumbbells or a barbell) in front of your thighs, and lower to the ground by pushing your hips back. As you lower the weight, keep your shoulder blades drawn towards each other and your chest open and wide. When the weight is below your knees, thrust your hips forward and return to the starting position.',
                                                Weight: '100',
                                                Reps: '8',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Romanian_Deadlift.jpg'
                                            },
                                            {
                                                name: 'Leg Press',
                                                instruction: 'Sit on the leg press and slide your butt down and into the bottom of the seat. Extend your legs and press the weight up. Bend your knees and descend as far as your flexibility and knee health allows. Without bouncing, drive the weight back up, stopping just short of full knee extension.',
                                                Weight: '50',
                                                Reps: '6',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Leg_Press.jpg'
                                            },
                                            {
                                                name: 'Leg Curls',
                                                instruction: 'Exhale and flex your knees, pulling your ankles as close to your buttocks as possible. Keep your hips firmly on the bench. Hold briefly. Inhale as you return your feet to the starting position in a slow and controlled movement.',
                                                Weight: '30',
                                                Reps: '6',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Leg_Curls.jpg'
                                            },
                                            {
                                                name: 'Calf Raises',
                                                instruction: 'Place your feet on the ground or elevated surface, about hip-distance apart, with the toes and knees straight ahead. Your foot should be in line with your ankle and your bodyweight be pressing evenly on the ball of your foot. Extend the ankle and rise up on the toes, flexing your calf muscle. Lower down with control and return to the initial position.',
                                                Weight: '30',
                                                Reps: '10',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Calf_Raises.jpg'
                                            },
                                            {
                                                name: 'Hanging Leg Raises',
                                                instruction: 'Exhale as you lift your feet off the ground, raising your straight legs outward in front of you. Tilt your pelvis slightly back and engage your abdominals and hip flexors to assist with the movement. Raise your legs to a level that feels challenging but still enables you to keep good form. Strive to get them parallel to the ground (so that your hips are bent at 90 degrees), or a little higher if you can. Lower your legs back down slowly until they return to the starting position, inhaling during this portion of the exercise. Maintain your posterior pelvic tilt, even at the bottom of the movement.',
                                                Reps: '8',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Hanging_Leg_Raises.jpg'
                                            } 
                                        ] 
                                    ,
                                    
                                        cool_down:[
                                            {
                                                name: 'Cross Body Glute Pull',
                                                instruction: 'Start on your back with your legs extended and your feet flexed upward. Bend and lift your right knee and place your hands around your knee. Pull your right knee up toward your left shoulder. Hold for 20–30 seconds. Return your right leg to the starting position. Straighten your right leg and repeat with your left leg.',
                                                Reps: '30 seconds',
                                                Sets: '3',
                                                photoURL: process.env.PUBLIC_URL + '/img/Cross_Body_Glute_Pull.jpg'
                                            },
                                            {
                                                name: 'Childs Pose',
                                                instruction: 'Begin on your yoga mat on all fours supported by your hands and knees. Make sure your hands are directly beneath your shoulders, knees directly beneath your hips, and your feet directly behind your knees. Sit back onto your feet, keeping your feet and knees hip’s width apart. The soles of the feet will be facing the sky in the pose. Gently lower your upper body forward, resting your forehead on the floor. Allow your arms to rest loosely by your sides, hands by your feet, with palms facing the sky. Inhale, lengthening your spine. Exhale, relaxing your shoulders.',
                                                Reps: '1 minute',
                                                Sets: '1',
                                                photoURL: process.env.PUBLIC_URL + '/img/Childs_Pose.jpg'
                                            }
                                        ]
                                }
                        },
                        'rest',
                        'rest',
                ]
            }   
        }   
    }

}

export default beginner