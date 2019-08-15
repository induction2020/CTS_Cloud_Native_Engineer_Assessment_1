package com.cognizant.online.travel.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cognizant.online.travel.model.ApiResponse;

@CrossOrigin(origins = "*", maxAge = 3600,  allowedHeaders = "*")
@RestController
public class AuthController {
	
	@Autowired
	private Environment environment;
	
	@GetMapping
	public String checkAuth(){
		String serverPort = environment.getProperty("local.server.port");
		
		System.out.println("AuthController: serverPort: "+serverPort);
		return "AuthService : Port: "+serverPort;
	}
	
	

}
