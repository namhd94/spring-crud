/*
 * (C) Copyright Global CyberSoft (GCS) 2019. All rights reserved. Proprietary and confidential.
 */
package crudwebapp.webapp.service;

import java.util.List;
import java.util.Optional;

import crudwebapp.webapp.entity.UserEntity;

/**
 * @author <a href="mailto:developer@hitachiconsulting.com">Nam</a>
 */
public interface UserService {

  /**
   * Gets the all users.
   *
   * @return the all users
   */
  List<UserEntity> getAllUsers();

  /**
   * Save user.
   *
   * @param user
   *          the user
   */
  void saveUser(UserEntity user);

  /**
   * Delete user.
   *
   * @param id
   *          the id
   */
  void deleteUser(Long id);

  /**
   * Find user by id.
   *
   * @param id
   *          the id
   * @return the optional
   */
  Optional<UserEntity> findUserById(Long id);
}
