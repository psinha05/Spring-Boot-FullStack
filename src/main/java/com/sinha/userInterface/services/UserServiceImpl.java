package com.sinha.userInterface.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sinha.userInterface.repository.UserRepository;

import java.util.List;

@Service
public class UserServiceImpl {
	
	 @Autowired
	    private UserRepository repository;

		
	
}
