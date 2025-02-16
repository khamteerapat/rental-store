INSERT INTO public.books
(id, title, author, category, bar_code, price, avg_rating, book_cover, created_by, create_datetime, last_update_datetime, last_updated_by, number_in_stock)
VALUES
('d118e60a-d72d-427d-8b32-d8bdd15f3ffa'::uuid, 'วันพีช เล่ม 4', 'Oda Eiichiro', 'Fantasy', NULL, 45.00, 3.00, 'http://localhost:9000/rental-store/book-cover/one-piece.jpg', 'admin', '2025-02-16 16:31:02.695', NULL, NULL, 4),
('897f9ecf-a802-48fa-853b-38ae0a5f0a05'::uuid, 'บลีซ เล่ม 1', 'Kubo Taito', 'Fantasy', NULL, 45.00, 3.50, 'http://localhost:9000/rental-store/book-cover/bleach.jpg', 'admin', '2025-02-16 16:31:02.695', NULL, NULL, 2),
('33ad028f-2294-48f6-b8eb-b642721150d8'::uuid, 'เคโรโระ เล่ม 1', 'Yoshizaki Mine', 'Comedy', NULL, 45.00, 4.00, 'http://localhost:9000/rental-store/book-cover/keroro.jpg', 'admin', '2025-02-16 16:31:02.695', NULL, NULL, 2),
('dd43536e-8979-4f23-a680-a7a1385d3a5f'::uuid, 'วันพันช์แมน เล่ม 2', 'Yusuke Murata', 'Comedy', NULL, 45.00, 4.50, 'http://localhost:9000/rental-store/book-cover/one-punch-man2.jpeg', 'admin', '2025-02-16 16:31:02.695', NULL, NULL, 2),
('5607188b-5f14-456c-b2e3-7bfc71c7ca5b'::uuid, 'วันพีช เล่ม 5', 'Oda Eiichiro', 'Fantasy', NULL, 45.00, 3.50, 'http://localhost:9000/rental-store/book-cover/one-piece5.jpeg', 'admin', '2025-02-16 16:31:02.695', NULL, NULL, 4),
('034e65b6-21e2-47d9-a953-cc69b033274b'::uuid, 'บลีซ เล่ม 2', 'Kubo Taito', 'Fantasy', NULL, 45.00, 4.00, 'http://localhost:9000/rental-store/book-cover/bleach2.jpeg', 'admin', '2025-02-16 16:31:02.695', NULL, NULL, 2),
('4a4c6724-c2db-4996-b44f-dc9832e5d62c'::uuid, 'เคโรโระ เล่ม 2', 'Yoshizaki Mine', 'Comedy', NULL, 45.00, 2.00, 'http://localhost:9000/rental-store/book-cover/keroro2.jpeg', 'admin', '2025-02-16 16:31:02.695', NULL, NULL, 2),
('6b56ac78-6e29-40c7-ab6e-85e9ef3fbe35'::uuid, 'วันพันช์แมน เล่ม 3', 'Yusuke Murata', 'Comedy', NULL, 45.00, 2.50, 'http://localhost:9000/rental-store/book-cover/one-punch-man3.jpg', 'admin', '2025-02-16 16:31:02.695', NULL, NULL, 2);

INSERT INTO public.users
(id, username, "password", "role",full_name, phone_no, created_by, create_datetime, last_update_datetime, last_updated_by)
VALUES('4a027641-d609-4eae-89de-d593d55f184e'::uuid, 'admin', '$2a$10$eOVlXOw8AKkbGVcQWx4NDOPOSghXQzjamA8tUu9ef0C1QWdiKMPA6', 'ADMIN', 'Administrator','admin', 'admin', '2025-02-15 13:25:16.088', NULL, NULL);
INSERT INTO public.users
(id, username, "password", "role",full_name, phone_no, created_by, create_datetime, last_update_datetime, last_updated_by)
VALUES('9111f260-65d3-4768-b7fa-499da43302d1'::uuid, '0824125364', '$2a$10$zLtV0WXASQvzf2p7lzEiW.mrxvg/RAYGCcKJyVs4HUGGhjoMbPWsy', 'USER', 'TEERAPAT KHAMKUEN','0824125364', '0824125364', '2025-02-15 13:25:39.674', NULL, NULL);


INSERT INTO public.fine_rate_config
(id, min_day_late, max_day_late, fine_percent, created_by, create_datetime, last_update_datetime, last_updated_by)
values
(uuid_generate_v4(), 10, 20, 5, 'admin', CURRENT_TIMESTAMP, null, ''),
(uuid_generate_v4(), 21, 30, 10, 'admin', CURRENT_TIMESTAMP, null, ''),
(uuid_generate_v4(), 31, null, 15, 'admin', CURRENT_TIMESTAMP, null, '')
;

INSERT INTO public.rentals_trn
(id, book_id, user_id, rent_timestamp, due_date, return_date, fine, created_by, create_datetime, last_update_datetime, last_updated_by, status)
VALUES('e87c8efa-8c15-4b70-b528-833567e5bc02'::uuid, 'd118e60a-d72d-427d-8b32-d8bdd15f3ffa'::uuid, '9111f260-65d3-4768-b7fa-499da43302d1'::uuid, '2025-02-16 23:23:34.699', '2025-02-23', NULL, NULL, '0824125364', '2025-02-16 23:23:34.716', NULL, NULL, 'RENTED');
INSERT INTO public.rentals_trn
(id, book_id, user_id, rent_timestamp, due_date, return_date, fine, created_by, create_datetime, last_update_datetime, last_updated_by, status)
VALUES('3ef35ef1-b4ff-48fc-957e-1f99a07f5be0'::uuid, '897f9ecf-a802-48fa-853b-38ae0a5f0a05'::uuid, '9111f260-65d3-4768-b7fa-499da43302d1'::uuid, '2025-02-16 23:23:34.699', '2025-02-23', NULL, NULL, '0824125364', '2025-02-16 23:23:34.716', NULL, NULL, 'RENTED');
INSERT INTO public.rentals_trn
(id, book_id, user_id, rent_timestamp, due_date, return_date, fine, created_by, create_datetime, last_update_datetime, last_updated_by, status)
VALUES('c8a5ab81-65b1-4dfa-9497-7cf2abff213e'::uuid, 'd118e60a-d72d-427d-8b32-d8bdd15f3ffa'::uuid, '9111f260-65d3-4768-b7fa-499da43302d1'::uuid, '2025-01-08 23:23:34.699', '2025-01-18', NULL, NULL, '0824125364', '2025-02-16 23:23:34.716', NULL, NULL, 'RENTED');
INSERT INTO public.rentals_trn
(id, book_id, user_id, rent_timestamp, due_date, return_date, fine, created_by, create_datetime, last_update_datetime, last_updated_by, status)
VALUES('182a193a-0820-4b4d-ba4f-4fbb31bc1038'::uuid, '897f9ecf-a802-48fa-853b-38ae0a5f0a05'::uuid, '9111f260-65d3-4768-b7fa-499da43302d1'::uuid, '2025-01-21 23:23:34.699', '2025-01-31', NULL, NULL, '0824125364', '2025-02-16 23:23:34.716', NULL, NULL, 'RENTED');
INSERT INTO public.rentals_trn
(id, book_id, user_id, rent_timestamp, due_date, return_date, fine, created_by, create_datetime, last_update_datetime, last_updated_by, status)
VALUES('2cbb8833-2459-4c98-8143-7e3299ec81fb'::uuid, '034e65b6-21e2-47d9-a953-cc69b033274b'::uuid, '9111f260-65d3-4768-b7fa-499da43302d1'::uuid, '2024-12-28 23:23:34.699', '2025-01-08', NULL, NULL, '0824125364', '2025-02-16 23:23:34.716', NULL, NULL, 'RENTED');
INSERT INTO public.rentals_trn
(id, book_id, user_id, rent_timestamp, due_date, return_date, fine, created_by, create_datetime, last_update_datetime, last_updated_by, status)
VALUES('18506268-852a-4863-8ad3-555e9cf10c0b'::uuid, '034e65b6-21e2-47d9-a953-cc69b033274b'::uuid, '9111f260-65d3-4768-b7fa-499da43302d1'::uuid, '2025-02-16 23:27:02.794', '2025-02-23', NULL, NULL, '0824125364', '2025-02-16 23:27:02.808', NULL, NULL, 'RENTED');
INSERT INTO public.rentals_trn
(id, book_id, user_id, rent_timestamp, due_date, return_date, fine, created_by, create_datetime, last_update_datetime, last_updated_by, status)
VALUES('2825e9d8-1dc6-4e04-b28f-e7d536c86149'::uuid, '6b56ac78-6e29-40c7-ab6e-85e9ef3fbe35'::uuid, '9111f260-65d3-4768-b7fa-499da43302d1'::uuid, '2025-02-16 23:27:02.794', '2025-02-23', '2025-02-16 23:27:54.450', 0.00, '0824125364', '2025-02-16 23:27:02.808', '2025-02-16 23:27:54.459', '0824125364', 'RETURNED');
INSERT INTO public.rentals_trn
(id, book_id, user_id, rent_timestamp, due_date, return_date, fine, created_by, create_datetime, last_update_datetime, last_updated_by, status)
VALUES('ac0b922a-e38a-43b8-ad73-b7c431d645e7'::uuid, '6b56ac78-6e29-40c7-ab6e-85e9ef3fbe35'::uuid, '9111f260-65d3-4768-b7fa-499da43302d1'::uuid, '2024-12-28 23:23:34.699', '2025-01-08', '2025-02-16 23:27:54.450', 0.00, '0824125364', '2025-02-16 23:27:02.808', '2025-02-16 23:27:54.460', '0824125364', 'RETURNED');
INSERT INTO public.rentals_trn
(id, book_id, user_id, rent_timestamp, due_date, return_date, fine, created_by, create_datetime, last_update_datetime, last_updated_by, status)
VALUES('30690ca2-8914-401f-9089-6cde323ba33f'::uuid, 'dd43536e-8979-4f23-a680-a7a1385d3a5f'::uuid, '9111f260-65d3-4768-b7fa-499da43302d1'::uuid, '2025-01-21 23:23:34.699', '2025-01-31', '2025-02-16 23:27:54.450', 2.25, '0824125364', '2025-02-16 23:27:02.808', '2025-02-16 23:27:54.460', '0824125364', 'RETURNED');
INSERT INTO public.rentals_trn
(id, book_id, user_id, rent_timestamp, due_date, return_date, fine, created_by, create_datetime, last_update_datetime, last_updated_by, status)
VALUES('383d50ce-aebd-4dfa-9a7f-5ea6f754f4b6'::uuid, '5607188b-5f14-456c-b2e3-7bfc71c7ca5b'::uuid, '9111f260-65d3-4768-b7fa-499da43302d1'::uuid, '2025-02-16 23:27:02.794', '2025-02-23', '2025-02-16 23:27:54.450', 0.00, '0824125364', '2025-02-16 23:27:02.808', '2025-02-16 23:27:54.461', '0824125364', 'RETURNED');
INSERT INTO public.rentals_trn
(id, book_id, user_id, rent_timestamp, due_date, return_date, fine, created_by, create_datetime, last_update_datetime, last_updated_by, status)
VALUES('466d39ad-c494-408e-8e95-6ed2f03c76ba'::uuid, '33ad028f-2294-48f6-b8eb-b642721150d8'::uuid, '9111f260-65d3-4768-b7fa-499da43302d1'::uuid, '2025-02-16 23:23:34.699', '2025-02-23', '2025-02-16 23:27:54.450', 0.00, '0824125364', '2025-02-16 23:23:34.716', '2025-02-16 23:27:54.461', '0824125364', 'RETURNED');