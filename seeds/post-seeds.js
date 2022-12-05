import { Post } from "../models";
import postData from "./blog_posts.json" assert { type: "json" };
const seedPosts = () => Post.bulkCreate(postData);

export default seedPosts;
