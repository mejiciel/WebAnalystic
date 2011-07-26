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
			this._loader.onreadystatechange=this.OnStateChange();
			this._loader.open("POST", "http://localhost:8080/TestSpringMVC/getwgt", true);
			this._loader.send("waName="+waPayLoad);
		},
		
		OnStateChange:function(){
			
			if(this._loader.readyState==4 && this._loader.status==200)
			{
				if(this.successHandler!=null){
					this.successHandler(this._loader.responseText);
				}
				
			}
			else if(this._loader.status == 404){
				console.log(this._loader.responseText);
				if(this.failHandler!=null){
					this.failHandler(this._loader.responseText);
				}
					
			}
		}
};


