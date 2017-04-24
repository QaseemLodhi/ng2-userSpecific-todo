import * as mongoose from 'mongoose';
import {Schema} from 'mongoose';
let userSchema = new Schema({
    firstName: { type: String },
    lastName: {type: String},
    email: {type: String, lowercase: true, unique: true},
    createdAt: {type: Date, default: Date.now()},
    password: {type: String}
});
export default mongoose.model('User', userSchema);