import {isHttpError} from "http-errors";

export const errorHandler = (err,req,res,next) => {
    console.error(err);
    let ErrorMessage = "An error occurred";
    let statusCode = 500;
    if(isHttpError(err)){
        ErrorMessage = err.message;
        statusCode = err.status;
    }
    res.status(statusCode).json({ErrorMessage});
}