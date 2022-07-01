const express = require("express")
const bill = require("../models/bill")
const router = express.Router();

// here we create our Route
router.post("/add-billing", async (req, res) => {
    console.log(req.body)
    const data = new bill(req.body)
    const result = await data.save()

    if (!result) {
        res.json({
            status: "FAILED",
            message: "bill not register successfully...."
        })
    }
    else {
        res.json({
            status: "SUCCESS",
            message: "bill register successfully....",
            data: result
        })
    }
})

//get records 
router.get("/billing-list", async (req, res) => {
    try {
        const result = await bill.find()
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Not found record"
            })
        }
        else {
            res.json({
                status: "SUCCESS",
                message: "Records found",
                data: result
            })
        }
    }
    catch (e) {
        console.log(e)
    }
})

//get single record
router.get("/bill/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await bill.findById(_id);
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Record not found on this ID"
            })
        }
        else {
            res.json({
                status: "SUCCESS",
                message: "Records found",
                data: result
            })
        }
    }
    catch (e) {
        res.send(e)
    }
})
// update records 
router.put("/update-billing/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await bill.findByIdAndUpdate(_id,req.body,{new: true});
        console.log(result)
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Records not Update....",
                data: result
            })
        }
        else {
            res.json({
                status: "SUCCESS",
                message: "Record is Updated successfully...",
                data: result
            })
        }
    }
    catch (e) {
        res.send(e)
    }
})
// Delete Records 
router.delete("/delete-billing/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await bill.findByIdAndDelete(_id);
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Record not Delete..."
            })
        }
        else {
            res.json({
                status: "SUCCESS",
                message: "Record is Delete successfully..."
            })
        }
    }
    catch (e) {
        res.send(e)
    }
})


module.exports = router