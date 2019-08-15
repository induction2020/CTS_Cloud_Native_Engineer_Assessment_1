package com.cognizant.online.travel.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class BookInfo {
	
	private String userId;
	private String userName;
	private String from;
	private String to;
	private String date;
	private String noOfSeats;
	
}
