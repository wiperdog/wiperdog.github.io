var gbIsChangeMsg = false;
var gjCloud;
$(window)
	.ready(function(){
		//init()
	})
	.load(function(){
		if(!gbIsChangeMsg) init();
	var psPageURL = 'http://wiperdog.org'
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
		.socialbutton('hatena',{
			 button : "standard"
			,url    : psPageURL
			,title  : "Wiper Dog"
		})
		.find('.facebook')
		.socialbutton('facebook_like', {
			 button: 'button_count'
			,url    : psPageURL
		});
		

	})
function init(){
	if(browserOldIE()){
		initOldIE();
	}
	var psLang = browserLanguage();
	if(psLang === 'ja'){
		$('.jpmsg').show();
		$('.enmsg').hide();
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
	gjCloud = $('#cloud');
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
function browserOldIE(){
	return ($.browser.msie && ($.browser.version*1) < 9) ? true : false;
	
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
	setTimeout('animateGrass()', 50)
}
