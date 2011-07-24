//document.write("<script type='text/javascript' src='resources/js/collection.js'></script>");
function WALoader(){
	this.AnalysisWidgetList=[];
	this.WASTYLETITLE="WA_SPC_RULES";
};

WALoader.prototype={
	registerAnalysisWidget:function (htmlElementName)
	{
		mywa.AnalysisWidgetList.push(htmlElementName);
	},
	
	LoadAnalysisWidget:function(analysisWidgets)
	{
		
		if(mywa.AnalysisWidgetList.length<1)
		{
			mywa.AnalysisWidgetList=analysisWidgets;
		}
		
		var newStyleElm=document.createElement("style");
		newStyleElm.title=this.WASTYLETITLE;
		var s="";
		for(eleName in mywa.AnalysisWidgetList)
		{
			
			s+=mywa.getHideCss(mywa.AnalysisWidgetList[eleName]);
			
		}
		newStyleElm.innerHTML=s;
		document.getElementsByTagName("head")[0].appendChild(newStyleElm);
			
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
	
		
};

