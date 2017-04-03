function Timeline(timeline, fps, id) {
    this.intervalId;
    this._timerDelay = Math.round(1000 / (fps - 1));
    this._currentFrame = 0;
    this._timeline = timeline
    this._arrlayerObj = [];
    this.action = "play";
    this.id = id;
    this._audioRef = null;
    this.state = "stop";

    this.isAllTimeLineIsStop  = false;
    var self = this;

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

    this.onEnterFrame = function () {
        this._currentFrame++;
        var flag = 0;
        var cKeyFrame = null;
        if (this._timeline.action) {
            if (this._timeline.audio) {
                for(var i = 0; i < this._timeline.audio.length; i++){
                    var audioObj = this._timeline.audio[i];
                    if (this._currentFrame == Number(audioObj.startFrameNum)) {
                        if (this._audioRef[i] != null) {

                            var audioObject = this._audioRef[i].audioObject;
                            var delayTime = this._audioRef[i].delayTime;

                            setTimeout(function(){
                                audioObject.volume = getCurrentAudioForHangMan();
                                audioObject.play()
                            }, delayTime);
                        }
                    }
                }
            }

            var tmpTimeline = this._timeline.action[0].keyframes;

            for (var k = 0; k < tmpTimeline.length; k++) {
                var cKeyFrame = tmpTimeline[k];
                if (Number(cKeyFrame.frameNum) == this._currentFrame) {
                    this.action = cKeyFrame.action;
                    flag = 1;
                    break;
                }
            }

            if (flag == 1) {
                this.broadcastMessage('onstateChange', {target: this, type: 'onstateChange'});
            }
        }
    }

    this.init = function () {
        this._listeners = new Array();
        this.addListener(this);
        this.state = "playing";

        if (this._timeline.audio) {
            this.setAudioRef();
        }

        $.each(this._timeline.layers, function (key, value) {
            var anim = new Animator(value, timeline.fps, 0, self._timeline.totalFrames);
            self._arrlayerObj.push(anim);
        });

        for (var i = 0; i < this._arrlayerObj.length; i++) {
            self._arrlayerObj[i].init();
            self._arrlayerObj[i].onAnimStop = function (ref) {
                self.stop();
            }

            self._arrlayerObj[i].hideElement = function (ref) {
                $('#' + ref.element).css('display', 'none');
            }

            self._arrlayerObj[i].showElement = function (ref) {
                $('#' + ref.element).css('display', 'block');
            }
        }

        this.intervalId = setInterval(Delegate.create(this, this.onEnterFrame), this._timerDelay);
    }

    this.setAudioRef = function () {
        this._audioRef = new Array ();

        for(var i = 0; i < this._timeline.audio.length; i++){
            var audioDataObj = this._timeline.audio[i];

            var delayTime = audioDataObj.delayTime != null && audioDataObj.delayTime != undefined && audioDataObj.delayTime > 0 ? audioDataObj.delayTime : 1;

            var audioTagmain = document.createElement('audio');
            if (!!audioTagmain.canPlayType) {
                var audioTag = $('<audio />', {});
                var hasSupportedFile = false;
                for (var aNum = 0; aNum < audioDataObj.src.length; aNum++) {
                    if (audioTagmain.canPlayType(audioDataObj.src[aNum].type)) {
                        $('<source />', {
                            src: audioDataObj.src[aNum].file,
                            type: audioDataObj.src[aNum].type
                        }).appendTo(audioTag);
                        hasSupportedFile = true;
                        break;
                    }
                }

                if (!hasSupportedFile) {
                    console.log("Could not find supported audio file...");
                }
                audioTag.appendTo('body');

                this._audioRef[i] = {
                    'audioObject' : $(audioTag).get(0),
                    'delayTime' : delayTime
                };
            }
        }
    }

    this.stop = function () {
        clearInterval(this.intervalId);

        for (var i = 0; i < this._arrlayerObj.length; i++) {
            this._arrlayerObj[i].stop();
            this._arrlayerObj[i].state = "stop";

            if(i == this._arrlayerObj.length - 1){
                this.isAllTimeLineIsStop = true;
            }
        }

        if(this.isAllTimeLineIsStop){
            this.state = "stop";

            if (this._audioRef != null && this._audioRef.length > 0) {
                for(var i = 0; i < this._audioRef.length; i++){
                    this._audioRef[i].audioObject.stop;
                }
            }
        }
    }

    this.playLastTime = function (){
        clearInterval(this.intervalId);
        for (var i = 0; i < this._arrlayerObj.length; i++) {
            this._arrlayerObj[i].state = "stop";
            this._arrlayerObj[i].stop();

            if(i == this._arrlayerObj.length - 1){
                this.isAllTimeLineIsStop = true;
            }
        }

        if(this.isAllTimeLineIsStop){
            this.state = "stop";

            if (this._audioRef != null && this._audioRef.length > 0) {
                for(var i = 0; i < this._audioRef.length; i++){
                    this._audioRef[i].audioObject.stop;
                }
            }
        }
    }



    this.stopAll = function (){
        clearInterval(this.intervalId);

        for (var i = 0; i < this._arrlayerObj.length; i++) {
            this._arrlayerObj[i].stop();
            this._arrlayerObj[i].state = "stop";
        }

        this.state = "stop";

        if (this._audioRef != null && this._audioRef.length > 0) {
            for(var i = 0; i < this._audioRef.length; i++){
                this._audioRef[i].audioObject.stop()
            }
        }
    }

    this.gotoAndPlay = function (frm) {
        clearInterval(this.intervalId);

        this._currentFrame = Number(frm);
        for (var i = 0; i < this._arrlayerObj.length; i++) {
            this._arrlayerObj[i].gotoAndPlay(this._currentFrame);
            this._arrlayerObj[i].state = 'playing';
        }

        this.intervalId = setInterval(Delegate.create(this, this.onEnterFrame), this._timerDelay);
        this.state = "playing";

        if (this._audioRef != null && this._audioRef.length > 0) {
            for(var i = 0; i < this._audioRef.length; i++){
                playAudioByData(i);
            }
        }
    }

    this.play = function () {
        this.intervalId = setInterval(Delegate.create(this, this.onEnterFrame), this._timerDelay);
        for (var i = 0; i < this._arrlayerObj.length; i++) {
            this._arrlayerObj[i].play();
        }

        if (this._audioRef != null && this._audioRef.length > 0) {
            for(var i = 0; i < this._audioRef.length; i++){
                if (this._audioRef != null && this._audioRef.length > 0) {
                    for(var i = 0; i < this._audioRef.length; i++){
                        playAudioByData(i);
                    }
                }
            }
        }

        this.state = "playing";
    }

    function playAudioByData(i) {
        var audioData = self._audioRef[i];
        var audioObject = audioData.audioObject;
        var delayTime = audioData.delayTime;

        setTimeout(function() {
            audioObject.volume = getCurrentAudioForHangMan();
            audioObject.play();
        }, delayTime);
    }

    this.reset = function () {
        self.gotoAndPlay(4);
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

}
	
	