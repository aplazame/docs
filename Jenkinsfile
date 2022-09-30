
library 'aplazame-shared-library'

app = "apidocs"
repoName = scm.getUserRemoteConfigs()[0].getUrl().tokenize('/').last().split("\\.")[0]
githubBranch = env.CHANGE_BRANCH ? env.CHANGE_BRANCH : env.BRANCH_NAME
githubRepo = "https://github.com/aplazame/" + repoName + "/tree/" + githubBranch

// GIT_COMMIT_HASH = sh (script: "git log -n 1 --pretty=format:'%H'", returnStdout: true)

foldersCache = '"node_modules/"'
s3BucketCache = "aplazameshared-jenkins-cache"

branch_like_master = 'only/master-is-master-🚀'
branch_like_release = 'only/release-is-release-🚀'

aws_profile_by_env = [
  pre: 'AplazameStaging',
  default: 'Aplazame',
]

ephe_suffix_by_env = [
  default: '-staging',
]

ephe_bucket_name_by_env = [
  // squad: 'aplazame-ephemeral-environments',
  default: 'ephemeral-environments',
]

bucket_name_by_env = [
  // pre: 'apidocs-pre.aplazame.org',
  // prod: <- ⚠️ IS VERY DANGEROUS TO PUT IT HERE ⚠️
  default: 'apidocs-staging.aplazame.org', // `staging` by default 'checkout-staging.aplazame.org'
]
PROD_bucket_name = 'aplazame.dev' // 'checkout.aplazame.com'

envs_by_branch = [
  master: ['staging'],
  release: ['prod'],
  default: ['staging'],
]

envs_by_branch[branch_like_master] = envs_by_branch.master
envs_by_branch[branch_like_release] = envs_by_branch.release

branch_envs = getKey(envs_by_branch, githubBranch)

sc_story = getStoryIdFromBranchName(githubBranch)

def getKey (from = [:], key = 'default') {
  return from[key] ?: from.default
}

def getEphemeralsDeployMessage () {
  def msg = [
    "🚀 *Efímero desplegado* 🚀",
    "",
    "Github: " + repoName + "/" + githubBranch,
    "\t${githubRepo}",
  ];

  if (sc_story) {
    msg.push("\nShortcut: https://app.shortcut.com/aplazame/story/${sc_story}")
  } else {
    msg.push("⚠️ rama sin HU de Shortcut")
  }

  msg.push("\nDemos:\n")

  branch_envs
    .each({env ->
      def ephe_subdomain = 'sc-' + sc_story + '-' + app + '-' + env
      msg.push("- https://${ephe_subdomain}.demo.aplazame.org/demo/")
    })

  return msg.join('\n')
}

pipeline {
  options {
    skipDefaultCheckout()
    disableConcurrentBuilds()
    ansiColor('xterm')
  }

  agent {
    kubernetes {
      yamlFile "jenkins/node.yaml"
    }
  }

  environment {
    SHORTCUT_API_TOKEN = credentials('CLUBHOUSE_API_TOKEN')
    APP_RELEASY = "webapp-apidocs"
    SLACK_TOKEN = credentials('SLACK_TOKEN_FRONTEND')
    SLACK_HOOK = "https://hooks.slack.com/services/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"
  }

  stages {
    stage('⭐') {
      when {
        anyOf {
          changeRequest(target: 'master')
          branch 'master'
          // branch 'release'
        }
        // not {
        //   tag "*"
        // }
        beforeAgent true
      }

      stages {

        stage('Install ⚙') {
          environment {
            AWS_PROFILE = "AplazameSharedServices"
          }

          steps {
            checkout scm

            container('node') {
              sshagent(['ssh-github']) {
                logEnvVars()

                sh "ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts"

                sh "yarn install"
              }
            }
          }
        }

        // stage('✅ & 📊') {
        //   steps {
        //     container('node') {
        //       sshagent(['ssh-github']) {
        //         sh "npm run tests"
        //       }
        //     }
        //   }
        // }

        stage('Build 🍳') {
          environment {
            AWS_PROFILE = "AplazameSharedServices"
          }

          steps {
            container('node') {
              script {
                branch_envs.each{env ->
                  sh "OUT_DIR=build/${env} yarn build"
                }
              }
            }
          }
        }

        stage('Ephemerals 🪣 S3') {
          when { not { anyOf {
            // { branch 'master' }  not working propertly in PRs
            expression { githubBranch == 'master' }
            expression { githubBranch == branch_like_master }
            expression { githubBranch == 'release' }
            expression { githubBranch == branch_like_release }
          } } }
          steps {
            container('node') {
              script {
                sh """
                  load-config
                  export AWS_PROFILE=Aplazame
                """

                def first_deploy = !folderExistsInS3(
                  's3://' + getKey(ephe_bucket_name_by_env, 'staging') + getKey(ephe_suffix_by_env, 'staging') + '/' + app + '/sc-' + sc_story
                )

                branch_envs.each { env ->
                  def s3_path = 's3://' + getKey(ephe_bucket_name_by_env, env) + getKey(ephe_suffix_by_env, env) + '/' + app + '/sc-' + sc_story

                  echo "🚀 [[ deploying 'build/${env}' to '${s3_path}' ]] 🪣"
                  uploadFolderToS3('build/' + env, s3_path,
                    acl: 'public-read',
                    files_no_cache: '*.html',
                  )
                }

                def message = getEphemeralsDeployMessage()
                def curl_message = message.replaceAll('\\n', '\\\\n')

                if (first_deploy) {
                  sh (returnStdout: true, script: """
                    curl -X POST https://api.app.shortcut.com/api/v3/stories/${sc_story}/comments \
                      -H "Shortcut-Token: \$SHORTCUT_API_TOKEN" \
                      -H "Content-Type: application/json" \
                      -d '{ "text": "${curl_message}" }'
                  """.stripIndent())
                }

                if (first_deploy) {
                  slackSend(
                    failOnError: true,
                    color: '#8000FF',
                    channel: '#frontend-environments',
                    message: message,
                    username: "Jenkins CI",
                  )
                }
              }
            }
          }
        }

        stage('[master] 🪣 S3') {
          when { anyOf {
            // { branch 'master' } not working propertly in PRs
            expression { githubBranch == 'master' }
            expression { githubBranch == branch_like_master }
          } }
          steps {
            container('node') {
              script {
                branch_envs.each { env ->
                  def s3_path = 's3://' + getKey(bucket_name_by_env, env)

                  echo "🚀 [[ deploying 'build/${env}' to '${s3_path}' ]] 🪣"
                  def result = uploadFolderToS3('build/' + env, s3_path,
                    aws_profile: getKey(aws_profile_by_env, env),
                    files_no_cache: '*.html',
                  )
                }
              }
            }
          }
        }

        stage('Done 🤘') {
          steps {
            echo "That's all folks!!"
          }
        }
      }
    }
  }
}
