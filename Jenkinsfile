pipeline {
  agent any

  tools {nodejs "node"}

  stages {
    stage('Clonar Git') {
      setps {
        git 'https://github.com/JoseSamuelAldanaPerez/api-extraescolares'
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
