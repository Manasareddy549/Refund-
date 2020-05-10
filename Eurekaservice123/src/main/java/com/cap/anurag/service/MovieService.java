package com.cap.anurag.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cap.anurag.dao.AccountDao;
import com.cap.anurag.entity.Account;
@Service
@Transactional
public class MovieService implements MovieServiceInterface  {

	@Autowired
	private AccountDao validation;
	
	// Validation of an account  
	@Override
	public Account validate(String uname, String pass) {
		return validation.validate(uname, pass);
	}

	}