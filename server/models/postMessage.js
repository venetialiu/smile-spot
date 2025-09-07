// import mongoose
import mongoose from 'mongoose';

// create mongoose schema
const postSchema = mongoose.Schema({
    // what is goint to be inside each post?
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    // the useres who's liked the post
    likes: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }

});
    
// turn the schema into a model
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;