# Pulumi Deployments Review Stack

## Common Errors

```bash

# cd pulumi-reviewstacks-demo/infra/test

## ERROR
$ pulumi up 
#   pulumiservice:index:DeploymentSettings (pr-test):
#     error: failed to create deployment settings for stack (diana-pulumi-corp/pulumi-reviewstacks-demo/pr): 404 API error: Not Found: Stack 'pulumi-reviewstacks-demo/pr' not found`
## FIX
$ ../
$ pulumi preview -s pr 
$ cd -


## ERROR
$ pulumi up --yes
#  pulumiservice:index:DeploymentSettings (pr-test):
#     error: failed to create deployment settings for stack (diana-pulumi-corp/pulumi-reviewstacks-demo/pr): 400 API error: Bad Request: The Pulumi GitHub application is not installed for "desteves/pulumi-reviewstacks-demo"
## FIX
# Annoying but I ended up uninstalling and re-installing the Pulumi GitHub application

## ERROR
$ pulumi up --yes
#  pulumiservice:index:DeploymentSettings (pr-test):
#     error: failed to create deployment settings for stack (diana-pulumi-corp/pulumi-reviewstacks-demo/pr): 400 API error: Bad Request: sourceContext.git.repoUrl cannot be specified when using GitHub integration
## FIX
# Remove sourceContext.git.repoUrl

```