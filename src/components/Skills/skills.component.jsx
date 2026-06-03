/* eslint-disable */
import React from 'react'
import AnsibleLogo from "../../assets/images/Ansible_logo.png"
import CICDLogo from "../../assets/images/CI_CD_logo.jpeg"
import CosmosDBLogo from "../../assets/images/CosmosDB_logo.png"
import D3jsLogo from "../../assets/images/D3_js.jpeg"
import DynamoDBLogo from "../../assets/images/DynamoDB_logo.jpg"
import FlaskLogo from "../../assets/images/Flask.jpeg"
import GrafanaLogo from "../../assets/images/Grafana.jpeg"
import HelmLogo from "../../assets/images/HELM.jpg"
import KustoLogo from "../../assets/images/Kusto_logo.png"
import LLMRAGLogo from "../../assets/images/LLM_RAG_logo.jpeg"
import Neo4jLogo from "../../assets/images/Neo4J.jpeg"
import LangGraphLogo from "../../assets/images/langgraph-color.png"
import MicroserviceLogo from "../../assets/images/microservice_icon.png"
import TransformerLogo from "../../assets/images/transformer-model-icon-6855215-512.png"
import JenkinsLogo from "../../assets/images/jenkins-logo.svg"

// Uniform icon style for all skill icons
const iconStyle = { width: '56px', height: '56px', objectFit: 'contain' };

const Skills = () => {
    return(
        <section id="cta" class="main special">
            <header class="major">
                <h1>Skills</h1>
                <h2>Programming Languages</h2>
            </header>
                <ul class="features">
                <li>
                    <img style={iconStyle} src="https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png"/>
                    <h3>Java</h3>
                </li>
                <li>
                    <img style={iconStyle} src="https://img.icons8.com/color/96/000000/python.png"/>
                    <h3>Python</h3>
                </li>
                <li>
                    <img style={iconStyle} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"/>
                    <h3>C#</h3>
                </li>
                <li>
                    <img style={iconStyle} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"/>
                    <h3>C++</h3>
                </li>
                <li>
                    <img style={iconStyle} src="https://img.icons8.com/color/96/000000/javascript.png"/>
                    <img style={iconStyle} src="https://img.icons8.com/color/96/000000/typescript.png"/>
                    <h3>JS / TypeScript</h3>
                </li>
                <li>
                    <img style={iconStyle} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg"/>
                    <h3>SQL</h3>
                </li>
                <li>
                    <img style={iconStyle} src={KustoLogo}/>
                    <h3>Kusto (KQL)</h3>
                </li>
                <li>
                    <img style={iconStyle} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"/>
                    <h3>Bash</h3>
                </li>
                </ul>

                <h2>AI / ML</h2>
                <ul class="features">
                <li>
                    <img style={iconStyle} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"/>
                    <h3>PyTorch</h3>
                </li>
                <li>
                    <img style={iconStyle} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"/>
                    <h3>TensorFlow</h3>
                </li>
                <li>
                    <img style={iconStyle} src={LangGraphLogo}/>
                    <h3>LangChain / LangGraph</h3>
                </li>
                <li>
                    <img style={iconStyle} src={LLMRAGLogo}/>
                    <h3>LLM Agents / RAG</h3>
                </li>
                <li>
                    <img style={iconStyle} src={TransformerLogo}/>
                    <h3>Transformers</h3>
                </li>
                <li>
                    <img style={iconStyle} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg"/>
                    <h3>Qdrant / Neo4j</h3>
                </li>
                </ul>

                <h2>Cloud & Infrastructure</h2>
                <ul class="features">
                <li>
                    <img style={iconStyle} src="https://img.icons8.com/color/96/000000/amazon-web-services.png"/>
                    <h3>AWS</h3>
                    <p style={{fontSize: '0.8em', margin: 0}}>Lambda, EC2, S3, Kinesis, Step Functions, EMR, Glue, IAM, CloudFormation</p>
                </li>
                <li>
                    <img style={iconStyle} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"/>
                    <h3>Azure</h3>
                    <p style={{fontSize: '0.8em', margin: 0}}>AI Search, Durable Functions, Kusto</p>
                </li>
                <li>
                    <img style={iconStyle} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg"/>
                    <h3>Kubernetes</h3>
                </li>
                <li>
                    <img style={iconStyle} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"/>
                    <h3>Docker</h3>
                </li>
                <li>
                    <img style={iconStyle} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg"/>
                    <h3>Terraform</h3>
                </li>
                <li>
                    <img style={iconStyle} src={HelmLogo}/>
                    <h3>Helm</h3>
                </li>
                </ul>

                <h2>Systems & DevOps</h2>
                <ul class="features">
                <li>
                    <img style={iconStyle} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"/>
                    <h3>REST APIs / GraphQL</h3>
                </li>
                <li>
                    <img style={iconStyle} src={MicroserviceLogo}/>
                    <h3>Microservices</h3>
                </li>
                <li>
                    <img style={iconStyle} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"/>
                    <h3>CI/CD</h3>
                    <p style={{fontSize: '0.8em', margin: 0}}>Jenkins, Azure DevOps</p>
                </li>
                <li>
                    <img style={iconStyle} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"/>
                    <h3>Git</h3>
                </li>
                <li>
                    <img style={iconStyle} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg"/>
                    <h3>Grafana</h3>
                </li>
                <li>
                    <img style={iconStyle} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg"/>
                    <h3>Ansible</h3>
                </li>
                </ul>

                <h2>Frameworks</h2>
                <ul class="features">
                <li>
                    <img style={iconStyle} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"/>
                    <h3>Spring</h3>
                </li>
                <li>
                    <img style={iconStyle} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"/>
                    <h3>Node.js</h3>
                </li>
                <li>
                    <img style={iconStyle} src={FlaskLogo}/>
                    <h3>Flask</h3>
                </li>
                <li>
                    <img style={iconStyle} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
                    <h3>React.js</h3>
                </li>
                <li>
                    <img style={iconStyle} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"/>
                    <h3>Next.js</h3>
                </li>
                <li>
                    <img style={iconStyle} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"/>
                    <h3>Angular</h3>
                </li>
                <li>
                    <img style={iconStyle} src={D3jsLogo}/>
                    <h3>D3.js</h3>
                </li>
                </ul>

                <h2>Databases</h2>
                <ul class="features">
                <li>
                    <img style={iconStyle} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cosmosdb/cosmosdb-original.svg"/>
                    <h3>CosmosDB</h3>
                </li>
                <li>
                    <img style={iconStyle} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"/>
                    <h3>MongoDB</h3>
                </li>
                <li>
                    <img style={iconStyle} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"/>
                    <h3>Oracle DB</h3>
                </li>
                <li>
                    <img style={iconStyle} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg"/>
                    <h3>DynamoDB</h3>
                </li>
                <li>
                    <img style={iconStyle} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg"/>
                    <h3>Firestore</h3>
                </li>
                </ul>
            
            
        </section>
    )
};

export default Skills;