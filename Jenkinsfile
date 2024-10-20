pipeline {
  agent any

  tools {nodejs "node"}

  stages {
    stage('Clonar Git') {
      steps {
        git url: 'https://github.com/JoseSamuelAldanaPerez/api-extraescolares', branch: 'main'
      }
    }

    stage('Instalar dependencias') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
  }
}
