CREATE TABLE listings (
  id uuid PRIMARY KEY,
  quantity INT NOT NULL
);


INSERT INTO listings (id, quantity) VALUES ('0cdaf6da-f80c-4bb4-8dd6-e0c27ff2e258', 3);
-- INSERT 0 1

INSERT INTO listings (id, quantity) VALUES ('0cdaf6da-f80c-4bb4-8dd6-e0c27ff2e258', 3);
-- [Err] ERROR:  duplicate key value violates unique constraint "id_pkey"


SELECT * FROM listings;
-- ('0cdaf6da-f80c-4bb4-8dd6-e0c27ff2e258', 3)