import jwt from 'jsonwebtoken';

const { REACT_APP_JWT_SECRET } = process.env;

const validate = (token) => jwt.verify(token, REACT_APP_JWT_SECRET);

export default { validate };
