package com.example.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.domain.user.service.UserService;
import com.example.form.UserDetailForm;

@RestController
@RequestMapping("/user")
public class UserRestController {

	@Autowired
	private UserService userService;

	/** ユーザーを更新 */
	@PutMapping("/update")
	public int updateUser(UserDetailForm form) {

		userService.updateUserOne(form.getUserId(), form.getPassword(), form.getUserName());
		return 0;
	}

	@DeleteMapping("/delete")
	public int deleteUser(UserDetailForm form) {
		userService.deleteUserOne(form.getUserId());
		return 0;
	}
}
