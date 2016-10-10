var accounts;
var account;
var balance;

function uploadComment() {
  var urlHash = document.getElementById("urlHash").value;
  var commentHash = document.getElementById("commentHash").value;

  addCommentToTxLog(urlHash, commentHash);
};

function fetchComments() {
  var urlHash = document.getElementById("fetchUrlHash").value;

  getCommentsFromTxLog(urlHash);
};

window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    account = accounts[0];
  });
}

function addCommentToTxLog(urlHash, commentHash) {
  var commentContract = Comment.deployed();

  console.log("onUpload - contract:");
  console.log(commentContract);

  commentContract.addComment(urlHash, commentHash, {from: account}).then(function(value) {
    console.log("onUpload - transaction addr: " + value);
  });
}

function getCommentsFromTxLog(urlHash) {
  var commentContract = Comment.deployed();
  var commentAddedEvent = commentContract.CommentAdded({urlHashRef: urlHash}, {fromBlock: 0, toBlock: 'latest'});

  console.log("onFetch - contract:");
  console.log(commentContract);

  commentAddedEvent.get(function(err, logs) {
    if (err) {
      console.log(err);
    } else {
      console.log("onFetch - events:");
      console.log(logs);
    }
  });
}
