INSERT INTO public.books
(id, title, author, categoey, bar_code, price, avg_rating, book_cover, created_by, create_timestamp,last_updated_by, last_update_timestamp, number_in_stock)
values
(uuid_generate_v4(), 'วันพีช เล่ม 4', 'Oda Eiichiro', 'Fantasy', null, 45.0, 0.0, 'http://localhost:9000/rental-store/book-cover/one-piece.jpg','admin', CURRENT_TIMESTAMP,null,null, 4),
(uuid_generate_v4(), 'บลีซ เล่ม 1', 'Kubo Taito', 'Fantasy', null, 45.0, 0.0, 'http://localhost:9000/rental-store/book-cover/bleach.jpg','admin', CURRENT_TIMESTAMP,null,null, 2),
(uuid_generate_v4(), 'เคโรโระ เล่ม 1', 'Yoshizaki Mine', 'Comedy', null, 45.0, 0.0, 'http://localhost:9000/rental-store/book-cover/keroro.jpg','admin', CURRENT_TIMESTAMP,null,null, 2),
(uuid_generate_v4(), 'วันพันช์แมน เล่ม 2', 'Yusuke Murata', 'Comedy', null, 45.0, 0.0, 'http://localhost:9000/rental-store/book-cover/one-punch-man.jpg','admin', CURRENT_TIMESTAMP,null,null, 2),

;