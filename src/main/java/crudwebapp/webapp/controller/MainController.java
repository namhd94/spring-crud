package crudwebapp.webapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller

public class MainController {

	/** The Constant INDEX_PAGE. */
	private static final String INDEX_PAGE = "forward:/index.html";

	/**
	 * Index.
	 * @return the string
	 */
	@RequestMapping(value = {
		"/",
		"/dashboard",
		"/user"
	}, method = RequestMethod.GET)
	public String index() {
		return INDEX_PAGE;
	}
}