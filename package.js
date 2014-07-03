Package.describe({
    summary: "S3 Upload Policy Generator for Meteor"
});

Npm.depends({
    s3policy: '0.0.1'
});

Package.on_use(function(api, where) {
    api.add_files('server/s3policy.js', ['server']);
});