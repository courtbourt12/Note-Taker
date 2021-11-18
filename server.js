const express = require('express');
const path = require('path');

const PORT = process.env.port || 3003;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

