window.addEventListener('load',function(){
	var preview_img = document.querySelector('.preview_img');
	var img_view = document.querySelector('.img_view');
	var mask = document.querySelector('.mask');
	var show_detail = document.querySelector('.show_detail');
	preview_img.addEventListener('mouseover', function(){
		mask.style.display = 'block';
		show_detail.style.display = 'block';
		preview_img.style. borderRight= '0';
	})
	preview_img.addEventListener('mouseout', function(){
		mask.style.display = 'none';
		show_detail.style.display = 'none';
		preview_img.style.borderRight = '2px solid #ededed';
	})
	preview_img.addEventListener('mousemove',function(e){
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		// console.log(x,y)
		var maskX = x-mask.offsetWidth/2;
		var maskY = y-mask.offsetHeight/2;
		var maskXmax = preview_img.offsetWidth - mask.offsetWidth;
		var maskYmax = preview_img.offsetHeight - mask.offsetHeight
		if (maskX <= 0){
			maskX = 0;
		}else if (maskX >= maskXmax){
			maskX = maskXmax
		}
		// console.log(maskX)
		if(maskY <= 0){
			maskY = 0;
		}else if(maskY >= maskYmax){
			maskY = maskYmax
		}
		// console.log(maskY)
		mask.style.left = maskX +'px';
		mask.style.top = maskY + 'px';
		var detailimg_view = document.querySelector(".detailimg_view");
		var show_detailXmax = detailimg_view.offsetWidth -show_detail.offsetWidth;
		var show_detailYmax =  detailimg_view.offsetHeight - show_detail.offsetHeight;
		var show_detailX = maskX*show_detailXmax/maskXmax;
		var show_detailY = maskY * show_detailYmax / maskYmax;
		// if (show_detailX <= 0){
		// 	show_detailX = 0;
		// }else if (show_detailX >= show_detailXmax){
		// 	show_detailX = show_detailXmax
		// }
		// // console.log(maskX)
		// if(show_detailY <= 0){
		// 	show_detailY = 0;
		// }else if(show_detailY >= show_detailYmax){
		// 	show_detailY = show_detailYmax
		// }
		detailimg_view.style.left = -show_detailX + 'px';
		detailimg_view.style.top = -show_detailY +'px';
	})
	var color = document.querySelector('.summary_color').querySelectorAll('span');
	var ram = document.querySelector('.summary_ram').querySelectorAll('span');
	var colorSum = this.document.querySelector('.color_choose');
	var ramSum = this.document.querySelector('.ram_choose');
	var allSelections = this.document.querySelectorAll('span');
	var selPrice = this.document.querySelector('.price');
	var addNum = this.document.querySelector('.add');
	var reduceTocart = this.document.querySelector('.reduce');
	var input = this.document.querySelector('.choose_amount').querySelector('input');
	var count = this.document.querySelector('.count')
	var addTocart = this.document.querySelector('.addcart')
	// console.log(colorSum);
	color[0].className = 'current';
	ram[0].className='current';

	for (var i= 0; i<allSelections.length; i++){
		allSelections[i].onclick = function(){
			var parent = this.parentNode.children;
			console.log(parent);
			for (var j = 0; j < parent.length; j++){
				parent[j].className='';
			}
			this.className='current';
			
			if (this.parentNode == colorSum || this.parentNode == ramSum){
				
				price();
			}
		}
	}
	

	function price(){
		var p1= 0;
		var p2 = 0;
		for (var i=0; i< color.length; i++){
			if (color[i].className == 'current'){
				switch(i){
					case 0:
						p1=5000;
						break;
					case 1:
						p1= 5050;
						break;
					case 2:
						p1=6000;
						break;
					case 3:
						p1 = 6100;
						break;
				}
			}
		}
		
		for (var i=0; i< ram.length; i++){
			if (ram[i].className == 'current'){
				switch(i){
					case 0:
						p2=200;
						break;
					case 1:
						p2= 300;
						break;
					case 2:
						p2=400;
						break;
				}
			}
		};
		selPrice.innerHTML = p1 + p2;
		addNum.onclick = function(){
			var num = input.innerHTML += parseInt(input.value++);
			num++
			selPrice.innerHTML = num* (p1+p2)
		}
		reduceTocart.onclick = function(){
			var flag = false
			var num = input.innerHTML += parseInt(input.value--)
			console.log(num)
			if (num > 2 ){
				this.disabled=flag
				num--
			
			
			}else if (num = 2){
				console.log(num)
				reduceTocart.className = 'reduce disabled'
				this.disabled = !flag
				num=1
			}
			selPrice.innerHTML = num*(p1+p2)
			
		}

		
	}	

	
		
	
		
})