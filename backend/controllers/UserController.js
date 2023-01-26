import User from '../models/UserModel.js';
import moment from 'moment';

export const getUsers = async(req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Server error'
        });
    }
};

export const signIn = async(req, res) => {
    try {
        const user = await User.findOne({
                where: {
                    name: req.body.name,
                    password: req.body.password
                },
                raw: true
        });
        if (user && user.status_user !== 'Block') {
            await User.update(
                {
                    time_was: moment.utc().valueOf()
                }, 
                {
                    where: {
                        id: user.id
                    },
            });
        }
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Server error'
        });
    }
};

export const createUser = async(req, res) => {
    try {
        const result = await User.create(req.body);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Server error'
        });
    }
};


export const updateUsers = async(req, res) => {
    try {
        await User.bulkCreate(req.body, {
            updateOnDuplicate: ['status_user']
        });
        res.status(200).json({message: 'Users updated'});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Server error'
        });
    }
};

export const deleteUsers = async(req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.body
            },
        });
        res.status(200).json({message: 'Users deleted'});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Server error'
        });
    }
};