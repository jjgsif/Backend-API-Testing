import { Router } from "express";
import { workoutModel } from "../models/user";

const router = Router();



router.get('/', (req, res) => {
    res.json({ mssg: 'Get ALL workouts' });
});

router.get('/:user/workouts/:id', async (req, res) => {
    try{
        const workout = await workoutModel.findById(req.params.id).exec();
        res.json(workout);
    }catch(e){
        console.log(e);
        res.json({Result: 'failure'});
    }
});

router.post('/:user/workout', async (req, res) => {
    try {
        const workout = await workoutModel.create({
            title: 'String',
            creator: 'String'
        })
        res.json(workout);
    }catch (e) {
        const workout = {"result": "failure"}
        res.json(workout);
        console.log(e);
    }
});

router.patch('/:user/workout/:id', (req, res) => {
    res.json({ mssg: 'Changing workout' });
});




export default router;
