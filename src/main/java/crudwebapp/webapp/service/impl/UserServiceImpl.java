/*
 * (C) Copyright Global CyberSoft (GCS) 2019. All rights reserved. Proprietary and confidential.
 */
package crudwebapp.webapp.service.impl;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import crudwebapp.webapp.entity.UserEntity;
import crudwebapp.webapp.repository.UserRepository;
import crudwebapp.webapp.service.UserService;

/**
 * The Class UserServiceImpl.
 *
 * @author <a href="mailto:developer@hitachiconsulting.com">Nam</a>
 */
@Service
public class UserServiceImpl implements UserService {

	/** The user repository. */
	@Autowired
	private UserRepository userRepository;

	/**
	 * Gets the all users.
	 *
	 * @return the all users
	 */
	@Override
	public List<UserEntity> getAllUsers() {
		return userRepository.findAll();
	}

	/**
	 * Save user.
	 *
	 * @param user the user
	 * @return the long
	 */
	@Override
	public Long saveUser(UserEntity user) {
		Date date = new Date(System.currentTimeMillis());
		user.setCreatedOn(date);
		user.setLastLogin(date);
		userRepository.save(user);
		return user.getId();
	}

	/**
	 * Delete user.
	 *
	 * @param id the id
	 */
	@Override
	public void deleteUser(Long id) {
		userRepository.deleteById(id);
	}

	/**
	 * Find user by id.
	 *
	 * @param id the id
	 * @return the optional
	 */
	@Override
	public Optional<UserEntity> findUserById(Long id) {
		return userRepository.findById(id);
	}
}
