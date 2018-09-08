const request = require("supertest");
const { equal } = require("assert");
const { app } = require("../src/index");

describe.only("Test GET /cong/:a/:b", () => {
    //nếu là test bất đồng bộ thì phải thêm vào tham số done
    it("Can add 2 numbers", async() => {
        const response = await request(app).get("/cong/4/5");
        const { success, result } = response.body;
        equal(success, true);
        equal(result, 9);
    });

    it("Cannot add 2 strings", async() => {
        const response = await request(app).get("/cong/x/y");
        const { success, result, message } = response.body;
        equal(success, false);
        equal(result, undefined);
        equal(message, "Type Error");
    });
})