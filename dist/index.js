"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
require('dotenv').config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
const port = process.env.PORT || 3000;
mongoose_1.default.connect(process.env.DB_URI)
    .then(() => console.log('Connected to DB lyceedakar'))
    .catch((err) => console.log(err));
const corsOptions = {
    origin: 'http://localhost:4200', // Adjust to your Angular app's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow credentials if needed
    optionsSuccessStatus: 204 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use((0, cors_1.default)(corsOptions));
app.listen(port, () => console.log(`Server running on port ${port}`));
