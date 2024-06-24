import { Router } from "express";
import { workoutModel } from "../models/user";

const router = Router();



router.get('/', (req, res) => {
    res.json({ mssg: 'Get ALL workouts' });
});

router.get('/:user/workouts/:id', async (req, res) => {
    try{
        const workout = await workoutModel.findById(req.params.id).exec();
        
        res.json({title: workout?.title, exercises: workout?.exercises});
    }catch(e){
        console.log(e);
        res.json({Result: 'failure'});
    }
});

router.get('/:user/workouts', async (req, res)=>{
    try{
        const workouts = await workoutModel.find({creator: req.params.user}).exec();
        res.json(workouts);
    }catch(e){
        res.json({Error: e});
    }
})

router.post('/:user/workout', async (req, res) => {
    try {
        console.log(req.body);
        const workout = await workoutModel.create({
            title: req.body.title,
            creator: req.params.user,
            exercises: req.body.exercises
        });
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
