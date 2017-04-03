/*  Key Frame attributes :
* hideElement : elementId.
* showElement : elementId.
* action goToFrame : and   goToFrame : frame Number ex: , action: "goToFrame", goToFrame: 1 + 30
* smooth rate: Make more frame to smooth in tween. If you set smoothRate = 2, number frame is increase 2 times. @TODO MUST BE ADDED
*
* */


var spinning_plate_1 = {
    "layer_id": "line_1_dished",
    "keyframes": [
        {"frameNum": 1,      "css": [{rotate: -15, opacity: 1}], "tween": true},
        {"frameNum": 1 + 6, "css": [{rotate: 15}], "tween": true},
        {"frameNum": 1 + 12, "css": [{rotate: -15}], "tween": true, action: "goToFrame", goToFrame: 1 + 1}
    ]
};

var spinning_plate_2 = {
    "layer_id": "line_2_dished",
    "keyframes": [
        {"frameNum": 1, "css": [{rotate: -15, opacity: 1}], "tween": true},
        {"frameNum": 1 + 6, "css": [{rotate: 15}], "tween": true},
        {"frameNum": 1 + 12, "css": [{rotate: -15}], "tween": true, action: "goToFrame", goToFrame: 1 + 6}
    ]
};

var spinning_plate_3 = {
    "layer_id": "line_3_dished",
    "keyframes": [
        {"frameNum": 1, "css": [{rotate: -15, opacity: 1}], "tween": true},
        {"frameNum": 1 + 6, "css": [{rotate: 15}], "tween": true},
        {"frameNum": 1 + 12, "css": [{rotate: -15}], "tween": true, action: "goToFrame", goToFrame: 1 + 6}
    ]
};

var spinning_plate_4 = {
    "layer_id": "line_4_dished",
    "keyframes": [
        {"frameNum": 1, "css": [{rotate: -15, opacity: 1}], "tween": true},
        {"frameNum": 1 + 6, "css": [{rotate: 15}], "tween": true},
        {"frameNum": 1 + 12, "css": [{rotate: -15}], "tween": true, action: "goToFrame", goToFrame: 1 + 6}
    ]
};

var spinning_plate_5 = {
    "layer_id": "line_5_dished",
    "keyframes": [
        {"frameNum": 1, "css": [{rotate: -15, opacity: 1}], "tween": true},
        {"frameNum": 1 + 6, "css": [{rotate: 15}], "tween": true},
        {"frameNum": 1 + 12, "css": [{rotate: -15}], "tween": true, action: "goToFrame", goToFrame: 1 + 6}
    ]
};

var spinning_plate_6 = {
    "layer_id": "line_6_dished",
    "keyframes": [
        {"frameNum": 1, "css": [{rotate: -15, opacity: 1}], "tween": true},
        {"frameNum": 1 + 6, "css": [{rotate: 15}], "tween": true},
        {"frameNum": 1 + 12, "css": [{rotate: -15}], "tween": true, action: "goToFrame", goToFrame: 1 + 6}
    ]
}



var bird_1_l = {
    "layer_id": "bird_1_l",
    "keyframes": [
        {"frameNum": 1,     "css": [{opacity: 0}], "tween": false},
        {"frameNum": 1 + 1, "css": [{opacity: 1}], "tween": false},
        {"frameNum": 1 + 3, "css": [{opacity: 0}], "tween": false},
        {"frameNum": 1 + 5, "css": [{opacity: 0}], "tween": false},
        {"frameNum": 1 + 7, "css": [{opacity: 0}], "tween": true, action: "goToFrame", goToFrame: 1 + 1}
    ]
}

var bird_2_l = {
    "layer_id": "bird_2_l",
    "keyframes": [
        {"frameNum": 1,     "css": [{opacity: 0}], "tween": false},
        {"frameNum": 1 + 1, "css": [{opacity: 0}], "tween": false},
        {"frameNum": 1 + 3, "css": [{opacity: 1}], "tween": false},
        {"frameNum": 1 + 5, "css": [{opacity: 0}], "tween": false},
        {"frameNum": 1 + 7, "css": [{opacity: 0}], "tween": false, action: "goToFrame", goToFrame: 1 + 1}
    ]
}

var bird_3_l = {
    "layer_id": "bird_3_l",
    "keyframes": [
        {"frameNum": 1,     "css": [{opacity: 0}], "tween": false},
        {"frameNum": 1 + 1, "css": [{opacity: 0}], "tween": false},
        {"frameNum": 1 + 3, "css": [{opacity: 0}], "tween": false},
        {"frameNum": 1 + 5, "css": [{opacity: 1}], "tween": false},
        {"frameNum": 1 + 7, "css": [{opacity: 0}], "tween": false, action: "goToFrame", goToFrame: 1 + 1}
    ]
}

var bird_4_l = {
    "layer_id": "bird_4_l",
    "keyframes": [
        {"frameNum": 1,     "css": [{opacity: 0}], "tween": false},
        {"frameNum": 1 + 2, "css": [{opacity: 0}], "tween": false},
        {"frameNum": 1 + 4, "css": [{opacity: 0}], "tween": false},
        {"frameNum": 1 + 6, "css": [{opacity: 0}], "tween": false},
        {"frameNum": 1 + 8, "css": [{opacity: 1}], "tween": false, action: "goToFrame", goToFrame: 1 + 1}
    ]
}

var bird_1_r = {
    "layer_id": "bird_1_r",
    "keyframes": [
        {"frameNum": 1,     "css": [{opacity: 0}], "tween": false},
        {"frameNum": 1 + 2, "css": [{opacity: 1}], "tween": false},
        {"frameNum": 1 + 4, "css": [{opacity: 0}], "tween": false},
        {"frameNum": 1 + 6, "css": [{opacity: 0}], "tween": false},
        {"frameNum": 1 + 8, "css": [{opacity: 0}], "tween": true, action: "goToFrame", goToFrame: 1 + 1}
    ]
}

var bird_2_r = {
    "layer_id": "bird_2_r",
    "keyframes": [
        {"frameNum": 1,     "css": [{opacity: 0}], "tween": true},
        {"frameNum": 1 + 2, "css": [{opacity: 0}], "tween": true},
        {"frameNum": 1 + 4, "css": [{opacity: 1}], "tween": true},
        {"frameNum": 1 + 6, "css": [{opacity: 0}], "tween": true},
        {"frameNum": 1 + 8, "css": [{opacity: 0}], "tween": true, action: "goToFrame", goToFrame: 1 + 1}
    ]
}

var bird_3_r = {
    "layer_id": "bird_3_r",
    "keyframes": [
        {"frameNum": 1,     "css": [{opacity: 0}], "tween": true},
        {"frameNum": 1 + 2, "css": [{opacity: 0}], "tween": true},
        {"frameNum": 1 + 4, "css": [{opacity: 0}], "tween": true},
        {"frameNum": 1 + 6, "css": [{opacity: 1}], "tween": true},
        {"frameNum": 1 + 8, "css": [{opacity: 0}], "tween": true, action: "goToFrame", goToFrame: 1 + 1}
    ]
}

var bird_4_r = {
    "layer_id": "bird_4_r",
    "keyframes": [
        {"frameNum": 1,     "css": [{opacity: 0}], "tween": true},
        {"frameNum": 1 + 2, "css": [{opacity: 0}], "tween": true},
        {"frameNum": 1 + 4, "css": [{opacity: 0}], "tween": true},
        {"frameNum": 1 + 6, "css": [{opacity: 0}], "tween": true},
        {"frameNum": 1 + 8, "css": [{opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 1}
    ]
}



var incorrectScene = {
    'audioTimelineLayer' : [
        {"timeLineId": "firstWrongLetterScene" , audio : [{'src': [{'file': "audio/aww.mp3", type: "audio/mp3"}],       delayTime: 1}]}
    ],

    'stackTimelineLayer' : [
        {
            "id": "startGameScene",
            "fps" :24,
            "totalFrames": 24,
            "enable" : true,
            "action": [{"keyframes":[
                {"frameNum": 1 + 1, "css": [{}], "tween": true, action : "stopAnimationForDebug"}
            ]}],
            "layers":[
                /*
                * 1 - 8    : change from black to white
                * 1 - 8    : joker standing
                * 8 - 16   : joker move leg down and rotate to the right(Slowly)
                * 16 - 24  : joker rotate to the right (Fast) 
                * 24 - 34  : joker rotate to the left (slow)   (STEP 1)
                * 34 - 40  :  JOKER ROTATE TO THE RIGHT (FAST) (STEP 1)
                * then repeat step step 2
                * */

                {
                    "layer_id": "over-flow",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": true},
                        {"frameNum": 1 + 1, "css": [{opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{opacity: 0.7}], "tween": true},
                        {"frameNum": 1 + 16, "css": [{opacity: 0, height: 0}], "tween": true}
                    ]
                },  {
                    "layer_id": "joker_body_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -17}], "tween": true},
                        {"frameNum": 1 + 1, "css": [{rotate: -17}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: -17}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: 10}], "tween": true},
                        {"frameNum": 1 + 34, "css": [{rotate: 1}], "tween": true},
                        {"frameNum": 1 + 42, "css": [{rotate: 10}], "tween": true},
                        {"frameNum": 1 + 50, "css": [{rotate: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 34}
                    ]
                }, {
                    "layer_id": "joker_head_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -60}], "tween": true},
                        {"frameNum": 1 + 1, "css": [{rotate: -60}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: -60}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: 27}], "tween": true},
                        {"frameNum": 1 + 34, "css": [{rotate: 0}], "tween": true},
                        {"frameNum": 1 + 42, "css": [{rotate: 15}], "tween": true},
                        {"frameNum": 1 + 50, "css": [{rotate: 0}], "tween": true, action: "goToFrame", goToFrame: 1 + 34}
                    ]
                },






                {
                    "layer_id": "joker_hand_left_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 15}], "tween": true},
                        {"frameNum": 1 + 1, "css": [{rotate: 15}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: 15}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: 5}], "tween": true}

                    ]
                },
                {
                    "layer_id": "joker_elbow_left_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 20}], "tween": true},
                        {"frameNum": 1 + 1, "css": [{rotate: 20}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: 20}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: 35}], "tween": true},
                        {"frameNum": 1 + 34, "css": [{rotate: 32}], "tween": true},
                        {"frameNum": 1 + 42, "css": [{rotate: 50}], "tween": true},
                        {"frameNum": 1 + 50, "css": [{rotate: 32}], "tween": true, action: "goToFrame", goToFrame: 1 + 34}
                    ]
                },
                {
                    "layer_id": "joker_forearm_left_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -20}], "tween": true},
                        {"frameNum": 1 + 1, "css": [{rotate: -20}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: -20}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: -40}], "tween": true}
                    ]
                },

                {
                    "layer_id": "left_leg_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 20}], "tween": true},
                        {"frameNum": 1 + 1, "css": [{rotate: 20}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: 20}], "tween": true},
                        {"frameNum": 1 + 16, "css": [{rotate: 15}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: 85}], "tween": true},
                        {"frameNum": 1 + 34, "css": [{rotate: 67}], "tween": true},
                        {"frameNum": 1 + 42, "css": [{rotate: 85}], "tween": true},
                        {"frameNum": 1 + 50, "css": [{rotate: 67}], "tween": true, action: "goToFrame", goToFrame: 1 + 34}
                    ]
                },







                {
                    "layer_id": "joker_hand_right_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 0}], "tween": true},
                        {"frameNum": 1 + 1, "css": [{rotate: 0}], "tween": true},
                        {"frameNum": 1 + 3, "css": [{rotate: 0}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: -40}], "tween": true},
                        {"frameNum": 1 + 34, "css": [{rotate: -12}], "tween": true},
                        {"frameNum": 1 + 42, "css": [{rotate: -40}], "tween": true},
                        {"frameNum": 1 + 50, "css": [{rotate: -12}], "tween": true, action: "goToFrame", goToFrame: 1 + 34}
                    ]
                },

                {
                    "layer_id": "joker_elbow_right_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -45}], "tween": true},
                        {"frameNum": 1 + 1, "css": [{rotate: -45}], "tween": true},
                        {"frameNum": 1 + 3, "css": [{rotate: -35}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: -5}], "tween": true},
                        {"frameNum": 1 + 34, "css": [{rotate: -35}], "tween": true},
                        {"frameNum": 1 + 42, "css": [{rotate: -35 + 8}], "tween": true},
                        {"frameNum": 1 + 50, "css": [{rotate: -35}], "tween": true, action: "goToFrame", goToFrame: 1 + 34}
                    ]
                }, {
                    "layer_id": "joker_forearm_right_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 28}], "tween": true},
                        {"frameNum": 1 + 3, "css": [{rotate: 28}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: 51}], "tween": true},
                        {"frameNum": 1 + 34, "css": [{rotate: 49}], "tween": true},
                        {"frameNum": 1 + 42, "css": [{rotate: 51}], "tween": true},
                        {"frameNum": 1 + 50, "css": [{rotate: 49}], "tween": true, action: "goToFrame", goToFrame: 1 + 34}
                    ]
                },




                {
                    "layer_id": "right_foot_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -1}], "tween": true},
                        {"frameNum": 1 + 1, "css": [{rotate: -1}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: -1}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: 1}], "tween": true},
                        {"frameNum": 1 + 34, "css": [{rotate: -2}], "tween": true},
                        {"frameNum": 1 + 42, "css": [{rotate: 1}], "tween": true},
                        {"frameNum": 1 + 50, "css": [{rotate: -2}], "tween": true, action: "goToFrame", goToFrame: 1 + 34}
                    ]
                },



                {
                    "layer_id": "line_group_1_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -50}], "tween": true},
                        {"frameNum": 1 + 3, "css": [{rotate: -50}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: -90}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_group_2_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -20}], "tween": true},
                        {"frameNum": 1 + 1, "css": [{rotate: -20}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: -20}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: -20}], "tween": true},
                        {"frameNum": 1 + 34, "css": [{rotate: -22}], "tween": true},
                        {"frameNum": 1 + 42, "css": [{rotate: -20}], "tween": true},
                        {"frameNum": 1 + 50, "css": [{rotate: -22}], "tween": true, action: "goToFrame", goToFrame: 1 + 34}
                    ]
                }, {
                    "layer_id": "line_group_3_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 30}], "tween": true},
                        {"frameNum": 1 + 1, "css": [{rotate: 30}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: 30}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: 7}], "tween": true},
                        {"frameNum": 1 + 34, "css": [{rotate: -5}], "tween": true},
                        {"frameNum": 1 + 42, "css": [{rotate: 7}], "tween": true},
                        {"frameNum": 1 + 50, "css": [{rotate: -5}], "tween": true, action: "goToFrame", goToFrame: 1 + 34}
                    ]
                }, {
                    "layer_id": "line_group_4_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 0}], "tween": true},
                        {"frameNum": 1 + 1, "css": [{rotate: 0}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: 0}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_group_5_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 0}], "tween": true},
                        {"frameNum": 1 + 1, "css": [{rotate: 0}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: 0}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_group_6_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 0}], "tween": true},
                        {"frameNum": 1 + 1, "css": [{rotate: 0}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: 0}], "tween": true}
                    ]
                },




                {
                    "layer_id": "line_2",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -4}], "tween": true},
                        {"frameNum": 1 + 1, "css": [{rotate: -4}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: -4}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: -6}], "tween": true},
                        {"frameNum": 1 + 34, "css": [{rotate: -5}], "tween": true},
                        {"frameNum": 1 + 42, "css": [{rotate: -8}], "tween": true},
                        {"frameNum": 1 + 50, "css": [{rotate: -5}], "tween": true, action: "goToFrame", goToFrame: 1 + 34}
                    ]
                }, {
                    "layer_id": "line_3",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 12}], "tween": true},
                        {"frameNum": 1 + 1, "css": [{rotate: 12}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: 12}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: 12 + 4}], "tween": true},
                        {"frameNum": 1 + 34, "css": [{rotate: 12 + 8}], "tween": true},
                        {"frameNum": 1 + 42, "css": [{rotate: 12 + 2}], "tween": true},
                        {"frameNum": 1 + 50, "css": [{rotate: 12 + 8}], "tween": true, action: "goToFrame", goToFrame: 1 + 34}
                    ]
                },
                {
                    "layer_id": "line_5",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -0}], "tween": true},
                        {"frameNum": 1 + 1, "css": [{rotate: -0}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: -2}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: -6}], "tween": true},
                        {"frameNum": 1 + 34, "css": [{rotate: -3}], "tween": true},
                        {"frameNum": 1 + 42, "css": [{rotate: -1}], "tween": true},
                        {"frameNum": 1 + 50, "css": [{rotate: -3}], "tween": true, action: "goToFrame", goToFrame: 1 + 34}
                    ]
                }, {
                    "layer_id": "line_6",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 15}], "tween": true},
                        {"frameNum": 1 + 1, "css": [{rotate: 15}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: 15}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: 15 + 2}], "tween": true},
                        {"frameNum": 1 + 34, "css": [{rotate: 15 + 5}], "tween": true},
                        {"frameNum": 1 + 42, "css": [{rotate: 15 + 2}], "tween": true},
                        {"frameNum": 1 + 50, "css": [{rotate: 15 + 5}], "tween": true, action: "goToFrame", goToFrame: 1 + 34}
                    ]
                },




                spinning_plate_1, spinning_plate_2, spinning_plate_3, spinning_plate_4, spinning_plate_5, spinning_plate_6



            ]
        }, {
            "id": "1stWrongLetterScene",
            "audio": [{'src': [{'file': "audio/aww.mp3", type: "audio/mp3"}], 'startFrameNum': 4}],
            "fps" :24,
            "totalFrames": 24,
            "action": [{"keyframes":[ ]}],
            "layers":[
                /*
                * 1 + 6 : move down
                * 1 + 7 : move left leg to top (short)
                * 1 + 12 : move left leg to top  (long) and change face
                * 1 + 18 : move left leg down  (step 1)
                * 1 + 24 : move left leg top   (step 2)
                * 1 + 30++ : move left leg down   (step 3 repeat to step 1)
                * */
                {
                    "layer_id": "joker_body_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: 153, left: 88, rotate: 1}], "tween": true},
                        {"frameNum": 1 + 7, "css": [{top: 163, left: 132, rotate: -5}], "tween": true},
                        {"frameNum": 1 + 10, "css": [{top: 154, left: 132, rotate: 18}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: 152, left: 133, rotate: 25}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{top: 152, left: 133, rotate: 13}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{top: 152, left: 133, rotate: 18}], "tween": true},
                        {"frameNum": 1 + 30, "css": [{top: 152, left: 133, rotate: 13}], "tween": true, action: "goToFrame", goToFrame: 1 + 18}
                    ]
                }, {
                    "layer_id": "joker_head_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 0}], "tween": true},
                        {"frameNum": 1 + 7, "css": [{rotate: -64}], "tween": true},
                        {"frameNum": 1 + 10, "css": [{rotate: -27}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: 13}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{rotate: 7}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: 13}], "tween": true},
                        {"frameNum": 1 + 30, "css": [{rotate: 7}], "tween": true, action: "goToFrame", goToFrame: 1 + 18}
                    ]
                },
                {
                    "layer_id": "joker_head_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 1 + 7, "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 1 + 10, "css": [{opacity: 1}], "tween": false },
                        {"frameNum": 1 + 12, "css": [{opacity: 1}], "tween": false, showElement: "joker_head_2"}
                    ]
                }, {
                    "layer_id": "joker_head_2",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 0}], "tween": false},
                        {"frameNum": 1 + 7, "css": [{opacity: 0}], "tween": false},
                        {"frameNum": 1 + 10, "css": [{opacity: 0}], "tween": false },
                        {"frameNum": 1 + 12, "css": [{opacity: 1}], "tween": false, hideElement: "joker_head_1"}
                    ]
                },

                {
                    "layer_id": "joker_waist",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -23, left: -25}], "tween": true},
                        {"frameNum": 1 + 10, "css": [{top: -23, left: -25}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: -16, left: -29}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{top: -20, left: -29}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{top: -20, left: -29}], "tween": true},
                        {"frameNum": 1 + 30, "css": [{top: -20, left: -29}], "tween": true, action: "goToFrame", goToFrame: 1 + 18}
                    ]
                },


                {
                    "layer_id": "joker_hand_left_center_p",
                    "keyframes": [
                        {"frameNum": 1,     "css": [{rotate: 5}], "tween": true},
                        {"frameNum": 1 + 7, "css": [{rotate: -40}], "tween": true}

                    ]
                },
                {
                    "layer_id": "joker_elbow_left_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 32}], "tween": true},
                        {"frameNum": 1 + 7, "css": [{rotate: 4}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: 4}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{rotate: 26}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: 39}], "tween": true},
                        {"frameNum": 1 + 30, "css": [{rotate: 26}], "tween": true, action: "goToFrame", goToFrame: 1 + 18}
                    ]
                },
                {
                    "layer_id": "joker_forearm_left_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -40}], "tween": true},
                        {"frameNum": 1 +7, "css": [{rotate: 30}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: 30}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{rotate: 16}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: 5}], "tween": true},
                        {"frameNum": 1 + 30, "css": [{rotate: 16}], "tween": true, action: "goToFrame", goToFrame: 1 + 18}

                    ]
                },

                {
                    "layer_id": "left_leg_center_p",
                    "keyframes": [
                        {"frameNum": 1,     "css": [{top: 149, left: 78, rotate: 67}], "tween": true},
                        {"frameNum": 1 + 7, "css": [{top: 145, left: 127, rotate: 53}], "tween": true},
                        {"frameNum": 1 + 10, "css": [{top: 145, left: 127, rotate: 63}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: 145, left: 118, rotate: 120}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{top: 148, left: 124, rotate: 58}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{top: 145, left: 118, rotate: 75}], "tween": true},
                        {"frameNum": 1 + 30, "css": [{top: 148, left: 124, rotate: 58}], "tween": true, action: "goToFrame", goToFrame: 1 + 18}
                    ]
                }, {
                    "layer_id": "left_shoe_center_p",
                    "keyframes": [
                        {"frameNum": 1,     "css": [{rotate: 0}], "tween": true},
                        {"frameNum": 1 + 7, "css": [{ rotate: 0}], "tween": true},
                        {"frameNum": 1 + 10, "css": [{rotate: 0}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: 0}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{rotate: -12}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: -18}], "tween": true},
                        {"frameNum": 1 + 30, "css": [{rotate: -12}], "tween": true, action: "goToFrame", goToFrame: 1 + 18}
                    ]
                },



                {
                    "layer_id": "joker_hand_right_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -12}], "tween": true},
                        {"frameNum": 1 + 7, "css": [{rotate: -7}], "tween": true},
                        {"frameNum": 1 + 10, "css": [{rotate: -7}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: -70}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{rotate: -60}], "tween": true}
                    ]
                },

                {
                    "layer_id": "joker_elbow_right_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -35}], "tween": true},
                        {"frameNum": 1 + 7, "css": [{rotate: -45}], "tween": true},
                        {"frameNum": 1 + 10, "css": [{rotate: -45}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: 7}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_forearm_right_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 49}], "tween": true},
                        {"frameNum": 12, "css": [{rotate: 49}], "tween": true},
                        {"frameNum": 18, "css": [{rotate: 49}], "tween": true},
                        {"frameNum": 24, "css": [{rotate: 32}], "tween": true}
                    ]
                },




                {
                    "layer_id": "right_foot_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -2}], "tween": true},
                        {"frameNum": 1 + 7, "css": [{rotate: 48}], "tween": true},
                        {"frameNum": 1 + 10, "css": [{rotate: 48}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: 46}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{rotate: 42}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: 46}], "tween": true},
                        {"frameNum": 1 + 30, "css": [{rotate: 42}], "tween": true, action: "goToFrame", goToFrame: 1 + 18}
                    ]
                },



                // disk 1 falling

                {
                    "layer_id": "line_group_1_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: 8, left: -41, rotate: -90}], "tween": true},
                        {"frameNum": 1 + 7, "css": [{top: 8, left: -41, rotate: -90, opacity: 1}], "tween": true, showElement: "line_group_1_falling_center_p"}
                    ]
                },

                {
                    "layer_id": "line_group_1_falling_center_p",
                    "keyframes": [
                        {"frameNum": 1,     "css": [{top: 132, left: 48, rotate: -24, opacity: 0}], "tween": false},
                        {"frameNum": 1 + 7, "css": [{top: 132, left: 48, rotate: -24, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: 70, left: 6, rotate: -24, opacity: 1}], "tween": true, hideElement: "line_group_1_center_p"}
                    ]
                },


                {
                    "layer_id": "line_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 1 + 7, "css": [{opacity: 0}], "tween": true}
                    ]
                },  {
                    "layer_id": "line_1_dished",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 1 + 7, "css": [{opacity: 0}], "tween": true}
                    ]
                },

                {
                    "layer_id": "line_1_falling",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: 34, left: 0, rotate: 0, opacity: 0}], "tween": false},
                        {"frameNum": 1 + 7, "css": [{top: 34, left: 0, rotate: 0, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: 34, left: 0, rotate: 0, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{top: -40, left: -12, rotate: -56, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{top: 30, left: -72, rotate: -187, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 28, "css": [{top: 76, left: -104, rotate: -234, opacity: 1}], "tween": true}
                    ]
                },  {
                    "layer_id": "line_1_dished_falling",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -45, left: -24, rotate: 0, opacity: 0}], "tween": false},
                        {"frameNum": 1 + 7, "css": [{top: -45, left: -24, rotate: 0, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: -21, left: -20, rotate: 0, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{top: -33, left: -56, rotate: -28, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{top: 70, left: -134, rotate: -145, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 28, "css": [{top: 88, left: -154, rotate: -152, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 29, "css": [{top: 88, left: -154, rotate: -160, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 31, "css": [{top: 88, left: -154, rotate: -152, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 33, "css": [{top: 88, left: -154, rotate: -160, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 35, "css": [{top: 88, left: -154, rotate: -152, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 37, "css": [{top: 88, left: -154, rotate: -160, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 39, "css": [{top: 88, left: -154, rotate: -152, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 41, "css": [{top: 88, left: -154, rotate: -160, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 43, "css": [{top: 88, left: -157, rotate: -160, opacity: 1}], "tween": true}
                    ]
                },






                {
                    "layer_id": "line_group_2_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -22}], "tween": true},
                        {"frameNum": 1 + 10, "css": [{rotate: -22}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: -24}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_group_3_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -5}], "tween": true},
                        {"frameNum": 1 + 7, "css": [{rotate: 20}], "tween": true},
                        {"frameNum": 1 + 10, "css": [{rotate: 20}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: -10}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_group_4_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 0}], "tween": true},
                        {"frameNum": 10, "css": [{rotate: 0}], "tween": true},
                        {"frameNum": 12, "css": [{rotate: 15}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_group_5_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 0}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_group_6_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 0}], "tween": true}
                    ]
                },




                {
                    "layer_id": "line_2",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -5}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_3",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 12 + 8}], "tween": true},
                        {"frameNum": 1 + 7, "css": [{rotate: 12}], "tween": true}
                    ]
                },
                {
                    "layer_id": "line_5",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -3}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_6",
                    "keyframes": [
                        {"frameNum": 1 , "css": [{rotate: 15 + 5}], "tween": true}
                    ]
                },




                spinning_plate_2, spinning_plate_3, spinning_plate_4, spinning_plate_5, spinning_plate_6
            ]
        },

        {
            "id": "2ndWrongLetterScene",
            "audio": [{'src': [{'file': "audio/aww.mp3", type: "audio/mp3"}], 'startFrameNum': 4}],
            "fps" :24,
            "totalFrames": 24,
            "action": [{"keyframes":[ ]}],
            "layers":[
                /*
                 * 1 + 4 : move up
                 * 1 + 12 : change face
                 * 1 + 16 : move down (leg move dowm but body move up) step 1
                 * 1 + 20 : move up (leg move up but body move down ) step 2
                 * 1 + 24 : repeat step 1

                 * */

                {
                    "layer_id": "joker_body_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: 152, left: 133, rotate: 13}], "tween": true},
                        {"frameNum": 1 + 3, "css": [{top: 149, left: 127, rotate: 9}], "tween": true},
                        {"frameNum": 1 + 4, "css": [{top: 148, left: 128, rotate: 6}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: 150, left: 127, rotate: 3}], "tween": true},
                        {"frameNum": 1 + 16, "css": [{top: 147, left: 121, rotate: 5}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{top: 148, left: 121, rotate: 8}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{top: 147, left: 121, rotate: 5}], "tween": true, action: "goToFrame", goToFrame: 1 + 16}

                    ]
                }, {
                    "layer_id": "joker_head_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 7}], "tween": true},
                        {"frameNum": 1 + 4, "css": [{rotate: -15}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: -54}], "tween": true},
                        {"frameNum": 1 + 16, "css": [{rotate: -40}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{rotate: -54}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: -40}], "tween": true, action: "goToFrame", goToFrame: 1 + 16}
                    ]
                }, {
                    "layer_id": "joker_head_2",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 1 + 12, "css": [{opacity: 0}], "tween": false}
                    ]
                }, {
                    "layer_id": "joker_head_3",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 0}], "tween": false},
                        {"frameNum": 1 + 12, "css": [{opacity: 1}], "tween": false, hideElement: "joker_head_2"}
                    ]
                },



                {
                    "layer_id": "joker_waist",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -20, left: -29}], "tween": true},
                        {"frameNum": 1 + 4, "css": [{top: -20, left: -29}], "tween": true}
                    ]
                },





                // disk 6 falling div#
                {
                    "layer_id": "line_group_6_falling_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: 68, left: 215, rotate: 0}], "tween": false},
                        {"frameNum": 1 + 3, "css": [{top: 38, left: 210, rotate: 0}], "tween": false},
                        {"frameNum": 1 + 4, "css": [{top: 68, left: 215, rotate: 1}], "tween": false}
                    ]
                }, {
                    "layer_id": "line_6",
                    "keyframes": [
                        {"frameNum": 1,     "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 1 + 3, "css": [{opacity: 0}], "tween": false}
                    ]
                }, {
                    "layer_id": "line_6_dished",
                    "keyframes": [
                        {"frameNum": 1,     "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 1 + 3, "css": [{opacity: 0}], "tween": false}
                    ]
                },

                //
                {
                    "layer_id": "line_6_falling",
                    "keyframes": [
                        {"frameNum": 1,     "css": [{top: -31, left: 8, rotate: 22, opacity: 0}], "tween": false},
                        {"frameNum": 1 + 3, "css": [{top: -31, left: 8, rotate: 22, opacity: 1}], "tween": true, hideElement: "line_6"},
                        {"frameNum": 1 + 6, "css": [{top: -72, left: 3, rotate: 57, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: -111, left: 3, rotate: 80, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 16, "css": [{top: -90, left: 5, rotate: 85, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{top: -15, left: 6, rotate: 87, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{top: 95, left: 22, rotate: 91, opacity: 1}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_6_dished_falling",
                    "keyframes": [
                        {"frameNum": 1,     "css": [{top: -36, left: -3, rotate: 15, opacity: 0}], "tween": false},
                        {"frameNum": 1 + 3, "css": [{top: -36, left:  -3, rotate: 15, opacity: 1}], "tween": true, hideElement: "line_6_dished"},
                        {"frameNum": 1 + 6, "css": [{top: -84, left: 14, rotate: 8, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: -109, left: 14, rotate: 40, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 16, "css": [{top: -90, left: 22, rotate: 35, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{top: 5, left: 24, rotate: 31, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{top: 133, left: 37, rotate: 6, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 28, "css": [{top: 133, left: 37, rotate: -8, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 32, "css": [{top: 133, left: 37, rotate: 8, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 36, "css": [{top: 133, left: 37, rotate: -8, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 40, "css": [{top: 133, left: 37, rotate: 8, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 44, "css": [{top: 133, left: 37, rotate: -8, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 48, "css": [{top: 133, left: 37, rotate: 0, opacity: 1}], "tween": true}
                    ]
                },

                //




                {
                    "layer_id": "joker_hand_left_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -40}], "tween": true},
                        {"frameNum": 1 + 3, "css": [{rotate: -23}], "tween": true},
                        {"frameNum": 1 + 4, "css": [{rotate: -7}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: -20}], "tween": true},
                        {"frameNum": 1 + 16, "css": [{rotate: -30}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{rotate: -35}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: -30}], "tween": true, action: "goToFrame", goToFrame: 1 + 16}

                    ]
                },
                {
                    "layer_id": "joker_elbow_left_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 26}], "tween": true},
                        {"frameNum": 1 + 4, "css": [{rotate: 9}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: 23}], "tween": true},
                        {"frameNum": 1 + 16, "css": [{rotate: 15}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{rotate: 23}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: 15}], "tween": true, action: "goToFrame", goToFrame: 1 + 16}
                    ]
                },
                {
                    "layer_id": "joker_forearm_left_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 16}], "tween": true},
                        {"frameNum": 1 + 4, "css": [{rotate: 16}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: 3}], "tween": true}

                    ]
                },

                {
                    "layer_id": "left_leg_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: 148, left: 124, rotate: 58}], "tween": true},
                        {"frameNum": 1 + 3, "css": [{top: 144, left: 112, rotate: 94}], "tween": true},
                        {"frameNum": 1 + 4, "css": [{top: 144, left: 112, rotate: 120}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: 144, left: 112, rotate: 110}], "tween": true},
                        {"frameNum": 1 + 16, "css": [{top: 144, left: 112, rotate: 100}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{top: 144, left: 112, rotate: 106}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{top: 144, left: 112, rotate: 100}], "tween": true, action: "goToFrame", goToFrame: 1 + 16}
                    ]
                }, {
                    "layer_id": "left_shoe_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -12}], "tween": true},
                        {"frameNum": 1 + 3, "css": [{rotate: -6}], "tween": true},
                        {"frameNum": 1 + 4, "css": [{rotate: -30}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: -30}], "tween": true},
                        {"frameNum": 1 + 16, "css": [{rotate: -8}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{rotate: -20}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: -8}], "tween": true, action: "goToFrame", goToFrame: 1 + 16}
                    ]
                },



                {
                    "layer_id": "joker_hand_right_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -60}], "tween": true},
                        {"frameNum": 1 + 3, "css": [{rotate: 5}], "tween": true},
                        {"frameNum": 1 + 4, "css": [{rotate: -1}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: 18}], "tween": true},
                        {"frameNum": 1 + 16, "css": [{rotate: 18}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{rotate: 14}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: 18}], "tween": true, action: "goToFrame", goToFrame: 1 + 16}
                    ]
                },

                {
                    "layer_id": "joker_elbow_right_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 7}], "tween": true},
                        {"frameNum": 1 + 3, "css": [{rotate: -47}], "tween": true},
                        {"frameNum": 1 + 4, "css": [{rotate: -40}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: -57}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_forearm_right_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 32}], "tween": true},
                        {"frameNum": 1 + 4, "css": [{rotate: 19}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: 19}], "tween": true}
                    ]
                },




                {
                    "layer_id": "right_foot_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 42}], "tween": true},
                        {"frameNum": 1 + 4, "css": [{rotate: 38}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: 36}], "tween": true},
                        {"frameNum": 1 + 16, "css": [{rotate: 34}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{rotate: 31}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: 34}], "tween": true, action: "goToFrame", goToFrame: 1 + 16}
                    ]
                },










                {
                    "layer_id": "line_group_2_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -24}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_group_3_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -10}], "tween": true},
                        {"frameNum": 1 + 4, "css": [{rotate: -10}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: 10}], "tween": true},
                        {"frameNum": 1 + 16, "css": [{rotate: 15}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_group_4_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 15}], "tween": true},
                        {"frameNum": 1 + 4, "css": [{rotate: 18}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_group_5_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 0}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_group_6_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 0}], "tween": true}
                    ]
                },




                {
                    "layer_id": "line_2",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -5}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_3",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 12}], "tween": true}
                    ]
                },
                {
                    "layer_id": "line_5",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -3}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_6",
                    "keyframes": [
                        {"frameNum": 1 , "css": [{rotate: 15 + 5}], "tween": true}
                    ]
                },




                spinning_plate_2, spinning_plate_3, spinning_plate_4, spinning_plate_5
            ]
        },

        {
            "id": "3rdWrongLetterScene",
            "audio": [{'src': [{'file': "audio/aww.mp3", type: "audio/mp3"}], 'startFrameNum': 4}],
            "fps" :24,
            "totalFrames": 24,
            "action": [{"keyframes":[ ]}],
            "layers":[
                /*
                 * 1 : repeat current step
                 * 1 + 8 : Prepare to Jump (move to right) and lower right leg)
                 * 1 + 12 : center screen
                 * 1 + 16 : move to the left
                 * 1 + 20 : change face
                 * 1 + 28 : rotate to right  (step 1)
                 * 1 + 35 : rotate to left   (step 2)
                 * 1 + 42 : rotate to right   (step 3) repeat step 1
                 * */

                {
                    "layer_id": "joker_body_center_p",
                    "keyframes": [
                        {"frameNum": 1,      "css": [{top: 147, left: 126, rotate: 5}], "tween": true},
                        {"frameNum": 1 + 8,  "css": [{top: 168, left: 136, rotate: 34}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: 120, left: 98, rotate: -13}], "tween": true},
                        {"frameNum": 1 + 16, "css": [{top: 141, left: 54, rotate: -40}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{top: 151, left: 46, rotate: -57}], "tween": true},
                        {"frameNum": 1 + 28, "css": [{top: 141, left: 46, rotate: -20}], "tween": true},
                        {"frameNum": 1 + 35, "css": [{top: 141, left: 46, rotate: -28}], "tween": true},
                        {"frameNum": 1 + 42, "css": [{top: 141, left: 46, rotate: -20}], "tween": true, action: "goToFrame", goToFrame: 1 + 28}

                    ]
                }, {
                    "layer_id": "joker_head_center_p",
                    "keyframes": [
                        {"frameNum": 1,      "css": [{rotate: -40}], "tween": true},
                        {"frameNum": 1 + 8,  "css": [{rotate: 36}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: -21}], "tween": true},
                        {"frameNum": 1 + 16, "css": [{rotate: -43}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{rotate: -47}], "tween": true},
                        {"frameNum": 1 + 28, "css": [{rotate: 27}], "tween": true},
                        {"frameNum": 1 + 35, "css": [{rotate: 9}], "tween": true},
                        {"frameNum": 1 + 42, "css": [{rotate: 27}], "tween": true, action: "goToFrame", goToFrame: 1 + 28}
                    ]
                },

                {
                    "layer_id": "joker_head_3",
                    "keyframes": [
                         {"frameNum": 1, "css": [{opacity: 1}], "tween": false},
                         {"frameNum": 1 + 16, "css": [{opacity: 1}], "tween": false},
                         {"frameNum": 1 + 20, "css": [{opacity: 0}], "tween": false}
                    ]
                },
                {
                    "layer_id": "joker_head_4",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 0}], "tween": false},
                        {"frameNum": 1 + 16, "css": [{opacity: 0}], "tween": false},
                        {"frameNum": 1 + 20, "css": [{opacity: 1}], "tween": false, hideElement: "joker_head_3"}
                    ]
                },



                {
                    "layer_id": "joker_waist",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -20, left: -29}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{top: -20, left: -29}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: -11, left: -26}], "tween": true},
                        {"frameNum": 1 + 16, "css": [{top: -11, left: -26}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{top: -12, left: -25}], "tween": true},
                        {"frameNum": 1 + 28, "css": [{top: -17, left: -27}], "tween": true}
                    ]
                },





                // disk 6 falling div#
                {
                    "layer_id": "line_group_2_falling_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: 74, left: 128, rotate: 0}], "tween": false},
                        {"frameNum": 1 + 8, "css": [{top: 74, left: 128, rotate: 0}], "tween": false}

                    ]
                }, {
                    "layer_id": "line_2",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 1 + 8, "css": [{opacity: 0}], "tween": false}
                    ]
                }, {
                    "layer_id": "line_2_dished",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 1 + 8, "css": [{opacity: 0}], "tween": false}
                    ]
                },

                //
                {
                    "layer_id": "line_2_falling",
                    "keyframes": [
                        {"frameNum": 1,      "css": [{top: -51, left: 18, rotate: 40, opacity: 0}], "tween": false},
                        {"frameNum": 1 + 8, "css": [{top: -51, left: 18, rotate: 40, opacity: 1}], "tween": true, hideElement: "line_2"},
//                        {"frameNum": 1 + 9, "css": [{top: -51, left: 41, rotate: 74, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: -86, left: 37, rotate: 52, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 16, "css": [{top: -99, left: 40, rotate: 16, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{top: -111, left: 37, rotate: -12, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 21, "css": [{top: -70, left: 45, rotate: -10, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 35, "css": [{top: 56, left: 76, rotate: -104, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 36, "css": [{top: 99, left: 78, rotate: -91, opacity: 1}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_2_dished_falling",
                    "keyframes": [
                        {"frameNum": 1,      "css": [{top: -55, left: 11, rotate: 30, opacity: 0}], "tween": false},
                        {"frameNum": 1 + 8, "css": [{top: -55, left: 11, rotate: 30, opacity: 1}], "tween": true, hideElement: "line_2_dished"},
//                        {"frameNum": 1 + 9, "css": [{top: -32, left: 57, rotate: 106, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: -59, left: 55, rotate: 131, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 16, "css": [{top: -83, left: 84, rotate: 187, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{top: -79, left: 89, rotate: 212, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 28, "css": [{top: -55, left: 92, rotate: 207, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 35, "css": [{top: 93, left: 100, rotate: 170, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 36, "css": [{top: 138, left: 78, rotate: 172, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 40, "css": [{top: 138, left: 78, rotate: 190, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 43, "css": [{top: 138, left: 78, rotate: 171, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 46, "css": [{top: 138, left: 78, rotate: 189, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 49, "css": [{top: 138, left: 78, rotate: 171, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 52, "css": [{top: 138, left: 78, rotate: 189, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 55, "css": [{top: 138, left: 78, rotate: 171, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 58, "css": [{top: 138, left: 78, rotate: 189, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 61, "css": [{top: 138, left: 78, rotate: 180, opacity: 1}], "tween": true}
                    ]
                },

                //




                {
                    "layer_id": "joker_hand_left_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -30}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: 0}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: -42, left: -18, rotate: -18}], "tween": true},
                        {"frameNum": 1 + 16, "css": [{top: -42, left: -18, rotate: -30}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{top: -42, left: -18, rotate: 8}], "tween": true},
                        {"frameNum": 1 + 28, "css": [{top: -42, left: -18, rotate: -8}], "tween": true},
                        {"frameNum": 1 + 35, "css": [{top: -42, left: -18, rotate: -13}], "tween": true},
                        {"frameNum": 1 + 42, "css": [{top: -42, left: -18, rotate: -8}], "tween": true, action: "goToFrame", goToFrame: 1 + 28}

                    ]
                },
                {
                    "layer_id": "joker_elbow_left_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 15}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: 58}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: 58}], "tween": true},
                        {"frameNum": 1 + 16, "css": [{rotate: 29}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{rotate: 32}], "tween": true},
                        {"frameNum": 1 + 28, "css": [{rotate: 68}], "tween": true},
                        {"frameNum": 1 + 35, "css": [{rotate: 53}], "tween": true},
                        {"frameNum": 1 + 42, "css": [{rotate: 68}], "tween": true, action: "goToFrame", goToFrame: 1 + 28}
                    ]
                },
                {
                    "layer_id": "joker_forearm_left_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 3}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: -7}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: -3}], "tween": true},
                        {"frameNum": 1 + 16, "css": [{rotate: 11}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{rotate: -27}], "tween": true},
                        {"frameNum": 1 + 28, "css": [{rotate: -18}], "tween": true},
                        {"frameNum": 1 + 35, "css": [{rotate: -3}], "tween": true},
                        {"frameNum": 1 + 42, "css": [{rotate: -18}], "tween": true, action: "goToFrame", goToFrame: 1 + 28}

                    ]
                },

                {
                    "layer_id": "left_leg_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: 144, left: 112, rotate: 100}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{top: 162, left: 133, rotate: 122}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: 131, left: 88, rotate: 68}], "tween": true},
                        {"frameNum": 1 + 16, "css": [{top: 144, left: 57, rotate: 18}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{top: 140, left: 37, rotate: 0}], "tween": true},
                        {"frameNum": 1 + 28, "css": [{top: 140, left: 37, rotate: 0}], "tween": true}
                    ]
                }, {
                    "layer_id": "left_shoe_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -8}], "tween": true},
                        {"frameNum": 1 + 16, "css": [{rotate: -8}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{rotate: 2}], "tween": true}
                    ]
                },

                {
                    "layer_id": "left_foot_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 0}], "tween": true},
                        {"frameNum": 1 + 28, "css": [{rotate: 0}], "tween": true},
                        {"frameNum": 1 + 35, "css": [{rotate: -2}], "tween": true},
                        {"frameNum": 1 + 42, "css": [{rotate: 0}], "tween": true, action: "goToFrame", goToFrame: 1 + 28}
                    ]
                },




                {
                    "layer_id": "joker_hand_right_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 18}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: 17}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: 31}], "tween": true},
                        {"frameNum": 1 + 16, "css": [{rotate: -20}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{rotate: -48}], "tween": true},
                        {"frameNum": 1 + 28, "css": [{rotate: 25}], "tween": true},
                        {"frameNum": 1 + 35, "css": [{rotate: 18}], "tween": true},
                        {"frameNum": 1 + 42, "css": [{rotate: 25}], "tween": true, action: "goToFrame", goToFrame: 1 + 28}
                    ]
                },

                {
                    "layer_id": "joker_elbow_right_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -57}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: -57}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: -94}], "tween": true},
                        {"frameNum": 1 + 16, "css": [{rotate: -90}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{rotate: -67}], "tween": true},
                        {"frameNum": 1 + 28, "css": [{rotate: -30}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_forearm_right_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 19}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: 19}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: 39}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{rotate: 39}], "tween": true},
                        {"frameNum": 1 + 28, "css": [{rotate: 24}], "tween": true}

                    ]
                },


                {
                    "layer_id": "right_leg_center_p",
                    "keyframes": [
                        {"frameNum": 1,      "css": [{top: 149, left: 104, rotate: 0}], "tween": true},
                        {"frameNum": 1 + 8,  "css": [{top: 151, left: 104, rotate: 0}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: 127, left: 97, rotate: -73}], "tween": true},
                        {"frameNum": 1 + 16, "css": [{top: 138, left: 63, rotate: -110}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{top: 147, left: 54, rotate: -133}], "tween": true},
                        {"frameNum": 1 + 28, "css": [{top: 134, left: 54, rotate: -28}], "tween": true},
                        {"frameNum": 1 + 35, "css": [{top: 134, left: 54, rotate: -50}], "tween": true},
                        {"frameNum": 1 + 42, "css": [{top: 134, left: 54, rotate: -28}], "tween": true, action: "goToFrame", goToFrame: 1 + 28}

                    ]
                },

                {
                    "layer_id": "right_foot_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 34}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: 56}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: 0}], "tween": true}
                    ]
                },










                {
                    "layer_id": "line_group_2_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -24}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: -39}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: -39}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_group_3_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 15}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: 1}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: 3}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{rotate: 3}], "tween": true},
                        {"frameNum": 1 + 28, "css": [{rotate: -28}], "tween": true},
                        {"frameNum": 1 + 35, "css": [{rotate: -10}], "tween": true},
                        {"frameNum": 1 + 42, "css": [{rotate: -28}], "tween": true, action: "goToFrame", goToFrame: 1 + 28}
                    ]
                }, {
                    "layer_id": "line_group_4_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 18}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: 18}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: 33}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_group_5_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 0}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_group_6_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 0}], "tween": true}
                    ]
                },




                {
                    "layer_id": "line_2",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -5}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_3",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 12}], "tween": true}
                    ]
                },
                {
                    "layer_id": "line_5",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -3}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_6",
                    "keyframes": [
                        {"frameNum": 1 , "css": [{rotate: 15 + 5}], "tween": true}
                    ]
                },




                spinning_plate_3, spinning_plate_4, spinning_plate_5

            ]
        } ,


        {
            "id": "4thWrongLetterScene",
            "audio": [{'src': [{'file': "audio/aww.mp3", type: "audio/mp3"}], 'startFrameNum': 4}],
            "fps" :24,
            "totalFrames": 24,
            "action": [{"keyframes":[ ]}],
            "layers":[

                /*
                 * 1 : repeat current step
                 * 1 + 8 : rotate to the left
                 * 1 + 15 : rotate to the right
                 * 1 + 20 : Change face and move left leg to top
                 * 1 + 26 : rotate to the left and move left leg down
                 * 1 + 30 : rotate to the left
                 * 1 + 37 : bird appear and go from left to right and joker
                 * */

                {
                    "layer_id": "joker_body_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: 138, left: 46, rotate: -20}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{top: 143, left: 39, rotate: -53}], "tween": true},
                        {"frameNum": 1 + 15, "css": [{top: 147, left: 71, rotate: 17}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{top: 147, left: 71, rotate: 8}], "tween": true},
                        {"frameNum": 1 + 26, "css": [{top: 147, left: 71, rotate: -8}], "tween": true},
                        {"frameNum": 1 + 32, "css": [{top: 147, left: 70, rotate: -15}], "tween": true},
                        {"frameNum": 1 + 38, "css": [{top: 147, left: 71, rotate: -8}], "tween": true, action: "goToFrame", goToFrame: 1 + 26}

                    ]
                }, {
                    "layer_id": "joker_head_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 27}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: -22}], "tween": true},
                        {"frameNum": 1 + 15, "css": [{rotate: 23}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{rotate: 14}], "tween": true},
                        {"frameNum": 1 + 26, "css": [{rotate: 1}], "tween": true},
                        {"frameNum": 1 + 32, "css": [{rotate: -3}], "tween": true},
                        {"frameNum": 1 + 38, "css": [{rotate: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 26}
                    ]
                },

                {
                    "layer_id": "joker_head_4",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 1 + 20, "css": [{opacity: 0}], "tween": false}

                    ]
                },
                {
                    "layer_id": "joker_head_5",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 0}], "tween": false},
                        {"frameNum": 1 + 20, "css": [{opacity: 1}], "tween": false, hideElement: "joker_head_4"}
                    ]
                },



                {
                    "layer_id": "joker_waist",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -17, left: -27}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{top: -17, left: -27}], "tween": true},
                        {"frameNum": 1 + 15, "css": [{top: -20, left: -27}], "tween": true}
                    ]
                },





                {
                    "layer_id": "line_group_3_falling_center_p",
                    "keyframes": [
                        {"frameNum": 1,      "css": [{top: 187, left: -30, opacity: 0}], "tween": false},
                        {"frameNum": 1 + 8, "css": [{top: 187, left: -30, opacity: 1}], "tween": false, hideElement: "line_group_2_center_p"}

                    ]
                }, {
                    "layer_id": "line_3",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 1 + 8, "css": [{opacity: 1}], "tween": false}
                    ]
                }, {
                    "layer_id": "line_3_dished",
                    "keyframes": [
                        {"frameNum": 1, "css":      [{opacity: 1}], "tween": false},
                        {"frameNum": 1 + 8, "css": [{opacity: 1}], "tween": false}
                    ]
                },

                {
                    "layer_id": "line_3_falling",
                    "keyframes": [
                        {"frameNum": 1,      "css": [{top: -79, left: -1, rotate: -79, opacity: 0}], "tween": false},
                        {"frameNum": 1 + 8,  "css": [{top: -79, left: -1, rotate: -79, opacity: 1}], "tween": true, hideElement: "line_3"},
                        {"frameNum": 1 + 15, "css": [{top: -241, left: 73, rotate: 45, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{top: -287, left: 193, rotate: 77, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 26, "css": [{top: -218, left: 190, rotate: 52, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 32, "css": [{top: -157, left: 206, rotate: 20, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 36, "css": [{top: -112, left: 233, rotate: -24, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 40, "css": [{top: -53, left: 252, rotate: -91, opacity: 1}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_3_dished_falling",
                    "keyframes": [
                        {"frameNum": 1,      "css": [{top: -105, left: 28, rotate: -89, opacity: 0}], "tween": false},
                        {"frameNum": 1 + 8,  "css": [{top: -105, left: 28, rotate: -89, opacity: 1}], "tween": true, hideElement: "line_3_dished"},
                        {"frameNum": 1 + 15, "css": [{top: -199, left: 131, rotate: 58, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{top: -188, left: 244, rotate: 113, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 26, "css": [{top: -137, left: 244, rotate: 72, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 32, "css": [{top: -93, left: 244, rotate: 42, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 36, "css": [{top: -30, left: 244, rotate: 12, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 40, "css": [{top: 10, left: 244, rotate: -14, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 43, "css": [{top: 10, left: 244, rotate: 13, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 46, "css": [{top: 10, left: 244, rotate: -13, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 49, "css": [{top: 10, left: 244, rotate: 12, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 52, "css": [{top: 10, left: 244, rotate: -12, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 55, "css": [{top: 10, left: 244, rotate: 11, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 58, "css": [{top: 10, left: 244, rotate: -10, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 61, "css": [{top: 10, left: 244, rotate: 9, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 64, "css": [{top: 10, left: 244, rotate: 0, opacity: 1}], "tween": true}

                    ]
                },





                {
                    "layer_id": "joker_hand_left_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -42, left: -18, rotate: -8}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{top: -42, left: -18, rotate: -22}], "tween": true},
                        {"frameNum": 1 + 15, "css": [{top: -42, left: -18, rotate: 1}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{top: -42, left: -18, rotate: 31}], "tween": true},
                        {"frameNum": 1 + 26, "css": [{top: -42, left: -18, rotate: -30}], "tween": true},
                        {"frameNum": 1 + 32, "css": [{top: -42, left: -18, rotate: -42}], "tween": true},
                        {"frameNum": 1 + 38, "css": [{top: -42, left: -18, rotate: -30}], "tween": true, action: "goToFrame", goToFrame: 1 + 26}

                    ]
                },  {
                    "layer_id": "hand_close_left",
                    "keyframes": [
                        {"frameNum": 1,      "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 1 + 26, "css": [{opacity: 0}], "tween": false}

                    ]
                }, {
                    "layer_id": "hand_open_left",
                    "keyframes": [
                        {"frameNum": 1,      "css": [{opacity: 0}], "tween": false},
                        {"frameNum": 1 + 26, "css": [{opacity: 1}], "tween": false, hideElement: "hand_close_left"}

                    ]
                }, {
                    "layer_id": "joker_elbow_left_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 68}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: 14}], "tween": true},
                        {"frameNum": 1 + 15, "css": [{rotate: 53}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{rotate: 41}], "tween": true},
                        {"frameNum": 1 + 26, "css": [{rotate: 0}], "tween": true}
                    ]
                },
                {
                    "layer_id": "joker_forearm_left_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -18}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: 10}], "tween": true},
                        {"frameNum": 1 + 15, "css": [{rotate: -6}], "tween": true}

                    ]
                },

                {
                    "layer_id": "left_leg_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: 140, left: 37, rotate: 0}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{top: 140, left: 37, rotate: 0}], "tween": true},
                        {"frameNum": 1 + 15, "css": [{top: 139, left: 49, rotate: 7}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{top: 126, left: 63, rotate: 11}], "tween": true},
                        {"frameNum": 1 + 26, "css": [{top: 141, left: 58, rotate: 0}], "tween": true}
                    ]
                }, {
                    "layer_id": "left_shoe_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 2}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: 2}], "tween": true},
                        {"frameNum": 1 + 15, "css": [{rotate: 0}], "tween": true}

                    ]
                },

                {
                    "layer_id": "left_foot_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 0}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: 10}], "tween": true},
                        {"frameNum": 1 + 26, "css": [{rotate: 10}], "tween": true},
                        {"frameNum": 1 + 32, "css": [{rotate: 6}], "tween": true},
                        {"frameNum": 1 + 38, "css": [{rotate: 10}], "tween": true, action: "goToFrame", goToFrame: 1 + 26}
                    ]
                },




                {
                    "layer_id": "joker_hand_right_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 25}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: -6}], "tween": true},
                        {"frameNum": 1 + 15, "css": [{rotate: 0}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{rotate: 16}], "tween": true},
                        {"frameNum": 1 + 26, "css": [{rotate: 26}], "tween": true}

                    ]
                },

                {
                    "layer_id": "joker_elbow_right_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -30}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: -30}], "tween": true},
                        {"frameNum": 1 + 15, "css": [{rotate: -9}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{rotate: -31}], "tween": true},
                        {"frameNum": 1 + 26, "css": [{rotate: -60}], "tween": true},
                        {"frameNum": 1 + 32, "css": [{rotate: -68}], "tween": true},
                        {"frameNum": 1 + 38, "css": [{rotate: -60}], "tween": true, action: "goToFrame", goToFrame: 1 + 26}

                    ]
                }, {
                    "layer_id": "joker_forearm_right_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 24}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: 38}], "tween": true},
                        {"frameNum": 1 + 15, "css": [{rotate: 13}], "tween": true}
                    ]
                },


                {
                    "layer_id": "right_leg_center_p",
                    "keyframes": [
                        {"frameNum": 1,  "css": [{top: 134, left: 54, rotate: -28}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{top: 134, left: 43, rotate: -112}], "tween": true},
                        {"frameNum": 1 + 15, "css": [{top: 140, left: 95, rotate: 0}], "tween": true}

                    ]
                },

                {
                    "layer_id": "right_foot_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 0}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: 0}], "tween": true},
                        {"frameNum": 1 + 15, "css": [{rotate: -17}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{rotate: -14}], "tween": true},
                        {"frameNum": 1 + 26, "css": [{rotate: -14}], "tween": true},
                        {"frameNum": 1 + 32, "css": [{rotate: -18}], "tween": true},
                        {"frameNum": 1 + 38, "css": [{rotate: -14}], "tween": true, action: "goToFrame", goToFrame: 1 + 26}
                    ]
                },










                {
                    "layer_id": "line_group_2_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -39}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_group_3_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -28}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: -8}], "tween": true},
                        {"frameNum": 1 + 15, "css": [{rotate: -14}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{rotate: -14}], "tween": true},
                        {"frameNum": 1 + 26, "css": [{rotate: 4}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_group_4_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 33}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_group_5_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 0}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_group_6_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 0}], "tween": true}
                    ]
                },




                {
                    "layer_id": "line_2",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -5}], "tween": true}
                    ]
                },
                {
                    "layer_id": "line_5",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -3}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_6",
                    "keyframes": [
                        {"frameNum": 1 , "css": [{rotate: 15 + 5}], "tween": true}
                    ]
                },




                {
                    "layer_id": "bird",
                    "keyframes": [
                        {"frameNum": 1,                "css": [{top: 94,  left: -50}], "tween": true, hideElement: "bird_moving_right", showElement: "bird_moving_left"},
                        {"frameNum": 1 + 20,           "css": [{top: 94,  left: -50}], "tween": true},
                        {"frameNum": 1 + 20 + 24 * 2,  "css": [{top: 148, left: 100}], "tween": true},
                        {"frameNum": 1 + 20 + 24 * 4,  "css": [{top: 154, left: 246}], "tween": true},
                        {"frameNum": 1 + 20 + 24 * 6,  "css": [{top: 106, left: 326}], "tween": true, hideElement: "bird_moving_left", showElement: "bird_moving_right"},
                        {"frameNum": 1 + 20 + 24 * 8,  "css": [{top: 54, left: 241}], "tween": true},
                        {"frameNum": 1 + 20 + 24 * 10,  "css": [{top: 26, left: 117}], "tween": true},
                        {"frameNum": 1 + 20 + 24 * 12,  "css": [{top: 95, left: 55}], "tween": true,  hideElement: "bird_moving_right", showElement: "bird_moving_left"},
                        {"frameNum": 1 + 20 + 24 * 14,  "css": [{top: 148, left: 100}], "tween": true, action: "goToFrame", goToFrame: 1 + 20 + 24 * 2}

                    ]
                },

                bird_1_l, bird_2_l, bird_3_l, bird_4_l,
                bird_1_r, bird_2_r, bird_3_r, bird_4_r ,

                spinning_plate_4, spinning_plate_5
            ]
        },


        {
            "id": "5thWrongLetterScene",
            "audio": [{'src': [{'file': "audio/aww.mp3", type: "audio/mp3"}], 'startFrameNum': 4}],
            "fps" :24,
            "totalFrames": 24,
            "action": [{"keyframes":[ ]}],
            "layers":[

                /*
                 * 1 : repeat current step
                   1 + 12 : throw the plate
                   1 + 18: move right hand down
                   1 + 24 : change face
                   1 + 29 : standing (step 1)
                   1 + 34 : move down
                   1 + 39 : repeat to step 1

                 * */

                {
                    "layer_id": "joker_body_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: 147, left: 71, rotate: -8}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{top: 147, left: 70, rotate: -15}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: 147, left: 71, rotate: -8}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{top: 147, left: 71, rotate: -8}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{top: 147, left: 71, rotate: -16}], "tween": true},
                        {"frameNum": 1 + 29, "css": [{top: 149, left: 74, rotate: -6}], "tween": true},
                        {"frameNum": 1 + 34, "css": [{top: 149, left: 74, rotate: -1}], "tween": true},
                        {"frameNum": 1 + 39, "css": [{top: 149, left: 74, rotate: -6}], "tween": true, action: "goToFrame", goToFrame: 1 + 29}

                    ]
                }, {
                    "layer_id": "joker_head_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{rotate: -3}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: 1}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{rotate: 17}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: 23}], "tween": true},
                        {"frameNum": 1 + 29, "css": [{rotate: 5}], "tween": true},
                        {"frameNum": 1 + 34, "css": [{rotate: 9}], "tween": true},
                        {"frameNum": 1 + 39, "css": [{rotate: 5}], "tween": true, action: "goToFrame", goToFrame: 1 + 29}
                    ]
                },

                {
                    "layer_id": "joker_head_5",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 0}], "tween": false},
                        {"frameNum": 1 + 29, "css": [{opacity: 0}], "tween": false}
                    ]
                },
                {
                    "layer_id": "joker_head_6",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 1 + 29, "css": [{opacity: 1}], "tween": false, hideElement: "joker_head_5"}
                    ]
                },



                {
                    "layer_id": "joker_waist",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -20, left: -27}], "tween": true}
                    ]
                },





                {
                    "layer_id": "line_group_3_falling_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: 187, left: -30, opacity: 1}], "tween": false, hideElement: "line_group_2_center_p"}

                    ]
                }, {
                    "layer_id": "line_5",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 1 + 12, "css": [{opacity: 0}], "tween": false}
                    ]
                }, {
                    "layer_id": "line_5_dished",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 1 + 12, "css": [{opacity: 0}], "tween": false}
                    ]
                },

                {
                    "layer_id": "line_5_falling",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -81, left: -2, rotate: 16, opacity: 0}], "tween": false},
                        {"frameNum": 1 + 12, "css": [{top: -81, left: -2, rotate: 16, opacity: 1}], "tween": true, hideElement: "line_5"},
                        {"frameNum": 1 + 18, "css": [{top: -128, left: 9, rotate: 41, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{top: -108, left: 28, rotate: 56, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 29, "css": [{top: -21, left: 62, rotate: 83, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 33, "css": [{top: 89, left: 66, rotate: 92, opacity: 1}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_5_dished_falling",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -87, left: 0, rotate: 24, opacity: 0}], "tween": false},
                        {"frameNum": 1 + 12, "css": [{top: -87, left: 0, rotate: 24, opacity: 1}], "tween": true, hideElement: "line_5_dished"},
                        {"frameNum": 1 + 18, "css": [{top: -137, left: 74, rotate: 12, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{top: -86, left: 98, rotate: 43, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 29, "css": [{top: 30, left: 108, rotate: 138, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 34, "css": [{top: 159, left: 147, rotate: 176, opacity: 1}], "tween": true}
                    ]
                },





                {
                    "layer_id": "joker_hand_left_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -42, left: -18, rotate: -30}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{top: -42, left: -18, rotate: -42}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: -42, left: -18, rotate: -30}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{top: -42, left: -18, rotate: -42}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{top: -42, left: -18, rotate: -45}], "tween": true},
                        {"frameNum": 1 + 29, "css": [{top: -42, left: -18, rotate: -7}], "tween": true},
                        {"frameNum": 1 + 34, "css": [{top: -42, left: -18, rotate: -12}], "tween": true},
                        {"frameNum": 1 + 39, "css": [{top: -42, left: -18, rotate: -7}], "tween": true, action: "goToFrame", goToFrame: 1 + 29}

                    ]
                },  {
                    "layer_id": "hand_close_right",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 1 + 18, "css": [{opacity: 0}], "tween": false}

                    ]
                }, {
                    "layer_id": "hand_open_right",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 0}], "tween": false},
                        {"frameNum": 1 + 18, "css": [{opacity: 1}], "tween": false, hideElement: "hand_close_right"}

                    ]
                }, {
                    "layer_id": "joker_elbow_left_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 0}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{rotate: 0}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: 56}], "tween": true}
                    ]
                },
                {
                    "layer_id": "joker_forearm_left_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -6}], "tween": true}

                    ]
                },

                {
                    "layer_id": "left_leg_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: 141, left: 58, rotate: 0}], "tween": true}
                    ]
                }, {
                    "layer_id": "left_shoe_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 0}], "tween": true}

                    ]
                },

                {
                    "layer_id": "left_foot_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 10}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{rotate: 6}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: 10}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: 10}], "tween": true},
                        {"frameNum": 1 + 29, "css": [{rotate: 12}], "tween": true}
                    ]
                },




                {
                    "layer_id": "joker_hand_right_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 26}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: -30}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: -42}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{rotate: 18}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: 42}], "tween": true},
                        {"frameNum": 1 + 29, "css": [{rotate: 20}], "tween": true},
                        {"frameNum": 1 + 34, "css": [{rotate: 25}], "tween": true},
                        {"frameNum": 1 + 39, "css": [{rotate: 20}], "tween": true, action: "goToFrame", goToFrame: 1 + 29}

                    ]
                },

                {
                    "layer_id": "joker_elbow_right_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -60}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{rotate: -68}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: -10}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{rotate: -76}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: -76}], "tween": true},
                        {"frameNum": 1 + 29, "css": [{rotate: -41}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_forearm_right_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 13}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: 45}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{rotate: 0}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: 0}], "tween": true}
                    ]
                },


                {
                    "layer_id": "right_leg_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: 140, left: 95, rotate: 0}], "tween": true}

                    ]
                },

                {
                    "layer_id": "right_foot_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -14}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: -18}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: -14}], "tween": true}
                    ]
                },




                {
                    "layer_id": "line_group_2_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -39}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_group_3_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 4}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_group_4_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 33}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_group_5_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 0}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_group_6_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 0}], "tween": true}
                    ]
                },




                {
                    "layer_id": "line_2",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -5}], "tween": true}
                    ]
                },
                {
                    "layer_id": "line_5",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -3}], "tween": true}
                    ]
                },


                {
                    "layer_id": "bird",
                    "keyframes": [
                        {"frameNum": 1,           "css": [{top: 38, left: 76}], "tween": true, hideElement: "bird_moving_right", showElement: "bird_moving_left"},
                        {"frameNum": 1 + 24 * 1,  "css": [{top: 96, left: 119}], "tween": true},
                        {"frameNum": 1 + 24 * 2,  "css": [{top: 128, left: 183}], "tween": true},
                        {"frameNum": 1 + 24 * 3,  "css": [{top: 115, left: 242}], "tween": true},
                        {"frameNum": 1 + 24 * 3 + 12,  "css": [{top: 73, left: 258}], "tween": true, hideElement: "bird_moving_left", showElement: "bird_moving_right"},
                        {"frameNum": 1 + 24 * 4,  "css": [{top: 59, left: 239}], "tween": true},
                        {"frameNum": 1 + 24 * 4 + 6,  "css": [{top: 87, left: 220}], "tween": true},
                        {"frameNum": 1 + 24 * 4 + 6 + 1,  "css": [{top: 66, left: 216}], "tween": true, hideElement: "bird_moving_right", showElement: "bird_standing"}

                    ]
                },  {
                    "layer_id": "bird_standing_img",
                    "keyframes": [
                        {"frameNum": 1,  "css": [{opacity: 0}], "tween": false},
                        {"frameNum": 1 + 24 * 4 + 6 + 1,  "css": [{opacity: 1}], "tween": true},
                        {"frameNum": 1 + 24 * 4 + 6 + 1 + 3,  "css": [{top: 5, left: 0}], "tween": true},
                        {"frameNum": 1 + 24 * 4 + 6 + 1 + 8,  "css": [{top: 0, left: 0}], "tween": true},
                        {"frameNum": 1 + 24 * 4 + 6 + 1 + 13,  "css": [{top: 5, left: 0}], "tween": true, action: "goToFrame", goToFrame: 1 + 24 * 4 + 6 + 1 + 5}

                    ]
                },

                bird_1_l, bird_2_l, bird_3_l, bird_4_l,
                bird_1_r, bird_2_r, bird_3_r, bird_4_r ,

                spinning_plate_4, spinning_plate_5

            ]
        },

        {
            "id": "5thWrongLetterScene",
            "audio": [{'src': [{'file': "audio/aww.mp3", type: "audio/mp3"}], 'startFrameNum': 4}],
            "fps" :24,
            "totalFrames": 24,
            "action": [{"keyframes":[ ]}],
            "layers":[


            ]
        }

    ]
}

/* END GAME */

