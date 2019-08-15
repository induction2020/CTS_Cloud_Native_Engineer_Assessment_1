package com.cognizant.online.travel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600,  allowedHeaders = "*")
@RestController
public class ConfigController {
	
	@Autowired
	private Environment environment;
	
	@GetMapping
	public String checkAuth(){
		String serverPort = environment.getProperty("local.server.port");
		
		System.out.println("ConfigController: serverPort: "+serverPort);
		return "AuthService : Port: "+serverPort;
	}
	
	

}
