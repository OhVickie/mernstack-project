const express = require('express')

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get goals' })
}

// @desc Set goals
// @route POST /api/goals
// @access Private
const setGoal = (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Plase enter some text')
    }
    else {
        res.status(200).json({ message: `${req.body.text}` })
    }
    
}

// @desc Update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
}

// @desc Delete goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
}

module.exports = {getGoals, setGoal, updateGoal, deleteGoal,}