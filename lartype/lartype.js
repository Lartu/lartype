var files_to_load=[]

	String.prototype.replaceAll = function(searchStr, replaceStr) {
		var str = this;
		while(str.indexOf(searchStr) != -1) {
			str = str.replace(searchStr, replaceStr);
		}
		return str;
	}

	var num = 0;
	var inner_text = "";

	window.onload = traerListaArchivos();

	function traerListaArchivos() {
		//Cargo el texto
		var request = new XMLHttpRequest();

		request.open('GET', '../lartype_sources.cfg', true);
		console.log("Loading sources list.");

		request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
				console.log("List found.");
				var resp = request.responseText;
				files_to_load = resp.split("\n");
				if(files_to_load.length == 0){
					files_to_load.push(resp.trim());
				}else
				for(a = 0; a < files_to_load.length; a++){
					files_to_load[a] = files_to_load[a].trim();
				}	
				traerTexto();
			}
		};

		request.send();
	}

	function traerTexto() {
		if(num >= files_to_load.length-1){
			console.log("Rendering...");
			reemplazar(inner_text);
			return;
		}

		if(files_to_load[num].length == 0){
			num++;
			traerTexto();
		}

		//Cargo el texto
		var request = new XMLHttpRequest();

		request.open('GET', '../sources/'+files_to_load[num]+'.lty', true);
		console.log("Loading sources/" + files_to_load[num] +'.lty');

		request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
				console.log("sources/" + files_to_load[num] +'.lty found.');
				var resp = request.responseText;
				inner_text += resp;
				num++;
				traerTexto();
			}
		};

		request.send();
	}
	
	function reemplazar(texto) {

		//Saco los que sean //.
		texto = texto.replaceAll('//.', "&barrita;");

		//Chirimbolos and such
		texto = texto.replaceAll('>', '&gt;');
		texto = texto.replaceAll('<', '&lt;');

		texto = texto.replaceAll('/section.', '<div class="section">');
		texto = texto.replaceAll('.section/', '</div>');
		texto = texto.replaceAll('/s.', '&nbsp;&nbsp;&nbsp;&nbsp;');
		texto = texto.replaceAll('/b.', '<b>');
		texto = texto.replaceAll('.b/', '</b>');
		texto = texto.replaceAll('/i.', '<i>');
		texto = texto.replaceAll('.i/', '</i>');
		texto = texto.replaceAll('/u.', '<u>');
		texto = texto.replaceAll('.u/', '</u>');
		texto = texto.replaceAll('/line.', '<hr>');
		texto = texto.replaceAll('/right.', '<div class"right">');
		texto = texto.replaceAll('.right/', '</div>');
		texto = texto.replaceAll('/code.', '<code>');
		texto = texto.replaceAll('.code/', '</code>');
		texto = texto.replaceAll('/li.', '&nbsp;&nbsp;&nbsp;<span style="margin-right:0.5em;">•</span>');
		texto = texto.replaceAll('/linebreak.', "<br>");
		texto = texto.replaceAll('/break.', '<div class="break"></div>');
		texto = texto.replaceAll('/halfbreak.', '<div class="halfbreak"></div>');
		texto = texto.replaceAll('/pagebreak.', '<div class="pagebreak"></div>');
		texto = texto.replaceAll('/codeblock.', '<pre><code class="code_section">');
		texto = texto.replaceAll('.codeblock/', '</code></pre>');
		texto = texto.replaceAll('/imagefooter.', '<div class="image_footer">');
		texto = texto.replaceAll('.imagefooter/', '</div>');
		texto = texto.replaceAll('/image.', '<img src="../images/');
		texto = texto.replaceAll('.image/', '" class="image"/>');
		texto = texto.replaceAll('/imagemid.', '<img src="../images/');
		texto = texto.replaceAll('.imagemid/', '" class="image_mid"/>');
		texto = texto.replaceAll('/imagesmall.', '<img src="../images/');
		texto = texto.replaceAll('.imagesmall/', '" class="image_small"/>');
		texto = texto.replaceAll('/imagetiny.', '<img src="../images/');
		texto = texto.replaceAll('.imagetiny/', '" class="image_tiny"/>');
		texto = texto.replaceAll('/center.', '<div class="center">');
		texto = texto.replaceAll('.center/', '</div>');
		texto = texto.replaceAll('/inlineimage.', '<img src="../images/');
		texto = texto.replaceAll('.inlineimage/', '" class="image_inline"/>');
		texto = texto.replaceAll('/parallelsection.', '<table><tr>');
		texto = texto.replaceAll('.parallelsection/', '</tr></table>');
		texto = texto.replaceAll('/parallel.', '<td>');
		texto = texto.replaceAll('.parallel/', '</td>');
		texto = texto.replaceAll('/comm.', '<!--');
		texto = texto.replaceAll('.comm/', '-->');
		texto = texto.replaceAll('/size0.', '<span class="size_0">');
		texto = texto.replaceAll('.size0/', '</span>');
		texto = texto.replaceAll('/size1.', '<span class="size_1">');
		texto = texto.replaceAll('.size1/', '</span>');
		texto = texto.replaceAll('/size2.', '<span class="size_2">');
		texto = texto.replaceAll('.size2/', '</span>');
		texto = texto.replaceAll('/size3.', '<span class="size_3">');
		texto = texto.replaceAll('.size3/', '</span>');
		texto = texto.replaceAll('/size4.', '<span class="size_4">');
		texto = texto.replaceAll('.size4/', '</span>');
		texto = texto.replaceAll('/parallel90.', '<td class="parallel90">');
		texto = texto.replaceAll('.parallel90/', '</td>');
		texto = texto.replaceAll('/parallel80.', '<td class="parallel80">');
		texto = texto.replaceAll('.parallel80/', '</td>');
		texto = texto.replaceAll('/parallel70.', '<td class="parallel70">');
		texto = texto.replaceAll('.parallel70/', '</td>');
		texto = texto.replaceAll('/parallel60.', '<td class="parallel60">');
		texto = texto.replaceAll('.parallel60/', '</td>');
		texto = texto.replaceAll('/parallel50.', '<td class="parallel50">');
		texto = texto.replaceAll('.parallel50/', '</td>');
		texto = texto.replaceAll('/parallel40.', '<td class="parallel40">');
		texto = texto.replaceAll('.parallel40/', '</td>');
		texto = texto.replaceAll('/parallel33.', '<td class="parallel33">');
		texto = texto.replaceAll('.parallel33/', '</td>');
		texto = texto.replaceAll('/parallel30.', '<td class="parallel30">');
		texto = texto.replaceAll('.parallel30/', '</td>');
		texto = texto.replaceAll('/parallel25.', '<td class="parallel25">');
		texto = texto.replaceAll('.parallel25/', '</td>');
		texto = texto.replaceAll('/parallel20.', '<td class="parallel20">');
		texto = texto.replaceAll('.parallel20/', '</td>');
		texto = texto.replaceAll('/parallel10.', '<td class="parallel10">');
		texto = texto.replaceAll('.parallel10/', '</td>');

		//Esto siempre va al final
		texto = texto.replaceAll('/[.', '[');
		texto = texto.replaceAll('/].', ']');
		texto = texto.replaceAll("&barrita;", '/');

		//Reemplazo html
		document.body.innerHTML = texto;

		//Cosas post HTML
        var matches = document.querySelectorAll("code");
        for(var index in matches) {
			try{
				if(matches[index].className == "codeSection"){
					var lineas = matches[index].innerHTML.split("\n");
					matches[index].innerHTML = "";
					var counter = 1;
					for(a = 0; a < lineas.length; a++){
						if(lineas[a].trim().length == 0) continue;
						matches[index].innerHTML += (counter>1?"<br>":"") + (counter) + " "+ lineas[a].replaceAll('\t', '&nbsp;&nbsp;');
						counter++;
					}
					console.log(matches[index].innerHTML);
				}
			}catch(e){

			}
        }
	}
