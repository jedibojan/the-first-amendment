contract Comment {
    
    event CommentAdded(bytes20 indexed urlHashRef, bytes20 commentHashRef);
    
    function Comment() {}
    
    function addComment(bytes20 urlHashRef, bytes20 commentHashRef) {
        CommentAdded(urlHashRef, commentHashRef);
    }
}