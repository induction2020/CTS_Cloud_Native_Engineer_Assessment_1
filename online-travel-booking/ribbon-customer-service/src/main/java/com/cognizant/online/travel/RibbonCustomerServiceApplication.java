package com.cognizant.online.travel;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.ribbon.RibbonClient;
import org.springframework.context.annotation.ComponentScan;

import com.cognizant.online.travel.ribbonClient.RibbonConfiguration;

@SpringBootApplication
@EnableDiscoveryClient
@ComponentScan(basePackages = { "com.cognizant.online.travel.*" })
@RibbonClient(name ="customer-service", configuration = RibbonConfiguration.class)
public class RibbonCustomerServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(RibbonCustomerServiceApplication.class, args);
	}

}
