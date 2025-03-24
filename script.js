function postComment() {
    let commentBox = document.getElementById('comment-box');
    let commentsSection = document.getElementById('comments-section');
    
    if (commentBox.value.trim() === "") {
        alert("Vui lòng nhập bình luận!");
        return;
    }

    let comment = document.createElement('p');
    comment.textContent = commentBox.value;
    commentsSection.appendChild(comment);

    commentBox.value = ""; // Xóa nội dung ô nhập
}
