module.exports = function (Cart) {

  Cart.getDataForUser = function (email, cb) {
    if (email) {
      var whereChause = {
        include: { relation: "product" },
        where: {
          email: email
        }
      };
      Cart.find(whereChause, function (err, data) {
        if (err) {
          cb(null, "There is a error in finding the data ");
        } else {
          cb(null, data);
        }

      })
    } else {
      cb(null, "please send the email");
    }


  };

  Cart.postDataForUser = function (object, cb) {
    let whereChause = {
      where: {
        email: object.userId,
        productName: object.product.name
      }
    }
    Cart.find(whereChause, function (err, data) {
      if (err) {
        cb(null, "There is error in getting the data from cart");
      } else if (data.length > 0) {
        let objUpdate = data[0];
        objUpdate.quantity++;
        Cart.upsert(objUpdate, function (errUpdate, updatedValues) {
          if (errUpdate) {
            cb(null, "There is error in updating the data cart");
          } else {
            cb(null, updatedValues);
          }
        })
      } else {
        let objectSave = {};
        objectSave.productName = object.product.name;
        objectSave.quantity = 1;
        objectSave.email = object.userId;
        Cart.create(objectSave, function (errCreate, createdData) {
          if (errCreate) {
            cb(null, "There is error in creating the data cart");
          } else {
            cb(null, createdData);
          }

        })
      }
    })

  };
  Cart.remoteMethod(
    'getDataForUser', {
      http: {
        path: '/getDataForUser',
        verb: 'get'
      },
      accepts: { arg: 'email', type: 'string', http: { source: 'query' } },
      returns: {
        arg: 'getDataForUser',
        type: 'string'
      }
    }
  );
  Cart.remoteMethod(
    'postDataForUser', {
      http: {
        path: '/postDataForUser',
        verb: 'post'
      },
      accepts: {
        arg: 'object', type: 'object',
        http: { source: 'body' }
      },
      returns: {
        arg: 'getDataForUser',
        type: 'string'
      }
    }
  );

};
