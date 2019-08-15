package com.cognizant.online.travel.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class TripInfo {

	private String userId;
	private String userName;
	private String empId;
	private String empName;
	private String from;
	private String to;
	private String date;
	private String noOfSeats;
	private String amount;
		
}
