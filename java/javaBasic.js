const Mouseform = ['Use','Sob','Add','Del','Apply', 'Menos', 'Mod', 'UseNO', 'Config', 'Save', 'Target', 'TargetOpen', 'TarNo'];

function subir(){
	window.scrollTo(0, 0);
}

function mostrar(ocu, chave){
    for (var i=0; i<ocu.length; i++){	
		if (i<chave){
			ocultar(ocu[i], 0);	
		}else{
			ocultar(ocu[i], 1);
		};
	};
};

function ocultar(obj, es){
	let div = document.querySelector(obj);
	if(es==1){
		div.style.display = 'flex';
	}else{
		div.style.display = 'none';
	};
};

function redirect(page) {
    window.location.href = page;
}

function redirectNewPage(link){
    window.open(link, '_blank');
}

function Scroll0Display(item) {
	let fun = window.scrollY === 0 ? 0 : 1;
	ocultar(item, fun);
}

function adamCendler(id){
	let btn = document.querySelector(id);
	btn.click();
}

function Copy(btn, textArea){
	let resultBlock = document.querySelector(textArea);
	
	const tempTextArea = document.createElement('textarea');
    tempTextArea.value = resultBlock.innerText;
	document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
	document.body.removeChild(tempTextArea);

	btn.setAttribute('disabled', 'disabled');
}

function changeMouseIcon(Cursor) {
	$('#mouseIcon').css({
		backgroundImage: 'url("imgs/mouse/'+Mouseform[Cursor]+'.webp")'
	});
}

function txtMouse(text, mouse) {
	if(text != ''){
		$('#contextInfoMouse').css('opacity', '100%');
		$('#contextInfoMouse').text(text);
	}
	changeMouseIcon(mouse);
}

function resetMouse(){
	let mouse = 0;
	$('#contextInfoMouse').text('');
	$('#contextInfoMouse').css('opacity', '0%');
	changeMouseIcon(mouse);
}

function invertMouse(type, swt, funExt){
	switch (swt){
		case 0:
			$('.mouse').css({
				direction: 'rtl',
				width: '15vw',
    			marginLeft: '-12vw'
			});
		break
		case 1:
			$('.mouse').css({
				direction: 'ltr',
				width: 'auto',
    			marginLeft: 'auto'
			});
		break
	}
	swt = swt==0? 1:0;
	let tp = ['onmouseover','onmouseout'];
	
	$('#'+this.id+'').attr(tp[type],'invertMouse('+type+', '+swt+', '+funExt+'); '+funExt+';');
}