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
import com.cognizant.online.travel.model.TripInfo;

@CrossOrigin(origins = "*", maxAge = 3600,  allowedHeaders = "*")
@RestController
public class AdminController {
	
	@Autowired
	private Environment environment;
	
	@GetMapping
	public String checkAdmin(){
		String serverPort = environment.getProperty("local.server.port");
		
		System.out.println("AdminController: serverPort: "+serverPort);
		return "AdminService : Port: "+serverPort;
	}
	
	@GetMapping(value="allEmpTripSummary")
	public ApiResponse<List<TripInfo>> allEmpTripSummary(){
		System.out.println("AdminController : allEmpTripSummary");
		List<TripInfo> listOfTrips = new ArrayList<TripInfo>();
		TripInfo tripInfo = new TripInfo();
		
		tripInfo.setUserId("12345");
		tripInfo.setUserName("Thiruppathi Madhu");
		tripInfo.setFrom("Chennai");
		tripInfo.setEmpId("467");
		tripInfo.setEmpName("Driver 1");
		tripInfo.setTo("Bangalore");
		
		listOfTrips.add(tripInfo);
		tripInfo = new TripInfo();
		tripInfo.setUserId("456");
		tripInfo.setUserName("Thiruppathi Madhu 456");
		tripInfo.setFrom("Chennai");
		tripInfo.setEmpId("467");
		tripInfo.setEmpName("Driver 1");
		tripInfo.setTo("Bangalore");
		
		listOfTrips.add(tripInfo);
		
		tripInfo = new TripInfo();
		tripInfo.setUserId("678");
		tripInfo.setUserName("Thiruppathi Madhu 678");
		tripInfo.setFrom("Chennai");
		tripInfo.setEmpId("467");
		tripInfo.setEmpName("Driver 1");
		tripInfo.setTo("Bangalore");
		
		listOfTrips.add(tripInfo);
		
		return new ApiResponse<List<TripInfo>>( HttpStatus.OK.value() , "Trip Details Populated Successfully.", listOfTrips );
	}

}
