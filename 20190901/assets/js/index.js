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
	document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + 15 + " 题"
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

					document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + 15 + " 题"
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
             "title": "安源刘斌锐在工人运动高峰期被誉为“中国的（&nbsp&nbsp&nbsp&nbsp）”。",
	         "answer":"小莫斯科",
             "xuanxiang":[
             				"小莫斯科",
             				"小柏林",
             				"小列宁格勒",
             				"小巴黎",
             				]
        },{  
             "id" : "2",  
             "title": "1931年10月，我党我军第一个大型综合性兵工厂——中央兵工厂在（&nbsp&nbsp&nbsp&nbsp）诞生。",
	         "answer":"兴国官田",
             "xuanxiang":[
             				"于都桥头",
             				"赣县白鹭",
             				"瑞金冈面",
             				"兴国官田",
             				]
        },{  
             "id" : "3",  
             "title": "（&nbsp&nbsp&nbsp&nbsp）被称为“革命烈士第一县”。",
			 "answer":"江西省兴国县",
             "xuanxiang":[
             				"江西省兴国县",
             				"湖北省金寨县",
             				"福建省长汀县",
             				"江西省宁都县",
             				]
        },{
			"id" : "4",
			"title": "1927年9月9日，秋收起义公开打出了我军的第一面旗帜，称为（&nbsp&nbsp&nbsp&nbsp）。",
			"answer":"工农革命军第一军第一师",
			"xuanxiang":[
							"工农革命军第一军第一师",
							"工农红军第一军第一师",
							"红军第一军第一师",
							"国民革命军第一军第一师",
			              ]
		},{
			"id" : "5",
			"title": "1927年8月20日，秋收起义部队第三团进驻江西铜鼓后，在铜鼓县城南的武曲宫创办了第一个“新兵训练处”，具有我军历史上最早军校的雏形，时任“新兵训练处”主任的是（&nbsp&nbsp&nbsp&nbsp）。",
			"answer":"陈伯钧",
			"xuanxiang":[
							"宋任穷",
							"陈伯钧",
							"苏先骏",
							"李新芳",
			]
		},{
				"id" : "6",
				"title": "苏区干部好作风的具体内涵包括（&nbsp&nbsp&nbsp&nbsp）。",
				"answer":"以上全是",
				"xuanxiang":[
							"调查研究，求真务实",
							"关心群众，执政为民",
							"艰苦奋斗，廉洁奉公；模范带头，争创一流",
							"以上全是",
				]
        },{
	"id" : "7",
	"title": "“九八”抗洪精神包括（&nbsp&nbsp&nbsp&nbsp）。",
	"answer":"以上全是",
	"xuanxiang":[
		"万众一心、众志成城",
		"不怕困难、顽强拼搏",
		"坚韧不拔、敢于胜利",
		"以上全是",
	]
},{
	"id" : "8",
	"title": "方志敏在（&nbsp&nbsp&nbsp&nbsp）中描绘了祖国未来的美好幸福景象：“欢歌将代替了悲叹，笑脸将代替了哭脸，富裕将代替了贫穷，康健将代替了疾病，智慧将代替了愚昧，友爱将代替了仇恨，生之快乐将代替了死之忧伤，明媚的花园将代替了暗淡的荒地！”",
	"answer":"《可爱的中国》",
	"xuanxiang":[
		"《清贫》",
		"《狱中纪实》",
		"《可爱的中国》",
		"《我是个共产党员了！》",
	]
},{
	"id" : "9",
	"title": "江西萍乡市被誉为“中国傩文化之乡”，其中被公认为的“三宝”是（&nbsp&nbsp&nbsp&nbsp）。",
	"answer":"傩庙、傩面具、傩舞",
	"xuanxiang":[
		"傩庙、傩面具、傩舞",
		"傩庙、傩面具、傩戏",
		"傩面具、傩舞、傩戏",
		"傩庙、傩舞、傩戏",
	]
},{
	"id" : "10",
	"title": "近年来，江西省把社会主义核心价值观同江西改革发展实践紧密结合，以诚信建设和法治建设为突破口，针对道德领域突出问题和法院执行难问题，推动本省（&nbsp&nbsp&nbsp&nbsp）共同建立“法媒银·失信被执行人曝光台”。",
	"answer":"以上全是",
	"xuanxiang":[
		"法院",
		"媒体",
		"银行",
		"以上全是",
	]
},{
	"id" : "11",
	"title": "1973年江西发现的（&nbsp&nbsp&nbsp&nbsp）遗址，打破了“商文化不过长江”的论断。",
	"answer":"吴城遗址",
	"xuanxiang":[
		"筑卫城遗址",
		"樊城堆遗址",
		"牛头城遗址",
		"吴城遗址",
	]
},{
	"id" : "12",
	"title": "江西省樟树市是“中国药都”，素有“药不到樟树不齐，药不过樟树不灵”之美誉。樟树吴茱萸是该市道地药材、国家地理标志保护产品，本地俗称吴萸子，为（&nbsp&nbsp&nbsp&nbsp）科植物吴茱萸的未成熟果实。",
	"answer":"芸香",
	"xuanxiang":[
		"蔷薇",
		"芸香",
		"百合",
		"木兰",
	]
},{
	"id" : "13",
	"title": "（&nbsp&nbsp&nbsp&nbsp）是中国第一大淡水湖，位于江西省北部。",
	"answer":"鄱阳湖",
	"xuanxiang":[
		"鄱阳湖",
		"洞庭湖",
		"太湖",
		"洪泽湖",
	]
},{
	"id" : "14",
	"title": "2011年，铅山（&nbsp&nbsp&nbsp&nbsp）生产基地入围文化部设立的首批国家级非物质文化遗产生产性保护示范基地。",
	"answer":"连四纸",
	"xuanxiang":[
		"宣纸",
		"薛涛笺",
		"水纹纸",
		"连四纸",
	]
},{
	"id" : "15",
	"title": "（&nbsp&nbsp&nbsp&nbsp）荣获“最多跆拳道女子金牌（轻量级选手）”吉尼斯世界纪录称号。",
	"answer":"吴静钰",
	"xuanxiang":[
		"陈中",
		"吴静钰",
		"郑姝音",
		"罗薇",
	]
}
        ];
        

