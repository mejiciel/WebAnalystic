package com.my.springmvc;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.my.springmvc.domain.MyUser;

@Controller
@RequestMapping("/mytest/*")
public class MyController {

	@RequestMapping("/g")
	public 	@ResponseBody String Go()
	{
		return "go";
	}
	
	//@RequestMapping("gopage")
	public String GoPage(@RequestParam("who") String who,Model model )
	{
		model.addAttribute("name", who);
		return "go";
	}
	
	@RequestMapping("gopage*")
	public String GopageCookie(@CookieValue("cookiename") String name,Model model)
	{
		model.addAttribute("cookiename", "from cookie"+name);
		return "go";
	}
	
	@RequestMapping(params="who=me*")
	public @ResponseBody String HelloMeji()
	{
		return "hello meji";
	}
	@RequestMapping("/parambean")
	public @ResponseBody String ProcessParamBean(MyUser user)
	{
		return "name:"+user.getName();
	}

}
