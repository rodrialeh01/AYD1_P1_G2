import app from "../src/app.js";
import request from "supertest";

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
        expect(response.body.message).toBe("User logged in successfully");
    });
});
