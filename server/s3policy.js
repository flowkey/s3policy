var s3 = Npm.require('s3policy');
var s3account;

Meteor.methods({
    newS3: function(accessKey, secretKey) {
        check(accessKey, String);
        check(secretKey, String);
        s3account = new s3(accessKey, secretKey);
    },
    getS3Policy: function(options) { //filename, bucket, time, size
        check(options.filename, String);
        check(options.bucket, String);
        var timeLimit = options.expire || 60; // default to 60sec
        var sizeLimit = options.size || 10; // default to 10MB
        var policy = s3account.writePolicy(options.filename, options.bucket, timeLimit, sizeLimit);
        return policy;
    }
});