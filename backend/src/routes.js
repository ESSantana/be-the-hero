const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require(`./controllers/IncidentController`);
const ProfileController = require(`./controllers/ProfileController`);
const SessionController = require(`./controllers/SessionController`);

const routes = express.Router();

routes.post('/sessions', SessionController.create);

//#region Ongs
routes.get('/ongs', OngController.getAllOngs);
routes.post('/ongs', OngController.create);
//#endregion 

//#region Incidents
routes.get('/incidents', IncidentController.getAllIncidents);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.deleteIncident);
//#endregion 

//#region Profile
routes.get('/profile/incidents', ProfileController.index);
//#endregion 

module.exports = routes;