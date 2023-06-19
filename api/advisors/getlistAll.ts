import generateAdvisers from "../utils/generateAdvisors.js";

export default (req, res) => {
	res.json(generateAdvisers())
};