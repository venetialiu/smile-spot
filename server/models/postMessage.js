// import mongoose
import mongoose from 'mongoose';

// create mongoose schema
const postSchema = mongoose.Schema({
    // what is goint to be inside each post?
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }

});
    
// turn the schema into a model
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;