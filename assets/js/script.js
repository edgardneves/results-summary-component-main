'use strict';

document.addEventListener("DOMContentLoaded", function(){
	const data = [
					{
					"category": "Reaction",
					"score": 80,
					"icon": "./assets/images/icon-reaction.svg"
					},
					{
					"category": "Memory",
					"score": 92,
					"icon": "./assets/images/icon-memory.svg"
					},
					{
					"category": "Verbal",
					"score": 61,
					"icon": "./assets/images/icon-verbal.svg"
					},
					{
					"category": "Visual",
					"score": 72,
					"icon": "./assets/images/icon-visual.svg"
					}
				];

	let retorno = data;
	let container = document.querySelector("#summary-container h3");

	let html = '';
	
	retorno.reverse((c) => c.category);

	for(let countRetorno = 0; countRetorno < retorno.length; countRetorno++){
		let row = document.createElement("div");
		let col = document.createElement("div");
		let dflex = document.createElement("div");

		row.classList.add("row", "my-3");
		col.classList.add("col-12");
		dflex.classList.add("d-flex", "py-3", "align-items-center", "px-3");

		dflex.setAttribute("id", retorno[countRetorno].category.toLowerCase());

		row.append(col);
		col.append(dflex);

		html = '<div class="me-2">'+
					'<img src="'+retorno[countRetorno].icon+'" alt="'+retorno[countRetorno].category+'">'+
				'</div>'+
				'<div class="flex-fill">'+
					'<span>'+retorno[countRetorno].category+'</span>'+
				'</div>'+
				'<div class="flex-fill text-end">'+
					'<span class="percent-current">'+retorno[countRetorno].score+' <span class="percent">/ 100</span></span>'+
				'</div>';

		dflex.innerHTML = html;

		container.after(row);
	}
});