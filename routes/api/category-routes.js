const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({ include: Product })
    .then(categories => {
      const categoriesJSON = categories.map(category => category.toJSON());
      res.status(200).json(categories);
    })
    .catch(err => {
      res.status(500).send('The server encountered an error.');
    })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({ where: { id: req.params.id }, include: Product})
    .then(category => {
      res.status(200).json(category.toJSON());
    })
    .catch(err => {
      res.status(500).send('The server encountered an error.');
    });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then(created => {
      res.status(200).json(created.toJSON());
    })
    .catch(err => {
      res.status(500).send('An error occurred.');
    })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, { where: { id: req.params.id } })
    .then(updated => {
      res.status(200).json(updated.toJSON());
    }).catch(err => {
      res.status(500).send('An error occurred.');
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({ where: { id: req.params.id } })
    .then(destroyed => {
      res.status(200).json(destroyed);
    }).catch(err => {
      res.status(500).send('An error occurred.');
    });
});

module.exports = router;
