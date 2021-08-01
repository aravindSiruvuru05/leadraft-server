const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const userRouter = require('./routers/userRoutes');
const authRouter = require('./routers/authRoutes');
const demoServiceRoutes = require('./routers/demoServiceRoutes');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`REQUEST BODY:::::> ${JSON.stringify(req.body)}`);
  console.log(`REQUEST QUERY PARAMS:::::> ${JSON.stringify(req.query)}`);
  next();
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/free-services', demoServiceRoutes);

app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl} on this server !!`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
