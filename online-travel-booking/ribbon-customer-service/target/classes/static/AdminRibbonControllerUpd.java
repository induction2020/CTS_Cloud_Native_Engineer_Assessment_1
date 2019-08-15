package com.cognizant.online.travel.ribbonClient;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.client.loadbalancer.LoadBalancerClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import org.springframework.cloud.client.discovery.DiscoveryClient;

@RestController
public class AdminRibbonControllerUpd {
	
	@Autowired
	private RestTemplate restTemplate;
	
    @Autowired
    private LoadBalancerClient loadBalancer;
    
	 @Autowired
	 private DiscoveryClient discoveryClient;
	
	@RequestMapping(value="adminUpd/*", method = RequestMethod.GET)
	public String getAdminService(){
		System.out.println("AdminRibbonControllerUpd: admin");
		ServiceInstance serviceInstance = this.loadBalancer.choose("admin-service");
		
		System.out.println("--------------------------Port Config----------------------------");
		System.out.println("serviceInstance: "+serviceInstance);
		System.out.println("serviceInstance.getHost: "+serviceInstance.getHost() );
		System.out.println("serviceInstance.getUri: "+serviceInstance.getUri() );
		System.out.println("serviceInstance.getPort: "+serviceInstance.getPort() );
		
		String adminUrl = "http://http://localhost:"+serviceInstance.getPort()+"/";
		System.out.println("serviceInstance.adminUrl: "+adminUrl );
		String response = this.restTemplate.getForObject(adminUrl ,  String.class);
		return response;
	}

	@Bean
	public RestTemplate restTemplate() {
	    return new RestTemplate();
	}
	
//	  List<ServiceInstance> instances = this.discoveryClient.getInstances("admin-service");
//	
//	  System.out.println("AdminRibbonControllerUpd:instances: "+instances);
//	  if (instances == null || instances.isEmpty()) {
//          return "No instances for service: admin-service";
//    }
//	 
//	  for (ServiceInstance serviceInstance : instances) {
//		  System.out.println("AdminRibbonControllerUpd:instances: " +serviceInstance.getUri() );
//		  serviceInstance.getPort()
//    }
//	  
	

}
