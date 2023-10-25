-- Active: 1698187822671@@127.0.0.1@3306

CREATE TABLE videos (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    title TEXT NOT NULL,
    duration INTEGER NOT NULL,
    upload_date TEXT DEFAULT (DATETIME()) NOT NULL
);


/* CREATE TABLE accounts (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    owner_id TEXT NOT NULL,
    balance REAL DEFAULT (0) NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL,
    FOREIGN KEY (owner_id) REFERENCES users (id)
	ON UPDATE CASCADE
	ON DELETE CASCADE
); */

INSERT INTO videos (id, title, duration)
VALUES
	('v001', 'Fulano', 1500),
	('v002', 'Beltrana', 2000);

SELECT * FROM videos;

/* INSERT INTO accounts (id, owner_id)
VALUES
	('a001', 'u001'),
	('a002', 'u002');
 */