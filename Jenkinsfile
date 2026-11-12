

pipeline {
    agent {
        label 'node24'
    }


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
  
                echo 'VERSAO 2: Jenkinsfile atualizado diretamente pelo GitHub!'
            }
        }

        stage('Verificar Node.js') {
            steps {
                echo 'Verificando ambiente Node.js...'
        
                sh 'node --version'
                sh 'npm --version'
                sh 'git --version'
                sh 'whoami'
                sh 'pwd'
        
                echo 'Ambiente Node.js verificado!'
            }
        }
        
        stage('Instalar Dependencias') {
            steps {
                echo 'Instalando dependencias do projeto...'
        
                sh 'npm ci'
        
                echo 'Dependencias instaladas com sucesso!'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Iniciando testes automatizados...'
        
                sh 'npm test'
        
                echo 'Todos os testes passaram!'
            }
        }

        stage('Build') {
            steps {
                echo 'Iniciando o Build da aplicacao...'
        
                sh 'npm run build'
        
                echo 'Verificando arquivo gerado...'
        
                sh 'test -f dist/calculadora.js'
        
                echo 'Build finalizado com sucesso!'
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
