package com.cognizant.online.travel.ribbonClient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class AdminRibbonController {
	
	@Autowired
	private RestTemplate restTemplate;
	
	@RequestMapping(value="admin/*", method = RequestMethod.GET)
	public String getAdminService(){
		String response = null;
		System.out.println("AdminRibbonController: admin");
		String adminUrl = "http://admin-service/";
		
		try{
			response = this.restTemplate.getForObject(adminUrl ,  String.class);
		}catch(IllegalStateException excep){
			response = "No instances available for "+adminUrl;
		}
		return response;
	}

	@LoadBalanced
	@Bean
	RestTemplate restTemplate(){
	   return new RestTemplate();
	}
	
}
