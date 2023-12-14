const express = require('express');
const uuid = require('uuid');
const router = express.Router();

const userService = require('../service/citizen.services');
router.get('/getdata', async (req, res) => {
    try {
        const result = await userService.getallcollection()
        res.send({
            status: 200,
            success: true,
            data: result,
            message: 'get succesfully'

        });
    } catch (error) {
        res.send({
            status: 400,
            success: false,
            data: undefined,
            message: error
        });
    }
});

router.get('/getdata/:id', async (req, res) => {
    try {
        const result = await userService.getcollection(req.params.id);
        res.send({
            status: 200,
            success: true,
            data: result,
            message: 'get succesfully'

        });
    } catch (error) {
        
        res.send({
            status: 400,
            success: false,
            data: undefined,
            message: error
        });
    }
});

router.post('/postdata', async (req, res) => {
    try {

        const uniqueId = uuid.v4();
        const dataToSave = {
            id: uniqueId,
            ...req.body
        };
        const result = await userService.save(dataToSave);
        res.send({
            status: 200,
            success: true,
            data: result,
            message: 'post succesfully'

        });
    } catch (error) {
        res.send({
            status: 400,
            success: false,
            data: undefined,
            message: error

        });
    }
});
router.put('/update/:id', async (req, res) => {
    try {
        const result = await userService.updatecollection(req.params.id, req.body);
        res.send({
            status: 200,
            success: true,
            data: result,
            message: 'update succesfully'
        })
    } catch (error) {
        res.send({
            status: 400,
            success: false,
            data: undefined,
            message: error
        });
    }
});
router.delete('/delete/:id', async (req, res) => {
    try {
        const result = await userService.deletecollection(req.params.id);
        res.send({
            status: 200,
            success: true,
            data: result,
            message: 'delete succesfully'
        })
    } catch (error) {
        res.send({
            status: 400,
            success: false,
            data: undefined,
            message: error
        });
    }
});





module.exports = router;