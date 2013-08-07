var gbIsChangeMsg = false;
var gjCloud;
$(window)
	.ready(function(){
		//init()
	})
	.load(function(){
		if(!gbIsChangeMsg) init();
	})
function init(){
	var psLang = browserLanguage();
	if(psLang === 'ja'){
		$('.jpMsg').show();
		$('.enMsg').hide();
	}
	$('#countdown_dashboard').countDown({
		targetDate: {
			'day': 		30,
			'month': 	9,
			'year': 	2013,
			'hour': 	0,
			'min': 		0,
			'sec': 		0
		}
	});
	var c = $('#cloud-box');
	c.css({
		'left' : $(window).width()
		,'display' : 'block'
	});
	animateCloud();
	//animateGrass();
	gbIsChangeMsg = true;
}
function browserLanguage() {
	try {
		return (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2)
	}catch(e) {
		return undefined;
	}
}
var gnLeft = 0;
var gnCloudLeft = -1100;
function animateGrass(){
	gnLeft++;
	gnCloudLeft += 4;
	$('#grass').css('backgroundPosition', gnLeft + 'px top');
	gjCloud.css('left', gnCloudLeft +'px');
	if(gnCloudLeft > $(window).width()) gnCloudLeft = -1100;
	setTimeout('animateGrass()', 100)
}
var gnIsLimit = false;
function animateCloud(){
	var c = $('#cloud-box');
	var pnLeft = c.position().left;
	var pnTop  = c.position().top;
	if(pnTop > 5){
		gnIsLimit = true;
	}
	if(gnIsLimit){
		pnTop -= 1;
		if(pnTop === 0) gnIsLimit = false;
	}else{
		pnTop += 1;
	}
	c.css({
		 'top'  : pnTop
		,'left' : pnLeft-10
	});
	var pnWidth = c.width();
	if((c.position().left*-1) > pnWidth){
		c.css('left', $(window).width());
	}
	setTimeout('animateCloud()', 100)
}