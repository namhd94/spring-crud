/*
 * (C) Copyright Global CyberSoft (GCS) 2019. All rights reserved. Proprietary and confidential.
 */
package crudwebapp.webapp.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import crudwebapp.webapp.entity.UserEntity;
import crudwebapp.webapp.service.UserService;

/**
 * The Class UserController.
 *
 * @author <a href="mailto:developer@hitachiconsulting.com">Nam</a>
 */
/**
 * @author namhd94
 *
 */
@RestController
@RequestMapping("/rest/user")
public class UserController {

	/** The user service. */
	@Autowired
	private UserService userService;

	/**
	 * Find all.
	 *
	 * @return the list
	 */
	@GetMapping
	public List<UserEntity> findAll() {
		return userService.getAllUsers();
	}

	/**
	 * Creates the user.
	 *
	 * @param user the user
	 * @return the long
	 */
	@PostMapping
	public Long createUser(@Valid @RequestBody UserEntity user) {
		return userService.saveUser(user);
	}

	/**
	 * Read user.
	 *
	 * @param userId the user id
	 * @return the optional
	 */
	@GetMapping("/{id}")
	public Optional<UserEntity> readUser(@PathVariable(value = "id") Long userId) {
		Optional<UserEntity> user = userService.findUserById(userId);
		if (!user.isPresent()) {
			throw new ResponseStatusException(
					  HttpStatus.NOT_FOUND, "entity not found"
					);
		}
		return user;
	}

	/**
	 * Update user.
	 *
	 * @param updatedUser the updated user
	 */
	@PutMapping("/{id}")
	public void updateUser(@Valid @RequestBody UserEntity updatedUser) {
		Optional<UserEntity> user = userService.findUserById(updatedUser.getId());
		if (user.isPresent()) {
			userService.saveUser(updatedUser);
		}
	}

	/**
	 * Delete user.
	 *
	 * @param id the id
	 */
	@DeleteMapping("/{id}")
	public void deleteUser(@PathVariable Long id) {
		userService.deleteUser(id);
	}
}
