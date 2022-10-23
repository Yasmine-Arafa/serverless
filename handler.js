'use strict';

module.exports.hello = async(event) => {

    const data = JSON.parse(event.body);

    return {
        statusCode: 200,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            Result: data.x + data.y
        })
    };
};