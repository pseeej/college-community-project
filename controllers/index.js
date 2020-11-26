const { Router } = require('express');
const router = Router();
const models = require('../models');
const index_ctrl = require('./index.ctrl');

router.get('/', index_ctrl.get_index);
// router.get('/', (req, res) => {
//     res.render('admin/index.html');
// })

router.get('/admin/free_write', index_ctrl.get_index_free);

router.get('/free_write.html', index_ctrl.get_index_free);

router.get('/advertisement.html', index_ctrl.get_index_adv);

router.get('/admin/adv', index_ctrl.get_index_adv);

router.use('/admin', require('./admin'));


module.exports = router;