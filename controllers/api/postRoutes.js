const router = require('express').Router();
const Post = require("../../models/Post")
router.post('/post', async (req, res) => {
    try {
        const newPost = await Post.create({
          ...req.body,
        //   user_id: req.session.user_id,
        });
    
        res.status(200).json(newPost);
      } catch (err) {
        console.log(err)
        res.status(400).json(err);
      }
    
});

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findOne({ where: { id: req.params.id } });

    if (!postData) {
      res
        .status(400)
        .json({ message: 'post does not exist' });
      return;
    }
    const postComments = Comments.findAll({where: {id: comment_id}}) //not sure about list of comments being retrieved w/0 loop/forEach
    if (!postComments) {
postComments = []
    }
  
    let response = {}
response.postData = postData //this route sends back different data than all others
response.postComments = postComments
    res.status(200).json(response) 
  } catch (err) {
    res.status(400).json(err);
  }
});
  router.delete('/post/:id', async (req, res) => {
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id,
        //   user_id: req.session.user_id,
        },
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
     
  router.put("/post/:id", function (req, res,) {
    Post.update({...req.body},{ where: { id: req.params.id} })

    .then(function(rowsUpdated) {
      console.log(rowsUpdated)
      res.status(200).json(rowsUpdated)
    })
   })
   
module.exports = router;


// {   where: {
//   id: req.params.id,
// //   user_id: req.session.user_id,
// },
// ...req.body},

