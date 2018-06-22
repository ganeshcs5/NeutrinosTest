module.exports = function (Cart) {

    Cart.getDataForUser = function(email,cb) {
      console.log(email);
      if(email){
        var whereChause = {
          include:{relation:"product"},
          where:{
            email:email
          }
        };
        console.log(whereChause)
        Cart.find(whereChause,function(err,data){
         cb(null,data);
         })
      }else{
        cb(null,"please send the email")
      }
      
        
      };

      Cart.postDataForUser = function(object,cb) {
      let whereChause = {
        where:{
          email:object.userId,
          productName:object.product.name
        }
      }
        Cart.find(whereChause,function(err,data){
          if(data.length > 0){
            let objUpdate = data[0];
            objUpdate.quantity++;
            Cart.upsert(objUpdate, function(err,updatedValues){
              console.log(updatedValues)
              cb(null,updatedValues);
            })
          }else{
            let objectSave = {};
            objectSave.productName = object.product.name;
            objectSave.quantity = 1;
            objectSave.email = object.userId;
            Cart.create(objectSave,function(err,createdData){
              console.log(createdData)
              cb(null,createdData);
            })
          }
         // cb(null,data)
         })
          
        };
      Cart.remoteMethod(
        'getDataForUser', {
          http: {
            path: '/getDataForUser',
            verb: 'get'
          },
          accepts: {arg: 'email', type: 'string', http: { source: 'query' } },
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
          accepts: {arg: 'object', type: 'object' ,
          http: { source: 'body' }},
          returns: {
            arg: 'getDataForUser',
            type: 'string'
          }
        }
      );
  
};
