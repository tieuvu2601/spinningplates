var correctScene = {
    'audioTimelineLayer' : [
        {"timeLineId": "firstWrongLetterScene" , audio : [{'src': [{'file': "audio/aww.mp3", type: "audio/mp3"}],       delayTime: 1}]}
    ],

    'stackTimelineLayer' : [
        {
            "fps" :24,
            "totalFrames": 24 + 30,  // 25 second
            "id": "correct",
            "audio": [{'src': [{'file': "audio/crowd_applause.mp3", type: "audio/mp3"}], 'startFrameNum': 4}],
            "action": [{"keyframes":[ ]}],
            "layers":[
                {
                    "layer_id": "clapping",
                    "keyframes": [
                        {"frameNum": 1, "css": [{"top": 0, "left": 0, "opacity": 1}], "tween": false},
                        {"frameNum": 2, "css": [{"top": 0, "left": 0, "opacity": 1}], "tween": false}
                    ]
                }, {
                    "layer_id": "clapping_1",
                    "keyframes": [
                        { "frameNum": 2,      "css": [{scale: {x: 0, y: 0}, opacity: 1}], "tween": true},
                        { "frameNum": 2 + 10, "css": [{scale: {x: 0.8, y: 0.8}, opacity: 1}], "tween": true},
                        { "frameNum": 2 + 15, "css": [{scale: {x: 1.2, y: 1.2}, opacity: 1}], "tween": true},
                        { "frameNum": 2 + 20, "css": [{scale: {x: 1, y: 1}, opacity: 1}], "tween": true},
                        { "frameNum": 2 + 30, "css": [{scale: {x: 1, y: 1}, opacity: 0}], "tween": true},
                        { "frameNum": 2 + 31, "css": [{scale: {x: 0, y: 0}, opacity: 0}], "tween": true}
                    ]
                }, {
                    "layer_id": "clapping_2",
                    "keyframes": [
                        { "frameNum": 2,      "css": [{scale: {x: 0, y: 0}, opacity: 1}], "tween": true},
                        { "frameNum": 2 + 10, "css": [{scale: {x: 0.8, y: 0.8}, opacity: 1}], "tween": true},
                        { "frameNum": 2 + 15, "css": [{scale: {x: 1.2, y: 1.2}, opacity: 1}], "tween": true},
                        { "frameNum": 2 + 20, "css": [{scale: {x: 1, y: 1}, opacity: 1}], "tween": true},
                        { "frameNum": 2 + 30, "css": [{scale: {x: 1, y: 1}, opacity: 0}], "tween": true},
                        { "frameNum": 2 + 31, "css": [{scale: {x: 0, y: 0}, opacity: 0}], "tween": true}
                    ]
                }, {
                    "layer_id": "clapping_3",
                    "keyframes": [
                        { "frameNum": 2,      "css": [{scale: {x: 0, y: 0}, opacity: 1}], "tween": true},
                        { "frameNum": 2 + 10, "css": [{scale: {x: 0.8, y: 0.8}, opacity: 1}], "tween": true},
                        { "frameNum": 2 + 15, "css": [{scale: {x: 1.2, y: 1.2}, opacity: 1}], "tween": true},
                        { "frameNum": 2 + 20, "css": [{scale: {x: 1, y: 1}, opacity: 1}], "tween": true},
                        { "frameNum": 2 + 30, "css": [{scale: {x: 1, y: 1}, opacity: 0}], "tween": true},
                        { "frameNum": 2 + 31, "css": [{scale: {x: 0, y: 0}, opacity: 0}], "tween": true}
                    ]
                }, {
                    "layer_id": "clapping_4",
                    "keyframes": [
                        { "frameNum": 24,  "css": [{scale: {x: 0, y: 0}, opacity: 1}], "tween": true},
                        { "frameNum": 24 + 10, "css": [{scale: {x: 0.8, y: 0.8}, opacity: 1}], "tween": true},
                        { "frameNum": 24 + 15, "css": [{scale: {x: 2, y: 2}, opacity: 1}], "tween": true},
                        { "frameNum": 24 + 20, "css": [{scale: {x: 1.5, y: 1.5}, opacity: 1}], "tween": true},
                        { "frameNum": 24 + 30, "css": [{scale: {x: 1.5, y: 1.5}, opacity: 0}], "tween": true},
                        { "frameNum": 24 + 31, "css": [{scale: {x: 0, y: 0}, opacity: 0}], "tween": true}
                    ]
                }
            ]
        }
    ]
}