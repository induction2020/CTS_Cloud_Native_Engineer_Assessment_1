package com.cognizant.online.travel.ribbonClient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class EmployeeRibbonController {
	
	@Autowired
	private RestTemplate restTemplate;
	
	@RequestMapping(value="employee/*", method = RequestMethod.GET)
	public String getAdminService(){
		String response = null;
		System.out.println("EmployeeRibbonController: employee");
		String employeeUrl = "http://employee-service/";
		
		try{
			response = this.restTemplate.getForObject(employeeUrl ,  String.class);
		}catch(IllegalStateException excep){
			response = "No instances available for "+employeeUrl;
		}
		return response;
	}

	@LoadBalanced
	@Bean
	RestTemplate restTemplate(){
	   return new RestTemplate();
	}
	
}
