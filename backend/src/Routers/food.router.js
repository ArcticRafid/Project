import { Router } from "express";
import handler from 'express-async-handler';
import { FoodModel } from "../models/food.model.js";

const router = Router();
router.get('/', handler(async (req, res) =>{
    const foods = await FoodModel.find({})
    res.send(foods);
})
);

router.get('/search/:searchTerm', handler(async (req, res) => {
    const{searchTerm} = req.params;
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const foods = await FoodModel.find({
        $or: [
            { name: { $regex: lowerCaseSearchTerm, $options: 'i' } }, 
            { tags: { $regex: lowerCaseSearchTerm, $options: 'i' } }
    ]});
    res.send(foods);
})); 

export default router;