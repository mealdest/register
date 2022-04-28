/* Service Import */
const accountSchema = require("../models/account.schema");

exports.signup = async (req, res) => {
    try {
        const clientResp = req.body;
        console.log("signup req~~` ", clientResp);
        if (clientResp.name &&
            clientResp.email &&
            clientResp.password) {
            const docs = {
                name: clientResp.name,
                email: clientResp.email,
                password: clientResp.password,
            }
            const response = await accountSchema.create(docs);
            console.log("Signup Successfully", response);
            return res.send({ message: "Signup Successfully" });
        } else {
            return res.status(400).send({ message: "All Fields Are Required" });
        }
    } catch (error) {
        console.log("Sign up error~~ ", error);
        return res.status(400).send({ message: error.message || error });
    }
}


exports.login = async (req, res) => {
    try {
        const clientResp = req.body;
        console.log("login req~~` ", clientResp);
        let result = await accountSchema.findOne({ "email": clientResp.email });
        if (result) {
            if (result.password === clientResp.password) {
                return res.send({ data: result });
            } else {
                console.log("Password Incorrect~~ ");
                return res.status(400).send({ message: 'Password Incorrect' });
            }
        } else {
            console.log("This Mobile Number Does Not Exist error~~ ");
            return res.status(400).send({ message: 'Email Invalid' });
        }
    } catch (error) {
        console.log("Login error~~ ", error);
        return res.status(400).send({ message: error.message || error });
    }

}
