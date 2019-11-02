/*
 * (C) Copyright Global CyberSoft (GCS) 2019. All rights reserved. Proprietary and confidential.
 */
package crudwebapp.webapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import crudwebapp.webapp.entity.UserEntity;

/**
 * @author <a href="mailto:developer@hitachiconsulting.com">Nam</a>
 *
 */
@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long>{

}
