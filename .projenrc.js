const { awscdk } = require("projen");
const project = new awscdk.AwsCdkConstructLibrary({
  author: "sakthisarava",
  authorAddress: "velsakthis5301@gmail.com",
  authorName: "sakthisarava",
  cdkVersion: "2.1.0",
  assertions: "true",
  defaultReleaseBranch: "main",
  description: "AWS IAM User constructor with keys attached",
  name: "projen-test",
  repositoryUrl: "https://github.com/sakthisarava/projen-test.git",

  deps: [
    '@aws-cdk/aws-iam',
    '@aws-cdk/core'
  ],
  release: true,
  publishToPypi: {
    distName: 'sakthi-user',
    module: 'sakthi_user'
  },

  // deps: [],                /* Runtime dependencies of this module. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();