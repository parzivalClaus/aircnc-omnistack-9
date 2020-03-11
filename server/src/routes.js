const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');
const ApprovalController = require('./controllers/ApprovalController');
const RejectionController = require('./controllers/RejectionController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);
// routes.get('/sessions', SessionController.index);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.delete('/spots/:id', SpotController.delete);

routes.get('/dashboard', DashboardController.show);
// routes.get('/dashboardall', DashboardController.index);
// routes.delete('/dashboard/:id', DashboardController.delete);

routes.post('/spots/:spot_id/bookings', BookingController.store);
// routes.get('/spots/bookings', BookingController.index);
// routes.delete('/spots/bookings/:booking_id', BookingController.delete);

routes.post('/bookings/:booking_id/approvals', ApprovalController.store);
routes.post('/bookings/:booking_id/rejections', RejectionController.store);

module.exports = routes;