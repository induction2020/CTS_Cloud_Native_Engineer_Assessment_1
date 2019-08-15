package com.cognizant.online.travel.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class ApiResponse<T> {
	private int status;
    private String message;
    private Object result;
}
