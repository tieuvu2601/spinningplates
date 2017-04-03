function getCurrentAudioForHangMan (){
    return 1;

//    return window.parent.getCurrentAudioVolume();
}


function sadlierAnimationController (){
    var audioVolume = 1;

    var backgroundAnimationObj;
    var correctAnimationObj;
    var incorrectAnimationObj;
    var winnerAnimationObj;
    var me = this;

    this.init = function(_audioVolume){
        audioVolume = _audioVolume;


        backgroundAnimationObj = new SceneController(backgroundScene);
        correctAnimationObj = new SceneController(correctScene);
        incorrectAnimationObj = new SceneController(incorrectScene);

        backgroundAnimationObj.init();
        correctAnimationObj.init();
        incorrectAnimationObj.init();

        backgroundAnimationObj.playScene();
        incorrectAnimationObj.playScene();

        me.changeAudioVolume(audioVolume);
    }


    this.wrongAnswer = function (){
        incorrectAnimationObj.playNextScene();
    }

    this.correctAnswer = function (){
        correctAnimationObj.repeatScene();
    }

    this.stopAllAnimation = function(){
        incorrectAnimationObj.stopScene();
    }

    this.goodJobMessage = function (){


//        winnerAnimationObj = new AnimController(winnerTimeline);
//        winnerAnimationObj.init();
//        winnerAnimationObj.play("winner");
    }

    this.losingMessage = function (){
        // show losing message
    }

    this.changeAudioVolume = function(percent){
        $('audio').each(function(index, audio){
            audio.volume = percent;
        });
    }

    this.reset = function (){

    }
}