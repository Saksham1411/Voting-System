const express = require('express');
const { addCandidate, getCandidates,
    updateCandidate, deleteCandidate, addVote, result } = require('../controller/candidate');

const router = express.Router();



router.route('/candidate').post(addCandidate).get(getCandidates).patch(updateCandidate).delete(deleteCandidate);
router.patch('/vote', addVote);
router.get('/result', result);
module.exports = router;