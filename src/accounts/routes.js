const {Router} = require('express')
const controller = require('./controller');

const router =  Router();

router.get('/', controller.getAccounts);
router.post('/', controller.addAccount);
router.get('/:id', controller.getAccountById);
router.put('/:id', controller.updatePassword);

module.exports = router;