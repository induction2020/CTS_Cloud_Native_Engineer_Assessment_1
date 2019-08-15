package com.cognizant.online.travel.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.online.travel.model.ApiResponse;
import com.cognizant.online.travel.model.BookInfo;
import com.cognizant.online.travel.model.BookInfoDto;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

@CrossOrigin(origins = "*", maxAge = 3600,  allowedHeaders = "*")
@RestController
public class CustomerController {
	
	@Autowired
	private Environment environment;
	
	
	@GetMapping
	public String checkCustomer(){
		String serverPort = environment.getProperty("local.server.port");
		
		System.out.println("CustomerController");
		return "CustomerService: Port: "+serverPort;
	}
	
	
	@PostMapping
	public ApiResponse<BookInfo> bookRide(@RequestBody BookInfoDto bookInfoDto ){
		System.out.println("CustomerController : bookRide");
		BookInfo bookInfo = new BookInfo();
		bookInfo.setUserId("12345");
		bookInfo.setUserName("Thiruppathi Madhu");
		bookInfo.setFrom("Chennai");
		bookInfo.setTo("Bangalore");
		
		sendMessageToKafkaTopic(bookInfo);
		
	    return new ApiResponse<BookInfo>( HttpStatus.OK.value() , "Booked Your Ride Successfully.", bookInfo);
	}
	
	@GetMapping(value="myOpenrides")
	public ApiResponse<BookInfo> cancelRide(){
		System.out.println("CustomerController : cancelRide");
		BookInfo bookInfo = new BookInfo();
		bookInfo.setUserId("12345");
		bookInfo.setUserName("Thiruppathi Madhu");
		bookInfo.setFrom("Chennai");
		bookInfo.setTo("Bangalore");
		
		return new ApiResponse<BookInfo>( HttpStatus.OK.value() , "Trip Cancelled Successfully.", bookInfo);
	}
	
	@GetMapping(value="trackMyRide")
	public ApiResponse<BookInfo> trackMyRide(){
		System.out.println("CustomerController : trackMyRide");
		BookInfo bookInfo = new BookInfo();
		bookInfo.setUserId("12345");
		bookInfo.setUserName("Thiruppathi Madhu");
		bookInfo.setFrom("Chennai");
		bookInfo.setTo("Bangalore");
		
		return new ApiResponse<BookInfo>( HttpStatus.OK.value() , "Track My Trip", bookInfo);
	}
	
	
	@Autowired
	private com.cognizant.online.travel.kafka.Producer producer;

	public void sendMessageToKafkaTopic(BookInfo bookInfo){
		System.out.println("Customer Controller : publish ");
		ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
		
		try {
			String json = ow.writeValueAsString(bookInfo);
			this.producer.sendMessage(json);
			
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		
		
	}
	
	

}
