package com.cap.anurag;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
//@EnableDiscoveryClient
@EnableEurekaClient
public class Eurekaservice123Application {

	public static void main(String[] args) {
		SpringApplication.run(Eurekaservice123Application.class, args);
	}

}
