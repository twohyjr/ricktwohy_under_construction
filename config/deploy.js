/* jshint node: true */
//ember deploy production --verbose --activate=true
module.exports = function(deployTarget) {
  var ENV = {
    build: {
       environment: deployTarget
    },
    'revision-data': {
      type: 'git-commit'
    },
    's3-index': {
      accessKeyId: "AKIAIRW33C5VYOBRZXOQ",
      secretAccessKey: "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",
      bucket: "ricktwohy.net",
      region: "us-west-2",
      allowOverwrite: true
    },
    's3': {
      accessKeyId: "AKIAIRW33C5VYOBRZXOQ",
      secretAccessKey: "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",
      bucket: "ricktwohy.net",
      region: "us-west-2"
    }
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
