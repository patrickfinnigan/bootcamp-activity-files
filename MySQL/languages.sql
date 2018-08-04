CREATE DATABASE programming_db;

USE programming_db;

CREATE TABLE programming_languages (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
    languages VARCHAR(20) NOT NULL,
    rating INTEGER(2) NOT NULL, 
    mastered BOOLEAN DEFAULT true,
    PRIMARY KEY (id)
);

DELETE FROM programming_languages;

SELECT * FROM programming_languages;

INSERT INTO programming_languages (languages, rating, mastered)
VALUES ("JavaScript", 5, false), ("Node.js", 8, false), ("HTML", 10);
