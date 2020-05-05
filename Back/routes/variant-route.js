module.exports = function (server, database) {

    const varModule = require('../modules/variant-module');		//дополнительные функции для работы с вариантами
    const exerciseModule = require('../modules/exercise-module');


    server.get("/:subject/variant.getCount/", (req, res) => {		//получение количества готовых вариантов по предмету
        const parameter = "variants." + req.params.subject;
        const collection = database.collection(parameter.toString());
        collection.countDocuments({}, (err, count) => {
            if (err) {
                throw err;
            }
            res.json({'count': count});
        });
    });

    server.get("/:subject/variant.getReady/:id", (req, res) => { //получение готового варианта полностью

        let subject = String(req.params.subject);
        let varId = req.params.id;
        const varCollection = database.collection("variants." + subject);
        const exercisesCollection = database.collection("exercises." + subject);
        varCollection.findOne({"_id": varId}, (err, variant) => {
            if (err) {
                throw err;
            }
            if (variant) {
                varModule.getVariant(variant, exercisesCollection).then(
                    resolve => {
                        res.status(200).json(resolve);
                    },
                    error => {
                        console.log(error)
                    }
                )
            } else {
                res.status(404).send("variant not exist");
            }
        });

    });

    server.post("/:subject/variant.check", async (req, res)=>{
      console.log(req.body);
      let subject = String(req.params.subject);
      const exercisesCollection = database.collection("exercises." + subject);
      const subjectsData = database.collection("subjects.data");
      await varModule.checkVariant(req.body, exercisesCollection, subjectsData, subject).then(
        resolve => {
          res.json(resolve);
        },
        error =>{
          console.log(error);
        }
      );

    });

};
