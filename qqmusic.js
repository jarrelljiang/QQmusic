/*大轮播图片*/
(function(){
var div=pic.getElementsByTagName("div");
var li=pic.getElementsByTagName("li");
var i=0;
goright.onclick=function(){
	i++;
	if(i==6){
		i=0;
		for(var n=0;n<div.length;n++){
			div[n].style.left="700px";
		}
	}
	for(var n=0;n<li.length;n++){
		li[n].style.opacity=0.3;
	}
	li[i].style.opacity=1;
	if(i>0){
		div[i-1].style.left="-700px";
	}
	div[i].style.left=0;
}
goleft.onclick=function(){
	i--;
	if(i==-1){
		i=5;
		for(var n=0;n<div.length;n++){
			div[n].style.left="-700px";
		}
	}
	for(var n=0;n<li.length;n++){
		li[n].style.opacity=0.3;
	}
	li[i].style.opacity=1;
	if(i<div.length-1){
		div[i+1].style.left="700px";
	}
	div[0].style.left="-700px";
	div[i].style.left=0;
}
move();
function move(){
	ul.onmouseover=function(e){
		for(var j=0;j<li.length;j++){
			li[j].index=j;
		}
		var target=e.target;
		if(target.nodeName=="LI"){
			for(var n=0;n<li.length;n++){
				li[n].style.opacity=0.3;
			}
			target.style.opacity=1;
			if(target.index>i){
				i=target.index;
				for(var n=0;n<i;n++){
					div[n].style.left="-700px";
				}
				div[i].style.left=0;
			}
			if(target.index<i){
				for(var n=target.index+1;n<=i;n++){
					console.log(n);
					div[n].style.left="700px";
				}
				i=target.index;
				div[i].style.left=0;
			}
		}
	}
	if(i==div.length){
		i=0;
		for(var n=1;n<div.length;n++){
			div[n].style.left="700px";
		}
	}
	for(var n=0;n<li.length;n++){
		li[n].style.opacity=0.3;
	}
	if(i>0){
		div[i-1].style.left="-700px";
	}
	div[i].style.left=0;
	li[i].style.opacity=1;
	i++;
}
var t=setInterval(move,4000);
pic.onmouseenter=function(){
	clearInterval(t);
	i--;//注意：清除t后要i--，因为清除后i本身是++了的,如果不i--，点上一张下一张的时候会出问题
}
pic.onmouseleave=function(){
	i++;
	t=setInterval(move,4000);//鼠标移开，4秒后才执行这个函数，也就是4秒后i才加1，但是鼠标移入时，i立刻就减1了。所以当鼠标快速不停的移入移出（在4秒之内）时，i的值会一直减小。解决办法：在前一行加了i++，(没有enter就没有leave，所以页面加载完鼠标什么都不动的话这2句话都没执行，没影响的。)
}
})();

/*小轮播图片*/
(function(){
	var a=["images/1464079432773125520.jpg","images/20992.jpg","images/14724.jpg","images/21144.jpg","images/1463115206100011500.jpg"];
	var i=0;
	var li=ul2.getElementsByTagName("li");
	change2();
	function change2(){
		ul2.onmouseover=function(e){
			for(var j=0;j<li.length;j++){
				li[j].index=j;
			}
			var target=e.target;
			if(target.nodeName=="LI"){
				for(var n=0;n<li.length;n++){
					li[n].style.opacity=0.2;
				}
				target.style.opacity=1;
				img2.src=a[target.index];
				i=target.index+1;
			}
		}
		if(i==5){
			i=0;
		}
		for(var n=0;n<li.length;n++){
			li[n].style.opacity=0.2;
		}
		li[i].style.opacity=1;
		img2.src=a[i];
		i++;
	}
	var t=setInterval(change2,3000);
	pic2.onmouseenter=function(){
		 clearInterval(t);
	}
	pic2.onmouseleave=function(){
		t=setInterval(change2,3000);
	}
})();

/*二级菜单*/
(function(){
	var div=h3.getElementsByTagName("div");
	var h4=h3.getElementsByTagName("h4");
	for(var i=0;i<div.length;i++){
		div[i].index=i;
		div[i].onmouseover=function(){
			h4[0].style.display='none';
			h4[this.index].style.display='block';
		}
		div[i].onmouseout=function(){
			h4[this.index].style.display='none';
			h4[0].style.display='block';
		}
	}
})();

/*底部弹出栏*/
(function(){
	right.onclick=function(){
		if(pop.offsetLeft==-541){
			pop.style.left=0;
			setTimeout(function(){right.style.background='url(images/player_bg.png)';right.title='点击收起';},1000);
		}else{
			pop.style.left="-541px";
			setTimeout(function(){right.style.background='url(images/player_bg.png) -46px 0';right.title='点击展开';},1000);
		}
	}
	function out(){
		pop.style.left=0;
		setTimeout(function(){right.style.background='url(images/player_bg.png)';right.title='点击收起';},1000);
	}
	setTimeout(out,3000);
})();

/*在线首发切换*/
(function(){
	var n=1;//引入n和m而不是直接用offsetLeft是为了防止快速的连续点2次箭头(此时offsetLeft的值是变化的，运动的图片还没有到达目的地，所以不能用offsetLeft去判断)，点击速度大于切换的速度，会产生问题。
	var m=1
	newPre.onclick=function(){
		if(m!=n){
			changeBox.style.left=700*(m-n+1)+'px';
			newNext.style.background='url(images/icon_sprite.png) -1px -129px';
			newPre.className='last';
			m++;
		}
		if(m==n){
			newPre.style.background='url(images/icon_sprite.png) -32px -96px';
			newPre.className='';
			newPre.title='';
			newPre.style.cursor='default';
		}
		if(n-m!=2){
			newNext.className='next';
			newNext.title='下一页';
			newNext.style.cursor='pointer';
		}
	}
	newNext.onclick=function(){
		if(n-m<2){
			changeBox.style.left=-700*(n-m+1)+'px';
			n++;
		}
		if(n-m==2){
			newNext.style.background='url(images/icon_sprite.png) -32px -129px';
			newNext.className='';
			newNext.title='';
			newNext.style.cursor='default';
		}
		if(n!=m){
			newPre.style.background='url(images/icon_sprite.png) -1px -96px';
			newPre.className='last';
			newPre.title='上一页';
			newPre.style.cursor='pointer';
		}
	}
})();

/*滚动条*/
(function(){
	autoDown.onmouseover=function(){
 		 t=setInterval(function(){window.scrollBy(0,1)},10);
	}
	autoDown.onmouseout=function(){
		clearInterval(t);
	}
	autoUp.onmouseover=function(){
  		t=setInterval(function(){window.scrollBy(0,-1)},10);
	}
	autoUp.onmouseout=function(){
		clearInterval(t);
	}
})();

/*最新推荐*/
(function(){
	var a=allMusic.getElementsByTagName("a");
	var ul=recommend_left.getElementsByTagName("ul");
	var pre=0;
	for(var i=0;i<a.length;i++){
		a[i].index=i;
		a[i].onclick=function(){
			a[pre].style.color='#0dad51';
			a[pre].style.fontWeight='normal';
			ul[pre].style.display='none';
			pre=this.index;
			this.style.color='#333';
			this.style.fontWeight='bold';
			ul[this.index].style.display='block';
		}
	}
	
	recommend.onmouseover=function(e){
		var target=e.target;
		if(target.nodeName=="A"){
			if(parseInt(getComputedStyle(target).width)>207){
				target.style.textIndent='-140px';
				target.style.transition='3s';
			}
		}
	}
	recommend.onmouseout=function(){
		var a=recommend.getElementsByTagName("a");
		for(var i=0;i<a.length;i++){
			a[i].style.transition='0s';
			a[i].style.textIndent=0;
		}
	}
})();

/*播放暂停*/
(function(){
	var play=true;
	playMusic.onclick=function(){
		if(play){
			playMusic.style.background='url(images/player_bg.png) -301px -93px';
			play=false;
		}else{
			playMusic.style.background='url(images/player_bg.png) -114px -6px';
			play=true
		}
  		if(music.paused){                 
      		music.play();  
 		}else{
  			music.pause();
 		}
 	} 
	replay.onclick=function(){
		music.currentTime = 0;
	}
})();

/*巅峰榜*/
(function(){
	var a=classify.getElementsByTagName("a");
	var ul=classifyDetails.getElementsByTagName("ul");
	var pre=0;
	for(var i=0;i<a.length;i++){
		a[i].index=i;
		a[i].onclick=function(){
			var that=this;
			a[pre].style.color='#0dad51';
			a[pre].style.fontWeight='normal';
			that.style.color='#333';
			that.style.fontWeight='bold';
			if(that.index!=pre){//这个判断是为了防止连续点击两次同一个a的时候出现问题，所以需要一个限制	                    			  条件：当前点击的a不是前一次点击a时才执行下面的语句。 
				if(that.index>pre){
					ul[that.index].style.left='222px';
					(function preMove(){
							var x=ul[pre].offsetLeft;
							if(x>-222){
								x-=3;//注意：这里都是以3递增或递减的，而222又恰好是3的整数倍，所以没问题。当宽                                       度不是3的整数倍时，就不能以3递增或递减了。
								ul[pre].style.left=x+'px';
								var t=setTimeout(preMove,5);
							}
							if(x==-222){
								clearTimeout(t);//要清除t是因为：假如不清除t，x一直减小，当减小为-222时，函数5                                                  秒后还要执行，此时x=ul[that.index].offsetLeft;而                                                  ul[that.index].offsetLeft为0，是大于-222的，又要继续走if里面                                                  的语句，所以t又启动了，直到把ul[that.index].offsetLeft也变为                                                  -222，所以pre和this都变为-222了。
								pre=that.index;
							}
					})();
					(function thisMove(){
						var x=ul[that.index].offsetLeft;
						if(x>0){
							x-=3;
							ul[that.index].style.left=x+'px';
							setTimeout(thisMove,5);
						}
					})();
				}else{
					ul[that.index].style.left='-222px';
					(function preMove(){
							var x=ul[pre].offsetLeft;
							if(x<222){
								x+=3;
								ul[pre].style.left=x+'px';
								var t=setTimeout(preMove,5);
							}
							if(x==222){
								clearTimeout(t);
								pre=that.index;
							}
					})();
					(function thisMove(){
						var x=ul[that.index].offsetLeft;
						if(x<0){
							x+=3;
							ul[that.index].style.left=x+'px';
							setTimeout(thisMove,5);
						}
					})();
				}
			}
		}
	}
	
	classifyDetails.onmouseover=function(e){
		var target=e.target;
		if(target.nodeName=="A"){
			if(parseInt(getComputedStyle(target).width)>108){
				target.style.textIndent='-140px';
				target.style.transition='3s';
			}
		}
	}
	classifyDetails.onmouseout=function(){
		var a=classifyDetails.getElementsByTagName("a");
		for(var i=0;i<a.length;i++){
			a[i].style.transition='0s';
			a[i].style.textIndent=0;
		}
	}
})();
/*
 瞬变无过渡
 
(function(){
	var a=classify.getElementsByTagName("a");
	var ul=classifyDetails.getElementsByTagName("ul");
	var pre=0;
	for(var i=0;i<a.length;i++){
		a[i].index=i;
		a[i].onclick=function(){
			a[pre].style.color='#0dad51';
			a[pre].style.fontWeight='normal';
			ul[pre].style.left='-222px';
			pre=this.index;
			this.style.color='#333';
			this.style.fontWeight='bold';
			ul[this.index].style.left=0;
		}
	}
})();

*/

/*
每次都从右边移出来

(function(){
	var a=classify.getElementsByTagName("a");
	var ul=classifyDetails.getElementsByTagName("ul");
	var pre=0;
	for(var i=0;i<a.length;i++){
		a[i].index=i;
		a[i].onclick=function(){
			var that=this;
			a[pre].style.color='#0dad51';
			a[pre].style.fontWeight='normal';
			that.style.color='#333';
			that.style.fontWeight='bold';
			(function moveLeft(){
				if(that.index!=pre){	 	
					var x=ul[pre].offsetLeft;
					if(x>-222){
						x-=3;
						ul[pre].style.left=x+'px';
						t=setTimeout(moveLeft,5);
					}
					if(x==-222){
						ul[pre].style.left='222px';
						clearTimeout(t);
						pre=that.index;
						}
				}
			})();
			(function moveLeft1(){
				var x=ul[that.index].offsetLeft;
				if(x>0){
					x-=3;
					ul[that.index].style.left=x+'px';
					setTimeout(moveLeft1,5);
				}
			})();
		}
	}
})();
*/


/*登录*/
$('#erweima').mouseover(function(){
	$('#how-erweima').fadeIn();
})
$('#erweima').mouseout(function(){
	$('#how-erweima').css('display','none');
})

$('#how-login').click(function(){
	$('#login').css('display','none');
	$('#login2').css('display','block');
	$('#register').css('display','none');
	$('#how-login').html('忘了密码？');
})

$('#quick-login').click(function(){
	$('#textHint').hide();
	$('#pswHint').hide();
	$('#error').hide();
	$('#login').css('display','block');
	$('#login2').css('display','none');
	$('#register').css('display','none');
	$('#how-login').html('帐号密码登录');
})
$('#register-new').click(function(){
	$('#textHint').hide();
	$('#pswHint').hide();
	$('#error').hide();
	$('#login').css('display','none');
	$('#login2').css('display','none');
	$('#register').css('display','block');
	$('#how-login').html('帐号密码登录');
	$('#registerForm').css('display','block');
	$('#succRegister').css('display','none');
	$('#r1').val('');
	$('#r2').val('');
	$('#r3').val('');
	$('#register1').html('');
	$('#register2').html('');
	$('#register3').html('');
})

$('.loginqq').click(function(){
	$('#login-container').css('display','block')
	$('#login').css('display','block');
	$('#login2').css('display','none');
	$('#register').css('display','none');
	$('#registerForm').css('display','block');
	$('#succRegister').css('display','none');
	$('#r1').val('');
	$('#r2').val('');
	$('#r3').val('');
	$('#register1').html('');
	$('#register2').html('');
	$('#register3').html('');
	$('#textHint').html('');
	$('#pswHint').html('');
	$('#error').html('');
	$('#how-login').html('帐号密码登录');
	
})
$('#close').click(function(){
	$('#login-container').css('display','none')
})


$('input[name="uname"]').focus(function(){
	$('#textHint').removeClass('shake');
})
$('input[name="uname"]').blur(function(){
	if($(this).val()==''){
		$('#textHint').show();
		$('#textHint').html('请输入帐号');
		$('#textHint').addClass('shake');
	}
})

$('input[name="upwd"]').focus(function(){
	$('#pswHint').removeClass('shake');
})
$('input[name="upwd"]').blur(function(){
	if($(this).val()==''){
		$('#pswHint').show();
		$('#pswHint').html('请输入密码');
		$('#pswHint').addClass('shake');
	}
})

/*快速登录*/
$('#user').click(function(){
	$('#login-container').fadeOut();  //摸态框淡出
    $('#m').html('欢迎回来：迅捷斥候');
	var html=`
   	<div class="green_cycle">
		<img height="200" width="200" class="green_cycle_img" src="images/green_cycle.svg">
		<div class="yellow_cycle">
			<img height="180" width="180" class="yellow_cycle_img" src="images/yellow_cycle.svg">
			<div class="blue_cycle">
				<img height="160" width="160" class="blue_cycle_img" src="images/blue_cycle.svg">
				<div class="head_img_div">
					<img height="160" width="160" class="head_img" src="images/head-big.png">
				</div>
			</div>
		</div>
    </div>
   `;
   $('#login-head').html(html);
})
/*帐号密码登录*/
$('#btn').blur(function(){
	$('#error').removeClass('shake-error');
})
$('#btn').click(function(){
  //把用户的输入序列化为k=v字符串
  var data = $('#login-form').serialize();
  //$.ajax  $.post
  $.post('qqmusic.php', data, function(obj){
    //console.log('开始处理登录验证结果');
    //console.log(arguments);
    if(obj.msg=='succ'){ //验证成功
      $('#login-container').fadeOut();  //摸态框淡出
	  $.post('qqmusic2.php', data, function(obj){
    //console.log('开始处理登录验证结果');
    //console.log(obj.uhead);
	   $('#m').html('欢迎回来：'+obj.qname);
	   var html=`
		<div class="green_cycle">
			<img height="200" width="200" class="green_cycle_img" src="images/green_cycle.svg">
			<div class="yellow_cycle">
				<img height="180" width="180" class="yellow_cycle_img" src="images/yellow_cycle.svg">
				<div class="blue_cycle">
					<img height="160" width="160" class="blue_cycle_img" src="images/blue_cycle.svg">
					<div class="head_img_div">
						<img height="160" width="160" class="head_img" src="${obj.uhead}">
					</div>
				</div>
			</div>
		</div>
	   `;
	   $('#login-head').html(html);
	  });
    }else {
		$('#error').html('');
		if($('input[name="uname"]').val()==''){
			$('#textHint').show();
			$('#textHint').html('请输入帐号');
			$('#textHint').addClass('shake');
		}else if($('input[name="upwd"]').val()==''){
			$('#pswHint').show();
			$('#pswHint').html('请输入密码');
			$('#pswHint').addClass('shake');
		}else{
			$('#error').addClass('shake-error');
			$('#error').show();
			$('#error').html(obj.msg);
		}
		return;
    }
  });
  
});

/*注册*/
var exist=false;
r1.onfocus=function(){
	$('#register1').removeClass('shake-register');
}
r1.onblur = function(){
            if(r1.validity.valid){
				$('#register1').removeClass('shake-register');
				register1.style.color='green';
                register1.innerHTML = "&radic;"
            }else if(r1.validity.valueMissing){
				$('#register1').addClass('shake-register');
				register1.style.color='red';
                register1.innerHTML = "帐号不能为空";
            }else if(r1.validity.patternMismatch){
				$('#register1').addClass('shake-register');
				register1.style.color='red';
                register1.innerHTML = "帐号输入有误";
            }
			var data = $('#registerForm').serialize();
			$.post('register-repeat.php', data, function(obj){
				 if(obj.msg=='succ'){
					 exist=true;
					 $('#register1').addClass('shake-register');
					 register1.style.color='red';
					 register1.innerHTML = "帐号已存在!";
				 }else{
					 exist=false;
				 }
			});
			
}
r2.onfocus=function(){
	$('#register2').removeClass('shake-register');
}
var r2run=false;
r2.onblur = function(){
	        if(r2.validity.valueMissing){
				r2run=false;
				$('#register2').addClass('shake-register');
				register2.style.color='red';
                register2.innerHTML = "昵称不能为空"
            }else if(r2.value.indexOf(' ')!=-1){
				r2run=false;
				$('#register2').addClass('shake-register');
				register2.style.color='red';
                register2.innerHTML = "昵称输入有误"
            }else{
				r2run=true;
				$('#register2').removeClass('shake-register');
				register2.style.color='green';
                register2.innerHTML = "&radic;"
            }
			
}
r3.onfocus=function(){
	$('#register3').removeClass('shake-register');
}
r3.onblur = function(){
            if(r3.validity.valid){
				$('#register3').removeClass('shake-register');
				register3.style.color='green';
                register3.innerHTML = "&radic;"
            }else if(r3.validity.valueMissing){
				$('#register3').addClass('shake-register');
				register3.style.color='red';
                register3.innerHTML = "密码不能为空"
            }else if(r3.validity.patternMismatch){
				$('#register3').addClass('shake-register');
				register3.style.color='red';
                register3.innerHTML = "密码输入有误";
            }
			
}

btnRegister.onclick=function(){
	if(r1.validity.valid&&r2run&&r3.validity.valid&&exist==false){
		registerForm.style.display='none';
		succRegister.style.display='block';
		
		var data = $('#registerForm').serialize();
		$.post('qqmusic-register.php', data, function(obj){
		});
	}
}

 








