# My Projects API

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

API to management projects and our tasks

Project from the first challenge of rocketseat

![](header.png)

## Technologies
Node.js

ExpressJS

## Required
- [Node.js LTS version](https://nodejs.org/en/)

## Install

git clone https://github.com/PauloFelipeM/MyProjects.git

cd /myprojects/ -> "npm install" or "yarn install"

## Usage

Inside folder of the project run: "yarn dev" or "npm run dev"

## 🚩 Routes


### Get all projects

Method: GET

URL EXEMPLE: http://myapi.com/projects


### Get one project

Method: GET

URL EXEMPLE: http://myapi.com/projects/{project_id}


### Create project

Method: POST

URL EXEMPLE: http://myapi.com/projects

Body request: id, title


### Update project

Method: DELETE

URL EXEMPLE: http://myapi.com/projects/{project_id}

Body request: title


### Delete project

Method: DELETE

URL EXEMPLE: http://myapi.com/projects/{project_id}


### New task

Method: POST

URL EXEMPLE: http://myapi.com/projects/{project_id}/tasks

Body request: title


## :memo: Licença

Esse projeto está sob a licença MIT.

Created by [Paulo Felipe Martins](https://www.linkedin.com/in/paulo-felipe-martins-3940b011a/)
