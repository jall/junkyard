CREATE TABLE listings (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  quantity INT NOT NULL
);


INSERT INTO listings (quantity) VALUES (3);
-- INSERT 0 1

INSERT INTO listings (quantity) VALUES (3);
-- INSERT 0 1


SELECT * FROM listings;
-- ('5e022cfc-9595-41e7-a766-ec2a15eb2d30', 3)
-- ('75e29aae-49ff-4036-838d-d6af5f92543b', 3)