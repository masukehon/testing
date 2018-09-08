const express = require("express");
const app = express();

app.get("/cong/:a/:b", (req, res) => {
    const { a, b } = req.params;
    if (isNaN(a) || isNaN(b)) return res.send({ success: false, message: "Type Error" });
    res.send({ success: true, result: +a + +b });
});

app.listen(3000, () => console.log("Server started !!"));

module.exports = { app };