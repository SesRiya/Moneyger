const mongoose = require("mongoose");


const dbConnect = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL,
            {
            useUnifiedTopology: true,
            useNewURLParser: true,
        });
        console.log(`DB connected Successfully`);
    }catch (error) {
        console.log(`Error ${error.message}`);
    }
};

module.exports = dbConnect;



//ShiCaf3sEZQywdmW marley
//mongodb+srv://marley:<password>@expenses-tracker.2wrul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority