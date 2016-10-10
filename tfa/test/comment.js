contract('Comment', function(accounts) {
    it("should add new comment entry to transaction log", function(done) {
        //var c = Comment.deployed();

        Comment.new({from: accounts[0] }).then(function(comment) {
            return comment.addComment("asdfghjklqwertyuiopz", "asdfghjklawertyuiopz");
        }).then(function(result) {
            console.log("tx address: [" + result + "]");

            done();
        }).catch(done);
    });
});
