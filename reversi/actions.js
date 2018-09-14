let TABLE = [];
for(var i = 0; i < 8; i++) {
	TABLE.push([]);
	for(var j = 0; j< 8; j++) {
		TABLE[i].push('');
	}
}

const inspect_table = () => {
	let s = '    0 1 2 3 4 5 6 7';
	console.log(s);

	for(var i = 0; i < 8; i++) {
		let s = '[ ';
		for(var j = 0; j < 8; j++) {
			if(TABLE[i][j] === '')
				s += '· '
			else
				s += `${TABLE[i][j]} `;
		}
		s += ']'
		console.log(`${i} ${s}`)
	}
}

let PLAYER = true;

$(document).ready(function() {
	console.log('document ready :3');

	render_table();
	start();

	$('#RESET').click(() => {
		start();
	});

	$('.cell').click((e) => {
		const id = e.target.id.split('_');
		const i = parseInt(id[1]);
		const j = parseInt(id[2]);
		console.log(`cell_${i}_${j}: ${TABLE[i][j]} - ${PLAYER}`);

		if(TABLE[i][j] === '') {
			draw_circle(i, j, PLAYER ? 'black' : 'white');

			TABLE[i][j] = PLAYER ? 1 : 0;
			inspect_table();

			PLAYER = !PLAYER;
			const txt = PLAYER ? 'Human' : 'Gary';
			$('#actual').text(txt);
		}
	});

});

const start = () => {
	for(var i = 0; i < 8; i++) {
		for(var j = 0; j< 8; j++) {
			TABLE[i][j] = '';
			draw_circle(i, j, '')
		}
	}

	TABLE[3][3] = 0;
	TABLE[4][4] = 0;
	TABLE[3][4] = 1;
	TABLE[4][3] = 1;

	draw_circle(3, 3, 'black');
	draw_circle(4, 4, 'black');
	draw_circle(3, 4, 'white');
	draw_circle(4, 3, 'white');
}

const render_table = () => {
	console.log('create_table');

	$('#world').append('<table id="table"></table>');
	for(let i = 0; i < 8; i++) {
		$('#table').append(`<tr id="row${i}"></tr>`);
		for(let j = 0; j < 8; j++) {
			const div = `<div id="cell_${i}_${j}" class="cell"></div>`
			$('#row' + i).append(`<td>${div}</td>`);
		}
	}
}

const draw_circle = (i, j, color) => {
	$(`#cell_${i}_${j}`).css('background-color', color);
}
