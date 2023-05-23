const constants = require('../constants')
const errorhandle = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ title:'Validation found',message: err.message, strackTrace: err.stack });
            break;
        case constants.NOT_FOUND:
            res.json({ title:'Not found',message: err.message, strackTrace: err.stack });
            break;
        case constants.UNAUTHORIZED:
            res.json({ title:'Unauthorized',message: err.message, strackTrace: err.stack });
            break;
        case constants.FORBIDDEN:
            res.json({ title:'Forbidden',message: err.message, strackTrace: err.stack });
            break;
        case constants.SERVER_ERROR:
            res.json({ title:'SERVER Error',message: err.message, strackTrace: err.stack });
            break;
        default:
            console.log('Not error, All good!');
            break;
    }
};

module.exports = errorhandle;