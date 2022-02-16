
Utilizando Mongo Shell, crear una base de datos llamada ecommerce que contenga dos colecciones: mensajes y productos.



use productos
switched to db productos





Definir las claves de los documentos en relación a los campos de las tablas de esa base. En el caso de los productos, poner valores al campo precio entre los 100 y 5000 pesos(eligiendo valores intermedios, ej: 120, 580, 900, 1280, 1700, 2300, 2860, 3350, 4320, 4990). 


db.productos.insertOne({_id:11, nombre:"borratinta",codigo:"0011",precio:2900,stock:211})
{ "acknowledged" : true, "insertedId" : 6 }

... y asì otros 10 productos

db.productos.find()

{ "_id" : 7, "nombre" : "agujereadora", "codigo" : "007", "precio" : 1700, "stock" : 100 }
{ "_id" : 8, "nombre" : "calculadora", "codigo" : "008", "precio" : 1740, "stock" : 100 }
{ "_id" : 9, "nombre" : "ganchos", "codigo" : "009", "precio" : 2655, "stock" : 100 }
{ "_id" : 10, "nombre" : "soportes", "codigo" : "010", "precio" : 3344, "stock" : 100 }
{ "_id" : 11, "nombre" : "borratinta", "codigo" : "0011", "precio" : 2900, "stock" : 100 }
{ "_id" : 12, "nombre" : "indeleble", "codigo" : "0012", "precio" : 5000, "stock" : 0 }
{ "_id" : 1, "nombre" : "regla", "codigo" : "001", "precio" : 100, "stock" : 200 }
{ "_id" : 2, "nombre" : "compas", "codigo" : "002", "precio" : 120, "stock" : 200 }
{ "_id" : 3, "nombre" : "tiza", "codigo" : "003", "precio" : 130, "stock" : 200 }
{ "_id" : 4, "nombre" : "hoja", "codigo" : "004", "precio" : 140, "stock" : 200 }
{ "_id" : 5, "nombre" : "mouse", "codigo" : "005", "precio" : 160, "stock" : 200 }
{ "_id" : 6, "nombre" : "lapicera", "codigo" : "006", "precio" : 170, "stock" : 200 }

> use mensajes
switched to db mensajes
> db.mensajes.insertOne({user1:["mensaje1"]})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("619e69eb4a169a7f5bf74231")
}
> db.mensajes.insertOne({user2:["mensaje1"]})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("619e6a034a169a7f5bf74232")
}
> db.mensajes.find()
{ "_id" : ObjectId("619e69eb4a169a7f5bf74231"), "user1" : [ "mensaje1" ] }
{ "_id" : ObjectId("619e6a034a169a7f5bf74232"), "user2" : [ "mensaje1" ] }

Listar los productos con precio menor a 1000 pesos.

db.productos.find({"precio":{$lte:1000}})
{ "_id" : 1, "nombre" : "regla", "codigo" : "001", "precio" : 100, "stock" : 200 }
{ "_id" : 2, "nombre" : "compas", "codigo" : "002", "precio" : 120, "stock" : 200 }
{ "_id" : 3, "nombre" : "tiza", "codigo" : "003", "precio" : 130, "stock" : 200 }
{ "_id" : 4, "nombre" : "hoja", "codigo" : "004", "precio" : 140, "stock" : 200 }
{ "_id" : 5, "nombre" : "mouse", "codigo" : "005", "precio" : 160, "stock" : 200 }
{ "_id" : 6, "nombre" : "lapicera", "codigo" : "006", "precio" : 170, "stock" : 200 }

Listar los productos con precio entre los 1000 a 3000 pesos.

> db.productos.find ({$and:[{"precio":{$gte:1000}},{"precio":{$lte:3000}}]})
{ "_id" : 7, "nombre" : "agujereadora", "codigo" : "007", "precio" : 1700, "stock" : 100 }
{ "_id" : 8, "nombre" : "calculadora", "codigo" : "008", "precio" : 1740, "stock" : 100 }
{ "_id" : 9, "nombre" : "ganchos", "codigo" : "009", "precio" : 2655, "stock" : 100 }
{ "_id" : 11, "nombre" : "borratinta", "codigo" : "0011", "precio" : 2900, "stock" : 100 }

Listar los productos con precio mayor a 3000 pesos.
> db.productos.find({"precio":{$gte:3000}})
{ "_id" : 10, "nombre" : "soportes", "codigo" : "010", "precio" : 3344, "stock" : 100 }
{ "_id" : 12, "nombre" : "indeleble", "codigo" : "0012", "precio" : 5000, "stock" : 0 }


Realizar una consulta que traiga sólo el nombre del tercer producto más barato.
db.productos.find ({},{nombre:1,_id:0}).sort({precio:1}).limit(3)
{ "nombre" : "regla" }
{ "nombre" : "compas" }
{ "nombre" : "tiza" }

Hacer una actualización sobre todos los productos, agregando el campo stock a todos ellos con un valor de 100
db.productos.updateMany({},{$set:{"stock":100}})
{ "acknowledged" : true, "matchedCount" : 12, "modifiedCount" : 7 }
> db.productos.find ()
{ "_id" : 7, "nombre" : "agujereadora", "codigo" : "007", "precio" : 1700, "stock" : 100 }
{ "_id" : 8, "nombre" : "calculadora", "codigo" : "008", "precio" : 1740, "stock" : 100 }
{ "_id" : 9, "nombre" : "ganchos", "codigo" : "009", "precio" : 2655, "stock" : 100 }
{ "_id" : 10, "nombre" : "soportes", "codigo" : "010", "precio" : 3344, "stock" : 100 }
{ "_id" : 11, "nombre" : "borratinta", "codigo" : "0011", "precio" : 2900, "stock" : 100 }
{ "_id" : 12, "nombre" : "indeleble", "codigo" : "0012", "precio" : 5000, "stock" : 100 }
{ "_id" : 1, "nombre" : "regla", "codigo" : "001", "precio" : 100, "stock" : 100 }
{ "_id" : 2, "nombre" : "compas", "codigo" : "002", "precio" : 120, "stock" : 100 }
{ "_id" : 3, "nombre" : "tiza", "codigo" : "003", "precio" : 130, "stock" : 100 }
{ "_id" : 4, "nombre" : "hoja", "codigo" : "004", "precio" : 140, "stock" : 100 }
{ "_id" : 5, "nombre" : "mouse", "codigo" : "005", "precio" : 160, "stock" : 100 }
{ "_id" : 6, "nombre" : "lapicera", "codigo" : "006", "precio" : 170, "stock" : 100 }


Cambiar el stock a cero de los productos con precios mayores a 4000 pesos.
db.productos.updateMany({"precio":{$gte:4000}},{$set:{"stock":0}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.productos.find ()
{ "_id" : 7, "nombre" : "agujereadora", "codigo" : "007", "precio" : 1700, "stock" : 100 }
{ "_id" : 8, "nombre" : "calculadora", "codigo" : "008", "precio" : 1740, "stock" : 100 }
{ "_id" : 9, "nombre" : "ganchos", "codigo" : "009", "precio" : 2655, "stock" : 100 }
{ "_id" : 10, "nombre" : "soportes", "codigo" : "010", "precio" : 3344, "stock" : 100 }
{ "_id" : 11, "nombre" : "borratinta", "codigo" : "0011", "precio" : 2900, "stock" : 100 }
{ "_id" : 12, "nombre" : "indeleble", "codigo" : "0012", "precio" : 5000, "stock" : 0 }
{ "_id" : 1, "nombre" : "regla", "codigo" : "001", "precio" : 100, "stock" : 100 }
{ "_id" : 2, "nombre" : "compas", "codigo" : "002", "precio" : 120, "stock" : 100 }
{ "_id" : 3, "nombre" : "tiza", "codigo" : "003", "precio" : 130, "stock" : 100 }
{ "_id" : 4, "nombre" : "hoja", "codigo" : "004", "precio" : 140, "stock" : 100 }
{ "_id" : 5, "nombre" : "mouse", "codigo" : "005", "precio" : 160, "stock" : 100 }
{ "_id" : 6, "nombre" : "lapicera", "codigo" : "006", "precio" : 170, "stock" : 100 }




Borrar los productos con precio menor a 1000 pesos 
db.productos.remove({"precio":{$lte:1000}})
WriteResult({ "nRemoved" : 6 })
> db.productos.find ()
{ "_id" : 7, "nombre" : "agujereadora", "codigo" : "007", "precio" : 1700, "stock" : 100 }
{ "_id" : 8, "nombre" : "calculadora", "codigo" : "008", "precio" : 1740, "stock" : 100 }
{ "_id" : 9, "nombre" : "ganchos", "codigo" : "009", "precio" : 2655, "stock" : 100 }
{ "_id" : 10, "nombre" : "soportes", "codigo" : "010", "precio" : 3344, "stock" : 100 }
{ "_id" : 11, "nombre" : "borratinta", "codigo" : "0011", "precio" : 2900, "stock" : 100 }
{ "_id" : 12, "nombre" : "indeleble", "codigo" : "0012", "precio" : 5000, "stock" : 0 }

Crear un usuario 'pepe' clave: 'asd456' que sólo pueda leer la base de datos ecommerce. Verificar que pepe no pueda cambiar la información.


en el servidor
mongod


en el cliente
use admin 
switched to db admin
db.createUser(
    {
      user: "pepe",
      pwd: "asd456",
      roles: [
         { role: "read", db: "ecommerce" }
      ]
    }
  )
  Successfully added user: {
    "user" : "pepe",
    "roles" : [
            {
                    "role" : "read",
                    "db" : "ecommerce"
            }
    ]
}

en el servidor
mongod --auth


en el cliente, me logueo sin usuario para ver como anda
franchuf@francho:/home$ mongo
MongoDB shell version v5.0.4
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("3eb91bcd-70a4-4899-ae11-2d3e6876457e") }
MongoDB server version: 5.0.4
================
Warning: the "mongo" shell has been superseded by "mongosh",
which delivers improved usability and compatibility.The "mongo" shell has been deprecated and will be removed in
an upcoming release.
For installation instructions, see
https://docs.mongodb.com/mongodb-shell/install/
================
> showdbs
uncaught exception: ReferenceError: showdbs is not defined :
@(shell):1:1
> show dbs
> use ecommerce
switched to db ecommerce
> show collections
Warning: unable to run listCollections, attempting to approximate collection names by parsing connectionStatus
> ^C
bye




me logueo con el usuario creado

franchuf@francho:/home$ mongo -u pepe -p asd456
MongoDB shell version v5.0.4
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("9fed7367-0019-44ad-97ea-51b1789162fc") }
MongoDB server version: 5.0.4
================
Warning: the "mongo" shell has been superseded by "mongosh",
which delivers improved usability and compatibility.The "mongo" shell has been deprecated and will be removed in
an upcoming release.
For installation instructions, see
https://docs.mongodb.com/mongodb-shell/install/
================
> show dbs
ecommerce  0.000GB
> use ecommerce
switched to db ecommerce
> show collections
productos
> db.productos.find()
{ "_id" : 7, "nombre" : "agujereadora", "codigo" : "007", "precio" : 1700, "stock" : 100 }
{ "_id" : 8, "nombre" : "calculadora", "codigo" : "008", "precio" : 1740, "stock" : 100 }
{ "_id" : 9, "nombre" : "ganchos", "codigo" : "009", "precio" : 2655, "stock" : 100 }
{ "_id" : 10, "nombre" : "soportes", "codigo" : "010", "precio" : 3344, "stock" : 100 }
{ "_id" : 11, "nombre" : "borratinta", "codigo" : "0011", "precio" : 2900, "stock" : 100 }
{ "_id" : 12, "nombre" : "indeleble", "codigo" : "0012", "precio" : 5000, "stock" : 0 }
> db.productos.insertOne({articuloPrueba : "me va a dar error pq no tengo permisos"})
uncaught exception: WriteCommandError({
        "ok" : 0,
        "errmsg" : "not authorized on ecommerce to execute command { insert: \"productos\", ordered: true, lsid: { id: UUID(\"9fed7367-0019-44ad-97ea-51b1789162fc\") }, $db: \"ecommerce\" }",
        "code" : 13,
        "codeName" : "Unauthorized"
}) :
WriteCommandError({
        "ok" : 0,
        "errmsg" : "not authorized on ecommerce to execute command { insert: \"productos\", ordered: true, lsid: { id: UUID(\"9fed7367-0019-44ad-97ea-51b1789162fc\") }, $db: \"ecommerce\" }",
        "code" : 13,
        "codeName" : "Unauthorized"
})
WriteCommandError@src/mongo/shell/bulk_api.js:421:48
executeBatch@src/mongo/shell/bulk_api.js:936:23
Bulk/this.execute@src/mongo/shell/bulk_api.js:1182:21
DBCollection.prototype.insertOne@src/mongo/shell/crud_api.js:264:9
@(shell):1:1
> db.productos.find()
{ "_id" : 7, "nombre" : "agujereadora", "codigo" : "007", "precio" : 1700, "stock" : 100 }
{ "_id" : 8, "nombre" : "calculadora", "codigo" : "008", "precio" : 1740, "stock" : 100 }
{ "_id" : 9, "nombre" : "ganchos", "codigo" : "009", "precio" : 2655, "stock" : 100 }
{ "_id" : 10, "nombre" : "soportes", "codigo" : "010", "precio" : 3344, "stock" : 100 }
{ "_id" : 11, "nombre" : "borratinta", "codigo" : "0011", "precio" : 2900, "stock" : 100 }
{ "_id" : 12, "nombre" : "indeleble", "codigo" : "0012", "precio" : 5000, "stock" : 0 }