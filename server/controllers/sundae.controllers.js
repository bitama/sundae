const Sundae = require('../models/sundae.models');

module.exports.findAllSundaes = (req, res) => {
    Sundae.find()
        .then(allSundaes => res.json({ sundaes: allSundaes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findSundae=(req, res) => {
    Sundae.findOne({ _id: req.params.id })
        .then(Sundae => res.json({ sundae: Sundae }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createSundae = (req, res) => {
    Sundae.create(req.body)
        .then(newSundae => res.json({ sundae: newSundae }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateSundae = (req, res) => {
    Sundae.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedSundae => res.json({ sundae: updatedSundae }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteSundae = (req, res) => {
    Sundae.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
