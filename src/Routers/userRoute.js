const express = require("express")
const user = require("../models/user")
const router = express.Router();

// here we create our Route
router.post("/user", async (req, res) => {
    console.log(req.body)
    const data = new user(req.body)
    const result = await data.save()

    if (!result) {
        res.json({
            status: "FAILED",
            message: "user not register successfully...."
        })
    }
    else {
        res.json({
            status: "SUCCESS",
            message: "user register successfully....",
            data: result
        })
    }
})

//get records 
router.get("/user", async (req, res) => {
    try {
        const result = await user.find()
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
router.get("/user/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await user.findById(_id);
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
router.put("/user/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await user.findByIdAndUpdate(_id,req.body,{new: true});
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
router.delete("/user/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await user.findByIdAndDelete(_id);
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