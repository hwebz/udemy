to set buildpack in heroku:
$ heroku buildpacks:set heroku/nodejs 
(php,python,... instead)

to change env var
$ heroku config:set NODE_ENV=production

to deploy a subfolder of Git repo using:
$ git subtree push --prefix the-complete-react-web-app-developer-course/ReduxTodo/ heroku master