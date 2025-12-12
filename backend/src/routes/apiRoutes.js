const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/authMiddleware');

// Controllers
const authController = require('../controllers/authController');
const createController = require('../controllers/genericController');

// Models
const BaseModel = require('../models/BaseModel');
const Vehicle = new BaseModel('vehicles');
const Driver = new BaseModel('drivers');
const Booking = new BaseModel('bookings');
const Payment = new BaseModel('payments');
const Contract = new BaseModel('contracts');
const SchoolTransport = new BaseModel('school_transport');
const Tour = new BaseModel('tours');

// --- Auth Routes ---
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.get('/auth/me', protect, authController.getMe);

// --- Vehicle Routes (Public Read, Admin Write) ---
const vehicleCtrl = createController(Vehicle);
router.get('/vehicles', vehicleCtrl.getAll);
router.get('/vehicles/:id', vehicleCtrl.getOne);
router.post('/vehicles', protect, authorize('admin'), vehicleCtrl.create);
router.put('/vehicles/:id', protect, authorize('admin'), vehicleCtrl.update);
router.delete('/vehicles/:id', protect, authorize('admin'), vehicleCtrl.delete);

// --- Driver Routes (Admin Only) ---
const driverCtrl = createController(Driver);
router.get('/drivers', protect, authorize('admin'), driverCtrl.getAll);
router.get('/drivers/:id', protect, authorize('admin'), driverCtrl.getOne);
router.post('/drivers', protect, authorize('admin'), driverCtrl.create);
router.put('/drivers/:id', protect, authorize('admin'), driverCtrl.update);
router.delete('/drivers/:id', protect, authorize('admin'), driverCtrl.delete);

// --- Booking Routes (Authenticated Users) ---
// Note: For a real app, we would override 'create' to handle availability checks
const bookingCtrl = createController(Booking);
router.get('/bookings', protect, bookingCtrl.getAll); // Users see their own, Admin sees all (needs service logic expansion)
router.get('/bookings/:id', protect, bookingCtrl.getOne);
router.post('/bookings', protect, bookingCtrl.create);
router.put('/bookings/:id', protect, bookingCtrl.update);

// --- Other Resources ---
const resources = [
  { path: '/payments', model: Payment, role: 'admin' },
  { path: '/contracts', model: Contract, role: 'admin' },
  { path: '/school-transport', model: SchoolTransport, role: 'user' }, // simplified access
  { path: '/tours', model: Tour, role: 'user' }
];

resources.forEach(res => {
  const ctrl = createController(res.model);
  router.get(res.path, ctrl.getAll);
  router.get(`${res.path}/:id`, ctrl.getOne);
  // Writes restricted to admin for simplicity in this generated code
  router.post(res.path, protect, authorize('admin'), ctrl.create);
  router.put(`${res.path}/:id`, protect, authorize('admin'), ctrl.update);
  router.delete(`${res.path}/:id`, protect, authorize('admin'), ctrl.delete);
});

module.exports = router;