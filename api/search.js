export default async (req, res) => {
    const name = req.query.name;

    const fetch = require('node-fetch');

    let auth = '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'

    function getPackage(name) {
        fetch('https://api.github.com/repos/ThatError404/PyPM/contents/api/pkgs/' + name + '/package.json', {
            method: 'GET',
            headers: {
                'Authorization': 'token ' + auth
            }
        }).then(data => {
            if (data.status == 404) {
                return false
            } else {
                return true
            }
        })

    }

    if (getPackage(name) == false) {
        res.status(404).send(`Package '${name}' not found.`);
    } else {
        res.status(200).send(`Package '${name}' found.`);
    }
};
