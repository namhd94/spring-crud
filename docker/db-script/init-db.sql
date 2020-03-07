CREATE TABLE public.users (
	user_id serial NOT NULL,
	username varchar(50) NOT NULL,
	password varchar(50) NOT NULL,
	phone varchar(50) NULL,
	email varchar(255) NOT NULL,
	created_on timestamp NOT NULL,
	last_login timestamp NULL,
	CONSTRAINT users_email_key UNIQUE (email),
	CONSTRAINT users_pkey PRIMARY KEY (user_id),
	CONSTRAINT users_username_key UNIQUE (username)
);

INSERT INTO public.users
(username, password, phone, email, created_on, last_login)
VALUES('namhd94', 'admin', '123456789', 'nam@gmail.com', '2019-12-16 20:32:20', '2019-12-16 20:32:20');