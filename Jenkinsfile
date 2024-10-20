pipeline {
  agent any

  tools {nodejs "node"}

  stages {
    stage('Clonar Git') {
      steps {
        git branch 'main', url: 'https://github.com/JoseSamuelAldanaPerez/api-extraescolares'
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
