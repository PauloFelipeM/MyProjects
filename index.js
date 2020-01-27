const express = require('express');
const server = express();

server.use(express.json());

server.use((req, res, next) => {
  console.count("Requisição de Nº");
  next();
});

function checkProjectExist(req, res, next){
  const { id } = req.params;
  const project = projects.find(p => p.id == id);

  if(!project) return res.status(404).json({error: 'Project not found'});

  next();
}

function rule(req, res, next){
  const { title } = req.body;
  
  if(!title) return res.status(400).json({error: 'The title field is required'});

  next();
}

const projects = [
  {id: "1", title: "Project 01", tasks: []},
  {id: "2", title: "Project 02", tasks: []},
  {id: "3", title: "Project 03", tasks: []},
];

server.get('/projects', (req, res) => {
  return res.json(projects);
});

server.get('/projects/:id', checkProjectExist, (req, res) => {
  const { id } = req.params;
  const project = projects.find(p => p.id == id);
  return res.json(project);
});

server.post('/projects', checkProjectExist, rule, (req, res) => {
  const { id } = req.body;
  const { title } = req.body;
  projects.push({id, title, tasks: []});
  return res.json(projects);
});

server.put('/projects/:id', checkProjectExist, rule, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  projects.forEach(p => p.id == id ? p.title = title : false);
  return res.json(projects);
});

server.delete('/projects/:id', checkProjectExist, (req, res) => {
  const { id } = req.params;
  projects.forEach((p, i) => p.id == id ? projects.splice(i,1) : false);
  return res.send(`Project ${id} successfully deleted!`);
});

server.post('/projects/:id/tasks', checkProjectExist, rule, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  projects.forEach(p => p.id == id ? p.tasks.push(title) : false);
  return res.json(projects);
});

server.listen(3000);