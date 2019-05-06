var str = '';
function time(){
	// var HH = 0;
	var mm = 0;
	var ss = 0;

	var timer = setInterval(function(){
		str = "";
		if(++ss==60)
		{
			// if(++mm==60)
			// {
			// 	HH++;
			// 	mm=0;
			// }
			mm++;
			ss=0;
		}
		// str+=HH<10?"0"+HH:HH;
		// str+=":";
		str+=mm<10?"0"+mm:mm;
		str+=":";
		str+=ss<10?"0"+ss:ss;
		// document.getElementById("dtime").innerHTML = str;
	},1000);
};


function TiMu(){
	for(var i in data1){
		var div = document.createElement("div");
		div.className = "entrance-bottom-frame-line";
		document.querySelector(".entrance-bottom-frame").appendChild(div);
		
		
		var div2 = document.createElement("div");
		div2.className = "entrance-bottom-frame-line-title";
		div2.innerHTML = data1[i].title;
		document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(div2);
			
		
		var divli1 = document.createElement("div");
		divli1.innerHTML = parseInt(i) + 1;
		
		var timu = 1
		for(var j in data1[i].xuanxiang){
			var div3 = document.createElement("div");
			div3.className = "entrance-bottom-frame-line-button";
			var div3_id = document.createElement("div");
			div3_id.className = "entrance-bottom-frame-line-button-id";
			if(j == 0){
				 div3_id.innerHTML = "A";
			}else if(j == 1){
				 div3_id.innerHTML = "B";
			}else if(j == 2){
				 div3_id.innerHTML = "C";
			}else{
				 div3_id.innerHTML = "D";
			}
			var div4 = document.createElement("div");
			div4.className = "entrance-bottom-frame-line-button-frame";
			div4.innerHTML = data1[i].xuanxiang[j];
			div3.appendChild(div3_id)
			div3.appendChild(div4);
			document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(div3);
			timu++
		}
	}
	mintime = 1; 
	var dact = document.querySelector(".entrance-bottom-frame-line")
	var active = "active"
	var none = "none"
	addClass(dact, active)
	var timu_id = 0
	var select1 = 1
	var frame_left = 0
	document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
	document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + 6 + " 题"
	for(var i = 0;i<document.querySelectorAll(".entrance-bottom-frame-line-button").length;i++){
		var temp =i;
		document.querySelectorAll(".entrance-bottom-frame-line-button")[i].onclick = function(){
			if(timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1){
				//加出错判断
				//正确答案
				var a=data1[timu_id].answer;
				//所点击的选项
				var b=(window.event.srcElement || window.event.target).innerHTML;
				//判断
				if (a==b){
					frame_left += -100
					document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"

					timu_id++;
					select1++;

					document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + 6 + " 题"
					addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
					removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active)

					//暂停当前播放
					document.getElementById('myVideo').pause(); // 暂停
					document.getElementById('musicVideo').pause(); // 暂停
				}else{
				}
			}else{
				var a=data1[timu_id].answer;
				//所点击的选项
				var b=(window.event.srcElement || window.event.target).innerHTML;
				//判断
				if (a==b) {
					// var a = confirm("是否提交？");
					// if (a) {
						//把答题时间str存到cookie中

						// document.cookie = str;

						//跳转结果页面
						// window.location.href = "result.shtml"
						//跳转结果页面并传递时间参数
					window.location.href = "result.shtml?"+"time="+encodeURI(str);

					// } else {
					// }
				}else{

				}
			}
		}
	}
}

function addClass(obj, cls){
  var obj_class = obj.className,//获取 class 内容.
  blank = (obj_class != '') ? ' ' : '';//判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
  added = obj_class + blank + cls;//组合原来的 class 和需要添加的 class.
  obj.className = added;//替换原来的 class.
}

function removeClass(obj, cls){
  var obj_class = ' '+obj.className+' ';//获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
  obj_class = obj_class.replace(/(\s+)/gi, ' '),//将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
  removed = obj_class.replace(' '+cls+' ', ' ');//在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
  removed = removed.replace(/(^\s+)|(\s+$)/g, '');//去掉首尾空格. ex) 'bcd ' -> 'bcd'
  obj.className = removed;//替换原来的 class.
}

function hasClass(obj, cls){
  var obj_class = obj.className,//获取 class 内容.
  obj_class_lst = obj_class.split(/\s+/);//通过split空字符将cls转换成数组.
  x = 0;
  for(x in obj_class_lst) {
    if(obj_class_lst[x] == cls) {//循环数组, 判断是否包含cls
      return true;
    }
  }
  return false;
}




var data1 =[ {
             "id" : "1",  
             "title": "<center>下面哪一个选项是习近平总书记对江西工作提出的重要要求？</center>",
	         "answer":"新的希望、三个着力、四个坚持",
             "xuanxiang":[
             				"<center>新的希望、三个着力、四个坚持</center>",
             				"<center>树牢“四个意识”、坚定“四个自信”、坚决做到“两个维护”</center>",
             				"<center>增强“四个意识” 坚定“四个自信”</center>",
             				"<center>深入推进“四个全面”战略布局，紧紧围绕“八个方面”重点任务</center>",
             				]
        },{  
             "id" : "2",  
             "title": "<center>在中共江西省委十四届六次全体(扩大)会议上，江西省委确定的24字工作方针是“创新引领、改革攻坚、开放提升、绿色崛起、担当实干、________。”</center>",
	         "answer":"兴赣富民",
             "xuanxiang":[
             				"<center>兴赣富民</center>",
             				"<center>砥砺前行</center>",
             				"<center>富裕美丽</center>",
             				"<center>加快发展</center>",
             				]
        },{  
             "id" : "3",  
             "title": "<center>请观看电影片段：</center><br/><center><video  id='myVideo'  src='http://live.v.jxnews.com.cn:5011/vod/89b7aad0a15578bf96051068480b80d4.mp4' width='50%' height='50%' controls='controls' ></video></center><br/><center>这部电影的拍摄地是江西，请问这部电影的名字是________？</center>",
			 "answer":"《闪闪的红星》",
             "xuanxiang":[
             				"<center>《闪闪的红星》</center>",
             				"<center>《小兵张嘎》</center>",
             				"<center>《鸡毛信》</center>",
             				"<center>《三毛流浪记》</center>",
             				]
        },{
			"id" : "4",
			"title": "<center>请欣赏歌曲片段：</center><br/><center><audio  id='musicVideo'  src='http://ad.jxnews.com.cn/lm/2019/sshj.mp3' width='100%' height='100%' controls='controls'></audio></center><br/><center>请问这首江西经典歌曲的歌名是________？</center>",
			"answer":"《十送红军》",
			"xuanxiang":[
							"<center>《十送红军》</center>",
							"<center>《红军阿哥你慢慢走》</center>",
							"<center>《红区干部好作风》</center>",
							"<center>《红星照我去战斗》</center>",
			              ]
		},{
			"id" : "5",
			"title": "<center>出自王勃的诗句“落霞与孤鹜齐飞”的下一句?</center>",
			"answer":"秋水共长天一色",
			"xuanxiang":[
							"<center>杨柳共春旗一色</center>",
							"<center>秋水共长天一色</center>",
							"<center>轻舟已过万重山</center>",
							"<center>疑是银河落九天</center>",
			]
		},{
				"id" : "6",
				"title": "<center>下面四位江西籍名人，哪一位被誉为“杂交水稻之父”?</center>",
				"answer":"袁隆平",
				"xuanxiang":[
							"<center>欧阳自远</center>",
							"<center>樊植华</center>",
							"<center>袁隆平</center>",
							"<center>饶毅</center>",
				]
			}
        ];
        

