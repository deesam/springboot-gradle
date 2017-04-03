package com.ask.gradle;

import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.RequestMapping;


import javax.ws.rs.GET;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@RestController
public class HelloController {
    
	@GET
	@Produces(MediaType.APPLICATION_JSON + "; charset=utf-8")
    @RequestMapping("/")
    public String index() {
		
		Response response =  Response.ok("Hello World!").build();
		return (String)response.getEntity();
		
    }
    
}
