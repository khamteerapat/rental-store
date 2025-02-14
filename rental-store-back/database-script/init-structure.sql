CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE users (
    id UUID PRIMARY key default uuid_generate_v4(),
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    role VARCHAR NOT NULL,
    phone_no VARCHAR(20) NOT NULL,
    created_by varchar,
    create_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update_datetime TIMESTAMP,
    last_updated_by varchar,
    CONSTRAINT user_uq_key UNIQUE (username),
    CONSTRAINT phone_no_uq_key UNIQUE (phone_no)
);

CREATE TABLE books (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR NOT NULL,
    author VARCHAR NOT NULL,
    categoey varchar not null,
    bar_code varchar,
    price DECIMAL(10,2) NOT NULL,
    avg_rating DECIMAL(3,2) DEFAULT 0.0,
    book_cover varchar,
    created_by varchar,
    create_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update_datetime TIMESTAMP,
    last_updated_by varchar,
    number_in_stock INTEGER NOT NULL
);

CREATE TABLE rentals_trn (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    book_id UUID NOT NULL,
    user_id UUID NOT NULL,
    rent_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    due_date TIMESTAMP NOT NULL,
    return_date TIMESTAMP,
    fine DECIMAL(10,2) DEFAULT 0.0,
    created_by varchar,
    create_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update_datetime TIMESTAMP,
    last_updated_by varchar,
    status VARCHAR CHECK (status IN ('RENTED', 'RETURNED')) NOT NULL,
    CONSTRAINT fk_rentals_book FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE,
    CONSTRAINT fk_rentals_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE fine_rate_config (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    min_day_late INTEGER NOT NULL,
    max_day_late INTEGER NOT NULL,
    fine_percent DECIMAL(5,2) NOT NULL,
    reated_by varchar,
    create_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update_datetime TIMESTAMP,
    last_updated_by varchar,
    CHECK (min_day_late <= max_day_late)
);

CREATE TABLE rating_books (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    book_id UUID NOT NULL,
    user_id UUID NOT NULL,
    rating decimal(10,2) default 0.0,
    reated_by varchar,
    create_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update_datetime TIMESTAMP,
    last_updated_by varchar,
    CONSTRAINT fk_rating_book FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE,
    CONSTRAINT fk_rating_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);