/*
 * (C) Copyright Global CyberSoft (GCS) 2019. All rights reserved. Proprietary and confidential.
 */
package crudwebapp.webapp.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import crudwebapp.webapp.entity.UserEntity;
import crudwebapp.webapp.service.UserService;

/**
 * @author <a href="mailto:developer@hitachiconsulting.com">Nam</a>
 *
 */
@RestController
@RequestMapping("/rest/user")
public class UserController {
  
  @Autowired
  private UserService userService;
  
  @GetMapping
  public List<UserEntity> findAll() {
    return userService.getAllUsers();
  }
  
  @PostMapping
  public void createUser(@Valid @RequestBody UserEntity user) {
	  userService.saveUser(user);
  }
  
  @GetMapping("/{id}")
  public Optional<UserEntity> readUser(@PathVariable Long id) {
	  return userService.findUserById(id);
  }
  
  @PutMapping("/{id}")
  public void updateUser(@PathVariable Long id, @Valid @RequestBody UserEntity updatedUser) {
	  Optional<UserEntity> user = userService.findUserById(id);
	  if (user.isPresent()) {
		  userService.saveUser(updatedUser);
	  }
  }
  
  @DeleteMapping("/{id}")
  public void deleteUser(@PathVariable Long id) {
	  userService.deleteUser(id);
  }
}
