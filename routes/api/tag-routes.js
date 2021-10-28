const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { destroy } = require('../../models/Product');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({ include: [{ model: Product }] });
    const tagsJSON = tags.map(tag => tag.toJSON());
    res.json(tagsJSON);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({ where: { id: req.params.id }, include: { model: Product }})
  .then(foundTag => {
    res.json(foundTag.toJSON())
  }).catch(err => {
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new tag
  /* req.body format:
    {
      tag_name: 'name_of_tag'
    }
  */
  Tag.create(req.body)
  .then(created => {
    res.status(200).json(created);
  }).catch(err => {
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, { where: { id: req.params.id } })
  .then(tag => {
    res.status(200).json(tag);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({ where: { id: req.params.id } })
  .then(destroyed => {
    res.status(200).json(destroyed);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

module.exports = router;
