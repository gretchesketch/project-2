CREATE TABLE Users (
 id INT NOT NULL AUTO_INCREMENT,
 first_name VARCHAR NOT NULL DEFAULT,
 middle_name VARCHAR DEFAULT NULL,
 last_name VARCHAR NOT NULL DEFAULT,
 email VARCHAR DEFAULT NULL,
 password VARCHAR DEFAULT NULL,
 PRIMARY KEY (id)
);

CREATE TABLE Threads (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT unsigned DEFAULT NULL,
  title VARCHAR DEFAULT NULL,
  body mediumtext,
  PRIMARY KEY (id),
  KEY user_id (user_id),
  CONSTRAINT threads_ibfk_1 FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Replies (
  id INT) NOT NULL AUTO_INCREMENT,
  user_id INT unsigned DEFAULT NULL,
  thread_id INT unsigned DEFAULT NULL,
  body mediumtext,
  PRIMARY KEY (id),
  KEY user_id (user_id),
  KEY thread_id (thread_id),
  CONSTRAINT replies_ibfk_1 FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT replies_ibfk_2 FOREIGN KEY (`thread_id`) REFERENCES `Threads` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);