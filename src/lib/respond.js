const Response = () => {
    return {
        status: null,
        statusCode: null,
        processedAt: new Date().toISOString(),
        message: null,
        data: [],
        errors: []
    }
};

exports.created = (res, data) => {
    const response = Response();
    response.status = true;
    response.statusCode = 201;
    response.message = 'Created';
    response.data = data;
    return res.status(201).json(response);
};

exports.updated = (res) => {
    const response = Response();
    response.status = true;
    response.statusCode = 200;
    response.message = 'Updated';
    return res.status(200).json(response);
};

exports.success = (res, data) => {
    const response = Response();
    response.status = true;
    response.statusCode = 200;
    response.message = 'Success';
    response.data = data;
    return res.status(200).json(response);
};

exports.deleted = (res) => {
    const response = Response();
    response.status = true;
    response.statusCode = 200;
    response.message = 'Deleted';
    return res.status(200).json(response);
};