/*var xjs1=document.createElement("script");

xjs1.type="text/javascript";
xjs1.src='/TestSpringMVC/resources/js/AjaxLoader.js';

var y=document.getElementsByTagName("head")[0];
document.getElementsByTagName("head")[0].insertBefore(xjs1,document.getElementsByTagName("head")[0].childNodes[1]);*/
document.write("<script type='text/javascript' src='/TestSpringMVC/resources/js/AjaxLoader.js'></script>");
function WALoader(){
	this.AnalysisWidgetList=[];
	this.WASTYLETITLE="WA_SPC_RULES";
	this.ajaxloaderArr=[];
	//this.ajaxFactory=new AjaxLoaderFactory();
};

WALoader.prototype={
	registerAnalysisWidget:function (htmlElementName)
	{
		this.AnalysisWidgetList.push(htmlElementName);
	},
	
	LoadAnalysisWidget:function(analysisWidgets)
	{
		
		if(mywa.AnalysisWidgetList.length<1)
		{
			this.AnalysisWidgetList=analysisWidgets;
		}
		
		var newStyleElm=document.createElement("style");
		newStyleElm.title=this.WASTYLETITLE;
		var s="";
		for(var i in this.AnalysisWidgetList)
		{
			
			s+=this.getHideCss(this.AnalysisWidgetList[i]);
			
		}
		newStyleElm.innerHTML=s;
		document.getElementsByTagName("head")[0].appendChild(newStyleElm);
		
		for(var i in this.AnalysisWidgetList)
		{
			
			this.RemoteGetContent(this.AnalysisWidgetList[i]);
			
		}
			
	},
	
	ShowAnalysisWidgets:function(elemName){
		var WAStyleSheet;
		var t="#"+elemName;
		for(var i=0; i< document.styleSheets.length;i++){
			if(document.styleSheets[i].title==this.WASTYLETITLE){
				WAStyleSheet=document.styleSheets[i];
				break;
			}
		}
		
			if(WAStyleSheet.removeRule){ //IE
				for(var i=0; i< WAStyleSheet.rules.length;i++){
					var rule=WAStyleSheet.rules[i];
					if(rule.selectorText==t)
					WAStyleSheet.removeRule(i);
				}
			}
			else if(WAStyleSheet.deleteRule){ //Firefox
				for(var i=0; i< WAStyleSheet.cssRules.length;i++){
					if(WAStyleSheet.cssRules[i].selectorText==t)
					WAStyleSheet.deleteRule(i);
				}
			}
		
			
		
	},
	
	getHideCss:function(eleName)
	{
		return "#"+eleName+" {display:none;}\n";
	},
	
	RemoteGetContent:function(eleName){
		var ajaxLoader=new AjaxLoader();
		var self=this;
		ajaxLoader.Post(eleName,function(theInnerHtml){
			document.getElementById(eleName).innerHTML=theInnerHtml;
			self.ShowAnalysisWidgets(eleName);
		});
		this.ajaxloaderArr.push(ajaxLoader);
		
	},
	
	
	
	
	

};




	
