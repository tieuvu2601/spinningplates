var backgroundScene = {
    'audioTimelineLayer' : [
//        {"timeLineId": "firstWrongLetterScene" , audio : [{'src': [{'file': "audio/aww.mp3", type: "audio/mp3"}],       delayTime: 1}]}
    ],

    'stackTimelineLayer' : [
        {
            "fps" :24,
            "totalFrames": 24 * 20,  // 20 second
            "id": "background",
            "audio": [{'src': [{'file': "audio/circus_music.mp3", type: "audio/mp3"}], 'startFrameNum': 1}],
            "action": [{"keyframes": [{"frameNum": 24 * 30 - 10, "action": "loop"}]}],
            "layers":[
                // static frame or need show when begin
                {
                    "layer_id": "background",
                    "keyframes": [
                        {"frameNum": 1, "css": [{"opacity": 1}], "tween": false},
                        {"frameNum": 2, "css": [{"opacity": 1}], "tween": false}
                    ]
                }, {
                    "layer_id": "joker",
                    "keyframes": [
                        {"frameNum": 1, "css": [{opacity: 1}], "tween": false},
                        {"frameNum": 2, "css": [{opacity: 1}], "tween": false}
                    ]
                },


                {
                    "layer_id": "left_leg",
                    "keyframes": [
                        {"frameNum": 1, "css": [{"opacity": 1}], "tween": false},
                        {"frameNum": 2, "css": [{"opacity": 1}], "tween": false}
                    ]
                }, {
                    "layer_id": "left_foot",
                    "keyframes": [
                        {"frameNum": 1, "css": [{"opacity": 1}], "tween": false},
                        {"frameNum": 2, "css": [{"opacity": 1}], "tween": false}
                    ]
                }, {
                    "layer_id": "line_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{"opacity": 1}], "tween": false},
                        {"frameNum": 2, "css": [{"opacity": 1}], "tween": false}
                    ]
                }, {
                    "layer_id": "line_1_dished",
                    "keyframes": [
                        {"frameNum": 1, "css": [{"opacity": 1}], "tween": false},
                        {"frameNum": 2, "css": [{"opacity": 1}], "tween": false}
                    ]
                },

                {
                    "layer_id": "right_leg",
                    "keyframes": [
                        {"frameNum": 1, "css": [{"opacity": 1}], "tween": false},
                        {"frameNum": 2, "css": [{"opacity": 1}], "tween": false}
                    ]
                }, {
                    "layer_id": "right_foot",
                    "keyframes": [
                        {"frameNum": 1, "css": [{"opacity": 1}], "tween": false},
                        {"frameNum": 2, "css": [{"opacity": 1}], "tween": false}
                    ]
                },


                {
                    "layer_id": "forearm_left",
                    "keyframes": [
                        {"frameNum": 1, "css": [{"opacity": 1}], "tween": false},
                        {"frameNum": 2, "css": [{"opacity": 1}], "tween": false}
                    ]
                },  {
                    "layer_id": "upper_arm_left",
                    "keyframes": [
                        {"frameNum": 1, "css": [{"opacity": 1}], "tween": false},
                        {"frameNum": 2, "css": [{"opacity": 1}], "tween": false}
                    ]
                }, {
                    "layer_id": "hand_close_left",
                    "keyframes": [
                        {"frameNum": 1, "css": [{"opacity": 1}], "tween": false},
                        {"frameNum": 2, "css": [{"opacity": 1}], "tween": false}
                    ]
                },

                {
                    "layer_id": "line_2",
                    "keyframes": [
                        {"frameNum": 1, "css": [{"opacity": 1}], "tween": false},
                        {"frameNum": 2, "css": [{"opacity": 1}], "tween": false}
                    ]
                }, {
                    "layer_id": "line_2_dished",
                    "keyframes": [
                        {"frameNum": 1, "css": [{"opacity": 1}], "tween": false},
                        {"frameNum": 2, "css": [{"opacity": 1}], "tween": false}
                    ]
                },

                {
                    "layer_id": "line_3",
                    "keyframes": [
                        {"frameNum": 1, "css": [{"opacity": 1}], "tween": false},
                        {"frameNum": 2, "css": [{"opacity": 1}], "tween": false}
                    ]
                }, {
                    "layer_id": "line_3_dished",
                    "keyframes": [
                        {"frameNum": 1, "css": [{"opacity": 1}], "tween": false},
                        {"frameNum": 2, "css": [{"opacity": 1}], "tween": false}
                    ]
                },





                {
                    "layer_id": "forearm_right",
                    "keyframes": [
                        {"frameNum": 1, "css": [{"opacity": 1}], "tween": false},
                        {"frameNum": 2, "css": [{"opacity": 1}], "tween": false}
                    ]
                }, {
                    "layer_id": "upper_arm_right",
                    "keyframes": [
                        {"frameNum": 1, "css": [{"opacity": 1}], "tween": false},
                        {"frameNum": 2, "css": [{"opacity": 1}], "tween": false}
                    ]
                }, {
                    "layer_id": "hand_close_right",
                    "keyframes": [
                        {"frameNum": 1, "css": [{"opacity": 1}], "tween": false},
                        {"frameNum": 2, "css": [{"opacity": 1}], "tween": false}
                    ]
                }, {
                    "layer_id": "line_5",
                    "keyframes": [
                        {"frameNum": 1, "css": [{"opacity": 1}], "tween": false},
                        {"frameNum": 2, "css": [{"opacity": 1}], "tween": false}
                    ]
                }, {
                    "layer_id": "line_5_dished",
                    "keyframes": [
                        {"frameNum": 1, "css": [{"opacity": 1}], "tween": false},
                        {"frameNum": 2, "css": [{"opacity": 1}], "tween": false}
                    ]
                },  {
                    "layer_id": "line_6",
                    "keyframes": [
                        {"frameNum": 1, "css": [{"opacity": 1}], "tween": false},
                        {"frameNum": 2, "css": [{"opacity": 1}], "tween": false}
                    ]
                }, {
                    "layer_id": "line_6_dished",
                    "keyframes": [
                        {"frameNum": 1, "css": [{"opacity": 1}], "tween": false},
                        {"frameNum": 2, "css": [{"opacity": 1}], "tween": false}
                    ]
                },







                {
                    "layer_id": "joker_head_1",
                    "keyframes": [
                        {"frameNum": 1, "css": [{"opacity": 1}], "tween": false},
                        {"frameNum": 2, "css": [{"opacity": 1}], "tween": false}
                    ]
                }, {
                    "layer_id": "joker_chest",
                    "keyframes": [
                        {"frameNum": 1, "css": [{"opacity": 1}], "tween": false},
                        {"frameNum": 2, "css": [{"opacity": 1}], "tween": false}
                    ]
                },  {
                    "layer_id": "joker_blow",
                    "keyframes": [
                        {"frameNum": 1, "css": [{"opacity": 1}], "tween": false},
                        {"frameNum": 2, "css": [{"opacity": 1}], "tween": false}
                    ]
                }, {
                    "layer_id": "joker_waist",
                    "keyframes": [
                        {"frameNum": 1, "css": [{"opacity": 1}], "tween": false},
                        {"frameNum": 2, "css": [{"opacity": 1}], "tween": false}
                    ]
                },  {
                    "layer_id": "line_4",
                    "keyframes": [
                        {"frameNum": 1, "css": [{"opacity": 1}], "tween": false},
                        {"frameNum": 2, "css": [{"opacity": 1}], "tween": false}
                    ]
                },  {
                    "layer_id": "line_4_dished",
                    "keyframes": [
                        {"frameNum": 1, "css": [{"opacity": 1}], "tween": false},
                        {"frameNum": 2, "css": [{"opacity": 1}], "tween": false}
                    ]
                }
            ]
        }
    ]
}