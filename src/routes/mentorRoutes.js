const express = require('express');
const router = express.Router();

const {createOrUpdateMentorProfile,getMentorProfile,getAllMentorProfiles,
    getMentorProfileById,searchMentor,postJob,getAllPostJob}=require('../controllers/mentorController');
const {middleware} = require('../middleware/middleware');

router.post('/create-or-update-profile',middleware,createOrUpdateMentorProfile);
router.post('/getMentorProfile',middleware,getMentorProfile);
router.get('/getAllMentorProfiles',getAllMentorProfiles);
router.post('/getprofile',getMentorProfileById);
router.post('/searchMentor',searchMentor);
router.post('/post-new-job',middleware,postJob);
router.get('/get-all-job-posts',getAllPostJob);    

module.exports = router;
