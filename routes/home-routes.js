const router = require('express').Router();
const { Articles, Comments, Users } = require('../models');
const withAuth = require('../utils/auth')

// GET all articles for homepage
router.get('/', async (req, res) => {
    try {
        const dbArticlesData = await Articles.findAll();
        // serialize data so the template can read it
        const plainArticlesData = dbArticlesData.map((articles) =>
            articles.get({ plain: true })
        );
        // pass serialized data and session flag into template
        res.render('homepage', {
            plainArticlesData // somehow this is pulling article_id ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MUST FIX THIS
        });
        // test to see if data is getting pulled
        // res.status(200).json(plainArticlesData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET one article
// use withAuth middleware to prevent access to route
router.get('/articles/:id', withAuth, async (req, res) => {
    try {
        const dbArticleData = await Articles.findByPk(req.params.id, {
            include: [
                {
                    model: Comments,
                    include: [
                        {
                            model: Users,
                            attributes: [
                                'user_name'
                            ]
                        }
                    ]
                },
            ],
        });

        const plainArticleData = dbArticleData.get({ plain: true });
        res.render('articles', {
            plainArticleData,
            loggedIn: true
        });
        // test to see if data is getting pulled
        // res.status(200).json(plainArticleData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;

