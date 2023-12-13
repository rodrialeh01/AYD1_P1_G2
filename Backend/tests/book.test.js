import app from "../src/app.js";
import request from "supertest";

let idUser;
let idBook;
let idComment;

//Crear Usuario para que compre, alquile y comente

describe("Test the singup path", () => {
    test("It should response with a 200 status code", async () => {
        const response = await request(app).post("/auth/sign/up").send(
            {
                "name": "Johny",
                "lastName": "Test",
                "phone": "123456789",
                "email": "testAllen@gmail.com",
                "birthDay": "2021-01-01",
                "password": "123456"
            }
        );
        expect(response.statusCode).toBe(200);
    });


});

describe("Test the singin path", () => {


    test("It should response with a message User logged in successfully", async () => {
        const response = await request(app).post("/auth/sign/in").send(
            {
                "email": "testAllen@gmail.com",
                "password": "123456",
            }
        );
        idUser = response.body.data._id;
        expect(response.body.message).toBe("User logged in successfully");
    });
});


// Testear crear libro

describe("Test the create book path", () => {
    test("It should response with a 200 status code", async () => {
        const response = await request(app).post("/book/create").send(
            {
                "title": "Book Test",
                "synopsis": "Test",
                "purchasePrice": 100,
                "rentalPrice": 10,
                "author": "Test",
                "editorial": "Test",
                "yearDate": 2021
            }
        );
        expect(response.statusCode).toBe(200);
    });
});


// Gets Books y guarda el id del libro creado

describe("Test the get books path", () => {
    test("It should response with a 200 status code", async () => {
        const response = await request(app).get("/book/getBooks");
        idBook = response.body.data[response.body.data.length - 1]._id;
        expect(response.statusCode).toBe(200);
    });
});

// Get Book by Id

describe("Test the get book by id path", () => {
    test("It should response with a 200 status code", async () => {
        const response = await request(app).get(`/book/${idBook}`);
        expect(response.statusCode).toBe(200);
    });

    test("It should response with a message Book not found", async () => {
        const response = await request(app).get(`/book/65797c9ec3abf902e4653d3f`);
        expect(response.body.message).toBe("Book not found");
    });
});

// updateBookByID

describe("Test the update book by id path", () => {
    test("It should response with a 200 status code", async () => {
        const response = await request(app).patch(`/book/update/${idBook}`).send(
            {
                "title": "Libro Test",
                "synopsis": "Test",
                "purchasePrice": 1000,
                "rentalPrice": 100,
                "author": "Libro Test",
                "editorial": "Test",
                "yearDate": 2019
            }
        );
        expect(response.statusCode).toBe(200);
    });

    test("It should response with a message Book not registered", async () => {
        const response = await request(app).patch(`/book/update/65797c9ec3abf902e4653d3f`).send(
            {
                "title": "Libro Test",
                "synopsis": "Test",
                "purchasePrice": 1000,
                "rentalPrice": 100,
                "author": "Libro Test",
                "editorial": "Test",
                "yearDate": 2019
            }
        );
        expect(response.body.message).toBe("Book not registered");
    });
});

// Rent Book

describe("Test the rent book path", () => {
    test("It should response with a message Book not registered", async () => {
        const response = await request(app).post("/book/rentBook").send(
            {
                "idUser": idUser,
                "idBook": "65797c9ec3abf902e4653d3f",
                "returnDate": "2021-01-01"
            }
        );
        expect(response.body.message).toBe("Book not registered");
    });

    test("It should response with a message User not registered", async () => {
        const response = await request(app).post("/book/rentBook").send(
            {
                "idUser": "65797c9ec3abf902e4653d3f",
                "idBook": idBook,
                "returnDate": "2021-01-01"
            }
        );
        expect(response.body.message).toBe("User not registered");
    });

    test("It should response with a message Book rented successfully", async () => {
        const response = await request(app).post("/book/rentBook").send(
            {
                "idUser": idUser,
                "idBook": idBook,
                "returnDate": "2021-01-01"
            }
        );
        expect(response.body.message).toBe("Book rented successfully");
    });

    test("It should response with a message Book not available", async () => {
        const response = await request(app).post("/book/rentBook").send(
            {
                "idUser": idUser,
                "idBook": idBook,
                "returnDate": "2021-01-01"
            }
        );
        expect(response.body.message).toBe("Book not available");
    }
    );
});

// Return Book

describe("Test the return book path", () => {
    test("It should response with a message Book not registered", async () => {
        const response = await request(app).post("/book/returnBook").send(
            {
                "idUser": idUser,
                "idBook": "65797c9ec3abf902e4653d3f",
            }
        );
        expect(response.body.message).toBe("Book not registered");
    });

    test("It should response with a message User not registered", async () => {
        const response = await request(app).post("/book/returnBook").send(
            {
                "idUser": "65797c9ec3abf902e4653d3f",
                "idBook": idBook,
            }
        );
        expect(response.body.message).toBe("User not registered");
    });

    test("It should response with a message Book returned successfully", async () => {
        const response = await request(app).post("/book/returnBook").send(
            {
                "idUser": idUser,
                "idBook": idBook,
            }
        );
        expect(response.body.message).toBe("Book returned successfully");
    });

    test("It should response with a message Book not rented", async () => {
        const response = await request(app).post("/book/returnBook").send(
            {
                "idUser": idUser,
                "idBook": idBook,
            }
        );
        expect(response.body.message).toBe("Book not rented");
    });

});


// Comentar libro

describe("Test the comment book path", () => {
    test("It should response with a message User not found", async () => {
        const response = await request(app).post("/comment/create").send(
            {
                "comment": "Test",
                "idUser": "65797c9ec3abf902e4653d3f",
                "idBook": idBook
            }
        );
        expect(response.body.message).toBe("User not found");
    });

    test("It should response with a message Book not found", async () => {
        const response = await request(app).post("/comment/create").send(
            {
                "comment": "Test",
                "idUser": idUser,
                "idBook": "65797c9ec3abf902e4653d3f"
            }
        );
        expect(response.body.message).toBe("Book not found");
    });

    test("It should response with a message Comment created successfully", async () => {
        const response = await request(app).post("/comment/create").send(
            {
                "comment": "Test",
                "idUser": idUser,
                "idBook": idBook
            }
        );
        expect(response.body.message).toBe("Comment created successfully");
    });
});

// Get Comments by Book Id

describe("Test the get comments by book id path", () => {
    test("It should response with a message Comments retrieved successfully", async () => {
        const response = await request(app).get(`/comment/${idBook}`);
        expect(response.body.message).toBe("Comments retrieved successfully");
        idComment = response.body.data[response.body.data.length - 1]._id;
    });

    test("It should response with a message Comments not found", async () => {
        const response = await request(app).get(`/comment/65797c9ec3abf902e4653d3f`);
        expect(response.body.message).toBe("Comments not found");
    });
});

// Delete Comment

describe("Test the delete comment path", () => {
    test("It should response with a message Comment not found", async () => {
        const response = await request(app).delete(`/comment/delete/65797c9ec3abf902e4653d3f`);
        expect(response.body.message).toBe("Comment not found");
    });

    test("It should response with a message Comment deleted successfully", async () => {
        const response = await request(app).delete(`/comment/delete/${idComment}`);
        expect(response.body.message).toBe("Comment deleted successfully");
    });
});

// buyBook

describe("Test the buy book path", () => {
    test("It should response with a message Book not registered", async () => {
        const response = await request(app).post("/book/buyBook").send(
            {
                "idUser": idUser,
                "idBook": "65797c9ec3abf902e4653d3f",
            }
        );
        expect(response.body.message).toBe("Book not registered");
    });

    test("It should response with a message User not registered", async () => {
        const response = await request(app).post("/book/buyBook").send(
            {
                "idUser": "65797c9ec3abf902e4653d3f",
                "idBook": idBook,
            }
        );
        expect(response.body.message).toBe("User not registered");
    });

    test("It should response with a message Book purchased successfully", async () => {
        const response = await request(app).post("/book/buyBook").send(
            {
                "idUser": idUser,
                "idBook": idBook,
            }
        );
        expect(response.body.message).toBe("Book purchased successfully");
    });

    test("It should response with a message Book not available", async () => {
        const response = await request(app).post("/book/buyBook").send(
            {
                "idUser": idUser,
                "idBook": idBook,
            }
        );
        expect(response.body.message).toBe("Book not available");
    }
    );
});

// Delete Book

describe("Test the delete book path", () => {
    test("It should response with a message Book not registered", async () => {
        const response = await request(app).delete(`/book/delete/65797c9ec3abf902e4653d3f`);
        expect(response.body.message).toBe("Book not registered");
    });

    test("It should response with a message Book deleted successfully", async () => {
        const response = await request(app).delete(`/book/delete/${idBook}`);
        expect(response.body.message).toBe("Book deleted successfully");
    });
});

// Delete User

describe("Test the delete user path", () => {
    test("It should response with a message User not registered", async () => {
        const response = await request(app).delete(`/user/delete/65797c9ec3abf902e4653d3f`);
        expect(response.body.message).toBe("User not registered");
    });

    test("It should response with a message User deleted successfully", async () => {
        const response = await request(app).delete(`/user/delete/${idUser}`);
        expect(response.body.message).toBe("User deleted successfully");
    });
});

