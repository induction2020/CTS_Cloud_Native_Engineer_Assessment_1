package com.cognizant.online.travel.kafka;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;


@Service
public class Consumer {
	static{
		System.out.println("Consumer Called");
	}
	private final Logger logger = LoggerFactory.getLogger(Consumer.class);
	
	@KafkaListener(topics = "thiru", groupId = "test-consumer-group")
	public void consume(String message){
		System.out.println("Consumer Customer Service: " + message);
	}
}