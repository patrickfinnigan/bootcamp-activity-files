SELECT * FROM bsongsig_data_musicdb.songs;

USE big_data_musicDB;

SELECT * from songs WHERE artist LIKE '%Elton John%';

DESCRIBE songs;

SELECT COUNT(*), artist from songs group by artist HAVING COUNT(artist) > 1 ORDER BY COUNT(artist) DESC;

SELECT * from songs WHERE year > 1995 and year <= 2005 ORDER BY year ASC;

SELECT * from songs WHERE title = 'Missing';

SELECT * FROM songs WHERE artist = 'Cher';