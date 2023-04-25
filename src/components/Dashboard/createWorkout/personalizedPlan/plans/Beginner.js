 

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
                                            Reps: '60',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Jumping_Jacks.jpg'
                                        }
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Stationary Bike',
                                        instruction: 'If you stand next to an upright bike, the seat should be level with the top of your hips. You should have a slight bend in the knees at the bottom of the pedal stroke. Adjust the seat, handles, and pedals to match your height and reach. Learn how to adjust the resistance during the workout as you will be changing it during different intervals.',
                                        Reps: '600',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Stationary_Bike.jpg'
                                    },
                                    {
                                        name: 'Rowing Machine',
                                        instruction: 'To use a rowing machine, you need to set it up correctly, adjust the footplate and the performance monitor, and sit tall on the seat with your arms straight and your shins vertical. Then, you need to perform two phases of the stroke: the drive and the recovery. The drive is when you push with your legs, lean back slightly, and pull the handle to your chest. The recovery is when you extend your arms, lean forward slightly, and slide back to the start position',
                                        Reps: '300',
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
                                        Reps: '300',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Treadmill.jpg'
                                    },

                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Seated Toe Touches',
                                        instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                        Reps: '30',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                                    },
                                    {
                                        name: 'Quad Stretch',
                                        instruction: 'Stand on one leg. If you need support, hold onto something solid, such as a wall or chair, for support. Bend your right knee and bring your heel toward your buttock. Reach for your ankle with your opposite (left) hand. Stand up straight and pull in your abdominal muscles. Try to keep your knees next to each other. Relax your shoulders. As you hold your leg in the bent position you will feel a slight pull along the front of your thigh and hip.Breathe deeply and hold the stretch for 20-30 seconds, release and repeat on the left leg, this time holding your ankle with your right hand. Stretch each leg one to five times in a stretching session.',
                                        Reps: '30',
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
                                            Reps: '60',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Jumping_Jacks.jpg'
                                        }
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Stair Master',
                                        instruction: ' After using the assists and mounting the machine, make sure to use the handles on the side to rest your arms on and keep balance while performing the workout. Press the big green button or select your desired workout and start stepping. It will start out very slow, but you can use the up and down buttons mentioned before to set your desired intensity. A very important part of using the Stairmaster, as a matter of fact doing any sort of exercise, is to maintain your form. This will make sure that you avoid any sort of injuries and that you get the most benefit out of your workout',
                                        Reps: '480',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Stair_Master.jpg'
                                    },
                                    {
                                        name: 'Ellipical Machine',
                                        instruction: 'Step onto the machine facing the monitor. Be careful stepping onto the machine. The pedals may start to move as you do and it can be easy to lose your balance. Grab the handlebars as you step on to help you stay balanced. Begin pedaling to turn it on. Taking a few steps forward on the machine should power up the display. If not, look for a start button. Start pedaling at an even pace. Your arms should be swinging with the handles. When your left foot goes down, straightening your leg, the right handle should be pulled toward your body. Same for when your right leg goes down.',
                                        Reps: '900',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Elliptical_Machine.jpg'
                                    },
                                    {
                                        name: 'High Knees',
                                        instruction: 'Begin in the standing position. Raise and lower one knee at a time as if running in place. Bring the knees to the same height as the hips and keep your thighs parallel to the ground. Alternate legs and go as fast as you can',
                                        Reps: '30',
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
                                        Reps: '30',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                                    },
                                    {
                                        name: 'Quad Stretch',
                                        instruction: 'Stand on one leg. If you need support, hold onto something solid, such as a wall or chair, for support. Bend your right knee and bring your heel toward your buttock. Reach for your ankle with your opposite (left) hand. Stand up straight and pull in your abdominal muscles. Try to keep your knees next to each other. Relax your shoulders. As you hold your leg in the bent position you will feel a slight pull along the front of your thigh and hip.Breathe deeply and hold the stretch for 20-30 seconds, release and repeat on the left leg, this time holding your ankle with your right hand. Stretch each leg one to five times in a stretching session.',
                                        Reps: '30',
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
                                            Reps: '60',
                                            Sets: '3',
                                            photoURL: process.env.PUBLIC_URL + '/img/Jumping_Jacks.jpg'
                                        }
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Mountain Climbers',
                                        instruction: 'Start in a plank with your shoulders directly over your wrists. Keep your back flat and your hips down, maintaining a neutral spine. Engage your core, and lift your right leg, drawing your knee in toward your chest. Return the right foot to the starting position as you simultaneously drive your left knee toward your chest. Return to the starting position. Continue alternating sides. To increase the intensity, pick up the pace until it feels like you are "running" in place in a plank position.',
                                        Reps: '60',
                                        Sets: '2',
                                        photoURL: process.env.PUBLIC_URL + '/img/Mountain_Climbers.jpg'
                                    },

                                    {
                                        name: 'Rowing Machine',
                                        instruction: 'To use a rowing machine, you need to set it up correctly, adjust the footplate and the performance monitor, and sit tall on the seat with your arms straight and your shins vertical. Then, you need to perform two phases of the stroke: the drive and the recovery. The drive is when you push with your legs, lean back slightly, and pull the handle to your chest. The recovery is when you extend your arms, lean forward slightly, and slide back to the start position',
                                        Reps: '300',
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
                                        Reps: '300',
                                        Sets: '1',
                                        photoURL: process.env.PUBLIC_URL + '/img/Treadmill.jpg'
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Seated Toe Touches',
                                        instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                        Reps: '30',
                                        Sets: '3',
                                        photoURL: process.env.PUBLIC_URL + '/img/Seated_Toe_Touches.jpg'
                                    },
                                    {
                                        name: 'Quad Stretch',
                                        instruction: 'Stand on one leg. If you need support, hold onto something solid, such as a wall or chair, for support. Bend your right knee and bring your heel toward your buttock. Reach for your ankle with your opposite (left) hand. Stand up straight and pull in your abdominal muscles. Try to keep your knees next to each other. Relax your shoulders. As you hold your leg in the bent position you will feel a slight pull along the front of your thigh and hip.Breathe deeply and hold the stretch for 20-30 seconds, release and repeat on the left leg, this time holding your ankle with your right hand. Stretch each leg one to five times in a stretching session.',
                                        Reps: '30',
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
                                            Reps: '60',
                                            Sets: '3',
                                            photoURL: '...'
                                        }
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Stationary Bike',
                                        instruction: 'If you stand next to an upright bike, the seat should be level with the top of your hips. You should have a slight bend in the knees at the bottom of the pedal stroke. Adjust the seat, handles, and pedals to match your height and reach. Learn how to adjust the resistance during the workout as you will be changing it during different intervals.',
                                        Reps: '600',
                                        Sets: '1',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Rowing Machine',
                                        instruction: 'To use a rowing machine, you need to set it up correctly, adjust the footplate and the performance monitor, and sit tall on the seat with your arms straight and your shins vertical. Then, you need to perform two phases of the stroke: the drive and the recovery. The drive is when you push with your legs, lean back slightly, and pull the handle to your chest. The recovery is when you extend your arms, lean forward slightly, and slide back to the start position',
                                        Reps: '300',
                                        Sets: '1',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Russian Twist',
                                        instruction: 'Sit on the floor with a light dumbbell, weight plate, or kettlebell by your side.  Grab the weight with both hands and hold it in front of your chest with your elbows bent. Lean your torso slightly back and engage your abs to stay in position. Cross your feet, bend your knees slightly, and lift your feet a few inches off the floor. Doing so will allow your body to form a V-shape. With your feet steady, take a breath, and twist your torso to the right. Initiate the movement from your midsection and allow your arms to follow naturally. Don’t twist with your arms first because doing so will prevent optimal core engagement. Once you’ve twisted to the right, exhale. As you bring your torso to the left, take another breath and immediately twist to the left. Keep alternating between left and right, breathing as you do.',
                                        Reps: '20',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Treadmill',
                                        instruction: 'Jog on the treadmill, swinging your arms oppisite to the foot that you are moving towards the front',
                                        Reps: '300',
                                        Sets: '1',
                                        photoURL: ''
                                    },

                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Seated Toe Touches',
                                        instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                        Reps: '30',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Quad Stretch',
                                        instruction: 'Stand on one leg. If you need support, hold onto something solid, such as a wall or chair, for support. Bend your right knee and bring your heel toward your buttock. Reach for your ankle with your opposite (left) hand. Stand up straight and pull in your abdominal muscles. Try to keep your knees next to each other. Relax your shoulders. As you hold your leg in the bent position you will feel a slight pull along the front of your thigh and hip.Breathe deeply and hold the stretch for 20-30 seconds, release and repeat on the left leg, this time holding your ankle with your right hand. Stretch each leg one to five times in a stretching session.',
                                        Reps: '30',
                                        Sets: '4',
                                        photoURL: ''
                                    }

                                ]
                            }
                        },

                        , {
                            session:
                            {
                                day: 2,
                                warm_up:
                                    [
                                        {
                                            name: 'Jumping Jacks',
                                            instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                            Reps: '60',
                                            Sets: '3',
                                            photoURL: '...'
                                        }
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Stair Master',
                                        instruction: ' After using the assists and mounting the machine, make sure to use the handles on the side to rest your arms on and keep balance while performing the workout. Press the big green button or select your desired workout and start stepping. It will start out very slow, but you can use the up and down buttons mentioned before to set your desired intensity. A very important part of using the Stairmaster, as a matter of fact doing any sort of exercise, is to maintain your form. This will make sure that you avoid any sort of injuries and that you get the most benefit out of your workout',
                                        Reps: '480',
                                        Sets: '1',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Ellipical Machine',
                                        instruction: 'Step onto the machine facing the monitor. Be careful stepping onto the machine. The pedals may start to move as you do and it can be easy to lose your balance. Grab the handlebars as you step on to help you stay balanced. Begin pedaling to turn it on. Taking a few steps forward on the machine should power up the display. If not, look for a start button. Start pedaling at an even pace. Your arms should be swinging with the handles. When your left foot goes down, straightening your leg, the right handle should be pulled toward your body. Same for when your right leg goes down.',
                                        Reps: '900',
                                        Sets: '1',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'High Knees',
                                        instruction: 'Begin in the standing position. Raise and lower one knee at a time as if running in place. Bring the knees to the same height as the hips and keep your thighs parallel to the ground. Alternate legs and go as fast as you can',
                                        Reps: '30',
                                        Sets: '2',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Situps',
                                        instruction: 'Lie down on your back. Bend your legs and place feet firmly on the ground to stabilize your lower body. Cross your hands to opposite shoulders or place them behind your ears, without pulling on your neck. Curl your upper body all the way up toward your knees. Exhale as you lift. Slowly, lower yourself down, returning to your starting point. Inhale as you lower.',
                                        Reps: '20',
                                        Sets: '2',
                                        photoURL: ''
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Seated Toe Touches',
                                        instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                        Reps: '30',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Quad Stretch',
                                        instruction: 'Stand on one leg. If you need support, hold onto something solid, such as a wall or chair, for support. Bend your right knee and bring your heel toward your buttock. Reach for your ankle with your opposite (left) hand. Stand up straight and pull in your abdominal muscles. Try to keep your knees next to each other. Relax your shoulders. As you hold your leg in the bent position you will feel a slight pull along the front of your thigh and hip.Breathe deeply and hold the stretch for 20-30 seconds, release and repeat on the left leg, this time holding your ankle with your right hand. Stretch each leg one to five times in a stretching session.',
                                        Reps: '30',
                                        Sets: '4',
                                        photoURL: ''
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
                                            Reps: '60',
                                            Sets: '3',
                                            photoURL: '...'
                                        }
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Mountain Climbers',
                                        instruction: 'Start in a plank with your shoulders directly over your wrists. Keep your back flat and your hips down, maintaining a neutral spine. Engage your core, and lift your right leg, drawing your knee in toward your chest. Return the right foot to the starting position as you simultaneously drive your left knee toward your chest. Return to the starting position. Continue alternating sides. To increase the intensity, pick up the pace until it feels like you are "running" in place in a plank position.',
                                        Reps: '60',
                                        Sets: '2',
                                        photoURL: ''
                                    },

                                    {
                                        name: 'Rowing Machine',
                                        instruction: 'To use a rowing machine, you need to set it up correctly, adjust the footplate and the performance monitor, and sit tall on the seat with your arms straight and your shins vertical. Then, you need to perform two phases of the stroke: the drive and the recovery. The drive is when you push with your legs, lean back slightly, and pull the handle to your chest. The recovery is when you extend your arms, lean forward slightly, and slide back to the start position',
                                        Reps: '300',
                                        Sets: '1',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Stationary Bike',
                                        instruction: 'If you stand next to an upright bike, the seat should be level with the top of your hips. You should have a slight bend in the knees at the bottom of the pedal stroke. Adjust the seat, handles, and pedals to match your height and reach. Learn how to adjust the resistance during the workout as you will be changing it during different intervals.',
                                        Reps: '600',
                                        Sets: '1',
                                        photoURL: ''
                                    },


                                    {
                                        name: 'Treadmill',
                                        instruction: 'Jog on the treadmill, swinging your arms oppisite to the foot that you are moving towards the front',
                                        Reps: '300',
                                        Sets: '1',
                                        photoURL: ''
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Seated Toe Touches',
                                        instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                        Reps: '30',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Quad Stretch',
                                        instruction: 'Stand on one leg. If you need support, hold onto something solid, such as a wall or chair, for support. Bend your right knee and bring your heel toward your buttock. Reach for your ankle with your opposite (left) hand. Stand up straight and pull in your abdominal muscles. Try to keep your knees next to each other. Relax your shoulders. As you hold your leg in the bent position you will feel a slight pull along the front of your thigh and hip.Breathe deeply and hold the stretch for 20-30 seconds, release and repeat on the left leg, this time holding your ankle with your right hand. Stretch each leg one to five times in a stretching session.',
                                        Reps: '30',
                                        Sets: '4',
                                        photoURL: ''
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
                                            Reps: '60',
                                            Sets: '3',
                                            photoURL: '...'
                                        }
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Situps',
                                        instruction: 'Lie down on your back. Bend your legs and place feet firmly on the ground to stabilize your lower body. Cross your hands to opposite shoulders or place them behind your ears, without pulling on your neck. Curl your upper body all the way up toward your knees. Exhale as you lift. Slowly, lower yourself down, returning to your starting point. Inhale as you lower.',
                                        Reps: '20',
                                        Sets: '2',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Ellipical Machine',
                                        instruction: 'Step onto the machine facing the monitor. Be careful stepping onto the machine. The pedals may start to move as you do and it can be easy to lose your balance. Grab the handlebars as you step on to help you stay balanced. Begin pedaling to turn it on. Taking a few steps forward on the machine should power up the display. If not, look for a start button. Start pedaling at an even pace. Your arms should be swinging with the handles. When your left foot goes down, straightening your leg, the right handle should be pulled toward your body. Same for when your right leg goes down.',
                                        Reps: '900',
                                        Sets: '1',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'High Knees',
                                        instruction: 'Begin in the standing position. Raise and lower one knee at a time as if running in place. Bring the knees to the same height as the hips and keep your thighs parallel to the ground. Alternate legs and go as fast as you can',
                                        Reps: '30',
                                        Sets: '2',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Treadmill',
                                        instruction: 'Jog on the treadmill, swinging your arms oppisite to the foot that you are moving towards the front',
                                        Reps: '300',
                                        Sets: '1',
                                        photoURL: ''
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Seated Toe Touches',
                                        instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                        Reps: '30',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Quad Stretch',
                                        instruction: 'Stand on one leg. If you need support, hold onto something solid, such as a wall or chair, for support. Bend your right knee and bring your heel toward your buttock. Reach for your ankle with your opposite (left) hand. Stand up straight and pull in your abdominal muscles. Try to keep your knees next to each other. Relax your shoulders. As you hold your leg in the bent position you will feel a slight pull along the front of your thigh and hip.Breathe deeply and hold the stretch for 20-30 seconds, release and repeat on the left leg, this time holding your ankle with your right hand. Stretch each leg one to five times in a stretching session.',
                                        Reps: '30',
                                        Sets: '4',
                                        photoURL: ''
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
                                            Reps: '60',
                                            Sets: '3',
                                            photoURL: '...'
                                        }
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Russian Twist',
                                        instruction: 'Sit on the floor with a light dumbbell, weight plate, or kettlebell by your side.  Grab the weight with both hands and hold it in front of your chest with your elbows bent. Lean your torso slightly back and engage your abs to stay in position. Cross your feet, bend your knees slightly, and lift your feet a few inches off the floor. Doing so will allow your body to form a V-shape. With your feet steady, take a breath, and twist your torso to the right. Initiate the movement from your midsection and allow your arms to follow naturally. Don’t twist with your arms first because doing so will prevent optimal core engagement. Once you’ve twisted to the right, exhale. As you bring your torso to the left, take another breath and immediately twist to the left. Keep alternating between left and right, breathing as you do.',
                                        Reps: '20',
                                        Sets: '3',
                                        photoURL: ''
                                    },

                                    {
                                        name: 'Rowing Machine',
                                        instruction: 'To use a rowing machine, you need to set it up correctly, adjust the footplate and the performance monitor, and sit tall on the seat with your arms straight and your shins vertical. Then, you need to perform two phases of the stroke: the drive and the recovery. The drive is when you push with your legs, lean back slightly, and pull the handle to your chest. The recovery is when you extend your arms, lean forward slightly, and slide back to the start position',
                                        Reps: '300',
                                        Sets: '1',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Ellipical Machine',
                                        instruction: 'Step onto the machine facing the monitor. Be careful stepping onto the machine. The pedals may start to move as you do and it can be easy to lose your balance. Grab the handlebars as you step on to help you stay balanced. Begin pedaling to turn it on. Taking a few steps forward on the machine should power up the display. If not, look for a start button. Start pedaling at an even pace. Your arms should be swinging with the handles. When your left foot goes down, straightening your leg, the right handle should be pulled toward your body. Same for when your right leg goes down.',
                                        Reps: '900',
                                        Sets: '1',
                                        photoURL: ''
                                    },


                                    {
                                        name: 'Treadmill',
                                        instruction: 'Jog on the treadmill, swinging your arms oppisite to the foot that you are moving towards the front',
                                        Reps: '300',
                                        Sets: '1',
                                        photoURL: ''
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Seated Toe Touches',
                                        instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                        Reps: '30',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Quad Stretch',
                                        instruction: 'Stand on one leg. If you need support, hold onto something solid, such as a wall or chair, for support. Bend your right knee and bring your heel toward your buttock. Reach for your ankle with your opposite (left) hand. Stand up straight and pull in your abdominal muscles. Try to keep your knees next to each other. Relax your shoulders. As you hold your leg in the bent position you will feel a slight pull along the front of your thigh and hip.Breathe deeply and hold the stretch for 20-30 seconds, release and repeat on the left leg, this time holding your ankle with your right hand. Stretch each leg one to five times in a stretching session.',
                                        Reps: '30',
                                        Sets: '4',
                                        photoURL: ''
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
                                            Reps: '60',
                                            Sets: '3',
                                            photoURL: '...'
                                        }
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Stair Master',
                                        instruction: ' After using the assists and mounting the machine, make sure to use the handles on the side to rest your arms on and keep balance while performing the workout. Press the big green button or select your desired workout and start stepping. It will start out very slow, but you can use the up and down buttons mentioned before to set your desired intensity. A very important part of using the Stairmaster, as a matter of fact doing any sort of exercise, is to maintain your form. This will make sure that you avoid any sort of injuries and that you get the most benefit out of your workout',
                                        Reps: '480',
                                        Sets: '1',
                                        photoURL: ''
                                    },

                                    {
                                        name: 'Rowing Machine',
                                        instruction: 'To use a rowing machine, you need to set it up correctly, adjust the footplate and the performance monitor, and sit tall on the seat with your arms straight and your shins vertical. Then, you need to perform two phases of the stroke: the drive and the recovery. The drive is when you push with your legs, lean back slightly, and pull the handle to your chest. The recovery is when you extend your arms, lean forward slightly, and slide back to the start position',
                                        Reps: '300',
                                        Sets: '1',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'High Knees',
                                        instruction: 'Begin in the standing position. Raise and lower one knee at a time as if running in place. Bring the knees to the same height as the hips and keep your thighs parallel to the ground. Alternate legs and go as fast as you can',
                                        Reps: '30',
                                        Sets: '2',
                                        photoURL: ''
                                    },


                                    {
                                        name: 'Treadmill',
                                        instruction: 'Jog on the treadmill, swinging your arms oppisite to the foot that you are moving towards the front',
                                        Reps: '300',
                                        Sets: '1',
                                        photoURL: ''
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Seated Toe Touches',
                                        instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                        Reps: '30',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Quad Stretch',
                                        instruction: 'Stand on one leg. If you need support, hold onto something solid, such as a wall or chair, for support. Bend your right knee and bring your heel toward your buttock. Reach for your ankle with your opposite (left) hand. Stand up straight and pull in your abdominal muscles. Try to keep your knees next to each other. Relax your shoulders. As you hold your leg in the bent position you will feel a slight pull along the front of your thigh and hip.Breathe deeply and hold the stretch for 20-30 seconds, release and repeat on the left leg, this time holding your ankle with your right hand. Stretch each leg one to five times in a stretching session.',
                                        Reps: '30',
                                        Sets: '4',
                                        photoURL: ''
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
                                            Reps: '60',
                                            Sets: '3',
                                            photoURL: '...'
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
                                        photoURL: ''
                                    },

                                    {
                                        name: 'Shoulder Press',
                                        instruction: 'Place a barbell with the desired weight on a rack, making sure that it’s at shoulder height. Dip under the bar and place yourself underneath the barbell, picking it up as you slowly straighten yourself up. If this is done correctly, the barbell should then rest at the top of your shoulders. Grab the bar with your palms facing upwards — your elbows should point straight ahead. Make sure that your back is straight to secure proper form. Gently step back from the rack, keeping your back tall — then, simply press the barbell overhead. Once you can’t extend your arms any further, slowly return the barbell to your shoulders and repeat as many times as you need to. After the final repetition, step into the rack and leave the barbell at shoulder height once again. Finally, dip under the bar and step away from the rack without the bar.',
                                        weight: '15',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Lat Pulldown',
                                        instruction: 'Start by sitting at a lat pull machine, facing the bar. Reach up and grasp the bar a little wider than shoulder width. Pull the bar down toward your upper chest, aiming for just below your collarbone. Hold the bar at your mid to upper chest for 1–2 seconds while squeezing your shoulder blades back and down. Slowly return to the starting position.',
                                        Weight: '40',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Shoulder Shrugs',
                                        instruction: '',
                                        Weight: '20',
                                        Reps: '8',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Up Dog',
                                        instruction: ' Begin lying face down on your mat with head slightly lifted and hand sitting directly under shoulders. Point your toes so the tops of you feet are on the mat. As you exhale, press through your hands and the tops of your feet raising your body and legs up off the ground until arms are straight.',
                                        Reps: '60',
                                        Sets: '1',
                                        photoURL: ''
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
                                            Reps: '30',
                                            Sets: '2',
                                            photoURL: ''
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
                                        photoURL: ''
                                    },

                                    {
                                        name: 'Front Squat',
                                        instruction: 'Grip the bar slightly wider than shoulder-width. Inhale and brace your core slightly, and unrack the bar. Take two steps back, and adjust your foot position. Squat as deep as possible with good technique. With control, stop and reverse the movement, extending your hips and legs again. Exhale on the way up or exchange air in the top position. Breathe in and repeat for reps.',
                                        weight: '65',
                                        Reps: '5',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Calf Raises',
                                        instruction: 'Place your feet on the ground or elevated surface, about hip-distance apart, with the toes and knees straight ahead. Your foot should be in line with your ankle and your bodyweight be pressing evenly on the ball of your foot. Extend the ankle and rise up on the toes, flexing your calf muscle. Lower down with control and return to the initial position.',
                                        Weight: '20',
                                        Reps: '10',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Leg Press',
                                        instruction: 'Sit on the leg press and slide your butt down and into the bottom of the seat. Extend your legs and press the weight up. Bend your knees and descend as far as your flexibility and knee health allows. Without bouncing, drive the weight back up, stopping just short of full knee extension.',
                                        Weight: '50',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Seated Toe Touches',
                                        instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                        Reps: '30',
                                        Sets: '3',
                                        photoURL: ''
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
                                            name: 'Ellipical Machine',
                                            instruction: 'Step onto the machine facing the monitor. Be careful stepping onto the machine. The pedals may start to move as you do and it can be easy to lose your balance. Grab the handlebars as you step on to help you stay balanced. Begin pedaling to turn it on. Taking a few steps forward on the machine should power up the display. If not, look for a start button. Start pedaling at an even pace. Your arms should be swinging with the handles. When your left foot goes down, straightening your leg, the right handle should be pulled toward your body. Same for when your right leg goes down.',
                                            Reps: '900',
                                            Sets: '1',
                                            photoURL: ''
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
                                        photoURL: ''
                                    },

                                    {
                                        name: 'Cable Tricep Pulldown',
                                        instruction: 'Firstly, attach the EZ-curl bar on the cable machine hook and then adjust the machine level to shoulder height. Kneel down and hold the EZ-curl bar. Make sure that the bar is behind your neck and keep your palms facing your feet. Lower your upper body until the elbows reach the knees. Repeat the moves until you reach the number of your preferred reps.',
                                        weight: '40',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Lat Pulldown',
                                        instruction: 'Start by sitting at a lat pull machine, facing the bar. Reach up and grasp the bar a little wider than shoulder width. Pull the bar down toward your upper chest, aiming for just below your collarbone. Hold the bar at your mid to upper chest for 1–2 seconds while squeezing your shoulder blades back and down. Slowly return to the starting position.',
                                        Weight: '40',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Shoulder Shrugs',
                                        instruction: 'Stand straight with your feet shoulder-width apart and hold a dumbbell in each hand with both palms facing the body. Bend your knees only slightly, and while keeping your arms straight, lift your shoulders up towards your ears. Reach the top of the movement and pause for a second or two, and lower the shoulders down to their original position. This is one rep.',
                                        Weight: '20',
                                        Reps: '8',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Up Dog',
                                        instruction: ' Begin lying face down on your mat with head slightly lifted and hand sitting directly under shoulders. Point your toes so the tops of you feet are on the mat. As you exhale, press through your hands and the tops of your feet raising your body and legs up off the ground until arms are straight.',
                                        Reps: '60',
                                        Sets: '1',
                                        photoURL: ''
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
                                            Reps: '60',
                                            Sets: '3',
                                            photoURL: '...'
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
                                        photoURL: ''
                                    },

                                    {
                                        name: 'Shoulder Press',
                                        instruction: 'Place a barbell with the desired weight on a rack, making sure that it’s at shoulder height. Dip under the bar and place yourself underneath the barbell, picking it up as you slowly straighten yourself up. If this is done correctly, the barbell should then rest at the top of your shoulders. Grab the bar with your palms facing upwards — your elbows should point straight ahead. Make sure that your back is straight to secure proper form. Gently step back from the rack, keeping your back tall — then, simply press the barbell overhead. Once you can’t extend your arms any further, slowly return the barbell to your shoulders and repeat as many times as you need to. After the final repetition, step into the rack and leave the barbell at shoulder height once again. Finally, dip under the bar and step away from the rack without the bar.',
                                        weight: '15',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Lat Pulldown',
                                        instruction: 'Start by sitting at a lat pull machine, facing the bar. Reach up and grasp the bar a little wider than shoulder width. Pull the bar down toward your upper chest, aiming for just below your collarbone. Hold the bar at your mid to upper chest for 1–2 seconds while squeezing your shoulder blades back and down. Slowly return to the starting position.',
                                        Weight: '40',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Shoulder Shrugs',
                                        instruction: '',
                                        Weight: '20',
                                        Reps: '8',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Up Dog',
                                        instruction: ' Begin lying face down on your mat with head slightly lifted and hand sitting directly under shoulders. Point your toes so the tops of you feet are on the mat. As you exhale, press through your hands and the tops of your feet raising your body and legs up off the ground until arms are straight.',
                                        Reps: '60',
                                        Sets: '1',
                                        photoURL: ''
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
                                            Reps: '30',
                                            Sets: '2',
                                            photoURL: ''
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
                                        photoURL: ''
                                    },

                                    {
                                        name: 'Front Squat',
                                        instruction: 'Grip the bar slightly wider than shoulder-width. Inhale and brace your core slightly, and unrack the bar. Take two steps back, and adjust your foot position. Squat as deep as possible with good technique. With control, stop and reverse the movement, extending your hips and legs again. Exhale on the way up or exchange air in the top position. Breathe in and repeat for reps.',
                                        weight: '65',
                                        Reps: '5',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Calf Raises',
                                        instruction: 'Place your feet on the ground or elevated surface, about hip-distance apart, with the toes and knees straight ahead. Your foot should be in line with your ankle and your bodyweight be pressing evenly on the ball of your foot. Extend the ankle and rise up on the toes, flexing your calf muscle. Lower down with control and return to the initial position.',
                                        Weight: '20',
                                        Reps: '10',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Leg Press',
                                        instruction: 'Sit on the leg press and slide your butt down and into the bottom of the seat. Extend your legs and press the weight up. Bend your knees and descend as far as your flexibility and knee health allows. Without bouncing, drive the weight back up, stopping just short of full knee extension.',
                                        Weight: '50',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Seated Toe Touches',
                                        instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                        Reps: '30',
                                        Sets: '3',
                                        photoURL: ''
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
                                            name: 'Ellipical Machine',
                                            instruction: 'Step onto the machine facing the monitor. Be careful stepping onto the machine. The pedals may start to move as you do and it can be easy to lose your balance. Grab the handlebars as you step on to help you stay balanced. Begin pedaling to turn it on. Taking a few steps forward on the machine should power up the display. If not, look for a start button. Start pedaling at an even pace. Your arms should be swinging with the handles. When your left foot goes down, straightening your leg, the right handle should be pulled toward your body. Same for when your right leg goes down.',
                                            Reps: '900',
                                            Sets: '1',
                                            photoURL: ''
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
                                        photoURL: ''
                                    },

                                    {
                                        name: 'Cabel Tricep Pulldown',
                                        instruction: 'Firstly, attach the EZ-curl bar on the cable machine hook and then adjust the machine level to shoulder height. Kneel down and hold the EZ-curl bar. Make sure that the bar is behind your neck and keep your palms facing your feet. Lower your upper body until the elbows reach the knees. Repeat the moves until you reach the number of your preferred reps.',
                                        weight: '40',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Lat Pulldown',
                                        instruction: 'Start by sitting at a lat pull machine, facing the bar. Reach up and grasp the bar a little wider than shoulder width. Pull the bar down toward your upper chest, aiming for just below your collarbone. Hold the bar at your mid to upper chest for 1–2 seconds while squeezing your shoulder blades back and down. Slowly return to the starting position.',
                                        Weight: '40',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Shoulder Shrugs',
                                        instruction: 'Stand straight with your feet shoulder-width apart and hold a dumbbell in each hand with both palms facing the body. Bend your knees only slightly, and while keeping your arms straight, lift your shoulders up towards your ears. Reach the top of the movement and pause for a second or two, and lower the shoulders down to their original position. This is one rep.',
                                        Weight: '20',
                                        Reps: '8',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Up Dog',
                                        instruction: ' Begin lying face down on your mat with head slightly lifted and hand sitting directly under shoulders. Point your toes so the tops of you feet are on the mat. As you exhale, press through your hands and the tops of your feet raising your body and legs up off the ground until arms are straight.',
                                        Reps: '60',
                                        Sets: '1',
                                        photoURL: ''
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
                                            name: 'Ellipical Machine',
                                            instruction: 'Step onto the machine facing the monitor. Be careful stepping onto the machine. The pedals may start to move as you do and it can be easy to lose your balance. Grab the handlebars as you step on to help you stay balanced. Begin pedaling to turn it on. Taking a few steps forward on the machine should power up the display. If not, look for a start button. Start pedaling at an even pace. Your arms should be swinging with the handles. When your left foot goes down, straightening your leg, the right handle should be pulled toward your body. Same for when your right leg goes down.',
                                            Reps: '900',
                                            Sets: '1',
                                            photoURL: ''
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
                                        photoURL: ''
                                    },

                                    {
                                        name: 'Shoulder Press',
                                        instruction: 'Place a barbell with the desired weight on a rack, making sure that it’s at shoulder height. Dip under the bar and place yourself underneath the barbell, picking it up as you slowly straighten yourself up. If this is done correctly, the barbell should then rest at the top of your shoulders. Grab the bar with your palms facing upwards — your elbows should point straight ahead. Make sure that your back is straight to secure proper form. Gently step back from the rack, keeping your back tall — then, simply press the barbell overhead. Once you can’t extend your arms any further, slowly return the barbell to your shoulders and repeat as many times as you need to. After the final repetition, step into the rack and leave the barbell at shoulder height once again. Finally, dip under the bar and step away from the rack without the bar.',
                                        weight: '15',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Bench Press',
                                        instruction: 'To do a bench press, lie on a flat bench with your eyes under the bar and your feet on the ground12. Grab the bar with a medium grip-width and your thumbs around the bar1. Unrack the bar by straightening your arms and keep it over your shoulders123. Lower the bar to your mid-chest or just below your clavicle, while keeping your elbows slightly tucked in and your chest high134. Pause on your chest without bouncing the bar4. Press the bar back up until your arms are straight, while flaring your elbows out and exhaling.',
                                        Weight: '45',
                                        Reps: '8',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Dumbell Skull Crushers',
                                        instruction: 'Grab a pair of dumbbells with a neutral grip and then lie on a weight bench. Press the dumbbells up so that they’re directly over the end of the weight bench. Lower the dumbbells behind your head by breaking at your elbows and moving your shoulders backward. Keep going until you feel a huge stretch in the long (inner) head of your triceps.',
                                        Weight: '10',
                                        Reps: '8',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Arm Circles',
                                        instruction: 'Stand upright with a shoulder-wide stance. Extend your arms to your sides. They should be parallel to the floor. Push your shoulders back and down to get in position. Rotate your arms clockwise at your shoulders. Arm circles are usually performed until you feel a burn in your shoulders or if you can’t hold your arms parallel to the floor.',
                                        Reps: '60',
                                        Sets: '1',
                                        photoURL: ''
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
                                            Reps: '60',
                                            Sets: '3',
                                            photoURL: '...'
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
                                        Weight: '20',
                                        Reps: '12',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Lat Pulldown',
                                        instruction: 'Start by sitting at a lat pull machine, facing the bar. Reach up and grasp the bar a little wider than shoulder width. Pull the bar down toward your upper chest, aiming for just below your collarbone. Hold the bar at your mid to upper chest for 1–2 seconds while squeezing your shoulder blades back and down. Slowly return to the starting position.',
                                        Weight: '40',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Hammer Curls',
                                        instruction: 'Stand up, grab two dumbbells with a neutral grip and then hold them by your sides. Brace your core and then curl the weights to your shoulders by flexing your elbows. Squeeze your biceps at the top of the rep and then lower the dumbbells under control until your elbows are fully extended.',
                                        weight: '20',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Childs Pose',
                                        instruction: 'Begin on your yoga mat on all fours supported by your hands and knees. Make sure your hands are directly beneath your shoulders, knees directly beneath your hips, and your feet directly behind your knees. Sit back onto your feet, keeping your feet and knees hip’s width apart. The soles of the feet will be facing the sky in the pose. Gently lower your upper body forward, resting your forehead on the floor. Allow your arms to rest loosely by your sides, hands by your feet, with palms facing the sky. Inhale, lengthening your spine. Exhale, relaxing your shoulders.',
                                        Reps: '60',
                                        Sets: '1',
                                        photoURL: ''
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
                                            Reps: '60',
                                            Sets: '3',
                                            photoURL: '...'
                                        }
                                    ],


                                main_workout: [
                                    {
                                        name: 'Leg Curls',
                                        instruction: 'Exhale and flex your knees, pulling your ankles as close to your buttocks as possible. Keep your hips firmly on the bench. Hold briefly. Inhale as you return your feet to the starting position in a slow and controlled movement.',
                                        Weight: '30',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: ''
                                    },

                                    {
                                        name: 'Front Squat',
                                        instruction: 'Grip the bar slightly wider than shoulder-width. Inhale and brace your core slightly, and unrack the bar. Take two steps back, and adjust your foot position. Squat as deep as possible with good technique. With control, stop and reverse the movement, extending your hips and legs again. Exhale on the way up or exchange air in the top position. Breathe in and repeat for reps.',
                                        weight: '65',
                                        Reps: '5',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Calf Raises',
                                        instruction: 'Place your feet on the ground or elevated surface, about hip-distance apart, with the toes and knees straight ahead. Your foot should be in line with your ankle and your bodyweight be pressing evenly on the ball of your foot. Extend the ankle and rise up on the toes, flexing your calf muscle. Lower down with control and return to the initial position.',
                                        Weight: '20',
                                        Reps: '10',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Leg Press',
                                        instruction: 'Sit on the leg press and slide your butt down and into the bottom of the seat. Extend your legs and press the weight up. Bend your knees and descend as far as your flexibility and knee health allows. Without bouncing, drive the weight back up, stopping just short of full knee extension.',
                                        Weight: '50',
                                        Reps: '6',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Seated Toe Touches',
                                        instruction: 'Sit on the ground with your legs stretched out, feet flexed and your back straight. Breathe in deep and engage the muscles of your abdomen, taking care to keep your head aligned with your spine as you slowly bend forward. Reach forward with your arms as you bend into the stretch, aiming for the toes. Do not bounce as you stretch, this causes small tears in the muscle fibers, which can end up making your muscles even tighter',
                                        Reps: '30',
                                        Sets: '3',
                                        photoURL: ''
                                    }

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
                                            Reps: '60',
                                            Sets: '3',
                                            photoURL: '...'
                                        }
                                    ]
                                ,
                                main_workout:
                                    [
                                        {
                                            name: 'Deadbug',
                                        },
                                        {
                                            name:'Plank',
                                        },
                                        {
                                            name:'Reverse Crunch'
                                        },
                                        {
                                            name:'Side Plank'
                                        },
                                        {
                                            name:'Glute Bridges'
                                        }
                                    ]
                                ,

                                cool_down:
                                    [
                                        {
                                            name: 'Up Dog',
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
                                            instruction: '',
                                            Reps: '60',
                                            Sets: '3',
                                            photoURL: '...'
                                        }
                                    ]
                                ,
                                main_workout:
                                    [
                                        {
                                            name: 'Situps',
                                        },
                                        {
                                            name:'Plank'
                                        },
                                        {
                                            name:'Russian Twist'
                                        },
                                        {
                                            name:'Side Plank',
                                        },
                                        {
                                            name:'Glute Bridges'
                                        }
                                    ]
                                ,

                                cool_down:
                                    [
                                        {
                                            name: 'Bear Crawls',
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
                                            Reps: '60',
                                            Sets: '3',
                                            photoURL: '...'
                                        }
                                    ]
                                ,
                                main_workout:
                                    [
                                        {
                                            name: 'Bird to Dog',
                                        },
                                        {
                                            name:'Plank',
                                        },
                                        {
                                            name:'Reverse Crunch'
                                        },
                                        {
                                            name: 'Side Plank'
                                        },
                                        {
                                            name: 'Leg Raises'
                                        }
                                    ]
                                ,

                                cool_down:
                                    [
                                        {
                                            name: 'Up Dog',
                                        }
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
                                            Reps: '60',
                                            Sets: '3',
                                            photoURL: '...'
                                        }
                                    ]
                                ,
                                main_workout:
                                    [
                                        {
                                            name: 'Deadbug',
                                        },
                                        {
                                            name:'Plank',
                                        },
                                        {
                                            name:'Reverse Crunch'
                                        },
                                        {
                                            name:'Side Plank'
                                        },
                                        {
                                            name:'Glute Bridges'
                                        }
                                    ]
                                ,

                                cool_down:
                                    [
                                        {
                                            name: 'Up Dog',
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
                                            name: 'Elliptical Machine',
                                            instruction: '',
                                            Reps: '60',
                                            Sets: '3',
                                            photoURL: '...'
                                        }
                                    ]
                                ,
                                main_workout:
                                    [
                                        {
                                            name: 'Situps',
                                        },
                                        {
                                            name:'Plank'
                                        },
                                        {
                                            name:'Russian Twist'
                                        },
                                        {
                                            name:'Side Plank',
                                        },
                                        {
                                            name:'Glute Bridges'
                                        }
                                    ]
                                ,

                                cool_down:
                                    [
                                        {
                                            name: 'Bear Crawls',
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
                                            Reps: '60',
                                            Sets: '3',
                                            photoURL: '...'
                                        }
                                    ]
                                ,
                                main_workout:
                                    [
                                        {
                                            name: 'Bird to Dog',
                                        },
                                        {
                                            name:'Plank',
                                        },
                                        {
                                            name:'Reverse Crunch'
                                        },
                                        {
                                            name: 'Side Plank'
                                        },
                                        {
                                            name: 'Leg Raises'
                                        }
                                    ]
                                ,

                                cool_down:
                                    [
                                        {
                                            name: 'Up Dog',
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
                                            name: 'Elliptical Machine',
                                            instruction: 'To do them, start in a standing position with your feet together, a slight bend in your knees, and your hands at your sides. Then, jump your feet out to the sides greater than hip-width apart while simultaneously sweeping your hands overhead',
                                            Reps: '60',
                                            Sets: '3',
                                            photoURL: '...'
                                        }
                                    ]
                                ,
                                main_workout:
                                    [
                                        {
                                            name: 'Bird to Dog',
                                        },
                                        {
                                            name:'Plank'
                                        },
                                        {
                                            name:'Farmers Carry'
                                        },
                                        {
                                            name:'Glute Bridges'
                                        },
                                        {
                                            name:'Leg Raises'
                                        }
                                    ]
                                ,

                                cool_down:
                                    [
                                        {
                                            name: 'Up Dog',
                                        }
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
                                            photoURL: '...'
                                        }
                                    ]
                                ,
                                main_workout:
                                    [
                                        {
                                            name: 'Deadbug',
                                        },
                                        {
                                            name:'Plank'
                                        },
                                        {
                                            name:'Bird to Dog'
                                        },
                                        {
                                            name:'Side Plank'
                                        },
                                        {
                                            name:'V-Ups'
                                        }
                                    ]
                                ,

                                cool_down:
                                    [
                                        {
                                            name: 'Up Dog',
                                        }
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
                                            Reps: '60',
                                            Sets: '3',
                                            photoURL: '...'
                                        }
                                    ]
                                ,
                                main_workout:
                                    [
                                        {
                                            name: 'Bird to Dog',
                                        },
                                        {
                                            name:'Leg Raises'
                                        },
                                        {
                                            name:'DeadBug'
                                        },
                                        {
                                            name: 'Farmers Carry'
                                        },
                                        {
                                            name:'Plank'
                                        }
                                    ]
                                ,

                                cool_down:
                                    [
                                        {
                                            name: 'Up Dog',
                                        }
                                    ]

                            },

                        },
                    ]
            }
        }
    },
    calisthenics: {
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
                                        Reps: '30',
                                    },
                                    {
                                        name:'Mountain Climbers',
                                        Reps: '30',
                                    },
                                    {
                                        name: 'Arm Circles',
                                        Reps: '20',
                                    }
                                ],
                                main_workout:
                                    [
                                        {
                                            name: 'Burpees 10, Bench Dips',
                                            Reps: '10'
                                        },
                                        {
                                            name:'Pullups',
                                            Reps: '10',
                                        },
                                        {
                                            name: 'Hanging Leg Raises',
                                            Reps: '10',
                                        },
                                        {
                                            name: 'Squats',
                                            Reps: '20',
                                        },
                                        {
                                            name: 'Bench Dips',
                                            Reps: '10',
                                        },
                                        {
                                            name: 'Rest',
                                            instructions:'Rest 1 minute, then repeat 6 times'
                                        }
                                    ],
                                cool_down:
                                    [
                                        {
                                            name: 'Frog Stands',
                                        },
                                        {
                                            name: 'Trunk Twists',
                                        },
                                        {
                                            name:' Wrist Stretch'
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
                                            Reps: '30',
                                        },
                                        {
                                            name:'Mountain Climbers',
                                            Reps: '30',
                                        },
                                        {
                                            name: 'Arm Circles',
                                            Reps: '20',
                                        }
                                    ],
                                main_workout:
                                    [
                                        {
                                            name: 'Diamond Pushups',
                                            Reps: '8'
                                        },
                                        {
                                            name: 'Bicep Pullups',
                                            Reps: '10',
                                        },
                                        {
                                            name:'Inverted Rows',
                                            Reps: '12',
                                        },
                                        {
                                            name: 'Jumping Lunges',
                                            Reps: '20',
                                        },
                                        {
                                            name: 'Plank',
                                            Reps: '60'
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
                                        },
                                        {
                                            name:'Seated Toe Touches'
                                        },
                                        {
                                            name:'Reach For The Sky'
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
                                            instruction: '',
                                            Reps: '30',
                                            Sets: '2',
                                            photoURL: '...'
                                        },
                                        {
                                            name: 'Squats',
                                            Reps: '20',
                                        },
                                        {
                                            name: 'Back Extentions',
                                            Reps: '30'
                                        }
                                    ],
                                main_workout:
                                    [
                                        {
                                            name: 'Pistol Squat',
                                            Reps: '5'
                                        },
                                        {
                                            name:'Incline Push-ups',
                                            Reps: '5'
                                        },
                                        {
                                            name: 'Clap Push-ups',
                                            Reps: '5',
                                        },
                                        {
                                            name: 'Narrow Grip Pullups',
                                            Reps: '5',
                                        },
                                        {
                                            name: 'Burpees',
                                            Reps: '20'
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

                                        },
                                        {
                                            name: 'Childs Pose'
                                        },
                                        {
                                            name: 'Up Dog'
                                        }

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
                                        Reps: '30',
                                    },
                                    {
                                        name:'Mountain Climbers',
                                        Reps: '30',
                                    },
                                    {
                                        name: 'Arm Circles',
                                        Reps: '20',
                                    }
                                ],
                                main_workout:
                                    [
                                        {
                                            name: 'Burpees 10, Bench Dips',
                                            Reps: '10'
                                        },
                                        {
                                            name:'Pullups',
                                            Reps: '10',
                                        },
                                        {
                                            name: 'Hanging Leg Raises',
                                            Reps: '10',
                                        },
                                        {
                                            name: 'Squats',
                                            Reps: '20',
                                        },
                                        {
                                            name: 'Bench Dips',
                                            Reps: '10',
                                        },
                                        {
                                            name: 'Rest',
                                            instructions:'Rest 1 minute, then repeat 6 times'
                                        }
                                    ],
                                cool_down:
                                    [
                                        {
                                            name: 'Frog Stands',
                                        },
                                        {
                                            name: 'Trunk Twists',
                                        },
                                        {
                                            name:' Wrist Stretch'
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
                                            Reps: '30',
                                        },
                                        {
                                            name:'Mountain Climbers',
                                            Reps: '30',
                                        },
                                        {
                                            name: 'Arm Circles',
                                            Reps: '20',
                                        }
                                    ],
                                main_workout:
                                    [
                                        {
                                            name: 'Diamond Pushups',
                                            Reps: '8'
                                        },
                                        {
                                            name: 'Bicep Pullups',
                                            Reps: '10',
                                        },
                                        {
                                            name:'Inverted Rows',
                                            Reps: '12',
                                        },
                                        {
                                            name: 'Jumping Lunges',
                                            Reps: '20',
                                        },
                                        {
                                            name: 'Plank',
                                            Reps: '60'
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
                                        },
                                        {
                                            name:'Seated Toe Touches'
                                        },
                                        {
                                            name:'Reach For The Sky'
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
                                            instruction: '',
                                            Reps: '30',
                                            Sets: '2',
                                            photoURL: '...'
                                        },
                                        {
                                            name: 'Squats',
                                            Reps: '20',
                                        },
                                        {
                                            name: 'Back Extentions',
                                            Reps: '30'
                                        }
                                    ],
                                main_workout:
                                    [
                                        {
                                            name: 'Pistol Squat',
                                            Reps: '5'
                                        },
                                        {
                                            name:'Incline Push-ups',
                                            Reps: '5'
                                        },
                                        {
                                            name: 'Clap Push-ups',
                                            Reps: '5',
                                        },
                                        {
                                            name: 'Narrow Grip Pullups',
                                            Reps: '5',
                                        },
                                        {
                                            name: 'Burpees',
                                            Reps: '20'
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

                                        },
                                        {
                                            name: 'Childs Pose'
                                        },
                                        {
                                            name: 'Up Dog'
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
                                        name: 'Lunges',
                                        instruction: '',
                                        Reps: '30',
                                        Sets: '2',
                                        photoURL: '...'
                                    },
                                    {
                                        name: 'Squats',
                                        Reps: '20',
                                    },
                                    {
                                        name: 'Back Extentions',
                                        Reps: '30'
                                    }
                                ],
                                main_workout:
                                    [
                                        {
                                            name: '15, Squat Jumps, 15 Wide Arm Pushups, 15, Bench Dips, 15, Leg Raises, 10, Windshield Wipers, Side Plank',
                                            note: 'Repeat 4 times'
                                        }
                                    ],
                                cool_down:
                                    [
                                        {
                                            name: 'Seated L-Sits, Childs Pose, Up Dog',
                                        }
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
                                        instruction: '',
                                        Reps: '30',
                                        Sets: '2',
                                        photoURL: '...'
                                    },
                                    {
                                        name: 'Squats',
                                        Reps: '20',
                                    },
                                    {
                                        name: 'Back Extentions',
                                        Reps: '30'
                                    }
                                ],
                                main_workout:
                                    [
                                        {
                                            name: 'Duck Walk',
                                            Reps: '50 meter'
                                        },
                                        {
                                            name: 'Box Jumps',
                                            Reps: '15',
                                        },
                                        {
                                            name:'Pushups',
                                            Reps:'10',
                                        },
                                        {
                                            name:'Inverted Rows',
                                            Reps:'10',
                                        },
                                        {
                                            name:'Pullups',
                                            Reps:'10',
                                        },
                                        {
                                            name:'Leg Raises',
                                            Reps:'15',
                                        },
                                        {
                                            name:'Plank',
                                            Reps:'60'
                                        },
                                        {
                                            name: 'Rest',
                                            instruction:'Rest 1 minute, then repeat 4 times'
                                        }
                                    ],
                                cool_down:
                                    [
                                        {
                                            name: 'Handstand Wall Holds',
                                        },
                                        {
                                            name: 'Childs Pose'
                                        },
                                        {
                                            name:'Up Dog'
                                        }
                                    ]
                            }
                        },
                        
                    ]
            }
        }
    },
    flexibility: {
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
                                            name: 'Seated Toe Touches'
                                        },
                                        {
                                            name:'Back Scratch'
                                        },
                                        {
                                            name:'Butterfly Stretch'
                                        }
                                    ],
                                main_workout:
                                    [
                                        {
                                            name: 'Bent Over Rows',
                                        },
                                        {
                                            name:'Deadlift'
                                        },
                                        {
                                            name: 'Squats'
                                        },
                                        {
                                            name:'Lat Pulldown'
                                        }
                                    ],
                                cool_down:
                                    [
                                        {
                                            name: 'Trunk Twists',
                                        },
                                        {
                                            name:'Childs Pose'
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
                                        },
                                        {
                                            name:'Butterfly Stretch'
                                        },
                                        {
                                            name:'Quad Stretch'
                                        }
                                    ],
                                main_workout:
                                    [
                                        {
                                            name: 'Squats',
                                        },
                                        {
                                            name:'Leg Press'
                                        },
                                        {
                                            name:'Toe Taps'
                                        },
                                        {
                                            name:'Front Squat'
                                        },
                                        {
                                            name:'Glute Bridges'
                                        }
                                    ],
                                cool_down:
                                    [
                                        {
                                            name: 'Standing Toe Touches',
                                        },
                                        {
                                            name:'Cross Body Glute Pull'
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
                                            instruction: '',
                                            Reps: '60',
                                            Sets: '3',
                                            photoURL: '...'
                                        },
                                        {
                                            name:'Seated Toe Touches'
                                        },
                                        {
                                            name:'Jumping Jacks'
                                        }
                                    ],
                                main_workout:
                                    [
                                        {
                                            name: 'Lateral Raise',
                                        },
                                        {
                                            name:'Bench Press'
                                        },
                                        {
                                            name:'Roman Deadlift'
                                        },
                                        {
                                            name:'Dumbell Row'
                                        },
                                        {
                                            name: 'Dumbell Walking Lunges'
                                        }
                                    ],
                                cool_down:
                                    [
                                        {
                                            name: 'Overhead Shoulder Stretch',
                                        },
                                        {
                                            name:'Butterfly Stretch'
                                        },
                                        {
                                            name:'Back Scratch'
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
                            }
                        ],
                            main_workout: 
                            [
                                {
                                    name: 'Back Scratch'
                                },
                                {
                                    name:'Butterfly Stretch'
                                },
                                {
                                    name:'Childs Pose'
                                },
                                {
                                    name:'Quad Stretch'
                                },
                                {
                                    name:'Arm Circles'
                                }
                            ],
                            cool_down: [
                                {
                                    name: 'Cross Body Glute Pull'
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
                                        name: 'Seated Toe Touches'
                                    },
                                    {
                                        name:'Back Scratch'
                                    },
                                    {
                                        name:'Butterfly Stretch'
                                    }
                                ],
                                main_workout:
                                [
                                    {
                                        name: 'Bent Over Rows',
                                    },
                                    {
                                        name:'Deadlift'
                                    },
                                    {
                                        name: 'Squats'
                                    },
                                    {
                                        name:'Lat Pulldown'
                                    }
                                ],
                                cool_down:
                                    [
                                        {
                                            name: 'Trunk Twists',
                                        },
                                        {
                                            name:'Childs Pose'
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
                                    },
                                    {
                                        name:'Butterfly Stretch'
                                    },
                                    {
                                        name:'Quad Stretch'
                                    }
                                ],
                                main_workout:
                                [
                                    {
                                        name: 'Squats',
                                    },
                                    {
                                        name:'Leg Press'
                                    },
                                    {
                                        name:'Toe Taps'
                                    },
                                    {
                                        name:'Front Squat'
                                    },
                                    {
                                        name:'Glute Bridges'
                                    }
                                ],
                                cool_down:
                                    [
                                        {
                                            name: 'Standing Toe Touches',
                                        },
                                        {
                                            name:'Cross Body Glute Pull'
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
                                            name: 'Seated Toe Touches'
                                        },
                                        {
                                            name:'Back Scratch'
                                        },
                                        {
                                            name:'Butterfly Stretch'
                                        }
                                    ],
                                main_workout:
                                    [
                                        {
                                            name: 'Bent Over Rows',
                                        },
                                        {
                                            name:'Deadlift'
                                        },
                                        {
                                            name: 'Squats'
                                        },
                                        {
                                            name:'Lat Pulldown'
                                        }
                                    ],
                                cool_down:
                                    [
                                        {
                                            name: 'Trunk Twists',
                                        },
                                        {
                                            name:'Childs Pose'
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
                                    }
                                ],
                                    main_workout: 
                                    [
                                        {
                                            name: 'Back Scratch'
                                        },
                                        {
                                            name:'Butterfly Stretch'
                                        },
                                        {
                                            name:'Childs Pose'
                                        },
                                        {
                                            name:'Quad Stretch'
                                        },
                                        {
                                            name:'Arm Circles'
                                        }
                                    ],
                                    cool_down: [
                                        {
                                            name: 'Cross Body Glute Pull'
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
                                    },
                                    {
                                        name:'Butterfly Stretch'
                                    },
                                    {
                                        name:'Quad Stretch'
                                    }
                                ],
                                main_workout:
                                [
                                    {
                                        name: 'Squats',
                                    },
                                    {
                                        name:'Leg Press'
                                    },
                                    {
                                        name:'Toe Taps'
                                    },
                                    {
                                        name:'Front Squat'
                                    },
                                    {
                                        name:'Glute Bridges'
                                    }
                                ],
                                cool_down:
                                    [
                                        {
                                            name: 'Standing Toe Touches',
                                        },
                                        {
                                            name:'Cross Body Glute Pull'
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
                                    }
                                ],
                                    main_workout: 
                                    [
                                        {
                                            name: 'Back Scratch'
                                        },
                                        {
                                            name:'Butterfly Stretch'
                                        },
                                        {
                                            name:'Childs Pose'
                                        },
                                        {
                                            name:'Quad Stretch'
                                        },
                                        {
                                            name:'Arm Circles'
                                        }
                                    ],
                                    cool_down: [
                                        {
                                            name: 'Cross Body Glute Pull'
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
                                            instruction: '',
                                            Reps: '60',
                                            Sets: '3',
                                            photoURL: '...'
                                        },
                                        {
                                            name:'Seated Toe Touches'
                                        },
                                        {
                                            name:'Jumping Jacks'
                                        }
                                    ],
                                main_workout:
                                    [
                                        {
                                            name: 'Lateral Raise',
                                        },
                                        {
                                            name:'Bench Press'
                                        },
                                        {
                                            name:'Roman Deadlift'
                                        },
                                        {
                                            name:'Dumbell Row'
                                        },
                                        {
                                            name: 'Dumbell Walking Lunges'
                                        }
                                    ],
                                cool_down:
                                    [
                                        {
                                            name: 'Overhead Shoulder Stretch',
                                        },
                                        {
                                            name:'Butterfly Stretch'
                                        },
                                        {
                                            name:'Back Scratch'
                                        }
                                    ]
                            }
                        },
                        'rest'
                    ]
                }
        }
    }

}








const intermediate = {
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

                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Bench Press',
                                        instruction: 'To do a bench press, lie on a flat bench with your eyes under the bar and your feet on the ground12. Grab the bar with a medium grip-width and your thumbs around the bar1. Unrack the bar by straightening your arms and keep it over your shoulders123. Lower the bar to your mid-chest or just below your clavicle, while keeping your elbows slightly tucked in and your chest high134. Pause on your chest without bouncing the bar4. Press the bar back up until your arms are straight, while flaring your elbows out and exhaling.',
                                        Weight: '135',
                                        Reps: '8',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Seated Dumbbell Shoulder Press',
                                        instruction: 'Sit down on a bench with a raised backrest. Grab a pair of dumbbells and lift them up to the starting position at your shoulders. Inhale and lightly brace your core. Press the dumbbells up to straight arms, while exhaling. Inhale at the top, or while lowering the dumbbells with control back to your shoulders.',
                                        Weight: '50',
                                        Reps: '8',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Incline Dumbbell Press',
                                        instruction: 'Sit on a bench, and lift a pair of dumbbells up to the starting position. Press the dumbbells up to straight arms, while exhaling. Inhale at the top, or while lowering the dumbbells with control back to your shoulders.',
                                        Weight: '40',
                                        Reps: '8',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Side Lateral Raises',
                                        instruction: 'Grab a pair of dumbbells with equal weights. Start with light weights. Stand erect while holding one dumbbell in each hand with your palms facing your sides. Keep your feet hip-width apart with your toes pointed slightly outward. Keep your back straight. Pull your shoulder blades back and keep your chest proud. Bend your elbows somewhat without locking them. You should feel the weight in your forearms and not your wrists. Engage your core and keep your upper body still. Exhale and lift your arms to shoulder height until they are parallel to the ground. Hold this position for a second. Inhale and slowly lower your arms to your sides.',
                                        Weight: '20',
                                        Reps: '10',
                                        Sets: '2',
                                        photoURL: ''

                                    },
                                    {
                                        name: 'Cabel Tricep Pulldown',
                                        instruction: 'Firstly, attach the EZ-curl bar on the cable machine hook and then adjust the machine level to shoulder height. Kneel down and hold the EZ-curl bar. Make sure that the bar is behind your neck and keep your palms facing your feet. Lower your upper body until the elbows reach the knees. Repeat the moves until you reach the number of your preferred reps.',
                                        Weight: '80',
                                        Reps: '8',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Overhead Triceps Extension',
                                        instruction: 'Sit on a chair, bench, ball, or stand; keep back straight. Hold a weight in both hands, extending it up overhead. Keep your biceps close to your ears and elbows pointing forward as you lower the weight behind your head until the elbows are at about 90-degree angles. Straighten the arms, contracting the triceps, and then repeat for 1 to 3 sets of 8 to 16 reps. Keep the abs engaged throughout the exercise and avoid arching the back.',
                                        Weight: '60',
                                        Reps: '8',
                                        Sets: '3',
                                        photoURL: ''

                                    }
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Overhead Shoulder Stretch',
                                        instruction: 'Stand with legs shoulder-width apart. Let arms hang down at each side. Interlock fingers with palms facing down. Keeping fingers interlocked, raise arms up and stretch them over the head with the palms facing toward the ceiling.',
                                        Reps: '45',
                                        Sets: '2',
                                        photoURL: ''
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
                                            name: 'Ellipical Machine',
                                            instruction: 'Step onto the machine facing the monitor. Be careful stepping onto the machine. The pedals may start to move as you do and it can be easy to lose your balance. Grab the handlebars as you step on to help you stay balanced. Begin pedaling to turn it on. Taking a few steps forward on the machine should power up the display. If not, look for a start button. Start pedaling at an even pace. Your arms should be swinging with the handles. When your left foot goes down, straightening your leg, the right handle should be pulled toward your body. Same for when your right leg goes down.',
                                            Reps: '900',
                                            Sets: '1',
                                            photoURL: ''
                                        },
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Dumbell Row',
                                        instruction: 'Grab a dumbbell in each hand. If it is your first time, grab a light weight that feels doable. Stagger your legs. Place one leg in front of the other, and then bow down. “You want to [imagine] a straight line from the top of your head all the way to your bottom almost as if you had a quarter and you place it on the top of your head it would gently roll all the way down your back and then from there, place the weights in front of your toes,” explains Jones. Slide your elbows along your side and squeeze your shoulder blades together as you lift the weights. Make sure that your shoulders are held down your back and your neck is long. Hold for a second and then gently extend your arms while placing the weight back to the start position. When returning to the starting position, the dumbbells will be in line with your feet.',
                                        Weight: '45',
                                        Reps: '12',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Pull Ups',
                                        instruction: 'Exhale while pulling yourself up so your chin is level with the bar. Pause at the top. Lower yourself (inhaling as you go down) until your elbows are straight. Repeat the movement without touching the floor.',
                                        Reps: '10',
                                        Sets: '2',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Shoulder Shrugs',
                                        instruction: 'Stand straight with your feet shoulder-width apart and hold a dumbbell in each hand with both palms facing the body. Bend your knees only slightly, and while keeping your arms straight, lift your shoulders up towards your ears. Reach the top of the movement and pause for a second or two, and lower the shoulders down to their original position. This is one rep.',
                                        Weight: '60',
                                        Reps: '8',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Face Pulls',
                                        instruction: 'Reach up and grasp the handles with both hands with your palms facing in. Step back until your arms are fully extended, then engage your core and lean back slightly, positioning your body at a roughly 20-degree angle. Pull the rope toward you just enough to start lifting the weight from the stack, then engage your shoulders, rolling them back to create good posture—you do not want your shoulders hunching or rolling forward. This is your starting position. Pull the handles of the attachment straight toward your forehead. Keep your palms facing in as your elbows flare outward toward the sides, engaging the rear delts. Reverse the movement and slowly extend your arms without allowing your shoulders or chest to roll forward as you extend. You want to maintain good posture throughout the exercise.',
                                        Weight: '30',
                                        Reps: '20',
                                        Sets: '2',
                                        photoURL: ''

                                    },
                                    {
                                        name: 'Barbell Curl',
                                        instruction: 'Load the barbell with the appropriate weight. Grab the bar with a supinated grip at shoulder width. Stand upright with arms fully extended, chest up, and shoulder blades retracted. Keeping the elbows close to the torso. This should be your starting position. Exhale and curl the barbell up until it reaches shoulder level. Hold the contraction for a movement. Inhale and slowly lower the barbell to the starting position. ',
                                        Weight: '80',
                                        Reps: '8',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Dumbbell Hammer Curl'
                                    }
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: 'Childs Pose',
                                        instruction: 'Begin on your yoga mat on all fours supported by your hands and knees. Make sure your hands are directly beneath your shoulders, knees directly beneath your hips, and your feet directly behind your knees. Sit back onto your feet, keeping your feet and knees hip’s width apart. The soles of the feet will be facing the sky in the pose. Gently lower your upper body forward, resting your forehead on the floor. Allow your arms to rest loosely by your sides, hands by your feet, with palms facing the sky. Inhale, lengthening your spine. Exhale, relaxing your shoulders.',
                                        Reps: '60',
                                        Sets: '1',
                                        photoURL: ''
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

                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Squats'
                                    },
                                    {
                                        name: 'Romanian Deadlifts'
                                    },
                                    {
                                        name: 'Leg Press'
                                    },
                                    {
                                        name: 'Leg Curl'
                                    },
                                    {
                                        name: 'Calf Raise'
                                    },
                                    {
                                        name: 'Hanging Leg Raise'
                                    }
                                ]
                                ,

                                cool_down: [

                                ]
                            }
                        },
                        {
                            session:
                            {
                                day: 4,
                                warm_up:
                                    [

                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Bench Press',
                                        instruction: 'To do a bench press, lie on a flat bench with your eyes under the bar and your feet on the ground12. Grab the bar with a medium grip-width and your thumbs around the bar1. Unrack the bar by straightening your arms and keep it over your shoulders123. Lower the bar to your mid-chest or just below your clavicle, while keeping your elbows slightly tucked in and your chest high134. Pause on your chest without bouncing the bar4. Press the bar back up until your arms are straight, while flaring your elbows out and exhaling.',
                                        Weight: '135',
                                        Reps: '8',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Seated Dumbbell Shoulder Press'
                                    },
                                    {
                                        name: 'Incline Dumbbell Press'
                                    },
                                    {
                                        name: 'Side Lateral Raises'
                                    },
                                    {
                                        name: 'Triceps Pressdowns'
                                    },
                                    {
                                        name: 'Overhead Triceps Extension'
                                    }
                                ]
                                ,

                                cool_down: [

                                ]
                            }
                        },
                        {
                            session:
                            {
                                day: 5,
                                warm_up:
                                    [

                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Bent-over Row'
                                    },
                                    {
                                        name: 'Pull Ups'
                                    },
                                    {
                                        name: 'Barbell Shrugs'
                                    },
                                    {
                                        name: 'Face Pulls'
                                    },
                                    {
                                        name: 'Barbell Curl'
                                    },
                                    {
                                        name: 'Dumbbell Hammer Curl'
                                    }
                                ]
                                ,

                                cool_down: [

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

                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Barbell squats'
                                    },
                                    {
                                        name: 'Romanian deadlifts'
                                    },
                                    {
                                        name: 'Barbell bench press'
                                    },
                                    {
                                        name: 'Pull-ups'
                                    },
                                    {
                                        name: 'Barbell rows'
                                    },
                                    {
                                        name: 'Barbell curls'
                                    },
                                    {
                                        name: 'Tricep pushdowns'
                                    }
                                ]
                                ,

                                cool_down: [

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

                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Deadlifts'
                                    },
                                    {
                                        name: 'Leg press'
                                    },
                                    {
                                        name: 'Dumbbell bench press'
                                    },
                                    {
                                        name: 'Seated cable rows'
                                    },
                                    {
                                        name: 'Shoulder press'
                                    },
                                    {
                                        name: 'Hammer curls'
                                    },
                                    {
                                        name: 'Overhead tricep extensions'
                                    }
                                ]
                                ,

                                cool_down: [

                                ]
                            }
                        },
                        'rest',
                        'rest',
                        'rest',
                        'rest'
                    ]
            }
        }
    },
    strength: {
        four_six: {
            workout: {
                name: 'Lower Body/Bro Split',

                schedule:
                    [
                        {
                            session:
                            {
                                day: 1,
                                warm_up:
                                    [

                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Barbell squats'
                                    },
                                    {
                                        name: 'Deadlifts'
                                    },
                                    {
                                        name: 'Leg press'
                                    },
                                    {
                                        name: 'Leg curls'
                                    }
                                ]
                                ,

                                cool_down: [

                                ]
                            }
                        },
                        {
                            session:
                            {
                                day: 2,
                                warm_up:
                                    [

                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Barbell bench press'
                                    },
                                    {
                                        name: 'Incline dumbbell press'
                                    },
                                    {
                                        name: 'Cable flyes'
                                    },
                                    {
                                        name: 'Tricep pushdowns'
                                    },
                                    {
                                        name: 'Overhead tricep extensions'
                                    }
                                ]
                                ,

                                cool_down: [

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

                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Barbell rows'
                                    },
                                    {
                                        name: 'Pull-ups'
                                    },
                                    {
                                        name: 'Lat pulldowns'
                                    },
                                    {
                                        name: 'Barbell curls'
                                    },
                                    {
                                        name: 'Hammer curls'
                                    }
                                ]
                                ,

                                cool_down: [

                                ]
                            }
                        },
                        {
                            session:
                            {
                                day: 5,
                                warm_up:
                                    [

                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Overhead press'
                                    },
                                    {
                                        name: 'Lateral raises'
                                    },
                                    {
                                        name: 'Rear delt flyes'
                                    },
                                    {
                                        name: 'Planks'
                                    }
                                ]
                                ,

                                cool_down: [

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
                name: 'Lower Body/Back/Upper Body',

                schedule:
                    [
                        {
                            session:
                            {
                                day: 1,
                                warm_up:
                                    [

                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Barbell squats'
                                    },
                                    {
                                        name: 'Deadlifts'
                                    },
                                    {
                                        name: 'Barbell rows'
                                    },
                                    {
                                        name: 'Pull-ups'
                                    }
                                ]
                                ,

                                cool_down: [

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

                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Barbell bench press'
                                    },
                                    {
                                        name: 'Overhead press'
                                    },
                                    {
                                        name: 'Barbell curls'
                                    },
                                    {
                                        name: 'Tricep extensions'
                                    }
                                ]
                                ,

                                cool_down: [

                                ]
                            }
                        },
                        'rest',
                        'rest',
                        'rest',
                        'rest'
                    ]
            }
        }
    },
    weight_loss: {
        four_six: {
            workout: {
                name: 'Full body & Upper/Lower body',

                schedule:
                    [
                        {
                            session:
                            {
                                day: 1,
                                warm_up:
                                    [

                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Squats'
                                    },
                                    {
                                        name: 'Deadlifts'
                                    },
                                    {
                                        name: 'Bench Press',
                                        instruction: 'To do a bench press, lie on a flat bench with your eyes under the bar and your feet on the ground12. Grab the bar with a medium grip-width and your thumbs around the bar1. Unrack the bar by straightening your arms and keep it over your shoulders123. Lower the bar to your mid-chest or just below your clavicle, while keeping your elbows slightly tucked in and your chest high134. Pause on your chest without bouncing the bar4. Press the bar back up until your arms are straight, while flaring your elbows out and exhaling.',
                                        Weight: '135',
                                        Reps: '8',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Pull-ups'
                                    },
                                    {
                                        name: 'Lunges'
                                    },
                                    {
                                        name: 'Planks'
                                    }

                                ]
                                ,

                                cool_down: [

                                ]
                            }
                        },
                        {
                            session:
                            {
                                day: 2,
                                warm_up:
                                    [

                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Dumbbell shoulder press'
                                    },
                                    {
                                        name: 'Bent-over rows'
                                    },
                                    {
                                        name: 'Barbell curls'
                                    },
                                    {
                                        name: 'Tricep pushdowns'
                                    },
                                    {
                                        name: 'Push-ups'
                                    },
                                    {
                                        name: 'Planks'
                                    }
                                ]
                                ,

                                cool_down: [

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

                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Deadlifts'
                                    },
                                    {
                                        name: 'Leg press'
                                    },
                                    {
                                        name: 'Incline bench press'
                                    },
                                    {
                                        name: 'Pull-ups'
                                    },
                                    {
                                        name: 'Lateral raises'
                                    },
                                    {
                                        name: 'Planks'
                                    }
                                ]
                                ,

                                cool_down: [

                                ]
                            }
                        },
                        {
                            session:
                            {
                                day: 5,
                                warm_up:
                                    [

                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Squats'
                                    },
                                    {
                                        name: 'Romanian Deadlifts'
                                    },
                                    {
                                        name: 'Leg Extensions'
                                    },
                                    {
                                        name: 'Leg Curls'
                                    },
                                    {
                                        name: 'Calf Raises'
                                    },
                                    {
                                        name: 'Planks'
                                    }
                                ]
                                ,

                                cool_down: [

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
                name: 'Full body/Upper body',

                schedule:
                    [
                        {
                            session:
                            {
                                day: 1,
                                warm_up:
                                    [

                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Squats'
                                    },
                                    {
                                        name: 'Deadlifts'
                                    },
                                    {
                                        name: 'Bench Press',
                                        instruction: 'To do a bench press, lie on a flat bench with your eyes under the bar and your feet on the ground12. Grab the bar with a medium grip-width and your thumbs around the bar1. Unrack the bar by straightening your arms and keep it over your shoulders123. Lower the bar to your mid-chest or just below your clavicle, while keeping your elbows slightly tucked in and your chest high134. Pause on your chest without bouncing the bar4. Press the bar back up until your arms are straight, while flaring your elbows out and exhaling.',
                                        Weight: '135',
                                        Reps: '8',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Pull-ups'
                                    },
                                    {
                                        name: 'Lunges'
                                    },
                                    {
                                        name: 'Planks'
                                    }
                                ]
                                ,

                                cool_down: [

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

                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Dumbbell shoulder press'
                                    },
                                    {
                                        name: 'Bent-over rows'
                                    },
                                    {
                                        name: 'Barbell curls'
                                    },
                                    {
                                        name: 'Tricep pushdowns'
                                    },
                                    {
                                        name: 'Push-ups'
                                    },
                                    {
                                        name: 'Planks'
                                    }
                                ]
                                ,

                                cool_down: [

                                ]
                            }
                        },
                        'rest',
                        'rest',
                        'rest',
                        'rest'
                    ]
            }
        }
    },
    flexibility: {
        four_six: {
            workout: {
                name: 'Full body & Upper/Lower body',

                schedule:
                    [
                        {
                            session:
                            {
                                day: 1,
                                warm_up:
                                    [

                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Squats'
                                    },
                                    {
                                        name: 'Deadlifts'
                                    },
                                    {
                                        name: 'Bench Press',
                                        instruction: 'To do a bench press, lie on a flat bench with your eyes under the bar and your feet on the ground12. Grab the bar with a medium grip-width and your thumbs around the bar1. Unrack the bar by straightening your arms and keep it over your shoulders123. Lower the bar to your mid-chest or just below your clavicle, while keeping your elbows slightly tucked in and your chest high134. Pause on your chest without bouncing the bar4. Press the bar back up until your arms are straight, while flaring your elbows out and exhaling.',
                                        Weight: '135',
                                        Reps: '8',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Pull-ups'
                                    },
                                    {
                                        name: 'Lunges'
                                    },
                                    {
                                        name: 'Planks'
                                    }

                                ]
                                ,

                                cool_down: [

                                ]
                            }
                        },
                        {
                            session:
                            {
                                day: 2,
                                warm_up:
                                    [

                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Dumbbell shoulder press'
                                    },
                                    {
                                        name: 'Bent-over rows'
                                    },
                                    {
                                        name: 'Barbell curls'
                                    },
                                    {
                                        name: 'Tricep pushdowns'
                                    },
                                    {
                                        name: 'Push-ups'
                                    },
                                    {
                                        name: 'Planks'
                                    }
                                ]
                                ,

                                cool_down: [

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

                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Deadlifts'
                                    },
                                    {
                                        name: 'Leg press'
                                    },
                                    {
                                        name: 'Incline bench press'
                                    },
                                    {
                                        name: 'Pull-ups'
                                    },
                                    {
                                        name: 'Lateral raises'
                                    },
                                    {
                                        name: 'Planks'
                                    }
                                ]
                                ,

                                cool_down: [

                                ]
                            }
                        },
                        {
                            session:
                            {
                                day: 5,
                                warm_up:
                                    [

                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Squats'
                                    },
                                    {
                                        name: 'Romanian deadlifts'
                                    },
                                    {
                                        name: 'Leg extensions'
                                    },
                                    {
                                        name: 'Leg curls'
                                    },
                                    {
                                        name: 'Calf raises'
                                    },
                                    {
                                        name: 'Planks'
                                    }
                                ]
                                ,

                                cool_down: [

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
                name: 'Full body/Upper body',

                schedule:
                    [
                        {
                            session:
                            {
                                day: 1,
                                warm_up:
                                    [

                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Squats'
                                    },
                                    {
                                        name: 'Deadlifts'
                                    },
                                    {
                                        name: 'Bench Press',
                                        instruction: 'To do a bench press, lie on a flat bench with your eyes under the bar and your feet on the ground12. Grab the bar with a medium grip-width and your thumbs around the bar1. Unrack the bar by straightening your arms and keep it over your shoulders123. Lower the bar to your mid-chest or just below your clavicle, while keeping your elbows slightly tucked in and your chest high134. Pause on your chest without bouncing the bar4. Press the bar back up until your arms are straight, while flaring your elbows out and exhaling.',
                                        Weight: '135',
                                        Reps: '8',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Pull-ups'
                                    },
                                    {
                                        name: 'Lunges'
                                    },
                                    {
                                        name: 'Planks'
                                    }
                                ]
                                ,

                                cool_down: [

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

                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Dumbbell shoulder press'
                                    },
                                    {
                                        name: 'Bent-over rows'
                                    },
                                    {
                                        name: 'Barbell curls'
                                    },
                                    {
                                        name: 'Tricep pushdowns'
                                    },
                                    {
                                        name: 'Push-ups'
                                    },
                                    {
                                        name: 'Planks'
                                    }
                                ]
                                ,

                                cool_down: [

                                ]
                            }
                        },
                        'rest',
                        'rest',
                        'rest',
                        'rest'
                    ]
            }
        }
    },
    overall_fitness: {
        four_six: {
            workout: {
                name: 'Strength and Cardio',

                schedule:
                    [
                        {
                            session:
                            {
                                day: 1,
                                warm_up:
                                    [
                                        {
                                            name: '10 minutes of light cardio'
                                        }
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Bench press'
                                    },
                                    {
                                        name: 'Shoulder press'
                                    },
                                    {
                                        name: 'Rows'
                                    },
                                    {
                                        name: 'Bicep curls'
                                    },
                                    {
                                        name: 'Tricep extensions'
                                    }

                                ]
                                ,

                                cool_down: [
                                    {
                                        name: '20-30 minutes on a bike, rower, or treadmill'
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
                                            name: '10 minutes of light cardio'
                                        }
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Squats'
                                    },
                                    {
                                        name: 'Deadlifts'
                                    },
                                    {
                                        name: 'Lunges'
                                    },
                                    {
                                        name: 'Calf raises'
                                    }
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: '20-30 minutes on a bike, rower, or treadmill'
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
                                            name: '10 minutes of light cardio'
                                        }
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Pull-ups'
                                    },
                                    {
                                        name: 'Push-ups'
                                    },
                                    {
                                        name: 'Dips'
                                    },
                                    {
                                        name: 'Single-leg deadlifts'
                                    },
                                    {
                                        name: 'Planks'
                                    }
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: '20-30 minutes on a bike, rower, or treadmill'
                                    }
                                ]
                            }
                        },
                        'Active Recovery',
                        'rest',
                        'rest',
                        'rest'
                    ]
            }
        },
        two_three: {
            workout: {
                name: 'Upper/Lower body with Cardio',

                schedule:
                    [
                        {
                            session:
                            {
                                day: 1,
                                warm_up:
                                    [
                                        {
                                            name: '10 minutes of light cardio'
                                        }
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Bench Press',
                                        instruction: 'To do a bench press, lie on a flat bench with your eyes under the bar and your feet on the ground12. Grab the bar with a medium grip-width and your thumbs around the bar1. Unrack the bar by straightening your arms and keep it over your shoulders123. Lower the bar to your mid-chest or just below your clavicle, while keeping your elbows slightly tucked in and your chest high134. Pause on your chest without bouncing the bar4. Press the bar back up until your arms are straight, while flaring your elbows out and exhaling.',
                                        Weight: '135',
                                        Reps: '8',
                                        Sets: '3',
                                        photoURL: ''
                                    },
                                    {
                                        name: 'Shoulder press'
                                    },
                                    {
                                        name: 'Rows'
                                    },
                                    {
                                        name: 'Bicep curls'
                                    },
                                    {
                                        name: 'Tricep extensions'
                                    }
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: '20-30 minutes on a bike, rower, or treadmill'
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
                                            name: '10 minutes of light cardio'
                                        }
                                    ]
                                ,

                                main_workout: [
                                    {
                                        name: 'Squats'
                                    },
                                    {
                                        name: 'Deadlifts'
                                    },
                                    {
                                        name: 'Lunges'
                                    },
                                    {
                                        name: 'Calf raises'
                                    }
                                ]
                                ,

                                cool_down: [
                                    {
                                        name: '20-30 minutes on a bike, rower, or treadmill'
                                    }
                                ]
                            }
                        },
                        'Active Recovery',
                        'rest',
                        'rest',
                        'rest',
                        'rest'
                    ]
            }
        }
    }
}

export default beginner