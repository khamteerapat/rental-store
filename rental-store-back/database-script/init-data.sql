INSERT INTO public.books
(id, title, author, category, bar_code, price, avg_rating, book_cover, created_by, create_datetime ,last_updated_by, last_update_datetime , number_in_stock)
values
(uuid_generate_v4(), 'วันพีช เล่ม 4', 'Oda Eiichiro', 'Fantasy', null, 45.0, 0.0, 'http://localhost:9000/rental-store/book-cover/one-piece.jpg','admin', CURRENT_TIMESTAMP,null,null, 4),
(uuid_generate_v4(), 'บลีซ เล่ม 1', 'Kubo Taito', 'Fantasy', null, 45.0, 0.0, 'http://localhost:9000/rental-store/book-cover/bleach.jpg','admin', CURRENT_TIMESTAMP,null,null, 2),
(uuid_generate_v4(), 'เคโรโระ เล่ม 1', 'Yoshizaki Mine', 'Comedy', null, 45.0, 0.0, 'http://localhost:9000/rental-store/book-cover/keroro.jpg','admin', CURRENT_TIMESTAMP,null,null, 2),
(uuid_generate_v4(), 'วันพันช์แมน เล่ม 2', 'Yusuke Murata', 'Comedy', null, 45.0, 0.0, 'http://localhost:9000/rental-store/book-cover/one-punch-man.jpg','admin', CURRENT_TIMESTAMP,null,null, 2),
(uuid_generate_v4(), 'วันพีช เล่ม 5', 'Oda Eiichiro', 'Fantasy', null, 45.0, 0.0, 'http://localhost:9000/rental-store/book-cover/one-piece.jpg','admin', CURRENT_TIMESTAMP,null,null, 4),
(uuid_generate_v4(), 'บลีซ เล่ม 2', 'Kubo Taito', 'Fantasy', null, 45.0, 0.0, 'http://localhost:9000/rental-store/book-cover/bleach.jpg','admin', CURRENT_TIMESTAMP,null,null, 2),
(uuid_generate_v4(), 'เคโรโระ เล่ม 2', 'Yoshizaki Mine', 'Comedy', null, 45.0, 0.0, 'http://localhost:9000/rental-store/book-cover/keroro.jpg','admin', CURRENT_TIMESTAMP,null,null, 2),
(uuid_generate_v4(), 'วันพันช์แมน เล่ม 3', 'Yusuke Murata', 'Comedy', null, 45.0, 0.0, 'http://localhost:9000/rental-store/book-cover/one-punch-man.jpg','admin', CURRENT_TIMESTAMP,null,null, 2)
;

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