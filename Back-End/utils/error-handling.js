notFoundError = (req, res, next) => {
    res.send({
        statusCode: 404,
        message: "NotFound page"
    })
}

errorHandler = (err, req, res, next) => {
    const status = err?.status ?? err?.statusCode ?? 500;
    res.status(status).send({
        statusCode: status,
        message: err?.message || "InternalServerError"
    })
}

module.exports = {
    notFoundError,
    errorHandler
}