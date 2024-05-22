const express = require('express');
const { addCandidate, getAllCandidates,
    updateCandidate, deleteCandidate, addVote,reset } = require('../controller/candidate');

const router = express.Router();

router.route('/candidate').post(addCandidate).get(getAllCandidates).patch(updateCandidate);
router.delete('/candidate/:id',deleteCandidate);
router.patch('/vote', addVote);
router.post('/resetVotes',reset);

module.exports = router;