// This factory function creates a controller for any model
// reducing the need to write repetitive code for Drivers, Contracts, etc.

const createController = (Model) => {
  return {
    getAll: async (req, res) => {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 20;
      const offset = (page - 1) * limit;
      
      // Filter logic can be extended here
      const data = await Model.findAll({}, limit, offset);
      res.json({ success: true, count: data.length, data });
    },

    getOne: async (req, res) => {
      const data = await Model.findById(req.params.id);
      if (!data) {
        return res.status(404).json({ success: false, message: 'Resource not found' });
      }
      res.json({ success: true, data });
    },

    create: async (req, res) => {
      // In a real app, Joi validation would happen before this
      const data = await Model.create(req.body);
      res.status(201).json({ success: true, data });
    },

    update: async (req, res) => {
      const updated = await Model.update(req.params.id, req.body);
      if (!updated) {
        return res.status(404).json({ success: false, message: 'Resource not found' });
      }
      res.json({ success: true, data: updated });
    },

    delete: async (req, res) => {
      const deleted = await Model.delete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ success: false, message: 'Resource not found' });
      }
      res.json({ success: true, message: 'Resource removed' });
    }
  };
};

module.exports = createController;