package com.cognizant.online.travel.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.online.travel.model.ApiResponse;
import com.cognizant.online.travel.model.BookInfo;
import com.cognizant.online.travel.model.BookInfoDto;
import com.cognizant.online.travel.model.TripInfo;
import com.cognizant.online.travel.util.Producer;

@CrossOrigin(origins = "*", maxAge = 3600,  allowedHeaders = "*")
@RestController(value="admin")
public class EmployeeController {
	
	@GetMapping
	public String checkEmployee(){
		System.out.println("EmployeeController");
		return "EmployeeService:8083";
	}

	@GetMapping(value="openRides")
	public ApiResponse<List<BookInfo>> openRides(){
		System.out.println("EmployeeController : openRides");
		List<BookInfo> bookInfoList = new ArrayList<BookInfo>(); 
		BookInfo bookInfo = new BookInfo();
		bookInfo.setUserId("12345");
		bookInfo.setUserName("Thiruppathi Madhu");
		bookInfo.setFrom("Chennai");
		bookInfo.setTo("Bangalore");
		
		bookInfoList.add(bookInfo);
		
		bookInfo = new BookInfo();
		bookInfo.setUserId("25624");
		bookInfo.setUserName("Thiruppathi Madhu");
		bookInfo.setFrom("Chennai");
		bookInfo.setTo("Bangalore");
		 
		bookInfoList.add(bookInfo);
		
		return new ApiResponse<List<BookInfo>>( HttpStatus.OK.value() , "Trip Cancelled Successfully.", bookInfoList);
	}
	
	@PostMapping(value="registerVechile")
	public ApiResponse<BookInfo> registerVechile(@RequestBody BookInfoDto bookInfoDto ){
		System.out.println("EmployeeController : registerVechile");
		BookInfo bookInfo = new BookInfo();
		bookInfo.setUserId("12345");
		bookInfo.setUserName("Thiruppathi Madhu");
		bookInfo.setFrom("Chennai");
		bookInfo.setTo("Bangalore");
		
	    return new ApiResponse<BookInfo>( HttpStatus.OK.value() , "Vechile Registered Successfully.", bookInfo);
	}
	
	
	@PostMapping(value="confirmRide")
	public ApiResponse<BookInfo> bookRide(@RequestBody BookInfoDto bookInfoDto ){
		System.out.println("EmployeeController : confirmRide");
		BookInfo bookInfo = new BookInfo();
		bookInfo.setUserId("12345");
		bookInfo.setUserName("Thiruppathi Madhu");
		bookInfo.setFrom("Chennai");
		bookInfo.setTo("Bangalore");
		
	    return new ApiResponse<BookInfo>( HttpStatus.OK.value() , "Ride Confirmed Successfully.", bookInfo);
	}
	
	
	
	@GetMapping(value="empTripSummary")
	public ApiResponse<List<TripInfo>> allEmpTripSummary(){
		System.out.println("EmployeeController : empTripSummary");
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
	
	@Autowired
	private Producer producer;

	@GetMapping(value = "/publish")
	public void sendMessageToKafkaTopic(){
		System.out.println("Emp Controller : publish ");
		this.producer.sendMessage("Thiru From Rest");
	}
	
	
}
