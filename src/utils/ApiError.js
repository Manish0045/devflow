class ApiError extends Error{
    constructor(statusCode=500,message="Something went wrong!"){
        super(this.message);
        this.success=statusCode<400;
        this.statusCode=statusCode;
        this.message=message;
    }
}

module.exports={
    ApiError
}