# pulumi-reviewstacks-demo

Takes a Pulumi template and

- Re-orgs the structure and modifies the app slightly (uses alpine)
- Adds Pulumi ESC which contains OIDC AWS Creds
- Adds the Pulumi Deployments Review Stack


## Step by step

```bash

# Set up
$ gh repo clone desteves/pulumi-reviewstacks-demo
$ cd pulumi-reviewstacks-demo

# Sample App, NGINX
$ mkdir infra app  
$ echo "FROM nginx:1.17.1-alpine" >> app/Dockerfile                                             

# Pulumi template
$ pulumi new container-aws-typescript  --dir infra --name pulumi-reviewstacks-demo  --yes
$ rm -rf infra/app
$ vi infra/index.ts
#     update ref  "./app" to ""../app"

# Add ESC
$ echo "environment:" >> infra/Pulumi.pr.yaml
$ echo "    - pulumi-reviewstacks-demo" >> infra/Pulumi.pr.yaml

$ echo "environment:" >> infra/Pulumi.local.yaml
$ echo "    - pulumi-reviewstacks-demo" >> infra/Pulumi.local.yaml


# exclude
echo "infra/Pulumi.local.yaml" >> .gitignore
echo "**node_modules" >> .gitignore


# Add CI/CD
$ mkdir -p .github/workflows 
$ touch .github/workflows/pipeline.yml
#     see the contents of the file


# Add Review Stack
$ cd infra
$ mkdir test && cd test
$ pulumi new typescript
## Edit index.ts
#    see contents of index.ts

# Install the Pulumi GitHub App - https://www.pulumi.com/docs/using-pulumi/continuous-delivery/github-app/


```