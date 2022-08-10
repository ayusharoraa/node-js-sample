{
    "family": FAMILY,
    "containerDefinitions": [
        {
            "image": "REPOSITORY_URI:BUILD_NUMBER",
            "name": NAME,
	    "essential": true,
            "portMappings": [
                {
                    "containerPort": 3000,
                    "hostPort": 3000
                }
            ]
        }
    ],
    "cpu": "256",
    "memory": "512",
    "requiresCompatibilities": [
             "FARGATE"
    ],
    "networkMode": "awsvpc",
    "executionRoleArn": ROLE_ARN 
}
