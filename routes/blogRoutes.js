const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Get all of the blogs
router.get('/', blogController.blog_index);


// Create a new blog and go back to /blogs
router.post('/', blogController.blog_create_post);


// Show the create page
router.get('/create', blogController.blog_create_get);


// Get Blog Details
router.get('/:id', blogController.blog_details);


// Delete a blog
router.delete('/:id', blogController.blog_delete);


module.exports = router;