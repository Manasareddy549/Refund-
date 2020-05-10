package com.cap.anurag.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.cap.anurag.entity.Account;

import com.cap.anurag.service.MovieServiceInterface;

@RestController
@CrossOrigin("http://localhost:4200")
public class MovieController {
	@Autowired
	private MovieServiceInterface movieservice;
	//Login Details
	@GetMapping("/validation/{username}/{password}")
	public ResponseEntity<Account> validate(@PathVariable("username") String uname, @PathVariable("password") String pwd){
		Account auth = movieservice.validate(uname, pwd);
		ResponseEntity<Account> response = new ResponseEntity<Account>(auth,HttpStatus.OK);
		return response;
	}
	
}