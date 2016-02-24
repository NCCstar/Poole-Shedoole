function funcy(fileIn){
	//special for MUN
	array = new Array(16);
	for (var i = 0; i < array.length; i++)
	{
		array[i] = new Array(58);
		for(var k=0;k<58;k++)
		{
			array[i][k]="#ffffff";
		}
	}
	for(var y=0;y<array[0].length;y++)
	{
		array[0][y]="#bbbbbb";
	}
	for(var x=0;x<array.length;x++)
	{
		array[x][0]="#bbbbbb";
	}
	for(var x=1;x<13;x++)
	{
		if(x<6||x>7)
			for(var y=2;y<30;y++)
			{
				array[x][y]="#00aaff";
			}
	}
	function createCanvas(){
		// Declare canvas & properties
		var canvas  = document.createElement("canvas");
		// set canvas id and append canvas to body
		canvas.setAttribute("id","canvas");
		canvas.setAttribute("style","overflow:auto")
		document.body.appendChild(canvas);
	};
	function drawGrid(){

		// Get canvas and set context
		var c = document.getElementById("canvas");
		var ctx=canvas.getContext("2d");
		//resize grid to window
		c.width =  1500;//window.innerWidth;
		c.height = 1025;//window.innerHeight;

		//Draw grid
		//8:00 is 0:00
		//20:00 is 14:00
		var numY=14*4+2;//num hours*number of boxes per hours*hour
		var width=100;//c.width/8;
		var height=17.5;//canvas.height/numY;

		//draw line function
		var line = function(x1,y1,x2,y2){
			ctx.moveTo(x1,y1);
			ctx.lineTo(x2,y2);
			ctx.stroke();
		};

		var hwTime=(fileIn.class1.time+fileIn.class5.time+fileIn.class7.time+fileIn.class2.time+fileIn.class4.time+fileIn.class6.time+fileIn.class8.time)/6;//HW per week
		for(var x=0;x<15;x++)
		{
			var printS=false;
			var printH=false;
			var printC=false;
			var clubName;
			var sportName;

			var startHr=16;//HW
			var startMin=00;
			var startHrC=16;//clubs
			var startMinC=00;
			var endHrC=16;
			var endMinC=00;
			var startHrS=16;//sports
			var startMinS=00;
			var endHrS=16;
			var endMinS=00;
			for(var i=0;i<fileIn.clubs.length;i++)
			{
				if((x==1||x==8)&&fileIn.clubs[i].day.indexOf("Mon")!=-1)//monday
				{
					clubName=fileIn.clubs[i].name;
					startHr=fileIn.clubs[i].hourEnd+1;
					startMin=fileIn.clubs[i].minEnd;
					startHrC=fileIn.clubs[i].hourStart;
					startMinC=fileIn.clubs[i].minStart;
					endHrC=fileIn.clubs[i].hourEnd;
					endMinC=fileIn.clubs[i].minEnd;
				}
				if((x==2||x==9)&&fileIn.clubs[i].day.indexOf("Tue")!=-1)//tuesday
				{
					clubName=fileIn.clubs[i].name;
					startHr=fileIn.clubs[i].hourEnd+1;
					startMin=fileIn.clubs[i].minEnd;
					startHrC=fileIn.clubs[i].hourStart;
					startMinC=fileIn.clubs[i].minStart;
					endHrC=fileIn.clubs[i].hourEnd;
					endMinC=fileIn.clubs[i].minEnd;
				}
				if((x==3||x==10)&&fileIn.clubs[i].day.indexOf("Wed")!=-1)//wednesday
				{
					clubName=fileIn.clubs[i].name;
					startHr=fileIn.clubs[i].hourEnd+1;
					startMin=fileIn.clubs[i].minEnd;
					startHrC=fileIn.clubs[i].hourStart;
					startMinC=fileIn.clubs[i].minStart;
					endHrC=fileIn.clubs[i].hourEnd;
					endMinC=fileIn.clubs[i].minEnd;
				}
				if((x==4||x==11)&&fileIn.clubs[i].day.indexOf("Thur")!=-1)//thursday
				{
					clubName=fileIn.clubs[i].name;
					startHr=fileIn.clubs[i].hourEnd+1;
					startMin=fileIn.clubs[i].minEnd;
					startHrC=fileIn.clubs[i].hourStart;
					startMinC=fileIn.clubs[i].minStart;
					endHrC=fileIn.clubs[i].hourEnd;
					endMinC=fileIn.clubs[i].minEnd;
				}
				if((x==5||x==12)&&fileIn.clubs[i].day.indexOf("Fri")!=-1)//friday
				{
					clubName=fileIn.clubs[i].name;
					startHr=fileIn.clubs[i].hourEnd+1;
					startMin=fileIn.clubs[i].minEnd;
					startHrC=fileIn.clubs[i].hourStart;
					startMinC=fileIn.clubs[i].minStart;
					endHrC=fileIn.clubs[i].hourEnd;
					endMinC=fileIn.clubs[i].minEnd;
				}
			}
			for(var i=0;i<fileIn.sports.length;i++)
			{
				if((x==1||x==8)&&fileIn.sports[i].day.indexOf("Mon")!=-1)//monday
				{
					sportName=fileIn.sports[i].name;
					startHr=fileIn.sports[i].hourEnd+1;
					startMin=fileIn.sports[i].minEnd;
					startHrS=fileIn.sports[i].hourStart;
					startMinS=fileIn.sports[i].minStart;
					endHrS=fileIn.sports[i].hourEnd;
					endMinS=fileIn.sports[i].minEnd;
				}
				if((x==2||x==9)&&fileIn.sports[i].day.indexOf("Tue")!=-1)//tuesday
				{
					sportName=fileIn.sports[i].name;
					startHr=fileIn.sports[i].hourEnd+1;
					startMin=fileIn.sports[i].minEnd;
					startHrS=fileIn.sports[i].hourStart;
					startMinS=fileIn.sports[i].minStart;
					endHrS=fileIn.sports[i].hourEnd;
					endMinS=fileIn.sports[i].minEnd;
				}
				if((x==3||x==10)&&fileIn.sports[i].day.indexOf("Wed")!=-1)//wednesday
				{
					sportName=fileIn.sports[i].name;
					startHr=fileIn.sports[i].hourEnd+1;
					startMin=fileIn.sports[i].minEnd;
					startHrS=fileIn.sports[i].hourStart;
					startMinS=fileIn.sports[i].minStart;
					endHrS=fileIn.sports[i].hourEnd;
					endMinS=fileIn.sports[i].minEnd;
				}
				if((x==4||x==11)&&fileIn.sports[i].day.indexOf("Thur")!=-1)//thursday
				{
					sportName=fileIn.sports[i].name;
					startHr=fileIn.sports[i].hourEnd+1;
					startMin=fileIn.sports[i].minEnd;
					startHrS=fileIn.sports[i].hourStart;
					startMinS=fileIn.sports[i].minStart;
					endHrS=fileIn.sports[i].hourEnd;
					endMinS=fileIn.sports[i].minEnd;
				}
				if((x==5||x==12)&&fileIn.sports[i].day.indexOf("Fri")!=-1)//friday
				{
					sportName=fileIn.sports[i].name;
					startHr=fileIn.sports[i].hourEnd+1;
					startMin=fileIn.sports[i].minEnd;
					startHrS=fileIn.sports[i].hourStart;
					startMinS=fileIn.sports[i].minStart;
					endHrS=fileIn.sports[i].hourEnd;
					endMinS=fileIn.sports[i].minEnd;
				}
				if((x==6||x==13)&&fileIn.sports[i].day.indexOf("Sat")!=-1)//saturday
				{
					sportName=fileIn.sports[i].name;
					startHr=fileIn.sports[i].hourEnd+1;
					startMin=fileIn.sports[i].minEnd;
					startHrS=fileIn.sports[i].hourStart;
					startMinS=fileIn.sports[i].minStart;
					endHrS=fileIn.sports[i].hourEnd;
					endMinS=fileIn.sports[i].minEnd;
				}
			}
			var startMinTol=startMin+60*startHr;
			var endMinTol=startMinTol+hwTime;
			var endMin=endMinTol%60;
			var endHr=parseInt(endMinTol/60);
			var hour=8;
			var min=0;
			for(var y=0;y<numY;y++)
			{
				ctx.fillStyle=array[x][y];
				ctx.fillRect(x*width,y*height,width,height);
				ctx.strokeRect(x*width,y*height,width,height);
				if(y==0&&(x==1||x==8))
				{
					ctx.fillStyle="#000000";
					ctx.fillText("Monday",x*width+1,y*height+(height*0.85));
				}
				if(y==0&&(x==2||x==9))
				{
					ctx.fillStyle="#000000";
					ctx.fillText("Tuesday",x*width+1,y*height+(height*0.85));
				}
				if(y==0&&(x==3||x==10))
				{
					ctx.fillStyle="#000000";
					ctx.fillText("Wednesday",x*width+1,y*height+(height*0.85));
				}
				if(y==0&&(x==4||x==11))
				{
					ctx.fillStyle="#000000";
					ctx.fillText("Thursday",x*width+1,y*height+(height*0.85));
				}
				if(y==0&&(x==5||x==12))
				{
					ctx.fillStyle="#000000";
					ctx.fillText("Friday",x*width+1,y*height+(height*0.85));
				}
				if(y==0&&(x==6||x==13))
				{
					ctx.fillStyle="#000000";
					ctx.fillText("Saturday",x*width+1,y*height+(height*0.85));
				}
				if(y==0&&(x==7||x==14))
				{
					ctx.fillStyle="#000000";
					ctx.fillText("Sunday",x*width+1,y*height+(height*0.85));
				}
				if(y==2&&((x>0&&x<6)||(x>7&&x<13)))
				{
					ctx.fillStyle = "#000000";
					ctx.fillText("School Day", x * width + 1, y * height + (height * 0.85));
				}
				if(hour>=startHr&&hour<=endHr&&((x>0&&x<7)||(x>7&&x<14)))
				{
					if(!(hour==startHr&&(min)<startMin)&&!(hour==endHr&&(min)>endMin))
					{
						ctx.fillStyle='#9944ff';
						ctx.fillRect(x*width,y*height,width,height);
						ctx.strokeRect(x*width,y*height,width,height);
						if(!printH)
						{
							printH=true;
							ctx.fillStyle = "#000000";
							ctx.fillText("Homework", x * width + 1, y * height + (height * 0.85));
						}
					}
				}
				if(hour>=startHrC&&hour<=endHrC&&((x>0&&x<6)||(x>7&&x<13)))
				{
					if(!(hour==startHrC&&(min)<=startMinC)&&!(hour==endHrC&&(min)>endMinC))
					{
						ctx.fillStyle='#00ff00';
						ctx.fillRect(x*width,y*height,width,height);
						ctx.strokeRect(x*width,y*height,width,height);
						if(!printC)
						{
							printC=true;
							ctx.fillStyle = "#000000";
							ctx.fillText(clubName, x * width + 1, y * height + (height * 0.85));
						}
					}
				}
				if(hour>=startHrS&&hour<=endHrS&&((x>0&&x<7)||(x>7&&x<14)))
				{
					if(!(hour==startHrS&&min<=startMinS)&&!(hour==endHrS&&min>endMinS))
					{
						if((hour>=startHrC&&hour<=endHrC&&((x>0&&x<6)||(x>7&&x<13)))&&!(hour == startHrC && (min) <= startMinC) && !(hour == endHrC && (min) > endMinC))
						{
							ctx.fillStyle = '#ff0000';
							ctx.fillRect(x * width, y * height, width, height);
							ctx.strokeRect(x * width, y * height, width, height);
							ctx.fillStyle = "#000000";
							ctx.fillText("Conflict!", x * width + 10, y * height + (height * 0.85));
						}
						else {
							ctx.fillStyle = '#ffff00';
							ctx.fillRect(x * width, y * height, width, height);
							ctx.strokeRect(x * width, y * height, width, height);
							if (!printS) {
								printS = true;
								ctx.fillStyle = "#000000";
								ctx.fillText(sportName, x * width + 1, y * height + (height * 0.85));
							}
						}
					}
				}
				if(y>0) {
					ctx.fillStyle = "#000000";
					ctx.font = "15px sans-serif";
					//makes 9:0 into 9:00
					var add = "";
					if (min < 10)
						add = "0";
					if (x == 0) {
						if (hour > 12)
							ctx.fillText(hour - 12 + ":" + min + add + " PM", x * width, y * height + (height * 0.9));
						else
							ctx.fillText(hour + ":" + min + add + " AM", x * width, y * height + (height * 0.9));
					}
					min += 15;
					if (min >= 60) {
						hour++;
						min = 0;
					}
				}
			}
		}
	};
	function onLoad(){
		createCanvas();
		drawGrid();
	}
	window.onload=function(){onLoad();};
	window.onresize=function(){drawGrid();};
}