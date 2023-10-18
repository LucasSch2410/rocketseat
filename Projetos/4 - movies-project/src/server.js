import express from "express";
import routes from "./routes/index.js";
import AppError from "./utils/AppError.js";
import migrationsRun from "./database/sqlite/migrations/index.js";

const app = express();

app.use(express.json());

app.use(routes);

migrationsRun();

// Error handling
app.use( (error, request, response, next) => {
    console.log(error);
    
    // Handle Errors
    if (error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "Error",
            message: error.message
        });
    }

    return response.status(500).json({
        status: "Error",
        message: "Internal Server Error",
    });
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));


