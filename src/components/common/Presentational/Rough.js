module.exports = mongoose.model('Post', postSchema({

    // _id: postSchema.Types.ObjectId(),
    title: String,
    post: String,
    user : {
        required: true,
        // type: postSchema.Types.ObjectId,
        ref: 'User'
    }
}));

result = users.filter(user => posts.some(post => users._id === post.user));




<ul className="list-group mb-4">  
{results.filter(result => result.role !== 'admin').map(posts => (

<li key={filteredUsers._id} className="list-group-item">
 {filteredUsers.post}
</li>

))}
</ul>  