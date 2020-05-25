def PROJECT = 'graphwiki-docs'
def PROJECT_GIT_REPOSITORY = 'https://github.com/opendatalabcz/graphwiki-docs.git'
def GIT_CREDENTIALS = 'github_GregerTomas'

node {
  git(
      url: PROJECT_GIT_REPOSITORY,
      credentialsId: GIT_CREDENTIALS
  )

  stage('NPM install') {
      sh 'npm install'
  }

  stage('NPM build') {
      sh 'npm run build'
  }

  stage('DOCKER image') {
      sh "docker build -t ${PROJECT}-image ."
  }

  stage('DOCKER run container') {
      sh "docker container stop ${PROJECT}-container > /dev/null 2>&1 && echo \"Container stopped\" || echo \"Nothing to stop\""
      sh "docker container rm ${PROJECT}-container > /dev/null 2>&1 && echo \"Container removed\" || echo \"Nothing to remove\""
      sh "docker run --name ${PROJECT}-container -d -p 4201:80 ${PROJECT}-image"
  }
}
