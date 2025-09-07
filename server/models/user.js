// import mongoose
import mongoose from 'mongoose';

// create mongoose schema
const userSchema = mongoose.Schema({
    // what is goint to be inside each post?
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    id: { type: String },

});
    
// turn the schema into a model
export default mongoose.model("User", userSchema);