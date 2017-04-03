function getCurrentAudioForHangMan (){
    return window.parent.getCurrentAudioVolume();
}


function SceneController(_scene) {


    this._scene = _scene;                           // root time line
    this._arrTimelineLayers = [];                 // current layer time line
    this._arrTimelineLayersStack = [];            // stack time line : scene 1 --> scene 2 --> scene 3 .... --> scene n
    this._arrTimelineLayersStackIndex = 0;        // index of scene  :   0            1           2               n - 1


    // begin : we load first time line in stack
    // when stop it, we paused all time line before and load next
    // using for spinning plates

    var self = this;

    this.init = function (){
        this.onInit(this._scene);
    }

    this.onInit = function (_scene) {
        if(_scene.stackTimelineLayer != null && _scene.stackTimelineLayer.length > 0){
            this._arrTimelineLayersStack = _scene.stackTimelineLayer;
        }
    }

    this.playScene = function (){
        var currentTimeLine =  self._arrTimelineLayersStack[self._arrTimelineLayersStackIndex];

        if(currentTimeLine != null && currentTimeLine != undefined){
            var tm = new Timeline(currentTimeLine, Number(currentTimeLine.fps), currentTimeLine.id);
            tm.init();
            self._arrTimelineLayers[currentTimeLine.id] = tm;

            tm.onstateChange = function () {
                if (this.action == "stop") {

                } else if (this.action == "loop") {
                    this.gotoAndPlay(1);
                } else if (this.action == "ownLoop"){
                    this.ownLoop();
                }
            }

            for (var i = 0; i < currentTimeLine.layers.length; i++) {
                if (currentTimeLine.layers[i].timeline !== undefined) {
                    self.onInit(currentTimeLine.layers[i].timeline)
                }
            }

            return;
        }
    }

    this.stopScene = function (){
        for (var _timeLineId in this._arrTimelineLayers) {
            var currentTimeLine = this._arrTimelineLayers[_timeLineId];
            currentTimeLine.playLastTime();
        }

        this._arrTimelineLayers = new Array ();
    }

    this.playNextScene = function (){
        self.stopScene();
        self._arrTimelineLayersStackIndex ++;
        self.playScene();
    }

    this.repeatScene = function (){
        self.stopScene();
        self.playScene();
    }




















//
//
//    this.init = function () {
//        this.onInit(this._timeline);
//    }
//
//
//    this.stop = function (timelineId) {
//        var obj = this._arrTimelineLayers[timelineId]
//        if (obj) {
//            obj.stop();
//        }
//    }
//
//    this.stopAll = function () {
//        for(var i = 0; i < this._arrTimelineLayers.length; i++){
//            var obj = this._arrTimelineLayers[i];
//            if (obj) {
//                obj.stopAll();
//            }
//        }
//    }
//
//    this.getState = function (id) {
//        var obj = this._arrTimelineLayers[id]
//        if (obj) {
//            return obj.state;
//        }
//        return "playing"
//    }
//
//    this.getCurrentFrame = function (id) {
//        var obj = this._arrTimelineLayers[id]
//        if (obj) {
//            return obj._currentFrame;
//        }
//        return 0;
//    }
//
//    this.play = function (timelineId) {
//        var obj = this._arrTimelineLayers[timelineId]
//        if (obj) {
//            obj.play();
//        }
//    }
//
//    this.reset = function (timelineId) {
//        var obj = this._arrTimelineLayers[timelineId]
//        if (obj) {
//            obj.reset();
//        }
//    }
//
//    this.gotoAndPlay = function (timelineId, _frmNo) {
//        var obj = this._arrTimelineLayers[timelineId]
//        if (obj) {
//            obj.gotoAndPlay(_frmNo);
//        }
//    }
//
//    this.gotoAndStop = function (_frmNo) {
//
//    }
}