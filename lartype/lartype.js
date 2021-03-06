var files_to_load=[]

	String.prototype.replaceAll = function(searchStr, replaceStr) {
		var str = this;
		while(str.indexOf(searchStr) != -1) {
			str = str.replace(searchStr, replaceStr);
		}
		return str;
	}
	
	String.prototype.reemplazarIntermitente = function(searchStr, replaceStr1, replaceStr2) {
		var str = this;
        var estado = true;
		while(str.indexOf(searchStr) != -1) {
            if(estado)
                str = str.replace(searchStr, replaceStr1);
            else
                str = str.replace(searchStr, replaceStr2);
            estado = !estado;
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
				files_to_load = [];
				if(resp.indexOf("\n") == -1){
					files_to_load.push(resp.trim());
				}else{
					files_to_load = resp.split("\n");
					for(a = 0; a < files_to_load.length; a++){
						files_to_load[a] = files_to_load[a].trim();
					}	
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
        
        //Reemplazos que abren y cierran igual
        texto = texto.reemplazarIntermitente("*****", "/break./break./section./size4.", ".size4/.section/");
        texto = texto.reemplazarIntermitente("****", "/break./section./size3.", ".size3/.section/");
        texto = texto.reemplazarIntermitente("***", "/break./section./size2.", ".size2/.section/");
        texto = texto.reemplazarIntermitente("**", "/b.", ".b/");
        texto = texto.reemplazarIntermitente("___", "<sub>", "</sub>");
        texto = texto.reemplazarIntermitente("__", "/i.", ".i/");
        texto = texto.reemplazarIntermitente("^^", "<sup>", "</sup>");
        texto = texto.reemplazarIntermitente("``", "/code.", ".code/");
        texto = texto.reemplazarIntermitente("(par)","/section./s.", ".section/");
        texto = texto.reemplazarIntermitente("(ref)", "<div class='ref'>", "</div>");
        texto = texto.reemplazarIntermitente("(refarea)", "/section.", ".section/");
        texto = texto.reemplazarIntermitente("(img)", '<div style="padding:10px; padding-top:5px; padding-bottom: 0px;">/image.', ".image/</div>");
        texto = texto.reemplazarIntermitente("(center)","/center.", ".center/");
        texto = texto.reemplazarIntermitente("(caption)","/imagefooter.", ".imagefooter/");
        texto = texto.reemplazarIntermitente("(li)","/li.", ".li/");
        texto = texto.reemplazarIntermitente("(todo)","/todo.", ".todo/");
        texto = texto.reemplazarIntermitente("(rightblock)","<div class='sideblock-right'>", "</div>");
        
        texto = texto.reemplazarIntermitente("(leftblock)","<div class='sideblock-left'>", "</div>");
        
        //Cosas que se abren y se cierran distinto
        texto = texto.replaceAll('/#', '/comm.');
        texto = texto.replaceAll('#/', '.comm/');
        texto = texto.replaceAll("(ps)","/parallelsection.");
        texto = texto.replaceAll("(/ps)",".parallelsection/");
        texto = texto.replaceAll("(p90)","/parallel90.");
        texto = texto.replaceAll("(/p90)",".parallel90/");
        texto = texto.replaceAll("(p80)","/parallel80.");
        texto = texto.replaceAll("(/p80)",".parallel80/");
        texto = texto.replaceAll("(p70)","/parallel70.");
        texto = texto.replaceAll("(/p70)",".parallel70/");
        texto = texto.replaceAll("(p60)","/parallel60.");
        texto = texto.replaceAll("(/p60)",".parallel60/");
        texto = texto.replaceAll("(p50)","/parallel50.");
        texto = texto.replaceAll("(/p50)",".parallel50/");
        texto = texto.replaceAll("(p40)","/parallel40.");
        texto = texto.replaceAll("(/p40)",".parallel40/");
        texto = texto.replaceAll("(p33)","/parallel33.");
        texto = texto.replaceAll("(/p33)",".parallel33/");
        texto = texto.replaceAll("(p30)","/parallel30.");
        texto = texto.replaceAll("(/p30)",".parallel30/");
        texto = texto.replaceAll("(p25)","/parallel25.");
        texto = texto.replaceAll("(/p25)",".parallel25/");
        texto = texto.replaceAll("(p20)","/parallel20.");
        texto = texto.replaceAll("(/p20)",".parallel20/");
        texto = texto.replaceAll("(p10)","/parallel10.");
        texto = texto.replaceAll("(/p10)",".parallel10/");
        texto = texto.replaceAll('(table)', '<div style="padding:10px; padding-top:5px; padding-bottom: 0px;"><table class="tabla" cellspacing=0>');
        texto = texto.replaceAll('(/table)', '</table></div>');
        texto = texto.replaceAll('(row)', '<tr style="border:1px solid black; padding:5px;">');
        texto = texto.replaceAll('(/row)', '</tr>');
        texto = texto.replaceAll('(cell)', '<td style="border:1px solid black;  padding:5px;">');
        texto = texto.replaceAll('(/cell)', '</td>');
        texto = texto.replaceAll('(titlecell)', '<td style="border:1px solid black;  padding:5px; background: #f4ede1;">');
        texto = texto.replaceAll('(/titlecell)', '</td>');
        
        //Cosas que solo se abren
        texto = texto.replaceAll("(break)","/linebreak.");
        texto = texto.replaceAll("(pagebreak)","/pagebreak.");
        texto = texto.replaceAll("----","/line.");
        
        /*texto = texto.replaceAll("    ", "/s.");
        texto = texto.replaceAll("\r\n\r\n", "/break.");
        texto = texto.replaceAll("\r\n", "<div class='quarterbreak'></div>");
        texto = texto.replaceAll("\n", "<div class='quarterbreak'></div>");*/
        
        
		//Reemplazos sintácticos de lartype por html
		texto = texto.replaceAll('/section.', '<div class="section">');
		texto = texto.replaceAll('.section/', '</div>');
		texto = texto.replaceAll('/s.', '<div style="display:inline-block; margin:0px; padding:0px; width:20px"></div>');
		texto = texto.replaceAll('/b.', '<b>');
		texto = texto.replaceAll('.b/', '</b>');
		texto = texto.replaceAll('/i.', '<i>');
		texto = texto.replaceAll('.i/', '</i>');
		texto = texto.replaceAll('/u.', '<u>');
		texto = texto.replaceAll('.u/', '</u>');
		texto = texto.replaceAll('/line.', '<hr>');
		texto = texto.replaceAll('/right.', '<div class="right">');
		texto = texto.replaceAll('.right/', '</div>');
		texto = texto.replaceAll('/code.', '<code class="inlineCode">');
		texto = texto.replaceAll('.code/', '</code>');
		texto = texto.replaceAll('/linebreak.', "<br>");
		texto = texto.replaceAll('/break.', '<div class="break"></div>');
		texto = texto.replaceAll('/halfbreak.', '<div class="halfbreak"></div>');
        texto = texto.replaceAll('/quarterbreak.', '<div class="quarterbreak"></div>');
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
		texto = texto.replaceAll('/todo.', '<div class="todo">TODO: ');
		texto = texto.replaceAll('.todo/', '</div>');
		texto = texto.replaceAll('/li.', '<div style="margin-left:20px;"><span style="float:left">•</span><div class="li">');
		texto = texto.replaceAll('.li/', '</div></div>');

		//Esto siempre va al final
		texto = texto.replaceAll('/[.', '[');
		texto = texto.replaceAll('/].', ']');
		texto = texto.replaceAll("&barrita;", '/');

		//Reemplazo html
		document.body.innerHTML = texto;

		//Cosas post HTML
		//Tabulo code blocks
        var matches = document.querySelectorAll("code");
        for(var index in matches) {
			try{
				if(matches[index].className == "code_section"){
					var lineas = matches[index].innerHTML.split("\n");
					matches[index].innerHTML = "";
					var counter = 1;
					for(a = 0; a < lineas.length; a++){
						if(lineas[a].trim().length == 0) continue;
						matches[index].innerHTML += (counter>1?"<br>":"") + (counter<10? counter + " " : counter) + " "+ lineas[a].replaceAll('\t', '&nbsp;&nbsp;');
						counter++;
					}
					console.log(matches[index].innerHTML);
				}
			}catch(e){

			}
        }

		//Saco espacios de /code.s
		matches = document.querySelectorAll("code");
        for(var index in matches) {
			try{
				if(matches[index].className == "inlineCode"){
					matches[index].innerHTML = matches[index].innerHTML.replaceAll(' ', '&nbsp;');
				}
			}catch(e){

			}
        }
	}
