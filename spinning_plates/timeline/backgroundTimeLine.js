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
                        {"frameNum": 1, "css": [{"top": 0, "left": 0, "opacity": 1}], "tween": false},
                        {"frameNum": 2, "css": [{"top": 0, "left": 0, "opacity": 1}], "tween": false}
                    ]
                }
                // beginning

            ]
        }
    ]
}