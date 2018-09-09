var roomTheRobotIs = 0;
var rooms = [true, true, true, true];

$(document).ready(function() {


	

	$('#RIGHT').click(function() {
		right();
	});

	$('#LEFT').click(function() {
		left();
	});

	$('#DOWN').click(function() {
		down();
	});

	$('#UP').click(function() {
		up();
	});

	$('.room').click(function() {
		// alert(this.id);
		rooms[this.id] = false;
		$("#"+this.id).css("background-color", "red");
		cleanRoom(roomTheRobotIs);
	});


});

async function cleanRoom(roomId){
	if(rooms[roomId] == false){
		$('#action').text("Clening...")
	}
	setTimeout(
		() => {
			$('#action').text("")
			$("#"+roomId).css("background-color", "white");
			rooms[roomId] = true;

		}, 
		1000);
}

function right() {
	if(roomTheRobotIs == 0){
		roomTheRobotIs = 1;
	}
	if(roomTheRobotIs == 2){
		roomTheRobotIs = 3;
	}
	cleanRoom(roomTheRobotIs);
	$('#r1').animate({left: '250px'});
}


function left() {
	if(roomTheRobotIs == 1){
		roomTheRobotIs = 0;
	}
	if(roomTheRobotIs == 3){
		roomTheRobotIs = 2;
	}
	cleanRoom(roomTheRobotIs);
	$('#r1').animate({left: '0px'});
}

function down() {
	if(roomTheRobotIs == 0){
		roomTheRobotIs = 2;
	}
	if(roomTheRobotIs == 1){
		roomTheRobotIs = 3;
	}
	cleanRoom(roomTheRobotIs);
	$('#r1').animate({top: '250px'});
}

function up() {
	if(roomTheRobotIs == 2){
		roomTheRobotIs = 0;
	}
	if(roomTheRobotIs == 3){
		roomTheRobotIs = 1;
	}
	cleanRoom(roomTheRobotIs);
	$('#r1').animate({top: '0px'});
}