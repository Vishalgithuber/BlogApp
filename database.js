const mongoose = require("mongoose");
require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {})
    .then(console.log("DB Connected Successfully"))
    .catch((err) => {
        console.error("DB Connection Error:", err);
        console.log(err);
        process.exit(1);
    });
}
module.exports = connectWithDb;