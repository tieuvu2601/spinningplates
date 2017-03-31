/**
 * ...
 * @author Pankaj Jha
 */


function Animator(_obj, fps, currentFrame, totalframe) {
    var _self = this;
    this.animObject = _obj;
    this.delay = 0;
    this.intervalId;
    this.state = "playing";
    this.layer_id = _obj.layer_id
    this._totalFrames = totalframe;
    this._timerDelay = Math.round(1000 / fps);
    this._currentFrame = currentFrame;
    this._loopByFrame = null;
    this._intervalLoopFrame = null;
    this.innerAnimator = [];
    this.loopCounter = 0;
    this._loadNext = false;

    this.badBrowser = (/MSIE ((5\.5)|6|7|8)/.test(navigator.userAgent) && navigator.platform == "Win32");

    this.broadcastMessage = function () {
        var arr = new Array();
        for (var i = 0; i < arguments.length; i++) {
            arr.push(arguments[i])
        }
        var e = arr.shift();
        var a = this._listeners;
        var l = a.length;
        for (var i = 0; i < l; i++) {
            if (a[i][e])
                a[i][e].apply(a[i], arr);
        }
    }

    this.addListener = function (o) {
        this.removeListener(o);
        return this._listeners.push(o);
    }

    this.removeListener = function (o) {
        var a = this._listeners;
        var i = a.length;
        while (i--) {
            if (a[i] == o) {
                a.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    this.onEnterFrame = function () {
        ref = this;
        this._currentFrame++;
        var isKeyFrame = false;
        var intervalFrame = null;

        for (var k = 0; k < this.animObject.keyframes.length; k++) {
            var cKeyFrame = this.animObject.keyframes[k];
            if (Number(cKeyFrame.frameNum) == this._currentFrame) {
                cKeyFrame.visited = true;
                this.animObject.lastKeyFrameIndex = k;
                this.loopCounter++;
                isKeyFrame = true;
                break;
            }
        }


        var layerObj = $("#" + this.animObject.layer_id);
        if (isKeyFrame) {
            if (cKeyFrame.css) {
                for (var prop in cKeyFrame.css[0]) {
                    if (prop.toLowerCase() == "rotate") {
                        layerObj.css('transform', 'rotate(' + cKeyFrame.css[0][prop] +'deg)');
                    } else if(prop.toLowerCase() == "scale"){
                        layerObj.css('transform', 'scale(' + cKeyFrame.css[0][prop].x +',' + cKeyFrame.css[0][prop].y +')');
                    } else {
                        layerObj.css(prop, cKeyFrame.css[0][prop]);
                    }
                }
            }

            if (cKeyFrame.action == "stop") {
                this.state = "stop";
                this.stop();

                this.broadcastMessage('onAnimStop', {target: this, type: 'onAnimStop', frameNo: cKeyFrame.frameNum});
            } else if (cKeyFrame.hideElement) {
                this.broadcastMessage('hideElement', {
                    target: this,
                    type: 'hideElement',
                    element: cKeyFrame.hideElement
                });

            } else if (cKeyFrame.showElement) {
                this.broadcastMessage('showElement', {
                    target: this,
                    type: 'showElement',
                    element: cKeyFrame.showElement
                });

            } else  if (cKeyFrame.action == "ownLoop") {
                this._loopByFrame = this._currentFrame;

            } else if(cKeyFrame.action == "goToFrame" && cKeyFrame.goToFrame != null){
                intervalFrame = cKeyFrame.goToFrame;
            } else {
                if (this.animObject.keyframes[this.animObject.lastKeyFrameIndex + 1] == undefined) {
                    this.state = "stop";
                    this.stop();
                }
            }

        } else {
            var lastKeyFrameObj = this.animObject.keyframes[this.animObject.lastKeyFrameIndex];
            var nextKeyFrameObj = this.animObject.keyframes[this.animObject.lastKeyFrameIndex + 1];
            if (lastKeyFrameObj && nextKeyFrameObj) {
                if (lastKeyFrameObj.tween && nextKeyFrameObj != undefined) {
                    var steps = nextKeyFrameObj.frameNum - lastKeyFrameObj.frameNum;
                    var currentStep = this._currentFrame - lastKeyFrameObj.frameNum;
                    var easing = lastKeyFrameObj.easing;
                    if (lastKeyFrameObj.css && cKeyFrame.css) {
                        for (var prop in lastKeyFrameObj.css[0]) {
                            var start = lastKeyFrameObj.css[0][prop]
                            var end = nextKeyFrameObj.css[0][prop]
                            var attrbVal = ""
                            attrbVal = this.getTweenPosition(prop, start, end, currentStep, steps, easing);

                            layerObj.css(attrbVal.prop, attrbVal.value);

                            if (this.badBrowser) {
                                if (prop.toLowerCase() == "opacity") {
                                    layerObj.css('filter', 'alpha(opacity=' + Math.round(Number(attrbVal) * 100) + ')');
                                    layerObj.css('-ms-filter', 'progid:DXImageTransform.Microsoft.Alpha(Opacity=' + Math.round(Number(attrbVal) * 100) + ')')
                                }
                            }
                        }
                    }
                }
            }
        }

        this.intervalId = setTimeout(Delegate.create(this, this.onEnterFrame), this._timerDelay);

        if(intervalFrame != null){
            this._currentFrame =  intervalFrame - 1;
        }

    }

    this.gotoAndStop = function (frm) {
        this._currentFrame = Number(frm - 1)
        clearTimeout(this.intervalId);
    }

    this.gotoAndPlay = function (frm) {
        this._currentFrame = Number(frm - 1)
        this.stop();
        this.play();
    }

    this.ownLoop = function (){
        var beginFrame = this._loopByFrame == null ? 0 : this._loopByFrame;
        this._currentFrame = Number(beginFrame);
        this.stop();
        this.play();
    }

    this.replay = function () {
        this.loopCounter = 0;
        this._currentFrame = this.animObject.keyframes[0].frameNum - 1
        this.stop();
        this.play();
    }

    this.stop = function () {
        if (this.loopCounter < 0) {
            this.loopCounter--
        }
        clearTimeout(this.intervalId);
    }

    this.play = function () {
        this.loopCounter = 0;
        this.intervalId = setTimeout(Delegate.create(this, this.onEnterFrame), this._timerDelay);

    }

    this.init = function () {
        this._currentFrame = 0;
        this.loopCounter = 0;
        this._listeners = new Array();
        this.addListener(this);
        this.intervalId = setTimeout(Delegate.create(this, this.onEnterFrame), this._timerDelay);
    }


    this.broadcastMessage = function () {
        var arr = new Array();
        for (var i = 0; i < arguments.length; i++) {
            arr.push(arguments[i])
        }
        var e = arr.shift();
        var a = this._listeners;
        var l = a.length;
        for (var i = 0; i < l; i++) {
            if (a[i][e])
                a[i][e].apply(a[i], arr);
        }
    }


    this.addListener = function (o) {
        this.removeListener(o);
        return this._listeners.push(o);
    }

    this.removeListener = function (o) {
        var a = this._listeners;
        var i = a.length;
        while (i--) {
            if (a[i] == o) {
                a.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    this.getTweenPosition = function (property, begin, finish, currentStep, totalSteps, easing) {
        if (property == "scale" && finish.x == begin.x && finish.y == begin.y) {
            return {
                'prop': "transform",
                'value': "scale(" + begin.x + ',' + begin.y + ')'
            };
        } else if (property == "transform-origin") {
            return {
                'prop': "transform-origin",
                'value': begin
            };
        }

        if (finish == begin) {
            if(property == "scale"){
                return {
                    'prop': "transform",
                    'value': "scale(" + begin.x + ',' + begin.y + ')'
                };
            } else if (property == "rotate"){
                return {
                    'prop': "transform",
                    'value': "rotate(" + begin + "deg)"
                };
            } else {
                return {
                    'prop': property,
                    'value': begin
                };
            }

        }



        if (property == "scale") {
            var scale_x = finish.x - begin.x;
            var scale_y = finish.y - begin.y;
            var scale_by_x;
            var scale_by_y;

            switch (easing) {
                case "bounceEaseOut":
                    scale_by_x = this.bounceEaseOut(currentStep, begin.x, scale_x, totalSteps);
                    scale_by_y = this.bounceEaseOut(currentStep, begin.y, scale_y, totalSteps);
                    break;
                case "easeNone":
                    ;

                //easeNone
                default:

                    scale_by_x = this.easeNone(currentStep, begin.x, scale_x, totalSteps);
                    scale_by_y = this.easeNone(currentStep, begin.y, scale_y, totalSteps);
                    break;
            }

            return {
                'prop': "transform",
                'value': "scale(" + scale_by_x + ',' + scale_by_y + ')'
            };

        } else {
            var change = getTweenChange(property, begin, finish, currentStep, totalSteps);
            var position;
            switch (easing) {
                case "bounceEaseOut":
                    position = this.bounceEaseOut(currentStep, begin, change, totalSteps);
                    break;
                case "easeNone":
                    ;
                default://easeNone
                    position = this.easeNone(currentStep, begin, change, totalSteps);
                    break;
            }

            return {
                'prop': property == "rotate" ? "transform" : property,
                'value': property == "rotate" ? "rotate(" + position + "deg)" : position
            };
        }

        function getTweenChange(property, begin, finish, currentStep, totalSteps) {
            return finish - begin;
        }
    }

    this.easeNone = function (t, b, c, d) {
        return c * t / d + b;
    }

    this.bounceEaseOut = function (t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    }

    this._listeners = new Array();
    this.addListener(this);
}
