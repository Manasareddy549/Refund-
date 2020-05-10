package com.cap.anurag;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;

import de.codecentric.boot.admin.server.config.EnableAdminServer;

@SpringBootApplication

@EnableAdminServer 
public class SpringBootAdminSprint2Application {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootAdminSprint2Application.class, args);
	}

}
