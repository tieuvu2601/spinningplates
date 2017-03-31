function AnimController(timeline) {
    this._timeline = timeline;
    this._arrTimelineLayers = []
    var self = this;
    this.onInit = function (timeline) {
        var tm = new Timeline(timeline, Number(timeline.fps), timeline.id);
        tm.init();
        this._arrTimelineLayers[timeline.id] = tm

        tm.onstateChange = function () {
            if (this.action == "stop") {

            } else if (this.action == "loop") {
                this.gotoAndPlay(1);
            } else if (this.action == "ownLoop"){
                this.ownLoop();
            }

        }

        for (var i = 0; i < timeline.layers.length; i++) {
            if (timeline.layers[i].timeline !== undefined) {
                self.onInit(timeline.layers[i].timeline)
            }
        }
        return;
    }

    this.init = function () {
        this.onInit(this._timeline);
    }


    this.stop = function (timelineId) {
        var obj = this._arrTimelineLayers[timelineId]
        if (obj) {
            obj.stop();
        }
    }

    this.stopAll = function () {
        for(var i = 0; i < this._arrTimelineLayers.length; i++){
            var obj = this._arrTimelineLayers[i];
            if (obj) {
                obj.stopAll();
            }
        }
    }

    this.getState = function (id) {
        var obj = this._arrTimelineLayers[id]
        if (obj) {
            return obj.state;
        }
        return "playing"
    }

    this.getCurrentFrame = function (id) {
        var obj = this._arrTimelineLayers[id]
        if (obj) {
            return obj._currentFrame;
        }
        return 0;
    }

    this.play = function (timelineId) {
        var obj = this._arrTimelineLayers[timelineId]
        if (obj) {
            obj.play();
        }
    }

    this.reset = function (timelineId) {
        var obj = this._arrTimelineLayers[timelineId]
        if (obj) {
            obj.reset();
        }
    }

    this.gotoAndPlay = function (timelineId, _frmNo) {
        var obj = this._arrTimelineLayers[timelineId]
        if (obj) {
            obj.gotoAndPlay(_frmNo);
        }
    }

    this.gotoAndStop = function (_frmNo) {

    }
}