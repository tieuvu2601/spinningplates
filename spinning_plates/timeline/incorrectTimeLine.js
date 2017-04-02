/*
* hideElement : elementId.
* showElement : elementId.
* action goToFrame : and   goToFrame : frame Number ex: , action: "goToFrame", goToFrame: 1 + 30
*
* */

var incorrectScene = {
    'audioTimelineLayer' : [
        {"timeLineId": "firstWrongLetterScene" , audio : [{'src': [{'file': "audio/aww.mp3", type: "audio/mp3"}],       delayTime: 1}]}
    ],

    'stackTimelineLayer' : [
        {
            "id": "startGameScene",
            "fps" :24,
            "totalFrames": 24,
            "action": [{"keyframes":[
                {"frameNum": 1 + 1, "css": [{}], "tween": true, action : "stopAnimationForDebug"}
            ]}],
            "layers":[
                /*
                * 1 - 8    : change from black to white
                * 1 - 8    : joker standing
                * 8 - 16   : joker move leg down and rotate to the right(Slowly)
                * 16 - 24  : joker rotate to the right (Fast)
                * 24 - 29  : joker rotate to the left (slow)  (step 1 )
                * 29 - 34  : joker move left leg up  (Slow          (step 2 )
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
                        {"frameNum": 1 + 24, "css": [{rotate: 10}], "tween": true}
                    ]
                }, {
                    "layer_id": "joker_head_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -60}], "tween": true},
                        {"frameNum": 1 + 1, "css": [{rotate: -60}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: -60}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: 15}], "tween": true}
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
                        {"frameNum": 1 + 24, "css": [{rotate: 35}], "tween": true}
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
                        {"frameNum": 1 + 24, "css": [{rotate: 85}], "tween": true}
                    ]
                },

                {
                    "layer_id": "joker_hand_right_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 16}], "tween": true},
                        {"frameNum": 1 + 1, "css": [{rotate: 16}], "tween": true, action : "stopAnimationForDebug"},
                        {"frameNum": 1 + 8, "css": [{rotate: 16}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: -30}], "tween": true}
                    ]
                },

                {
                    "layer_id": "joker_elbow_right_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -20}], "tween": true},
                        {"frameNum": 1 + 1, "css": [{rotate: -20}], "tween": true},
                        {"frameNum": 1 + 3, "css": [{rotate: -20}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: -50}], "tween": true}
                    ]
                },




//                {
//                    "layer_id": "#joker_elbow_right_center_p ",
//                    "keyframes": [
//                        {"frameNum": 1, "css": [{rotate: 0}], "tween": true},
//                        {"frameNum": 1 + 1, "css": [{rotate: 0}], "tween": true},
//                        {"frameNum": 1 + 8, "css": [{rotate: 0}], "tween": true},
//                        {"frameNum": 1 + 24, "css": [{rotate: -55}], "tween": true}
//                    ]
//                },

//                {
//                    "layer_id": "joker_forearm_right_center_p ",
//                    "keyframes": [
//                        {"frameNum": 1, "css": [{rotate: 0}], "tween": true},
//                        {"frameNum": 1 + 8, "css": [{rotate: 29}], "tween": true},
//                        {"frameNum": 1 + 24, "css": [{rotate: 36}], "tween": true}
//                    ]
//                },


                {
                    "layer_id": "right_foot_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -1}], "tween": true},
                        {"frameNum": 1 + 1, "css": [{rotate: -1}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: -1}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: 1}], "tween": true}
                    ]
                },



                {
                    "layer_id": "line_group_1_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -50}], "tween": true},
                        {"frameNum": 1 + 1, "css": [{rotate: -50}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: -50}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_group_2_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -20}], "tween": true},
                        {"frameNum": 1 + 1, "css": [{rotate: -20}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: -20}], "tween": true}
                    ]
                }, {
                    "layer_id": "line_group_3_center_p",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 30}], "tween": true},
                        {"frameNum": 1 + 1, "css": [{rotate: 30}], "tween": true},
                        {"frameNum": 1 + 8, "css": [{rotate: 30}], "tween": true}
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
                }



            ]
        }, {
            "id": "1stWrongLetterScene",
            "fps" :24,
            "totalFrames": 24,
            "action": [{"keyframes":[ ]}],
            "audio": [ {'src': [{'file': "audio/aww.mp3", type: "audio/mp3"}],       delayTime: 1} ],
            "layers":[

            ]
        },

        {
            "id": "2ndWrongLetterScene",
            "fps" :24,
            "totalFrames": 24,
            "action": [{"keyframes":[ ]}],
            "audio": [ {'src': [{'file': "audio/aww.mp3", type: "audio/mp3"}],       delayTime: 1} ],
            "layers":[


            ]
        },

        {
            "id": "3rdWrongLetterScene",
            "fps" :24,
            "totalFrames": 24,
            "action": [{"keyframes":[ ]}],
            "audio": [ {'src': [{'file': "audio/aww.mp3", type: "audio/mp3"}],       delayTime: 1} ],
            "layers":[


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

