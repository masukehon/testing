const { add, addCallBack, addPromise } = require("../src/lib");
const { equal } = require("assert");

describe("Test function add", () => {
    it("Can add 2 numbers", () => {
        const total = add(4, 5);
        equal(total, 9);
    });

    it("Cannot add 2 strings", () => {
        try {
            const total = add("x", "y");
            throw new Error("Loi 1");
        } catch (error) {
            equal(error.message, "Type error");
        }

    });
})

describe("Test function addCallBack", () => {
    //nếu là test bất đồng bộ thì phải thêm vào tham số done
    it("Can add 2 numbers with callback", (done) => {

        addCallBack(4, 5, (error, result) => {
            equal(error, null);
            equal(result, 9);
            done();
        });
    });

    it("Cannot add 2 strings with callback", (done) => {
        addCallBack("x", "y", (error, result) => {
            equal(result, undefined);
            equal(error.message, "Type error");
            done();

            // error = null;
            // if (!error) //null = false
            //     console.log("null = false");
            // result = undefined;
            // if (!result) //undefined = false
            //     console.log("undefined = false");


        });

    });

    // if (!result)
    //     if (result !== undefined)

})

describe("Test function addPromise", () => {
    //nếu là test bất đồng bộ thì phải thêm vào tham số done
    it("Can add 2 numbers with promise", (done) => {
        addPromise(4, 5)
            .then(result => equal(result, 9))
            .then(() => done());
    });

    it("Cannot add 2 strings with promise", (done) => {
        addPromise("x", "y")
            .then(() => { throw new Error("Loi"); })
            .catch(error => equal(error.message, "Type error"))
            .then(() => done());

    });

})