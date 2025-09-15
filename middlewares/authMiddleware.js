import jwt from 'jsonwebtoken';

function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ error: "A token is required for authentication." });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.doctorId = decoded.doctorId;
    } catch (err) {
        return res.status(401).json({ error: "Access Denied. Invalid Token." });
    }
    return next();
};

export default verifyToken;
