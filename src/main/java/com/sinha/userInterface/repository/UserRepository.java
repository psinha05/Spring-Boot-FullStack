package com.sinha.userInterface.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sinha.userInterface.model.Users;


@Repository
public interface UserRepository extends JpaRepository<Users, Long> {

}
