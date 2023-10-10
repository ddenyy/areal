CREATE TABLE articles(
                       id SERIAL PRIMARY KEY,
                       name VARCHAR,
                       text VARCHAR,
                       date_create TIMESTAMP,
                       date_modification TIMESTAMP,
);

CREATE TABLE comments(
                     id SERIAL PRIMARY KEY,
                     text VARCHAR,
                     articles_id INTEGER,
                     date_create TIMESTAMP,
                     date_modification TIMESTAMP,
                     FOREIGN KEY (articles_id) REFERENCES person (id)
);
