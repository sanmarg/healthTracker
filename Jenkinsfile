pipeline{
    agent any
    stages{
        stage("Cleanup..."){
            steps{
                cleanWs()
                sh'docker rmi sanmargparanjpe/healthtracker -f'
            }
            
        }
        stage("Initiating..."){
            steps{
                sh 'git clone https://github.com/sanmarg/healthTracker'
                sh 'cd healthTracker && npm install'
                sh 'cd healthTracker && npm start &'
            }
            
        }
        stage('SonarQube Analysis') {
            steps {
                // Run SonarQube scanner for code analysis
                script {
                    def scannerHome = tool name: 'SonarQube', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
                    withSonarQubeEnv('SonarQube') {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }
        stage("Docker Image creation..."){
            steps{
                script {
                    docker.build("sanmargparanjpe/healthtrack", "./healthTracker")
                }
            }
            
        }
        stage("Trivy Scanning..."){
            steps{
                sh "trivy --ignore-unfixed --format json -o trivy-report.json sanmargparanjpe/healthtrack"
            }
            
        }
        stage("Docker Push"){
            steps{
                sh "docker push sanmargparanjpe/healthtrack"
            }
            
        }
    }
}