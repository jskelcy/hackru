document.addEventListener("keydown",onKeyPress);

    function RandomWordComplete(data) {
    	window.open("http://lmgtfy.com/?=" + data.word + "=1", "_blank", height=600, width=600);
        alert("You're an awesome internet browser!!");
    }
    var linkArray = new Array(6);
    var i =2;
    function getWord(){
    var requestStr = "http://randomword.setgetgo.com/get.php";
    linkArray[0]= "http://www.hackru.org/";
    linkArray[1]= "http://www.neopets.com/"
    $.ajax({
	            type: "GET",
	            url: requestStr,
	            success: function(data){
	            	if (i<6){
	            		getWord();
	            	}
	            	linkArray[i] = "http://www.google.com/search?hl=en&q="+data+"&btnI=I%27m+Feeling+Lucky";
	            	i++;
	            }

    });
	}
	getWord();
    function onKeyPress(event){
        var requestStr = "http://randomword.setgetgo.com/get.php";
        console.log()
		if (event.keyCode == 71 && event.altKey == true){
	            	console.log(linkArray);
	            	window.open('','_self','');
	            	window.close();
	            		for (var i = 0; i<linkArray.length; i++){
	            			window.open(linkArray[i],"_blank");
	            	}
		}
	}
