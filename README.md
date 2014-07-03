#s3Policy

This package will only provide you needed S3 policys you need to do a HTTP Upload over Meteor methods.
You can use this to write your a custom Upload Package.

I will release a simple way to add it to your forms soon.

It uses s3policy npm package: https://github.com/arbitrarytech/s3policy

## Set Up

Call this code on your server side to Set up a Bucket:

       Meteor.call("newS3",'MYACCESSKEY', 'MYSECRETKEY')


## The Policy Object
The Policy object you can create with this module will contain the following:
	
        {
        	s3PolicyBase64: "eyJleHBpcmF0aW9....l0aCIsIiRDb250ZW50LVR5cGUiLCIiXV19", // Signed Policy
        	s3Signature: "ZKm3MlcRyUYD4JTsPUaiQ4hqq2s=", // Your Signature
        	s3Key: "MYACCESSKEY" // Your Public Access Key
        }

## Get a Policy Object

		Meteor.call("getS3Policy",{
			filename: "test.txt",
			bucket: "mybucket"
			}, function(err,policy){
				if(!err){
					var validPolicy = policy; // do what you want to do with the policy
				}
			});



## Set Valid-Time and Filesize

		Meteor.call("getS3Policy",{
			filename: "test.txt",
			bucket: "mybucket",
			expire: 60, // optional: time for the policy in s - defaults to: 60seconds
			size: 10 // optional: filesize limit that is allowed - defaults to: 10MB
			
			}, function(err,policy){
				if(!err){
					var validPolicy = policy; // do what you want to do with the policy
				}
			});

			