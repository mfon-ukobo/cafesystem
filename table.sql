create table User (
    Id int NOT NULL,
    Name VARCHAR(256),
    ContactNumber VARCHAR(20),
    Email VARCHAR(50) UNIQUE,
    Password VARCHAR(250),
    Status VARCHAR(20),
    Role VARCHAR(20),
    PRIMARY KEY (Id)
)

INSERT INTO User (
    Name,
    ContactNumber,
    Email,
    Password,
    Status,
    Role
) VALUES (
    'Admin',
    '09032627957',
    'admin@gmail.com',
    'admin',
    'true',
    'admin'
)