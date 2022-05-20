import {Router} from "express";
import {AdRecord} from "../records/ad.record";

export const adRouter = Router()
    .get('/search/:name?', async (req, res) => {
        const {name} = req.params;
        const ads = await AdRecord.findAll(name ?? '');
        res.json(ads);
})

    .get('/:id', async (req, res) => {
        const {id} = req.params;
        const ad = await AdRecord.getOne(id);
        res.json(ad);

    })

    .post('/', async (req, res) => {
        const ad = new AdRecord(req.body);
        await ad.insert();
        res.json(ad);
    })