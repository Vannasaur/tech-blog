const router = require('express').Router();
const { Articles, Users, Comments } = require('../models');
const withAuth = require('../utils/auth')


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


// GET all user's articles for dashboard
// must display any articles (blog posts) the user has created
router.get('/', withAuth, async (req, res) => {
    try {
        const userDashboardData = await Articles.findAll({
            where: {
                user_id: req.session.user_id
            },
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
                            attribute: ['user_name']
                        }
                    ]
                }
            ]
        })
    const userDashboard = userDashboardData.map(articles => articles.get({ plain: true }));
    console.log(userDashboard);
    res.render('dashboard', {
        userDashboard,
        loggedIn: req.session.loggedIn
    });
} catch (err) {
    res.status(500).json(err);
}
});



// must have option to add a new article (blog post)
// when clicking an existing post in dashboard, should be able to delete or update post then be taken back to updated dashboard

module.exports = router;