import express from 'express'

const taskRouter = express.Router();

taskRouter.post('/', (req, res) => {
    res.send('task router is working')
} )

export default taskRouter;