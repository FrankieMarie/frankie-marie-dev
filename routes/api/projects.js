const express = require('express');
const router = express.Router();
const multer = require('multer');
const passport = require('passport');

// Model
const Project = require('../../models/Project');

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, 'uploads/')
  },
  filename: function(req, file, cb){
    cb(null, file.originalname)
  }
});

const upload = multer({storage: storage});

// @route GET api/projects/test
// @description tests projects route
// @access PUBLIC
router.get('/test', (req, res) => res.json({ msg: "projects works" }));

// @route POST api/projects/new
// @description post a project
// @access PRIVATE
router.post('/new', passport.authenticate('jwt', { session: false }), upload.single('image'), (req, res) => {
  Project.findOne({ title: req.body.title })
    .then(project => {
      if(project) {
        return res.status(400).json({ msg: 'Project already exists' });
      } else {
        const newProject = new Project({
          title: req.body.title,
          url: req.body.url,
          description: req.body.description,
          type: req.body.type,
          image: req.file.path
        });
        newProject.save()
          .then(project => res.status(201).json({
            message: 'handling POST request to /new',
            project: project
          }))
          .catch(err => console.log(err));
      }
    });
});

// @route GET api/projects/all
// @description get all projects
// @access PUBLIC
router.get('/all', (req, res) => {
  Project.find()
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(404).json(err))
});

// @route GET api/projects/:id
// @description get all projects
// @access PRIVATE
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const id = req.params.id
  Project.findByIdAndDelete({ _id: id })
    .then(result => {
      res.status(200).json({
        message: 'Project deleted',
        result,
      });
    })
    .catch(err => {
      console.log(err)
      res.status(404).json({
        error: err
      })
    });
});

module.exports = router;