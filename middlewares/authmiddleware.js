// import JWT from 'jsonwebtoken'

// const userAuth=async(req,res,next) => {
//     const authHeader=req.headers.authorization
//     if(!authHeader|| !authHeader.startsWith('Bearer')){
//         next('Auth failed')
//     }
//     const token = authHeader.split(" ")[1];
//     try {
//         const payload=JWT.verify(token,process.env.JWT_SECRET)
//         req.user={userId:payload.userId};
//         next();
//     } catch (error) {
//         next('Auth failed')
//     }
// }

// export default userAuth;
import JWT from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
  // Access the Authorization header correctly
  const authHeader = req.headers.authorization;

  // Check if the Authorization header exists
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Auth failed: Missing or invalid token' });
  }

  // Extract the token from the Authorization header
  const token = authHeader.split(" ")[1];

  try {
    // Verify the token with the secret key
    const payload = JWT.verify(token, process.env.JWT_SECRET);

    // Attach the user ID from the payload to the request object
    req.user = { userId: payload.userId };

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Auth failed: Invalid token' });
  }
};

export default userAuth;
