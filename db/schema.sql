DROP DATABASE IF EXISTS burgers_db ;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
  id int AUTO_INCREMENT NOT NULL,
  burger_name varchar(50) NOT NULL,
  rest_name varchar(50) NOT NULL,
  description varchar(255),
  devoured boolean DEFAULT false,
  rating tinyint DEFAULT 0,
  date timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);
