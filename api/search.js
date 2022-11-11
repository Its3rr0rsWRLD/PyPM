export default async (req, res) => {
    const name = req.query.name;

    const rest = require('@octokit/rest');

    const octokit = new rest.Octokit({
        auth: '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',
    });


    function getPackage() {
        octokit.repos.getContent({
            owner: 'ThatError404',
            repo: 'PyPM',
            path: `api/pkgs/${name}/package.json`
        }).then(({ data }) => {
            if (data.status === 404) {
                return false
            } else {
                return true
            }
        })

    }

    if (getPackage(name) === false) {
        res.status(404).send(`Package '${name}' not found.`);
    } else {
        res.status(200).send(`Package '${name}' found.`);
    }
};
