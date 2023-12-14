const express = require('express');
const uuid = require('uuid');
const router = express.Router();

const userService4 = require('../service/certf-doc.services');
router.get('/getdata', async (req, res) => {
    try {
        const result = await userService4.getallcollection()
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
        const result = await userService4.getcollection(req.params.id);
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
        const result = await userService4.save(dataToSave);
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
        const result = await userService4.updatecollection(req.params.id, req.body);
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
        const result = await userService4.deletecollection(req.params.id);
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