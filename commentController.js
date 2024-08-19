// Import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");
// Bussiness logic
exports.createComment = async (req, res) => {
    try {
        // fetch data from the request bodu

        const { post, user, body } = req.body;
        // Object creation before making the entry in dn
        const comment = new Comment({
            post,
            user,
            body
        });
        // save comment to the database
        const savedComment = await comment.save();
        // After saving
        // Find the post by post id and then make it updated 
        const updatedPost = await Post.findByIdAndUpdate(post, {
            $push: { comments: savedComment._id }
        }, { new: true }).populate("comments").exec();

        res.json({
            post: updatedPost,
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server Error" });
    }
};

