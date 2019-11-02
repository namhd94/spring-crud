/*
 * (C) Copyright Global CyberSoft (GCS) 2019. All rights reserved. Proprietary and confidential.
 */
package crudwebapp.webapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import crudwebapp.webapp.entity.UserEntity;
import crudwebapp.webapp.service.UserService;

/**
 * @author <a href="mailto:developer@hitachiconsulting.com">Nam</a>
 *
 */
@RestController
public class UserController {
  
  @Autowired
  private UserService userService;
  
  @GetMapping("/")
  public List<UserEntity> index() {
    List<UserEntity> user = userService.getAllUsers();
    
    return user;
  }
}
