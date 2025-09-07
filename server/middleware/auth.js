import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {

    // ex: user wants to like a post
    // clicks like button -> middleware authenticates user (next) -> calls posts controller (likePost)

    try {
        // get the token
        const token = req.headers.authorization.split(" ")[1];
        // see if user is from Google auth or our own auth
        const isCustomAuth = token.length < 500;

        let decodedData;

        // verify the token for our own auth
        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, 'test'); // test: our own secret
            req.userId = decodedData?.id;
        }

        // verify the token for Google auth
        if(token && !isCustomAuth) {
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }

        // pass it down to next
        next();
        
    } catch (error) {
        console.log(error);
    }
    
}

export default auth;