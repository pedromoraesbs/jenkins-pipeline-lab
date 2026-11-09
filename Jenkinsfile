
pipeline {
    agent any

    parameters {
        choice(
            name: 'AMBIENTE',
            choices: ['laboratorio', 'producao'],
            description: 'Selecione o ambiente'
        )
    }

    environment {
        APP_NAME = 'jenkins-pipeline-lab'
    }

    stages {
        stage('Informacoes') {
            steps {
                echo "Projeto: ${env.APP_NAME}"
                echo "Build: ${env.BUILD_NUMBER}"
                echo "Ambiente: ${params.AMBIENTE}"
            }
        }

        stage('Build') {
            steps {
                echo 'Iniciando Build...'
                echo 'Build concluido!'
            }
        }

        stage('Test') {
            steps {
                echo 'Executando testes...'
                sh 'echo "Teste executado com sucesso"'
            }
        }

        stage('Deploy') {
            when {
                expression {
                    params.AMBIENTE == 'producao'
                }
            }

            steps {
                echo 'Simulando Deploy...'
                echo 'Nenhuma alteracao real sera feita.'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finalizado!'
        }

        success {
            echo 'Resultado: SUCCESS'
        }

        failure {
            echo 'Resultado: FAILURE'
        }
    }
}
