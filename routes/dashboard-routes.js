const router = require('express').Router();
const { Articles, Users, Comments } = require('../models');
const withAuth = require('../utils/auth')

// render new article(blogpost) page
router.get('/new', withAuth, async (req, res) => {
    try {
        res.render('new-article', {
            loggedIn: req.session.loggedIn
        })
        // res.status(200).json(newArticle);
    } catch (err) {
        res.status(400).json(err);
    }
});

// edit post
router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const editArticleData = await Articles.findByPk(req.params.id)
        const editArticle = editArticleData.get({ plain: true })
        res.render('edit-article',{ editArticle })
        // res.status(200).json(newArticle);
    } catch (err) {
        res.status(400).json(err);
    }
});

// GET all user's articles for dashboard
// must display any articles (blog posts) the user has created
router.get('/', withAuth, async (req, res) => {
    try {
        const userDashboardData = await Articles.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'id',
                'title',
                'content',
                'created_at'
            ],
            include: [
                {
                    model: Users,
                    attributes: ['user_name']
                },
                {
                    model: Comments,
                    include: [
                        {
                            model: Users,
                            attributes: ['user_name']
                        }
                    ]
                }
            ]
        })
        const userDashboard = userDashboardData.map(articles => articles.get({ plain: true }));
        console.log(userDashboard);
        res.render('dashboard', {
            userDashboard,
            loggedIn: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});




// must have option to add a new article (blog post)
// when clicking an existing post in dashboard, should be able to delete or update post then be taken back to updated dashboard

module.exports = router;





// --------------------------------------------------------------------------------------------------------------
// tried to get articles by primary key of user
// test area: 
// router.get('/', withAuth, async (req, res) => {
//     try {
//         // Find the logged in user based on the session ID
//         const userData = await Users.findByPk(req.session.user_id, {
//             attributes: { exclude: ['password'] },
//             include: [{ model: Articles }],
//         });

//         const user = userData.get({ plain: true });
//         console.log(user);
//         res.render('dashboard', {
//             user, // ... is the spread operator that is used to expand an iterable into more arguments
//             loggedIn: req.session.loggedIn
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });
// end test area 
// --------------------------------------------------------------------------------------------------------------