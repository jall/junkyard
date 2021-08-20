CREATE TABLE listings (
  id uuid PRIMARY KEY,
  quantity INT NOT NULL
);


INSERT INTO listings (id, quantity) VALUES ('344109db-b7eb-420d-98f1-4bc6f0cf8599', 3)
ON CONFLICT id DO NOTHING;
-- INSERT 0 1

INSERT INTO listings (id, quantity) VALUES ('344109db-b7eb-420d-98f1-4bc6f0cf8599', 3)
ON CONFLICT id DO NOTHING;
-- INSERT 0 0


SELECT * FROM listings
-- ('344109db-b7eb-420d-98f1-4bc6f0cf8599', 3)