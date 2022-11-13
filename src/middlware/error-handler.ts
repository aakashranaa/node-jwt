export const errorHandler = (err, req, res, nest) => {
    switch(true) {
        case typeof err === 'string':
            const is404 = err.toLowerCase().endsWith('not found');
            const statusCode = is404 ? 404 : 400;
            return res.status(statusCode).json({message: err.message});
        default: 
            return res.status(500).json({message: err.message});
    }
}