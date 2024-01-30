# pulumi-reviewstacks-demo


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
$ echo "environment:" >> infra/Pulumi.pr-on-main.yaml
$ echo "    - pulumi-reviewstacks-demo" >> infra/Pulumi.pr-on-main.yaml

$ echo "environment:" >> infra/Pulumi.local-dev.yaml
$ echo "    - pulumi-reviewstacks-demo" >> infra/Pulumi.local-dev.yaml

$ mkdir -p .github/workflows 
$ touch .github/workflows/pipeline.yml
#     see the contents of the file



```