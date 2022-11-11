export default async (req, res) => {
    const name = req.query.name;

    const fetch = require('node-fetch');

    let auth = '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'

    function getPackage() {
        fetch('https://api.github.com/repos/ThatError404/PyPM/contents/api/pkgs/' + name + '/package.json', {
            method: 'GET',
            headers: {
                'Authorization': 'token ' + auth
            }
        }).then(data => {
            if (data.status == 404) {
                res.status(404).json({
                    error: 'Package not found'
                })
            } else {
            }
        })

    }

    getPackage()
};
