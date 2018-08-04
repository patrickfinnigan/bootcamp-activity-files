DROP DATABASE IF EXISTS big_data_musicDB;

CREATE DATABASE big_data_musicDB;

USE big_data_musicDB;

CREATE TABLE songs (
	id INTEGER(5) AUTO_INCREMENT NOT NULL,
    artist VARCHAR(50) NOT NULL,
    title VARCHAR(50) NOT NULL,
    year INTEGER(4) NOT NULL,
    world_popularity_score FLOAT(5,2) NOT NULL,
    us_popularity_score FLOAT(5,2) NOT NULL,
    uk_popularity_score FLOAT(5,2) NOT NULL,
    eu_popularity_score FLOAT(5,2) NOT NULL,
    rest_popularity_score FLOAT(5,2) NOT NULL,
    PRIMARY KEY (id)
);


