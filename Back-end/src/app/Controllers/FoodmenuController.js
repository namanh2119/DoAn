class FoodmenuController {
    index(req, res) {
        res.render('food')
    }
}

module.exports = new FoodmenuController;