function add(a, b) {
    if (isNaN(a) || isNaN(b))
        throw new Error("Type error");
    return a + b;
}

function addCallBack(a, b, cb) {
    setTimeout(() => {
        if (isNaN(a) || isNaN(b)) return cb(new Error("Type error"));
        cb(null, a + b);

    }, 1000);
}

function addPromise(a, b) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(a) || isNaN(b)) return reject(new Error("Type error"));
            resolve(a + b);

        }, 1000);
    });

}
module.exports = { add, addCallBack, addPromise };