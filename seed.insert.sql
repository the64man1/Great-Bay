USE greatbay;

INSERT into users (username, password)
VALUES ("Max", "Max");

INSERT into items (name, description)
VALUES ("Holy grail", "Holy grail");

INSERT into bids (userId, itemid, bid)
VALUES ((select id from users where username like 'Max'), (select id from items where name like 'Holy grail'), 100);