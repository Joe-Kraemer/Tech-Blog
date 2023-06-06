const router = require('express').Router();
const { User } = require('../../models');

router.post('/comment', async (req, res) => {
    try {
        const newComment = await Comment.create({
          ...req.body,
        //   user_id: req.session.user_id,
        });
    
        res.status(200).json(newComment);
      } catch (err) {
        res.status(400).json(err);
      }
    
});

router.get('/comment/:id', async (req, res) => {
  try {
    const commentData = await Comment.findOne({ where: { id: req.params.id } });

    if (!commentData) {
      res
        .status(400)
        .json({ message: 'comment does not exist' });
      return;
    }
res.status(200).json(commentData)
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
