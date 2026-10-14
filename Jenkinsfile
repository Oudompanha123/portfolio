// CI/CD pipeline for the Next.js portfolio
// Checkout -> Install -> Build -> SonarQube scan -> Quality Gate -> Docker build -> Deploy -> Smoke test
pipeline {
    agent any

    options {
        timestamps()
        timeout(time: 30, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '10'))
        disableConcurrentBuilds()
    }

    environment {
        APP_NAME  = 'portfolio'
        APP_PORT  = '3000'                 // host port the site is published on
        IMAGE_TAG = "${env.BUILD_NUMBER}"
        NEXT_TELEMETRY_DISABLED = '1'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'node -v && npm -v'
                sh 'npm ci'
            }
        }

        stage('Build') {
            // next build also runs the TypeScript type check
            steps {
                sh 'npm run build'
            }
        }

        stage('SonarQube Analysis') {
            environment {
                // Name must match Manage Jenkins > Tools > SonarQube Scanner installations
                SCANNER_HOME = tool 'SonarScanner'
            }
            steps {
                // Name must match Manage Jenkins > System > SonarQube servers
                withSonarQubeEnv('SonarQube') {
                    // Single quotes: the shell expands the token, so Groovy never sees it
                    sh '''
                        "$SCANNER_HOME/bin/sonar-scanner" \
                          -Dsonar.host.url="$SONAR_HOST_URL" \
                          -Dsonar.token="$SONAR_AUTH_TOKEN" \
                          -Dsonar.projectVersion="$BUILD_NUMBER"
                    '''
                }
            }
        }

        stage('Quality Gate') {
            // Needs the SonarQube webhook -> http://jenkins:8080/sonarqube-webhook/
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t "$APP_NAME:$IMAGE_TAG" -t "$APP_NAME:latest" .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    docker rm -f "$APP_NAME" 2>/dev/null || true
                    docker run -d \
                      --name "$APP_NAME" \
                      --restart unless-stopped \
                      -p "$APP_PORT:3000" \
                      "$APP_NAME:$IMAGE_TAG"
                '''
                // To enable the contact form, add a "Secret text" credential with ID
                // resend-api-key, wrap the sh step above in:
                //   withCredentials([string(credentialsId: 'resend-api-key', variable: 'RESEND_API_KEY')]) { ... }
                // and add  -e RESEND_API_KEY  to the docker run command.
            }
        }

        stage('Smoke Test') {
            steps {
                sh '''
                    for i in $(seq 1 15); do
                      if docker exec "$APP_NAME" wget -q -O /dev/null http://127.0.0.1:3000; then
                        echo "App is up on port $APP_PORT"
                        exit 0
                      fi
                      echo "Waiting for app... ($i/15)"
                      sleep 3
                    done
                    echo "App did not respond in time"
                    docker logs --tail 50 "$APP_NAME"
                    exit 1
                '''
            }
        }
    }

    post {
        success {
            echo "Deployed ${APP_NAME}:${IMAGE_TAG} -> http://localhost:${APP_PORT}"
        }
        failure {
            echo 'Pipeline failed. Check the stage logs above.'
        }
        always {
            sh 'docker image prune -f || true'
            cleanWs()
        }
    }
}
