import * as pulumi from "@pulumi/pulumi";
import * as service from "@pulumi/pulumiservice";

const config = new pulumi.Config();

const settings = new service.DeploymentSettings("pr-test", {
    organization: "diana-pulumi-corp",
    project: "pulumi-reviewstacks-demo",
    stack: "pr",
	github: {
        // this single stack is used for both push to deploy + PR previews
        // as well as the review stack template
		deployCommits: true,
		previewPullRequests: true,
		pullRequestTemplate: true,
		repository: "desteves/pulumi-reviewstacks-demo",
	},
    // operationContext: {
    //     environmentVariables: {
    //         // TEST_VAR: "foo",
    //         // SECRET_VAR: config.requireSecret("my_secret"),
    //     }
    // },
    sourceContext: {
        git: {
            // repoUrl: "https://github.com/desteves/pulumi-reviewstacks-demo.git",
            branch: "refs/heads/main",
            repoDir: "infra"
        }
    }
});