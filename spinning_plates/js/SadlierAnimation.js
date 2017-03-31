function sadlierAnimationController (){
    var backgroundAnimationObj;
    var correctAnimationObj;
    var incorrectAnimationObj;
    var winnerAnimationObj;
    var me = this;

    this.init = function(){
        backgroundAnimationObj = new SceneController(backgroundScene);
        correctAnimationObj = new SceneController(correctScene);
        incorrectAnimationObj = new SceneController(incorrectScene);

        backgroundAnimationObj.init();
        correctAnimationObj.init();
        incorrectAnimationObj.init();

        backgroundAnimationObj.playScene();
        incorrectAnimationObj.playScene();
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
//        backgroundAnimationObj.stopAll();
//        incorrectAnimationObj.stopAll();
//        correctAnimationObj.stopAll();

//        backgroundAnimationObj.stop("ground");


        winnerAnimationObj = new AnimController(winnerTimeline);
        winnerAnimationObj.init();
        winnerAnimationObj.play("winner");
    }

    this.losingMessage = function (){
        // show losing message
    }

    this.reset = function (){

    }
}