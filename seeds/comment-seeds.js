import { Comment } from "../models";

const seedComments = () => Comment.bulkCreate(commentData);

export default seedComments;
