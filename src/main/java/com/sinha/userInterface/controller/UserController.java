package com.sinha.userInterface.controller;



import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.sinha.userInterface.exception.ErrorDetails;
import com.sinha.userInterface.exception.ResourceNotFoundException;
import com.sinha.userInterface.model.Users;
import com.sinha.userInterface.repository.*;

import java.net.URI;
import java.util.*;

import org.springframework.web.servlet.support.ServletUriComponentsBuilder;



@RestController
@CrossOrigin(origins = "http://localhost:4200") 
//@RequestMapping(value="/api")  
public class UserController {
	
	public static final Logger logger = LoggerFactory.getLogger(UserController.class);
	
	//private static final Logger logger = Logger.getLogger(UserController.class);
	
	@Autowired
	private UserRepository userRepository;
	
	private List<Users> usr;
	
	
	// retrieve user here
	@GetMapping("/users")
	public List<Users> getAllUsers() {
		return userRepository.findAll();
	}
	
	
	// create user
		@PostMapping("/create")
	    public Users createUser(@RequestBody Users user) {
	        //Users user = new Users(firstName, lastName, email);
	        System.out.println("##################Get Details#####################");
	       return userRepository.saveAndFlush(user);
	        }


		
		// for delete the user
		
		/*@DeleteMapping(path = { "/{id}" })
		public Users delete(@PathVariable("id") int id) {
			Users deletedUser = null;
			for (Users usr : user) {
				if (usr.getEmpId().equals(id)) {
					user.remove(emp);
					deletedEmp = emp;
					break;
				}
			}
			return deletedUser;
		}*/
	/*// create user
	@PostMapping("/create")
    public Users createUser(String firstName, String lastName, String email) {
        Users user = new Users(firstName, lastName, email);
        System.out.println("##################Get Details#####################");
       return userRepository.saveAndFlush(user);
        }
	*/
	
		
	@GetMapping(path = "/ttt")
	public String getData() {
		return "UserController Page";
	}
	


}


