var gbIsChangeMsg = false;
var gjCloud;
$(window)
	.ready(function(){
		//init()
	})
	.load(function(){
		if(!gbIsChangeMsg) init();
	var psPageURL = 'http://www.wiperdog.org'
	$('#social')
		.find('.google_plusone')
		.socialbutton('google_plusone',{
			 button : "medium"
			,url    : psPageURL
			,count  : true
		})
		.end()
		.find('.tweet',{
			 button : "horizontal"
			,url    : psPageURL
		})
		.socialbutton('twitter', {
			button: 'horizontal'
		})
		.end()
		.find('.evernote')
		.socialbutton('evernote')
		.find('.hatena')
		.socialbutton('hatena')
		.find('.facebook')
		.socialbutton('facebook_like');
		

	})
function init(){
	if(browserIsOldIE()){
		initOldIE();
	}
	var psLang = browserLanguage();
	if(psLang === 'ja'){
		$('.jpmsg').show();
		$('.enmsg').hide();
		$('.vimsg').hide();
	} else if (psLang === 'vi') {
		$('.jpmsg').hide();
		$('.enmsg').hide();
		$('.vimsg').show();
	} else {
		$('.jpmsg').hide();
		$('.enmsg').show();
		$('.vimsg').hide();
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
function initOldIE(){
	var psLang     = browserLanguage();
	var psSunImg   = (psLang === 'ja') ? 'bg-sun.png' : 'bg-sun-en.png';
	var psSunClass = (psLang === 'ja') ? '.wd-sun-jp' : '.wd-sun-en';
	$('#logBox')
		.append('<img src="images/wd-u.png" style="width:500px;height:339px;margin:auto;display:block;" />')
		.css('backgroundImage', 'none');
	$('#wd-sun-box')
		.find(psSunClass)
		.append('<img src="images/' + psSunImg + '" style="width:140px;height:120px;display:block;float:right;" />')
		.css('backgroundImage', 'none');
}
function browserIsOldIE(){
	var browserIE = false;//IE判定
	var browser_v = 9;//IEバージョン番号
	if (/*@cc_on!@*/false) {
		browserIE = true;
		if (navigator.userAgent.match(/MSIE (¥d¥.¥d+)/)) {browser_v = parseFloat(RegExp.$1);}//IE6.7.8
	}
	return (browser_v < 9) ? true : false;
}
function browserLanguage() {
        var pos = window.location.search.indexOf('lang=')
        if (pos >= 0) {
           return window.location.search.substring(pos + 5, pos + 7)
	}
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