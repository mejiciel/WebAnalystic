function AjaxLoader(){
	this._loader;
	this.successHandler=null;
	this.failHandler=null;
	
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  this._loader=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  this._loader=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	
};

AjaxLoader.prototype={
	
		
		Post:function(waPayLoad,successHandler,failHandler){
			this.successHandler=successHandler;
			this.failHandler=failHandler;
			var self=this;
			this._loader.onreadystatechange=function(){
				try{
				if(self._loader.readyState==4 && self._loader.status==200)
				{
					console.log(self._loader.responseText);
					if(self.successHandler!=null){
						self.successHandler(self._loader.responseText);
					}
					
				}
				else if(self._loader.status == 404){
					console.log(self._loader.responseText);
					if(self.failHandler!=null){
						self.failHandler(self._loader.responseText);
					}
						
				}
				}
				catch(e){
					console.log(e);
				}
			};
			this._loader.open("GET", "http://localhost:8080/TestSpringMVC/getwgt?waName="+waPayLoad, true);
			this._loader.send();
		},
		
};


