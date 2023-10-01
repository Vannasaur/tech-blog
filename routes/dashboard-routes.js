const router = require('express').Router();
const { Articles, Users } = require('../models');
const withAuth = require('../utils/auth')

// must display any articles (blog posts) the user has created

// GET all user's articles for dashboard
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await Users.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Articles }],
        });

        const user = userData.get({ plain: true });

        res.render('dashboard', {
            ...user, // ... is the spread operator that is used to expand an iterable into more arguments
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// must have option to add a new article (blog post)
// when clicking an existing post in dashboard, should be able to delete or update post then be taken back to updated dashboard

module.exports = router;