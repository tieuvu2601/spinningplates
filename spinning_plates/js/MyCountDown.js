  var timeout=false
    var javascript_countdown = function () {
  	var time_left = 10; //number of seconds for countdown
	var output_element_id = 'javascript_countdown_time';
	var keep_counting = 1;
	var no_time_left_message = 'Time out!!!';
    var id=null
    var totalTime=0;
	function countdown() {
		if(time_left < 2) {
			//keep_counting = 0;
		}
 
		//time_left = time_left - 1;
		time_left=time_left+1;
        totalTime=totalTime + 1;
        //console.log(totalTime+"    totalTime" +time_left)
	}
 
	function add_leading_zero(n) {
		if(n.toString().length < 2) {
			return '0' + n;
		} else {
			return n;
		}
	}
 
	function format_output() {
		var hours, minutes, seconds;
		seconds = time_left % 60;
		minutes = Math.floor(time_left / 60) % 60;
		hours = Math.floor(time_left / 3600);
 		seconds = add_leading_zero( seconds );
		minutes = add_leading_zero( minutes );
		hours = add_leading_zero( hours );
        return minutes + ':' + seconds;
		//return hours + ':' + minutes + ':' + seconds;
	}
    function format_output_1() {
        var hours, minutes, seconds;
        seconds = totalTime % 60;
        minutes = Math.floor(totalTime / 60) % 60;
        hours = Math.floor(totalTime / 3600);
        seconds = add_leading_zero( seconds );
        minutes = add_leading_zero( minutes );
        hours = add_leading_zero( hours );
        //return minutes + ':' + seconds;
        return hours + ':' + minutes + ':' + seconds;
    }
 
	function show_time_left() {
     //   alert(output_element_id+"    output_element_id")
		document.getElementById(output_element_id).innerHTML ="<span>"+format_output();+ "</span>" //time_left;
	}
 
	function no_time_left() {
	    timeout=true;
		document.getElementById(output_element_id).innerHTML = "<span>"+no_time_left_message+ "</span>"
	}
 
	return {
		count: function () {
			countdown();
			show_time_left();
		},
        count1: function () {
			countdown();
			format_output_1();
		},
		timer: function () {
			javascript_countdown.count();
 
			if(keep_counting) {
				id=setTimeout("javascript_countdown.timer();", 1000);
			} else {
				no_time_left();
			}
		},
		//Kristian Messer requested recalculation of time that is left
		setTimeLeft: function (t) {
			//time_left = t;
			if(keep_counting == 0) {
				javascript_countdown.timer();
			}
		},
		init: function (t, element_id) {
			time_left = 0;
			output_element_id = element_id;
			javascript_countdown.timer();
		},
		stop:function(){
			 clearTimeout(id);
		},
        getTime:function(){
          return format_output();
        },
        pauseTime:function(){
            window.clearTimeout(id);
        },
        resumeTime:function(){
            javascript_countdown.timer();
        },
        startCountDown:function(){
            return format_output_1()
        },
        stopCountdown:function(){
            totalTime=0;
        }
	};
}();
 
