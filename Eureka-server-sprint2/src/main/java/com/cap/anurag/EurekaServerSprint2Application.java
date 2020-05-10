package com.cap.anurag;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class EurekaServerSprint2Application {

	public static void main(String[] args) {
		SpringApplication.run(EurekaServerSprint2Application.class, args);
	}

}
