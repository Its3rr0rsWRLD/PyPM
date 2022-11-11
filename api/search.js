export default async (req, res) => {
    const name = req.query.name;

    function getPackage() {
    }

    if (getPackage() == null) {
        res.status(404).send(`Package '${name}' not found.`);
    }
};
