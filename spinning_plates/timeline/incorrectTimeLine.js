/*
* hideElement : elementId.
* showElement : elementId.
* action goToFrame : and   goToFrame : frame Number ex: , action: "goToFrame", goToFrame: 1 + 30
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
            "fps" :24,
            "totalFrames": 24,
            "action": [{"keyframes":[ ]}],
            "audio": [ {'src': [{'file': "audio/aww.mp3", type: "audio/mp3"}],       delayTime: 1} ],
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
                        {"frameNum": 1 + 12, "css": [{opacity: 1}], "tween": false}
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
            "fps" :24,
            "totalFrames": 24,
            "action": [{"keyframes":[ ]}],
            "audio": [ {'src': [{'file': "audio/aww.mp3", type: "audio/mp3"}],       delayTime: 1} ],
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
                        {"frameNum": 1 + 16, "css": [{top: 147, left: 126, rotate: 5}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{top: 148, left: 124, rotate: 8}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{top: 147, left: 126, rotate: 5}], "tween": true, action: "goToFrame", goToFrame: 1 + 16}

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
                        {"frameNum": 1 + 3, "css": [{top: -31, left: 8, rotate: 22, opacity: 1}], "tween": true, hideElement: "line_6_2"},
                        {"frameNum": 1 + 6, "css": [{top: -72, left: 3, rotate: 57, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: -111, left: 3, rotate: 80, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 16, "css": [{top: -90, left: 5, rotate: 85, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{top: -15, left: 6, rotate: 87, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{top: 95, left: 3, rotate: 91, opacity: 1}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_6_dished_falling",
                    "keyframes": [
                        {"frameNum": 1,     "css": [{top: -36, left: -3, rotate: 15, opacity: 0}], "tween": false},
                        {"frameNum": 1 + 3, "css": [{top: -36, left:  -3, rotate: 15, opacity: 1}], "tween": true, hideElement: "line_6_dished_2"},
                        {"frameNum": 1 + 6, "css": [{top: -84, left: 14, rotate: 8, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: -109, left: 14, rotate: 40, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 16, "css": [{top: -90, left: 22, rotate: 35, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 20, "css": [{top: 5, left: 24, rotate: 31, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{top: 133, left: 17, rotate: 6, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 28, "css": [{top: 133, left: 17, rotate: -8, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 32, "css": [{top: 133, left: 17, rotate: 8, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 36, "css": [{top: 133, left: 17, rotate: -8, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 40, "css": [{top: 133, left: 17, rotate: 8, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 44, "css": [{top: 133, left: 17, rotate: -8, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 48, "css": [{top: 133, left: 17, rotate: 0, opacity: 1}], "tween": true}
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
            "fps" :24,
            "totalFrames": 24,
            "action": [{"keyframes":[ ]}],
            "audio": [ {'src': [{'file': "audio/aww.mp3", type: "audio/mp3"}],       delayTime: 1} ],
            "layers":[
                /*
                 * 1 : repeat current step
                 * 1 + 8 : Prepare to Jump (move to right) and lower right leg)

                 * */

                {
                    "layer_id": "joker_body_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: 147, left: 126, rotate: 5}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{top: 168, left: 136, rotate: 34}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_head_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -40}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: 36}], "tween": true}
                    ]
                }, {
                    "layer_id": "joker_head_2",
                    "keyframes": [
                         {"frameNum": 1, "css": [{opacity: 0}], "tween": false}
                    ]
                }, {
                    "layer_id": "joker_head_3",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": false, hideElement: "joker_head_2"}
                    ]
                },



                {
                    "layer_id": "joker_waist",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -20, left: -29}], "tween": true}
                    ]
                },





                // disk 6 falling div#
                {
                    "layer_id": "line_group_2_falling_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: 74, left: 128, rotate: 0}], "tween": false},
                        {"frameNum": 1 + 8, "css": [{top: 74, left: 128, rotate: 0}], "tween": false},

                    ]
                }, {
                    "layer_id": "line_2",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 1 + 8, "css": [{opacity: 0}], "tween": false, hideElement: "line_2"}
                    ]
                }, {
                    "layer_id": "line_2_dished",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 1 + 8, "css": [{opacity: 0}], "tween": false, hideElement: "line_2_dished"}
                    ]
                },

                //
                {
                    "layer_id": "line_2_falling",
                    "keyframes": [
                        {"frameNum": 1,      "css": [{top: -51, left: 18, rotate: 40, opacity: 0}], "tween": false},
                        {"frameNum": 1 + 8, "css": [{top: -51, left: 18, rotate: 40, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 9, "css": [{top: -51, left: 41, rotate: 74, opacity: 1}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_2_dished_falling",
                    "keyframes": [
                        {"frameNum": 1,      "css": [{top: -55, left: 11, rotate: 30, opacity: 0}], "tween": false},
                        {"frameNum": 1 + 8, "css": [{top: -55, left: 11, rotate: 30, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 9, "css": [{top: -32, left: 57, rotate: 106, opacity: 1}], "tween": true}
                    ]
                },

                //




                {
                    "layer_id": "joker_hand_left_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -30}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: 0}], "tween": true}

                    ]
                },
                {
                    "layer_id": "joker_elbow_left_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 15}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: 58}], "tween": true}
                    ]
                },
                {
                    "layer_id": "joker_forearm_left_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 3}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: -7}], "tween": true}

                    ]
                },

                {
                    "layer_id": "left_leg_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: 144, left: 112, rotate: 100}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{top: 162, left: 133, rotate: 122}], "tween": true}
                    ]
                }, {
                    "layer_id": "left_shoe_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -8}], "tween": true}
                    ]
                },



                {
                    "layer_id": "joker_hand_right_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 18}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: 17}], "tween": true}
                    ]
                },

                {
                    "layer_id": "joker_elbow_right_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -57}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: -57}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_forearm_right_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 19}], "tween": true}
                    ]
                },




                {
                    "layer_id": "right_foot_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 34}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: 56}], "tween": true}
                    ]
                },










                {
                    "layer_id": "line_group_2_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -24}], "tween": true},
                        {"frameNum": 1 + 30, "css": [{rotate: -39}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_group_3_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 15}], "tween": true},
                        {"frameNum": 1, "css": [{rotate: 1}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_group_4_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 18}], "tween": true}
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
            "fps" :24,
            "totalFrames": 24,
            "action": [{"keyframes":[ ]}],
            "audio": [ {'src': [{'file': "audio/aww.mp3", type: "audio/mp3"}],       delayTime: 1} ],
            "layers":[


            ]
        },


        {
            "id": "5thWrongLetterScene",
            "fps" :24,
            "totalFrames": 24,
            "action": [{"keyframes":[ ]}],
            "audio": [ {'src': [{'file': "audio/aww.mp3", type: "audio/mp3"}],       delayTime: 1} ],
            "layers":[


            ]
        },

        {
            "id": "5thWrongLetterScene",
            "fps" :24,
            "totalFrames": 24,
            "action": [{"keyframes":[ ]}],
            "audio": [ {'src': [{'file': "audio/aww.mp3", type: "audio/mp3"}],       delayTime: 1} ],
            "layers":[


            ]
        }

    ]
}

/* END GAME */

