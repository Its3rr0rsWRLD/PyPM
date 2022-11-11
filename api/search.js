export default async (req, res) => {
    const name = req.query.name;

    const rest = require('@octokit/rest');

    const octokit = new rest.Octokit({
        auth: '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',
    });


    function getPackage() {
        octokit.request(`GET /repos/{ThatError404/PyPM/api/pkgs/${name}}`).then(({ data }) => {
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
