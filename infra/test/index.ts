import * as service from "@pulumi/pulumiservice";

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
    sourceContext: {
        git: {
            branch: "refs/heads/main",
            repoDir: "infra"
        }
    }
});