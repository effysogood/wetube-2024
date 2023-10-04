const fakeUser = {
    username: 'Effy',
    loggedIn: false,
};

const trending = (req, res) => {
    const videos = [
        {
            title: 'First Video',
            rating: 5,
            commemts: 2,
            createdAt: '2 minutes ago',
            views: 45,
            id: 1,
        },
        {
            title: 'Second Video',
            rating: 4,
            commemts: 2,
            createdAt: '20 minutes ago',
            views: 40,
            id: 2,
        },
        {
            title: 'Third Video',
            rating: 3,
            commemts: 2,
            createdAt: '1 hour ago',
            views: 555,
            id: 3,
        },
    ];
    return res.render('home', {
        pageTitle: 'Home',
        fakeUser: fakeUser,
        videos,
    });
};

const see = (req, res) => res.render('watch', { pageTitle: 'Watch Video' });
const search = (req, res) => res.render('edit', { pageTitle: 'Edit Video' });
const edit = (req, res) => {
    console.log(req.params);
    return res.send('Edit Video');
};
const upload = (req, res) => res.send('Upload Video');
const remove = (req, res) => {
    return res.send('Remove Video');
};

export { trending, upload, search, see, edit, remove };
