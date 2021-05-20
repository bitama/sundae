const SundaeControllers = require('../controllers/sundae.controllers');
 
module.exports = app => {
    app.get('/api/sundaes', SundaeControllers.findAllSundaes);
    app.get('/api/sundaes/:id/find', SundaeControllers.findSundae);
    app.put('/api/sundaes/:id/update', SundaeControllers.updateSundae);
    app.post('/api/sundaes/create', SundaeControllers.createSundae);
    app.delete('/api/sundaes/:id/delete', SundaeControllers.deleteSundae);
}
