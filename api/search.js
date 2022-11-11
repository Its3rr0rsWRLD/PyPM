export default async (req, res) => {
    const name = req.query.name;

    const fetch = require('node-fetch');

    let auth = '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'


    function getPackage() {
        fetch('https://api.github.com/repos/ThatError404/PyPM/contents/api/pkgs/' + name + '.json', {
            method: 'GET',
            headers: {
                'Authorization': 'token ' + auth
            }
        }).then(response => response.json())
        .then(data => {
            if (data.status == 404) {
                res.status(404).json({
                    error: "Package not found"
                })
            } else {
                res.status(200).json({
                    name: data.name,
                    version: data.version,
                })
            }
        })

    }

    if (getPackage(name) === false) {
        res.status(404).send(`Package '${name}' not found.`);
    } else {
        res.status(200).send(`Package '${name}' found.`);
    }
};
