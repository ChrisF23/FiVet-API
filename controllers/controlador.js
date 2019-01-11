const Modelos = require('../models/index');

module.exports = {
    listar: function (req, res, Modelo) {
        console.log("-------------------------------------------------");
        console.log("[Listar]");
        console.log("-------------------------------------------------");

        if (Modelos.Paciente == Modelo) {
            Modelo.findAll(
                {
                    include: [{ all: true }],

                    order: [
                        [{ model: Modelos.RegistroMedico }, 'fecha_edicion', 'DESC']
                    ]
                }
            ).then((resultados) => {
                return res.send(resultados);
            }).catch((err) => {
                console.log("Ocurrio un error.");
                console.log(err);

                res.status = 400;
                res.send(err);
            });
        } else {
            Modelo.findAll({ include: [{ all: true }] }).then((resultados) => {
                return res.send(resultados);
            }).catch((err) => {
                console.log("Ocurrio un error.");
                console.log(err);

                res.status = 400;
                res.send(err);
            });
        }
    },

    crear: function (req, res, Modelo) {
        console.log("---------------------------------");
        console.log("[Crear]");
        console.log("--------------------------------------------");

        Modelo.findOrCreate({ where: req.body })
            .spread((modelo, created) => {
                //console.log("Peticion: " + JSON.stringify(modelo));

                if (!created) {
                    return res.send(err);
                }
                return res.send(modelo.get({ plain: true }));
            }, (err) => {
                res.status(400);
                return res.send(err);
            }).catch((err) => {
                console.log("Error: " + err.message);
                res.status(400);
                return res.send(err);
            });
    },

    actualizar: function (req, res, Modelo) {
        console.log("---------------------------------");
        console.log("[ACTUALIZAR]");
        console.log("--------------------------------------------");

        return Modelo.findAll({ where: { id: req.body.id } })
            .spread((modelo) => {
                // Check if record exists in db
                //if (modelo) {
                // el Catch se deberia encargar de eso.

                modelo.update(req.body)
                    .catch(errr => {
                        console.log("Error: " + errr.message);
                        res.status(400);
                        return res.send(errr);
                    });

                //.success(function () {res.send(modelo.get({plain: true}));})
                return res.send(modelo.get({ plain: true }));
                //}
            }, function (err) {
                res.status(400);
                return res.send(err);
            }).catch((err) => {
                console.log("Error: " + err.message);
                res.status(400);
                return res.send(err);
            });
    },

    eliminar: function (req, res, Modelo) {
        console.log("---------------------------------");
        console.log("[BORRAR]");
        console.log("--------------------------------------------");

        Modelo.destroy({
            where: {
                id: req.param('id')
            }
        }).then((result) => {
            if (Modelos.Paciente == Modelo) {
                Modelos.RegistroMedico.destroy(
                    {
                        where: {
                            id_paciente: req.param('id')
                        }
                    }
                ).then(() => {
                    res.status(200);
                    res.send("eliminado correctamente");
                    return;
                }).catch((err) => {
                    console.log("Ocurrio un error.");
                    console.log(err);
    
                    res.status = 400;
                    res.send(err);
                });
            }
        });
    },

    getById: function (req, res, Modelo) {
        console.log("---------------------------------");
        console.log("[SELECCIONAR]");
        console.log("--------------------------------------------");

        return Modelo.findById(req.params.id)
            .then((modelos) => {
                console.log(JSON.stringify(modelos));
                return res.send(modelos);
            })
            .catch((err) => {
                console.log('Ocurrio un error al obtener al modelo...', (err))
                return res.send(JSON.stringify(err));
            });
    }

}
