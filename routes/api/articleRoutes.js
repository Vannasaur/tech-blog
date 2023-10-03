const router = require('express').Router();
const { Articles, Comments } = require('../../models');
const withAuth = require('../../utils/auth');

// create new article
router.post('/new', withAuth, async (req, res) => {
    console.log(req.body)
    try {
        const newArticle = await Articles.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        });
        console.log(newArticle)
        if (!newArticle) {
            res.status(400).json({ message: 'Please enter a valid post' })
        }
        res.status(200).json(newArticle);
    } catch (err) {
        res.status(400).json(err);
    }
});

// update previous articles(blogposts)
router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const editArticle = await Articles.update({
            title: req.body.title,
            content: req.body.content,
        },
        {
            where: {
                id: req.params.id,
            },
        });

        if (!editArticle) {
            res.status(404).json({ message: 'No article found with this id!' });
            return;
        }

        res.status(200).json(editArticle);
    } catch (err) {
        res.status(500).json(err);
    }
});


// delete previous articles(blogposts)
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const articleData = await Articles.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!articleData) {
            res.status(404).json({ message: 'No article found with this id!' });
            return;
        }

        res.status(200).json(articleData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// //  post comment
// router.post('/comment', withAuth, async (req, res) => {
//     try {
//         const { }
//     }
// })

module.exports = router;