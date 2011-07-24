<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%@ page session="false" %>
<html>
<head>
	<title>Home</title>
	
	<script type="text/javascript" src='<c:url value="/resources/js/collection.js" />'>
	</script> 
	<script type="text/javascript" src='<c:url value="/resources/js/mywa.js" />'>
	</script>
<style type='text/css'>
#div1{ color:red;display:inline}
</style>
	<script type="text/javascript" >
	/*alert(document.getElementById("tochangediv"));*/
	/*$("#tochangdiv").ready(function(){
		alert("this");
	});*/
	var mywa=new WALoader();
	
	mywa.registerAnalysisWidget("div1");
	mywa.registerAnalysisWidget("div2");
	mywa.registerAnalysisWidget("div3");
	mywa.LoadAnalysisWidget();

	</script> 
	 
</head>
<body>
<h1>
	Hello world!  
</h1>

<%
response.addCookie(new Cookie("cookiename","it's meji"));
%>
<P>  The time on the server is ${serverTime}. </P>

<form action="mytest/gopage" method="get">
<input type="submit" value="Click and Send">
</form>

<div id="div1" >
<h1>div1</h1>
</div>


<div id="div2">
<h1>div2</h1>
</div>

<div id="div3">
<H1>div3</H1>
</div>	
<button type="button" onclick="javascript:mywa.ShowAnalysisWidgets('div2');">Click this</button>
</body>
</html>
