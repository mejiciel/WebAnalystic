function Map()
{
	this.mapobj={};
	}
Map.prototype.IsEmpty=function()
{
	for(var i in this)
		{
		return false;
		}
	return true;
	};
	
Map.prototype.foreach=function(handler)
{
	for(var key in this.mapobj)
	{
		if(handler!=null && this.mapobj.hasOwnProperty(key))
		{
		handler(key,this.mapobj);
		}
	
	}	
		};
	

Map.prototype.put=function (key,value)
{
	this.mapobj[key]=value;
	
	};

Map.prototype.get=function(key)
{
	return this.mapobj[key];
	};
	
Map.prototype.toString=function()
{
	var t="";
	for(var i in this.mapobj) t+=";"+i;
	return t;
};