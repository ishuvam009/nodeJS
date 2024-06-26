const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

const ALL_USERS = [
    {
    username: 'shuvam@gmail.com',
    password: '1234',
    name: 'Shuvam'
},
{
    username: 'abhipoo@hotmail.com',
    password: 'abhipoo123',
    name: 'Abhijeet'
},
{
    username: 'ramji123@gmail.com',
    password: 'sita123',
    name: 'Sri Ram'
},
{
    username: 'krishna@gmail.com',
    password: 'radha123',
    name: 'Sri Krishna'
},
];

