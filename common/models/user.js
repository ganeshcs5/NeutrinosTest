module.exports = function (User) {
    User.login = function (object, cb) {
        var whereClause = {
            where: {
                email: object.email,
                password: object.password
            }
        }
        let res = {};
        User.find(whereClause, function (err, data) {
            if (err) {
                cb(null, "There is some error in fetching the data from User")
            } else if (data.length == 0) {

                res.successful = false;
                res.message = "There is no data for this email and password";
                cb(null, res)

            } else {

                res.successful = true;
                res.message = "present";
                res.userId = data[0].id;
                cb(null, res)

            }


        });

    };
    User.remoteMethod(
        'login', {
            http: {
                path: '/login',
                verb: 'post'
            },
            accepts: {
                arg: 'object', type: 'object',
                http: { source: 'body' }
            },
            returns: {
                arg: 'status',
                type: 'string'
            }, description: 'login user'
        }
    );

};

