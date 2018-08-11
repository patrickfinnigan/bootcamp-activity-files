DROP DATABASE IF EXISTS big_data_musicDB;

CREATE DATABASE big_data_musicDB;

USE big_data_musicDB;

CREATE TABLE songs (
	id INTEGER(5) AUTO_INCREMENT NOT NULL,
    artist VARCHAR(100) NULL,
    title VARCHAR(100) NULL,
    year INTEGER(4) NULL,
    world_popularity_score FLOAT(10,4) NULL,
    us_popularity_score FLOAT(10,4) NULL,
    uk_popularity_score FLOAT(10,4) NULL,
    eu_popularity_score FLOAT(10,4) NULL,
    rest_popularity_score FLOAT(10,4) NULL,
    PRIMARY KEY (id)
);


CREATE TABLE albums (
    id INTEGER(5) AUTO_INCREMENT NOT NULL,
    artist VARCHAR(100) NULL,
    album VARCHAR(100) NULL,
    year INTEGER(4) NULL,
    world_popularity_score DECIMAL(10,4) NULL,
    us_popularity_score DECIMAL(10,4) NULL,
    uk_popularity_score DECIMAL(10,4) NULL,
    eu_popularity_score DECIMAL(10,4) NULL,
    rest_popularity_score DECIMAL(10,4) NULL,
    PRIMARY KEY (id)
);