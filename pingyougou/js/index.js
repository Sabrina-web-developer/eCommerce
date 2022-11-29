window.addEventListener('load',function(){
	var side_bar = document.querySelector('.side_bar');
	var back = document.querySelector('.back');
	var cus_service = document.querySelector('.cus_service');
	var lifeservice = document.querySelector('.lifeservice');
	var bartop = side_bar.offsetTop - lifeservice.offsetTop
	document.addEventListener('scroll',function(){
		// console.log(window.pageYOffset);
		if(window.pageYOffset >= lifeservice.offsetTop){
			side_bar.style.position = 'fixed';
			side_bar.style.top = bartop +'px'
			back.style.display = 'block';
			back.style.color = '#C81623'
			cus_service.style.display = 'none';	
		}else{
			side_bar.style.position = 'absolute';
			back.style.display = 'none';
			cus_service.style.display = 'block';
			side_bar.style.top = '663px';
		}
	})

	var hour =document.querySelector('.hour');
	var minute = document.querySelector('.minute');
	var second = document.querySelector('.second');
	var inPutTime =+ new Date('2022-01-11 24:00:00');
	countDown();
	setInterval(countDown,1000);
	function countDown(){
		var nowTime =+ new Date();
		var times = (inPutTime - nowTime)/1000;
		var h = parseInt(times/60/60%24);
		h = h < 10 ?'0'+ h : h;
		hour.innerHTML = h + 'h';
		var m = parseInt(times/60%60);
		m = m < 10 ?'0'+ m : m;
		minute.innerHTML = m + 'm';
		var s = parseInt(times%60);
		s = s < 10 ?'0'+ s : s;
		second.innerHTML = s + 's';
	}
})