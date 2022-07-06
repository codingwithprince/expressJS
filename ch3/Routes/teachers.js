import express from 'express'
const router = express.Router()

router.get('/all', (req, res)=>{
    res.send('All Teachers')
})
router.get('/post', (req, res)=>{
    res.send('Create new teacher')
})
router.put('/update',(req, res)=>{
    res.send('Update teacher info')
})

export default router;