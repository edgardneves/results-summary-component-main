'use strict';

document.addEventListener("DOMContentLoaded", function(){
	const data = "https://edgardneves.github.io/results-summary-component-main/data.json";
	const xhr = new XMLHttpRequest;
	
	let container = document.querySelector("#summary-container h3");
	let html = '';

	xhr.open("GET", data);

	xhr.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			let retorno = JSON.parse(xhr.responseText);

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
		}
	}

	xhr.send();
});