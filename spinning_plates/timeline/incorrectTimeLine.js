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

        // list scene  timeLine Object { }

        {
            "id": "startGameScene",
            "fps" :30,
            "totalFrames": 24 * 39,
            "action": [{"keyframes":[ ]}],
            "layers":[
                {
                    "layer_id": "over-flow",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 3, "css": [{opacity: 1}], "tween": true},
                        {"frameNum": 12, "css": [{opacity: 0}], "tween": true}
                    ]
                }, {
                    "layer_id": "joker",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": false}
                    ]
                },


                {
                    "layer_id": "joker_body",
                    "keyframes": [
                        {"frameNum": 1,     "css": [{top: 140, left: 75 + 3, rotate: -23, opacity: 1}], "tween": false},  // START
                        {"frameNum": 2,     "css": [{top: 140, left: 75 + 3,rotate: -23, opacity: 1}], "tween": true},    // START
                        {"frameNum": 1 + 12, "css": [{top: 140, left: 75, rotate: -13, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{top: 140, left: 75,  rotate: 25, opacity: 1}], "tween": true},          // MOVE TO RIGHT
                        {"frameNum": 1 + 24, "css": [{top: 140, left: 75, rotate: 0, opacity: 1}], "tween": true},             // MOVE BACK

                        {"frameNum": 1 + 30, "css": [{top: 140 + 1, left: 75, rotate: 1, opacity: 1}], "tween": true},    // REPEAT STEP 1 - ROTATE TO RIGHT
                        {"frameNum": 1 + 36, "css": [{top: 140 - 1, left: 75, rotate: -2, opacity: 1}], "tween": true},    // REPEAT STEP 2 - ROTATE TO LEFT
                        {"frameNum": 1 + 42, "css": [{top: 140 + 1, left: 75, rotate: 1, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 30}    // REPEAT STEP 3 - repeat step 1


                    ]
                },

                // JOKER HEAD //

                {
                    "layer_id": "joker_head",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -74, opacity: 1}], "tween": false},
                        {"frameNum": 2, "css": [{rotate: -74, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: -9, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{rotate: 30, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: 0, opacity: 1}], "tween": true},

                        {"frameNum": 1 + 30, "css": [{rotate: 5, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 36, "css": [{rotate: 0, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 42, "css": [{rotate: 5, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 30}

                    ]
                }, {
                    "layer_id": "joker_head_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 2, "css": [{opacity: 1}], "tween": true},
                        {"frameNum": 12, "css": [{opacity: 1}], "tween": true}
                    ]
                },

                // JOKER BODY //

                {
                    "layer_id": "joker_bow",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 2, "css": [{opacity: 1}], "tween": true},
                        {"frameNum": 12, "css": [{opacity: 1}], "tween": true}
                    ]
                }, {
                    "layer_id": "joker_body-main",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 2, "css": [{opacity: 1}], "tween": true},
                        {"frameNum": 12, "css": [{opacity: 1}], "tween": true}
                    ]
                }, {
                    "layer_id": "joker_belly",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 2, "css": [{opacity: 1}], "tween": true},
                        {"frameNum": 12, "css": [{opacity: 1}], "tween": true}
                    ]
                },

                // JOKER HAND

                {
                    "layer_id": "joker-left_hand",
                    "keyframes": [
                        {"frameNum": 1,      "css": [{rotate: 5, opacity: 1}], "tween": false},
                        {"frameNum": 2,      "css": [{rotate: 5, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: -2, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{rotate: -11, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: -16, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 30, "css": [{rotate: -10, opacity: 1}], "tween": true},
//                        {"frameNum": 1 + 34, "css": [{rotate: -20, opacity: 1}], "tween": true},
//                        {"frameNum": 1 + 38, "css": [{rotate: -10, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 30},
                    ]
                }, {
                    "layer_id": "joker_left_arm_1",
                    "keyframes": [
                        {"frameNum": 1,      "css": [{rotate: 0, opacity: 1}], "tween": false},
                        {"frameNum": 2,      "css": [{rotate: 0, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: 25, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{rotate: 49, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: 49, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 30},
//                        {"frameNum": 1 + 30, "css": [{rotate: 34, opacity: 1}], "tween": true},
//                        {"frameNum": 1 + 34, "css": [{rotate: 49, opacity: 1}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_left_hand_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 2, "css": [{opacity: 1}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_left_punch_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -9, left: -16, opacity: 1}], "tween": false},
                        {"frameNum": 2, "css": [{top: -9, left: -16, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: -9, left: -16, opacity: 1}], "tween": true}

                    ]
                },

                {
                    "layer_id": "joker-right_hand",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -17, opacity: 1}], "tween": false},
                        {"frameNum": 2, "css": [{rotate: -17, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: -1, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{rotate: -15, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: 3, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 30, "css": [{rotate: 7, opacity: 1}], "tween": true},
//                        {"frameNum": 1 + 34, "css": [{rotate: 15, opacity: 1}], "tween": true},
//                        {"frameNum": 1 + 38, "css": [{rotate: 7, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 30}
                    ]
                } , {
                    "layer_id": "joker_right_arm_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -18, opacity: 1}], "tween": false},
                        {"frameNum": 2, "css": [{rotate: -18, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: -16, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{rotate: -14, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: -29, opacity: 1}], "tween": true},

                        {"frameNum": 1 + 30, "css": [{rotate: -15, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 36, "css": [{rotate: -24, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 42, "css": [{rotate: -15, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 30},


                    ]
                }, {
                    "layer_id": "joker_right_hand_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -3, opacity: 1}], "tween": false},
                        {"frameNum": 2, "css": [{rotate: -3, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: 3, opacity: 1}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_right_punch_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -7, left: 26, opacity: 1}], "tween": false},
                        {"frameNum": 2, "css": [{top: -7, left: 26, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: -7, left: 26, opacity: 1}], "tween": true}

                    ]
                },

                // JOKER LEG

                {
                    "layer_id": "joker-left-leg",
                    "keyframes": [
                        {"frameNum": 1,  "css": [{top: 122, left: 75, rotate: 43, opacity: 1}], "tween": false},
                        {"frameNum": 2,  "css": [{top: 122, left: 75, rotate: 43, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 4,  "css": [{top: 122, left: 75, rotate: 36, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12,  "css": [{top: 122, left: 75, rotate: 53, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 18,  "css": [{top: 122, left: 75, rotate: 87, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 24,  "css": [{top: 122 + 1, left: 75 - 4, rotate: 78, opacity: 1}], "tween": true},

                        {"frameNum": 1 + 30,  "css": [{top: 122 + 3, left: 75 - 8, rotate: 91, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 36,  "css": [{top: 122 + 3, left: 75 - 8, rotate: 79, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 42,  "css": [{top: 122 + 3, left: 75 - 8, rotate: 91, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 30},
                    ]
                }, {
                    "layer_id": "joker_left_leg_a",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 2, "css": [{opacity: 1}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_left_shoe",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 2, "css": [{opacity: 1}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_left_leg",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 2, "css": [{opacity: 1}], "tween": true}


                    ]
                },


                {
                    "layer_id": "joker-right-leg",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 4, top: 121, left: 88, opacity: 1}], "tween": false},
                        {"frameNum": 2, "css": [{rotate: 4, top: 121, left: 88, opacity: 1}], "tween": true},

                    ]
                }, {
                    "layer_id": "joker_right_leg",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 0, opacity: 1}], "tween": false},
                        {"frameNum": 2, "css": [{rotate: 0, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: 0, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{rotate: 4, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: -6, opacity: 1}], "tween": true},

                        {"frameNum": 1 + 30, "css": [{rotate: -9, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 36, "css": [{rotate: -7, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 42, "css": [{rotate: -9, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 30}

                    ]
                },  {
                    "layer_id": "joker_right_leg_a",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 2, "css": [{opacity: 1}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_right_shoe",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 2, "css": [{opacity: 1}], "tween": true}

                    ]
                }

            ]
        }, {
            "id": "1stWrongLetterScene",
            "fps" :30,
            "totalFrames": 24 * 39,
            "action": [{"keyframes":[ ]}],
            "audio": [ {'src': [{'file': "audio/aww.mp3", type: "audio/mp3"}],       delayTime: 1} ],
            "layers":[
                {
                    "layer_id": "joker_body",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: 135 + 1, left: 75, rotate: 1, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{top: 135 + 7, left: 75 + 37, rotate: 2, opacity: 1}], "tween": true},     // move right - down
                        {"frameNum": 1 + 10, "css": [{top: 135 + 1, left: 75 + 29, rotate: 12, opacity: 1}], "tween": true},   // move left and high leg
                        {"frameNum": 1 + 14, "css": [{top: 132, left: 104, rotate: 21, opacity: 1}], "tween": true},           //move right anymore

                        {"frameNum": 1 + 18, "css": [{top: 135, left: 97, rotate: 17, opacity: 1}], "tween": true},           //REPEAT move leg down (step 1)
                        {"frameNum": 1 + 24, "css": [{top: 132, left: 104, rotate: 19, opacity: 1}], "tween": true},          //repeat move leg up                  (step 2)
                        {"frameNum": 1 + 30, "css": [{top: 135, left: 97, rotate: 17, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 18},           //Repet move leg down and go to step 1 (Step 3)
                    ]
                },

                // JOKER HEAD //

                {
                    "layer_id": "joker_head",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 5, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{rotate: -72, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 10, "css": [{rotate: 9, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 14, "css": [{rotate: 11, opacity: 1}], "tween": true},

                        {"frameNum": 1 + 18, "css": [{rotate: -1, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: 6, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 30, "css": [{rotate: -1, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 18},

                    ]
                }, {
                    "layer_id": "joker_head_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -70, left: -44, opacity: 1}], "tween": false},
                        {"frameNum": 1 + 10, "css": [{top: -70, left: -44, opacity: 1}], "tween": false, showElement: "joker_head_2"},
                    ]


                }, {
                    "layer_id": "joker_head_2",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -70, left: -44, opacity: 0}], "tween": false},
                        {"frameNum": 1 + 10, "css": [{top: -70, left: -44, opacity: 1}], "tween": false, hideElement: "joker_head_1"},
                    ]
                },



                // JOKER BODY //

                {
                    "layer_id": "joker_bow",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": true}
                    ]
                }, {
                    "layer_id": "joker_body-main",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -67, left: -31, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{top: -67, left: -31, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 10, "css": [{top: -69, left: -31, opacity: 1}], "tween": true},
                    ]
                }, {
                    "layer_id": "joker_belly",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -26, left: -28, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{top: -26, left: -28, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 10, "css": [{top: -26, left: -28, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 14, "css": [{top: -24, left: -30, opacity: 1}], "tween": true},
                    ]
                },

                // JOKER HAND

                {
                    "layer_id": "joker-left_hand",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -64, left: -8, rotate: -10, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{top: -64, left: -8, rotate: -25, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 10, "css": [{top: -64, left: -8, rotate: -46, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 14, "css": [{top: -64, left: -8, rotate: -54, opacity: 1}], "tween": true},

                        {"frameNum": 1 + 18, "css": [{top: -64, left: -8, rotate: -45, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{top: -64, left: -8, rotate: -50, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 30, "css": [{top: -64, left: -8, rotate: -45, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 18},
                    ]
                }, {
                    "layer_id": "joker_left_arm_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 49, opacity: 1}], "tween": true},

                    ]
                }, {
                    "layer_id": "joker_left_hand_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_left_punch_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -9, left: -16, rotate: 0, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{top: -9, left: -16,  rotate: 0, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 10, "css": [{top: -9, left: -16,  rotate: -18, opacity: 1}], "tween": true},

                    ]
                },

                {
                    "layer_id": "joker-right_hand",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 7, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{rotate: 5, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 10, "css": [{rotate: -34, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 14, "css": [{rotate: -38, opacity: 1}], "tween": true},

                        {"frameNum": 1 + 18, "css": [{rotate: -34, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: -36, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 30, "css": [{rotate: -34, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 18},
                    ]
                } , {
                    "layer_id": "joker_right_arm_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -1, left: 40, rotate: -15, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{top: 6, left: 35, rotate: -44, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 10, "css": [{top: -1, left: 40, rotate: 0, opacity: 1}], "tween": true},
                    ]
                }, {
                    "layer_id": "joker_right_hand_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 3, opacity: 1}], "tween": true},

                    ]
                }, {
                    "layer_id": "joker_right_punch_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -7, left: 26, rotate: 0, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{top: -7, left: 26, rotate: 16, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 10, "css": [{top: -7, left: 26, rotate: 16, opacity: 1}], "tween": true},
                    ]
                },

                // JOKER LEG

                {
                    "layer_id": "joker-left-leg",
                    "keyframes": [
                        {"frameNum": 1,  "css": [{top: 122 + 3, left: 75 - 8, rotate: 91, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6,  "css": [{top: 122 - 3, left: 75 + 34, rotate: 54, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 10,  "css": [{top: 118, left: 90, rotate: 93, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 14,  "css": [{top: 116, left: 90, rotate: 103, opacity: 1}], "tween": true},

                        {"frameNum": 1 + 18,  "css": [{top: 116, left: 90, rotate: 64, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 24,  "css": [{top: 116, left: 90, rotate: 86, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 30,  "css": [{top: 116, left: 90, rotate: 64, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 18},
                    ]
                }, {
                    "layer_id": "joker_left_leg_a",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_left_shoe",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_left_leg",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": true}


                    ]
                },


                {
                    "layer_id": "joker-right-leg",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 4, top: 121, left: 88, opacity: 1}], "tween": true},

                    ]
                }, {
                    "layer_id": "joker_right_leg",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -9, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{rotate: 39, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 10, "css": [{rotate: 25, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 14, "css": [{rotate: 28, opacity: 1}], "tween": true},

                        {"frameNum": 1 + 18, "css": [{rotate: 23, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{rotate: 32, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 30, "css": [{rotate: 23, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 18},

                    ]
                },  {
                    "layer_id": "joker_right_leg_a",
                    "keyframes": [
                        {"frameNum": 2, "css": [{opacity: 1}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_right_shoe",
                    "keyframes": [
                        {"frameNum": 2, "css": [{opacity: 1}], "tween": true}

                    ]
                }
            ]
        },

        {
            "id": "2ndWrongLetterScene",
            "fps" :30,
            "totalFrames": 24 * 39,
            "action": [{"keyframes":[ ]}],
            "audio": [ {'src': [{'file': "audio/aww.mp3", type: "audio/mp3"}],       delayTime: 1} ],
            "layers":[

                /*
                *  1 + 10 : move leg down , left hand up, right hand down
                *  1 + 14 : move leg up   , left hand down, right hand up  (Step 1)
                *  1 + 18 : move leg down , left hand up, right hand down, (step 2)
                *  1 + 22 : repeat step 1 action and loop interval
                *  1 + 10 :
                * */

                {
                    "layer_id": "joker_body",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: 135, left: 97, rotate: 17, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6,  "css": [{top: 131, left: 85, rotate: 13, opacity: 1}], "tween": true},

                        {"frameNum": 1 + 10,  "css": [{top: 134, left: 85, rotate: 11, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 14,  "css": [{top: 131, left: 85, rotate: 13, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 18,  "css": [{top: 134, left: 85, rotate: 11, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 22,  "css": [{top: 131, left: 85, rotate: 13, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 14},
                    ]
                },

                // JOKER HEAD //

                {
                    "layer_id": "joker_head",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -1, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{rotate: -46, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 10, "css": [{rotate: -66, opacity: 1}], "tween": true},


                        {"frameNum": 1 + 14, "css": [{rotate: -30, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{rotate: -34, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 22, "css": [{rotate: -30, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 14},
                    ]
                }, {
                    "layer_id": "joker_head_2",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -70, left: -44, opacity: 1}], "tween": false},
                        {"frameNum": 1 + 6, "css": [{top: -70, left: -44, opacity: 0}], "tween": false, showElement: "joker_head_3"},
                    ]
                }, {
                    "layer_id": "joker_head_3",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -63, left: -44, opacity: 0}], "tween": false},
                        {"frameNum": 1 + 6, "css": [{top: -63, left: -44, opacity: 1}], "tween": false, hideElement: "joker_head_2"},
                    ]
                },





                // JOKER BODY //

                {
                    "layer_id": "joker_bow",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 0, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{rotate: -23, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 10, "css": [{rotate: -19, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 14, "css": [{rotate: -23, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{rotate: -16, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 22, "css": [{rotate: -23, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 14},
                    ]
                }, {
                    "layer_id": "joker_body-main",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -69, left: -31, opacity: 1}], "tween": true},
                    ]
                }, {
                    "layer_id": "joker_belly",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -24, left: -30, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{top: -22, left: -30, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 10, "css": [{top: -27, left: -30, opacity: 1}], "tween": true},
                    ]
                },

                // JOKER HAND

                {
                    "layer_id": "joker-left_hand",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -64, left: -8, rotate: -40, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{top: -63, left: -14, rotate: -40, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 10, "css": [{top: -63, left: -14, rotate: -32, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 14, "css": [{top: -63, left: -14, rotate: -40, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{top: -63, left: -14, rotate: -30, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 22, "css": [{top: -63, left: -14, rotate: -40, opacity: 1, action: "goToFrame", goToFrame: 1 + 14}], "tween": true},
                    ]
                }, {
                    "layer_id": "joker_left_arm_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 49, opacity: 1}], "tween": true},

                    ]
                }, {
                    "layer_id": "joker_left_hand_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_left_punch_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -9, left: -16,  rotate: -18, opacity: 1}], "tween": true},

                    ]
                },

                {
                    "layer_id": "joker-right_hand",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -34, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{rotate: -9, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 10, "css": [{rotate: 9, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 14, "css": [{rotate: -9, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{rotate: 0, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 22, "css": [{rotate: -9, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 14},
                    ]
                } , {
                    "layer_id": "joker_right_arm_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -1, left: 40, rotate: 0, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{top: -1, left: 40, rotate: -45, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 10, "css": [{top: 6, left: 39, rotate: -47, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 14, "css": [{top: -1, left: 40, rotate: -45, opacity: 1}],  "tween": true},
                        {"frameNum": 1 + 18, "css": [{top: 3, left: 40, rotate: -40, opacity: 1}],  "tween": true},
                        {"frameNum": 1 + 22, "css": [{top: -1, left: 40, rotate: -45, opacity: 1}],  "tween": true, action: "goToFrame", goToFrame: 1 + 14},
                    ]
                }, {
                    "layer_id": "joker_right_hand_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 3, opacity: 1}], "tween": true},

                    ]
                }, {
                    "layer_id": "joker_right_punch_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -7, left: 26, rotate: 16, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{top: -7, left: 26, rotate: 16, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 9, "css": [{top: -7, left: 26, rotate: 0, opacity: 1}], "tween": true},
                    ]
                },

                // JOKER LEG

                {
                    "layer_id": "joker-left-leg",
                    "keyframes": [
                        {"frameNum": 1,       "css": [{top: 116, left: 90, rotate: 54, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6,   "css": [{top: 116, left: 83, rotate: 107, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 10,   "css": [{top: 116, left: 83, rotate: 100, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 14,  "css": [{top: 116, left: 83, rotate: 107, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 18,   "css": [{top: 116, left: 83, rotate: 98, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 22,  "css": [{top: 116, left: 83, rotate: 107, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 14},
                    ]
                }, {
                    "layer_id": "joker_left_leg_a",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_left_shoe",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_left_leg",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": true}


                    ]
                },


                {
                    "layer_id": "joker-right-leg",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 4, top: 121, left: 88, opacity: 1}], "tween": true},

                    ]
                }, {
                    "layer_id": "joker_right_leg",
                    "keyframes": [
                        {"frameNum": 1,     "css": [{rotate: 23, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{rotate: 8, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 10, "css": [{rotate: 12, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 14, "css": [{rotate: 8, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{rotate: 12, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 22, "css": [{rotate: 8, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 14},
                    ]
                },  {
                    "layer_id": "joker_right_leg_a",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_right_shoe",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": true}

                    ]
                }
            ]
        },

        {
            "id": "3rdWrongLetterScene",
            "fps" :30,
            "totalFrames": 24 * 39,
            "action": [{"keyframes":[ ]}],
            "audio": [ {'src': [{'file': "audio/aww.mp3", type: "audio/mp3"}],       delayTime: 1} ],
            "layers":[

                /*
                1 + 6 move down and rotate to right (rotate body, rotate head) closest left hand, right hand
                1 + 9 move down anymore
                1 + 15 Jump
                1 + 21 move down to left
                1 + 25 : move to ground
                1 + 32 : standing
                1 + 36 : move to left      // step 1 (right leg move up;  body rotate to left , left hand move down
                 1 + 40 : move to right    // step 2 right leg move down body rotate to right, left hand move up

                 1 + 44 : move to left     // step 3 repeat to step 1
                 * */

                {
                    "layer_id": "joker_body",
                    "keyframes": [
                        {"frameNum": 1,  "css": [{top: 131, left: 85, rotate: 13, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6,  "css": [{top: 149, left: 111, rotate: 36, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 9,  "css": [{top: 149, left: 111, rotate: 39, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 15,  "css": [{top: 115, left: 66, rotate: -8, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 21,  "css": [{top: 128, left: 32, rotate: -48, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 25,  "css": [{top: 138, left: 24, rotate: -57, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 32,  "css": [{top: 135, left: 25, rotate: -11, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 36,  "css": [{top: 144, left: 22, rotate: -19, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 40,  "css": [{top: 142, left: 25, rotate: -15, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 44,  "css": [{top: 144, left: 22, rotate: -19, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 36},
                    ]
                },

                // JOKER HEAD //

                {
                    "layer_id": "joker_head",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -67, left: 0, rotate: -30, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{top: -59, left: 0, rotate: 16, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 9, "css": [{top: -53, left: 0, rotate: 25, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 15, "css": [{top: -57, left: 0, rotate: -18, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 21, "css": [{top: -57, left: 0, rotate: -34, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 25, "css": [{top: -62, left: 3, rotate: -40, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 32, "css": [{top: -67, left: 0, rotate: 67, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 36, "css": [{top: -68, left: 0, rotate: 23, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 40, "css": [{top: -67, left: 0, rotate: 30, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 44, "css": [{top: -68, left: 0, rotate: 23, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 36},
                    ]
                }, {
                    "layer_id": "joker_head_3",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -63, left: -44, opacity: 1}], "tween": false},
                        {"frameNum": 1 + 21, "css": [{top: -63, left: -44, opacity: 1}], "tween": false},
                        {"frameNum": 1 + 25, "css": [{top: -63, left: -44, opacity: 0}], "tween": false, showElement: "joker_head_4"},
                    ]
                }, {
                    "layer_id": "joker_head_4",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -79, left: -49, opacity: 0}], "tween": false},
                        {"frameNum": 1 + 21, "css": [{top: -79, left: -49, opacity: 0}], "tween": false},
                        {"frameNum": 1 + 25, "css": [{top: -79, left: -49, opacity: 1}], "tween": false, hideElement: "joker_head_3"},
                    ]
                },





                // JOKER BODY //

                {
                    "layer_id": "joker_bow",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -85, left: -29, rotate: -23, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{top: -78, left: -29, rotate: 0, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 9, "css": [{top: -73, left: -29, rotate: 0, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 15, "css": [{top: -76, left: -29, rotate: -3, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 21, "css": [{top: -76, left: -29, rotate: -23, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 25, "css": [{top: -76, left: -29, rotate: -33, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 32, "css": [{top: -85, left: -29, rotate: -8, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 36, "css": [{top: -87, left: -29, rotate: -8, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 40, "css": [{top: -87, left: -29, rotate: -4, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 44, "css": [{top: -87, left: -29, rotate: -8, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 36},
                    ]
                }, {
                    "layer_id": "joker_body-main",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -69, left: -31, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{top: -67, left: -31, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 9, "css": [{top: -63, left: -31, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 15, "css": [{top: -67, left: -31, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 21, "css": [{top: -67, left: -31, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 25, "css": [{top: -73, left: -35, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 32, "css": [{top: -73, left: -35, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 36, "css": [{top: -75, left: -35, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 40, "css": [{top: -74, left: -35, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 44, "css": [{top: -75, left: -35, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 36},
                    ]
                }, {
                    "layer_id": "joker_belly",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -27, left: -30, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 25, "css": [{top: -26, left: -28, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 32, "css": [{top: -27, left: -30, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 36, "css": [{top: -33, left: -30, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 40, "css": [{top: -34, left: -29, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 44, "css": [{top: -33, left: -30, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 36},
                    ]
                },

                // JOKER HAND

                {
                    "layer_id": "joker-left_hand",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -63, left: -14, rotate: -40, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{top: -63, left: -14, rotate: -44, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 9, "css": [{top: -63, left: -14, rotate: -30, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 15, "css": [{top: -63, left: -10, rotate: -26, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 21, "css": [{top: -61, left: -10, rotate: -26, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 25, "css": [{top: -61, left: -10, rotate: -19, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 32, "css": [{top: -61, left: -10, rotate: -10, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 36, "css": [{top: -61, left: -10, rotate: -19, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 40, "css": [{top: -61, left: -10, rotate: -14, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 44, "css": [{top: -61, left: -10, rotate: -19, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 36},

                    ]
                }, {
                    "layer_id": "joker_left_arm_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -4, left: -68, rotate: 49, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{top: -1, left: -68, rotate: 56, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 9, "css": [{top: 4, left: -68, rotate: 74, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 15, "css": [{top: 0, left: -65, rotate: 43, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 21, "css": [{top: 0, left: -65, rotate: 43, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 25, "css": [{top: 0, left: -65, rotate: 43, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 32, "css": [{top: 0, left: -65, rotate: 32, opacity: 1}], "tween": true},

                    ]
                }, {
                    "layer_id": "joker_left_hand_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_left_punch_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -9, left: -16,  rotate: -18, opacity: 1}], "tween": true},

                    ]
                },

                {
                    "layer_id": "joker-right_hand",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -64, left: 8, rotate: -9, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{top: -64, left: 8, rotate: 8, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 9, "css": [{top: -64, left: 8, rotate: 8, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 15, "css": [{top: -64, left: 6, rotate: 18, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 21, "css": [{top: -60, left: 6, rotate: -11, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 25, "css": [{top: -60, left: 6, rotate: -11, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 32, "css": [{top: -60, left: 6, rotate: -6, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 36, "css": [{top: -60, left: 6, rotate: 10, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 40, "css": [{top: -60, left: 6, rotate: 15, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 44, "css": [{top: -60, left: 6, rotate: 10, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 36},
                    ]
                } , {
                    "layer_id": "joker_right_arm_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -1, left: 40, rotate: -45, opacity: 1}],  "tween": true},
                        {"frameNum": 1 + 6, "css": [{top: 5, left: 38, rotate: -55, opacity: 1}],  "tween": true},
                        {"frameNum": 1 + 9, "css": [{top: 5, left: 38, rotate: -60, opacity: 1}],  "tween": true},
                        {"frameNum": 1 + 15, "css": [{top: 8, left: 39, rotate: -63, opacity: 1}],  "tween": true},
                        {"frameNum": 1 + 21, "css": [{top: 9, left: 43, rotate: -86, opacity: 1}],  "tween": true},
                        {"frameNum": 1 + 25, "css": [{top: 9, left: 43, rotate: -86, opacity: 1}],  "tween": true},
                        {"frameNum": 1 + 32, "css": [{top: 2, left: 39, rotate: -4, opacity: 1}],  "tween": true},
                        {"frameNum": 1 + 36, "css": [{top: 2, left: 39, rotate: -29, opacity: 1}],  "tween": true},
                        {"frameNum": 1 + 40, "css": [{top: 2, left: 39, rotate: -24, opacity: 1}],  "tween": true},
                        {"frameNum": 1 + 44, "css": [{top: 2, left: 39, rotate: -29, opacity: 1}],  "tween": true, action: "goToFrame", goToFrame: 1 + 36},
                    ]
                }, {
                    "layer_id": "joker_right_hand_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 3, opacity: 1}], "tween": true},

                    ]
                }, {
                    "layer_id": "joker_right_punch_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -7, left: 26, rotate: 16, opacity: 1}], "tween": true},
                    ]
                },

                // JOKER LEG

                {
                    "layer_id": "joker-left-leg",
                    "keyframes": [
                        {"frameNum": 1,  "css": [{top: 116, left: 83, rotate: 107, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6,  "css": [{top: 130, left: 112, rotate: 110, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 9,  "css": [{top: 141, left: 112, rotate: 117, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 15,  "css": [{top: 107, left: 62, rotate: 65, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 21,  "css": [{top: 114, left: 20, rotate: 6, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 25,  "css": [{top: 116, left: 9, rotate: 4, opacity: 1}], "tween": true},
                    ]
                }, {
                    "layer_id": "joker_left_leg_a",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_left_shoe",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_left_leg",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 0, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 21, "css": [{rotate: 0, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 25, "css": [{rotate: -7, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 32, "css": [{rotate: -7, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 36, "css": [{rotate: -6, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 40, "css": [{rotate: -7, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 44, "css": [{rotate: -6, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 36},
                    ]
                },


                {
                    "layer_id": "joker-right-leg",
                    "keyframes": [
                        {"frameNum": 1,      "css": [{top: 121, left: 88, rotate: 4, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6,  "css": [{top: 121, left: 88, rotate: 4, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 9,  "css": [{top: 121, left: 88, rotate: 4, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 15, "css": [{top: 109, left: 68, rotate: -68,  opacity: 1}], "tween": true},
                        {"frameNum": 1 + 21, "css": [{top: 106, left: 34, rotate: -120, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 25, "css": [{top: 118, left: 20, rotate: -128, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 32, "css": [{top: 118, left: 27, rotate: -37, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 36, "css": [{top: 116, left: 25, rotate: -40, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 40, "css": [{top: 118, left: 27, rotate: -28, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 44, "css": [{top: 116, left: 25, rotate: -40, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 36},

                    ]
                }, {
                    "layer_id": "joker_right_leg",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 8, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{rotate: 51, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 9, "css": [{rotate: 51, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 15, "css": [{rotate: 0, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 21, "css": [{rotate: 0, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 25, "css": [{rotate: -2, opacity: 1}], "tween": true},
                    ]
                },  {
                    "layer_id": "joker_right_leg_a",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_right_shoe",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": true}

                    ]
                }
            ]
        } ,


        {
            "id": "4thWrongLetterScene",
            "fps" :30,
            "totalFrames": 24 * 39,
            "action": [{"keyframes":[ ]}],
            "audio": [ {'src': [{'file': "audio/aww.mp3", type: "audio/mp3"}],       delayTime: 1} ],
            "layers":[

                /*
                - 1 + 6. move left
                 - 1 + 12. move right and rotate right
                 - 1 + 18 : standing and move left leg up
                 - 1 + 24 : move left                       (step 1)
                 - 1 + 32 : move right                (step 2 )
                 - 1 + 38 : move left                (step 3  repeat to step 1)
                * */


                {
                    "layer_id": "joker_body",
                    "keyframes": [
                        {"frameNum": 1,  "css": [{top: 144, left: 22, rotate: -19, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6,  "css": [{top: 142, left: 22, rotate: -37, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12,  "css": [{top: 142, left: 27, rotate: 20, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 18,  "css": [{top: 143, left: 29, rotate: 9, opacity: 1}], "tween": true},

                        {"frameNum": 1 + 24,  "css": [{top: 145, left: 28, rotate: -3, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 32,  "css": [{top: 145, left: 29, rotate: 2, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 38,  "css": [{top: 145, left: 28, rotate: -3, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 24},
                    ]
                },

                // JOKER HEAD //

                {
                    "layer_id": "joker_head",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -68, left: 0, rotate: 23, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{top: -67, left: 0, rotate: -10, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: -70, left: -6, rotate: 22, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{top: -70, left: -6, rotate: 22, opacity: 1}], "tween": true},

                        {"frameNum": 1 + 24, "css": [{top: -70, left: -6, rotate: -5, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 32, "css": [{top: -70, left: -6, rotate: 4, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 38, "css": [{top: -70, left: -6, rotate: -5, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 24},
                    ]
                }, {
                    "layer_id": "joker_head_3",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -63, left: -44, opacity: 0}], "tween": false, showElement: "joker_head_4"},
                    ]
                }, {
                    "layer_id": "joker_head_4",
                    "keyframes": [
                        {"frameNum": 1,       "css": [{top: -79, left: -49, opacity: 1}], "tween": false},
                        {"frameNum": 1 + 6,   "css": [{top: -79, left: -49, opacity: 1}], "tween": false},
                        {"frameNum": 1 + 12,  "css": [{top: -79, left: -49, opacity: 0}], "tween": false, showElement: "joker_head_5"},
                    ]
                }, {
                    "layer_id": "joker_head_5",
                    "keyframes": [
                        {"frameNum": 1,       "css": [{top: -63, left: -50, opacity: 0}], "tween": false},
                        {"frameNum": 1 + 6,   "css": [{top: -63, left: -50, opacity: 0}], "tween": false},
                        {"frameNum": 1 + 12,  "css": [{top: -63, left: -50, opacity: 1}], "tween": false, hideElement: "joker_head_4"},
                    ]
                },





                // JOKER BODY //

                {
                    "layer_id": "joker_bow",
                        "keyframes": [
                        {"frameNum": 1, "css": [{top: -87, left: -29, rotate: -8, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{top: -85, left: -29, rotate: -19, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: -85, left: -29, rotate: -9, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{top: -85, left: -29, rotate: -9, opacity: 1}], "tween": true},

                        {"frameNum": 1 + 24, "css": [{top: -85, left: -29, rotate: -9, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 32, "css": [{top: -85, left: -29, rotate: -3, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 38, "css": [{top: -85, left: -29, rotate: -9, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 24},
                    ]
                }, {
                    "layer_id": "joker_body-main",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -75, left: -35, opacity: 1}], "tween": true},
                    ]
                }, {
                    "layer_id": "joker_belly",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -33, left: -30, opacity: 1}], "tween": true},
                    ]
                },

                // JOKER HAND

                {
                    "layer_id": "joker-left_hand",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -61, left: -10, rotate: -19, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{top: -61, left: -10, rotate: -30, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: -61, left: -14, rotate: -9, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{top: -61, left: -10, rotate: -15, opacity: 1}], "tween": true},


                        {"frameNum": 1 + 24, "css": [{top: -74, left: -10, rotate: -37 - 20, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 32, "css": [{top: -74, left: -10, rotate: -37, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 38, "css": [{top: -74, left: -10, rotate: -37 - 20, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 24},
                    ]
                }, {
                    "layer_id": "joker_left_arm_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: 0, left: -65, rotate: 32, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{top: -2, left: -56, rotate: 9, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: 0, left: -68, rotate: 53, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{top: 0, left: -68, rotate: 53, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{top: -2, left: -62, rotate: 7, opacity: 1}], "tween": true},
//                        {"frameNum": 1 + 30, "css": [{top: 0, left: -68, rotate: 53, opacity: 1}], "tween": true},

                    ]
                }, {
                    "layer_id": "joker_left_hand_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_left_punch_1",
                    "keyframes": [
                        {"frameNum": 1,      "css": [{top: -9, left: -16,  rotate: -18, opacity: 1}], "tween": false},
                        {"frameNum": 1 + 18, "css": [{top: -9, left: -16,  rotate: -18, opacity: 1}], "tween": false},
                        {"frameNum": 1 + 24, "css": [{top: -9, left: -16,  rotate: -18, opacity: 0}], "tween": false, showElement: "joker_left_punch_2"},

                    ]
                }, {
                    "layer_id": "joker_left_punch_2",
                    "keyframes": [
                        {"frameNum": 1,      "css": [{top: -9, left: -16,  rotate: -18, opacity: 0}], "tween": false},
                        {"frameNum": 1 + 18, "css": [{top: -9, left: -16,  rotate: -18, opacity: 0}], "tween": false},
                        {"frameNum": 1 + 24, "css": [{top: -9, left: -16,  rotate: -18, opacity: 1}], "tween": false, hideElement: "joker_left_punch_1"},

                    ]
                },

                {
                    "layer_id": "joker-right_hand",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -60, left: 6, rotate: 10, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{top: -60, left: 6, rotate: -3, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: -60, left: 6, rotate: 0, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{top: -60, left: 6, rotate: -19, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 24, "css": [{top: -60, left: 6, rotate: 13, opacity: 1}], "tween": true},
//                        {"frameNum": 1 + 30, "css": [{top: -60, left: 6, rotate: -19, opacity: 1}], "tween": true},
                    ]
                } , {
                    "layer_id": "joker_right_arm_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: 2, left: 39, rotate: -29, opacity: 1}],  "tween": true},
                        {"frameNum": 1 + 6, "css": [{top: 2, left: 39, rotate: -34, opacity: 1}],  "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: 2, left: 39, rotate: -10, opacity: 1}],  "tween": true},
                        {"frameNum": 1 + 18, "css": [{top: 2, left: 39, rotate: -27, opacity: 1}],  "tween": true},
                        {"frameNum": 1 + 24, "css": [{top: 7, left: 39, rotate: -52, opacity: 1}],  "tween": true},
//                        {"frameNum": 1 + 30, "css": [{top: 2, left: 39, rotate: -27, opacity: 1}],  "tween": true},
                    ]
                }, {
                    "layer_id": "joker_right_hand_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 3, opacity: 1}], "tween": true},

                    ]
                }, {
                    "layer_id": "joker_right_punch_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -7, left: 26, rotate: 16, opacity: 1}], "tween": true},
                    ]
                },

                // JOKER LEG

                {
                    "layer_id": "joker-left-leg",
                    "keyframes": [
                        {"frameNum": 1,  "css": [{top: 116, left: 9, rotate: 4, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6,  "css": [{top: 116, left: 9, rotate: 4, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12,  "css": [{top: 114, left: 14, rotate: 6, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 18,  "css": [{top: 90, left: 10, rotate: 10, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 24,  "css": [{top: 113, left: -5, rotate: -9, opacity: 1}], "tween": true},
//                        {"frameNum": 1 + 30,  "css": [{top: 90, left: 10, rotate: 10, opacity: 1}], "tween": true},
                    ]
                }, {
                    "layer_id": "joker_left_leg_a",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_left_shoe",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_left_leg",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -6, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{rotate: -9, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: 8, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{rotate: 24, opacity: 1}], "tween": true},

                        {"frameNum": 1 + 24, "css": [{rotate: 18, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 32, "css": [{rotate: 22, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 38, "css": [{rotate: 18, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 24},
                    ]
                },


                {
                    "layer_id": "joker-right-leg",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: 116, left: 25, rotate: -40, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{top: 116, left: 9, rotate: -78, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: 116, left: 50, rotate: 0, opacity: 1}], "tween": true},

                    ]
                }, {
                    "layer_id": "joker_right_leg",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -2, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{rotate: -2, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{rotate: -16, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 18, "css": [{rotate: -13, opacity: 1}], "tween": true},


                        {"frameNum": 1 + 24, "css": [{rotate: -15, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 32, "css": [{rotate: -12, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 38, "css": [{rotate: -15, opacity: 1}], "tween": true, action: "goToFrame", goToFrame: 1 + 24},
                    ]
                },  {
                    "layer_id": "joker_right_leg_a",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_right_shoe",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": true}

                    ]
                }
            ]
        },


        {
            "id": "5thWrongLetterScene",
            "fps" :30,
            "totalFrames": 30 * 39,
            "action": [{"keyframes":[ ]}],
            "audio": [ {'src': [{'file': "audio/aww.mp3", type: "audio/mp3"}],       delayTime: 1} ],
            "layers":[

                /*

                 * */


                {
                    "layer_id": "joker_body",
                    "keyframes": [
                        {"frameNum": 1,      "css": [{top: 145, left: 28, rotate: -3, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6,  "css": [{top: 145, left: 28, rotate: -7, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 12, "css": [{top: 145, left: 29, rotate: 2, opacity: 1}], "tween": true},
                    ]
                },

                // JOKER HEAD //

                {
                    "layer_id": "joker_head",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -70, left: -6, rotate: -5, opacity: 1}], "tween": true},
                    ]
                }, {
                    "layer_id": "joker_head_3",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -63, left: -44, opacity: 0}], "tween": false, showElement: "joker_head_4"},
                    ]
                }, {
                    "layer_id": "joker_head_4",
                    "keyframes": [
                        {"frameNum": 1,  "css": [{top: -79, left: -49, opacity: 0}], "tween": false, showElement: "joker_head_5"},
                    ]
                }, {
                    "layer_id": "joker_head_5",
                    "keyframes": [
                        {"frameNum": 1,  "css": [{top: -63, left: -50, opacity: 1}], "tween": false, hideElement: "joker_head_4"},
                    ]
                },





                // JOKER BODY //

                {
                    "layer_id": "joker_bow",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -85, left: -29, rotate: -9, opacity: 1}], "tween": true},
                    ]
                }, {
                    "layer_id": "joker_body-main",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -75, left: -35, opacity: 1}], "tween": true},
                    ]
                }, {
                    "layer_id": "joker_belly",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -33, left: -30, opacity: 1}], "tween": true},
                    ]
                },

                // JOKER HAND

                {
                    "layer_id": "joker-left_hand",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -74, left: -10, rotate: -37 - 20, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{top: -74, left: -10, rotate: -43, opacity: 1}], "tween": true},
                    ]
                }, {
                    "layer_id": "joker_left_arm_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -2, left: -62, rotate: 7, opacity: 1}], "tween": true},

                    ]
                }, {
                    "layer_id": "joker_left_hand_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_left_punch_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -9, left: -16,  rotate: -18, opacity: 0}], "tween": false, showElement: "joker_left_punch_2"},

                    ]
                }, {
                    "layer_id": "joker_left_punch_2",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -9, left: -16,  rotate: -18, opacity: 1}], "tween": false, hideElement: "joker_left_punch_1"},

                    ]
                },

                {
                    "layer_id": "joker-right_hand",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -60, left: 6, rotate: 13, opacity: 1}], "tween": true},
                        {"frameNum": 1 + 6, "css": [{top: -60, left: 6, rotate: -36, opacity: 1}], "tween": true},
                    ]
                } , {
                    "layer_id": "joker_right_arm_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: 7, left: 39, rotate: -52, opacity: 1}],  "tween": true},
                        {"frameNum": 1, "css": [{top: 5, left: 39, rotate: -30, opacity: 1}],  "tween": true},
                    ]
                }, {
                    "layer_id": "joker_right_hand_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 3, opacity: 1}], "tween": true},

                    ]
                }, {
                    "layer_id": "joker_right_punch_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: -7, left: 26, rotate: 16, opacity: 1}], "tween": true},
                    ]
                },

                // JOKER LEG

                {
                    "layer_id": "joker-left-leg",
                    "keyframes": [
                        {"frameNum": 1,  "css": [{top: 113, left: -5, rotate: -9, opacity: 1}], "tween": true},
                    ]
                }, {
                    "layer_id": "joker_left_leg_a",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_left_shoe",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_left_leg",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: 18, opacity: 1}], "tween": true},
                    ]
                },


                {
                    "layer_id": "joker-right-leg",
                    "keyframes": [
                        {"frameNum": 1, "css": [{top: 116, left: 50, rotate: 0, opacity: 1}], "tween": true},

                    ]
                }, {
                    "layer_id": "joker_right_leg",
                    "keyframes": [
                        {"frameNum": 1, "css": [{rotate: -15, opacity: 1}], "tween": true},
                    ]
                },  {
                    "layer_id": "joker_right_leg_a",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": true}

                    ]
                }, {
                    "layer_id": "joker_right_shoe",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": true}

                    ]
                }
            ]
        }

    ]
}

/* END GAME */

