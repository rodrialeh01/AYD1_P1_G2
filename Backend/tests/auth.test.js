import app from "../src/app.js";
import request from "supertest";

let idUser;

describe("Test the singup path", () => {
    test("It should response with a 200 status code", async () => {
        const response = await request(app).post("/auth/sign/up").send(
            {
                "name": "test",
                "lastName": "test",
                "phone": "123456789",
                "email": "test@gmail.com",
                "birthDay": "2021-01-01",
                "password": "123456"
            }
        );
        expect(response.statusCode).toBe(200);
    });

    test("It should response with a message User already registered", async () => {
        const response = await request(app).post("/auth/sign/up").send(
            {
                "name": "test",
                "lastName": "test",
                "phone": "123456789",
                "email": "test@gmail.com",
                "birthDay": "2021-01-01",
                "password": "123456"
            }
        );
        expect(response.body.message).toBe("User already registered");
    });

});

describe("Test the singin path", () => {
    test("It should response with a message User not registered", async () => {
        const response = await request(app).post("/auth/sign/in").send(
            {
                "email": "tester@gmail.com",
                "password": "123456",
            }
        ); 
        expect(response.body.message).toBe("User not registered");
    });

    test("It should response with a message Invalid password", async () => {
        const response = await request(app).post("/auth/sign/in").send(
            {
                "email": "test@gmail.com",
                "password": "123456asdf",
            }
        ); 
        expect(response.body.message).toBe("Invalid password");
    });

    test("It should response with a message User logged in successfully", async () => {
        const response = await request(app).post("/auth/sign/in").send(
            {
                "email": "test@gmail.com",
                "password": "123456",
            }
        );
        idUser = response.body.data._id;
        expect(response.body.message).toBe("User logged in successfully");
    });
});


describe("Test the CRUD user", () => {
    test("UPDATE It should response with a message User updated successfully", async () => {

        const response = await request(app).patch(`/user/update/${idUser}`).send(
            {
                "name": "test1",
                "lastName": "test1",
                "phone": "123456789",
                "email": "test1@gmail.com",
                "birthDay": "2022-01-01",
                "password": "1234567"
            }
        );
        expect(response.body.message).toBe("User updated successfully");
    });

    test("GET it should response with a data of the user", async () => {
        const response = await request(app).get(`/user/${idUser}`).send();
        expect(response.body.data).toBeDefined();
    });

    test("DELETE it should response with a message User deleted successfully", async () => {
        const response = await request(app).delete(`/user/delete/${idUser}`).send();
        expect(response.body.message).toBe("User deleted successfully");
    });

});