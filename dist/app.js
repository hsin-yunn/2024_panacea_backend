"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const appErrorService_1 = __importDefault(require("./service/appErrorService"));
const resError_1 = require("./service/resError");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const rootDir = path_1.default.resolve(__dirname, '..');
const swaggerFilePath = path_1.default.join(rootDir, 'swagger-output.json');
const swaggerFile = require(swaggerFilePath);
//env
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: './.env' });
//mongoose
const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);
mongoose_1.default
    .connect(DB)
    .then(() => {
    console.log('資料庫連線成功');
})
    .catch((err) => {
    console.log(err, '資料庫連線異常');
});
//router
const users_1 = __importDefault(require("./routes/users"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
//route
app.use('/', users_1.default);
app.use('/api-doc', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerFile));
//404
app.use(function (req, res, next) {
    (0, appErrorService_1.default)(404, '找不到路徑', next);
});
//error
app.use(function (err, req, res, next) {
    err.statusCode = err.statusCode || 500;
    if (process.env.NODE_ENV === 'dev') {
        return (0, resError_1.resErrorDev)(err, res);
    }
    (0, resError_1.resErrorProd)(err, res);
});
exports.default = app;
