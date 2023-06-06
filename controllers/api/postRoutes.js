const router = require('express').Router();
router.post('/post', async (req, res) => {
    try {
        const newPost = await Post.create({
          ...req.body,
        //   user_id: req.session.user_id,
        });
    
        res.status(200).json(newPost);
      } catch (err) {
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
  router.delete('/post/:id', withAuth, async (req, res) => {
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
    Post.update(
        {...req.body},
    )
    .then(function(rowsUpdated) {
      res.status(200).json(rowsUpdated)
    })
    .catch(error)
{
res.status(500).json(error)
}
   })
   
module.exports = router;
