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
 * @author <a href="mailto:developer@hitachiconsulting.com">Nam</a>
 */
@Service
public class UserServiceImpl implements UserService {

  /** The user repository. */
  @Autowired
  private UserRepository userRepository;

  /**
   * {@inheritDoc}
   * 
   * @see crudwebapp.webapp.service.UserService#getAllUsers()
   */
  @Override
  public List<UserEntity> getAllUsers() {
    return userRepository.findAll();
  }

  /**
   * {@inheritDoc}
   * 
   * @see crudwebapp.webapp.service.UserService#saveUser(crudwebapp.webapp.entity.UserEntity)
   */
  @Override
  public void saveUser(UserEntity user) {
    Date date = new Date(System.currentTimeMillis());
    user.setCreatedOn(date);
    user.setLastLogin(date);
    userRepository.save(user);
  }

  /**
   * {@inheritDoc}
   * 
   * @see crudwebapp.webapp.service.UserService#deleteUser(java.lang.Long)
   */
  @Override
  public void deleteUser(Long id) {
    userRepository.deleteById(id);
  }

  /**
   * {@inheritDoc}
   * 
   * @see crudwebapp.webapp.service.UserService#findUserById(java.lang.Long)
   */
  @Override
  public Optional<UserEntity> findUserById(Long id) {
    return userRepository.findById(id);
  }
}
