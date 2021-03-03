# Demo
- https://suvojitkar.github.io/TodoList

# Docker Demo
- image:
- url: `localhost`

# Install dependency
npm install

# Run the app
npm start

# Redux-react
1. react component
2. create actions (based on user interaction eg. edit, click)
3. Dispatch the action
4. use reducer to perform action based on dispatched action
5. Reducer connects to dataStore to provide or update the state value

Note:
1. `mapStateToProps` and `mapDispatchToProp` always returns props for a component.

# react bootstrap
- https://react-bootstrap.github.io/

# chrome extension
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=en

# chrome extension usage
https://github.com/zalmoxisus/redux-devtools-extension

# Create docker image
- docker build -t sk-react-analyzer .
Explanation:
- `docker build` is used to build an image
- `-t` flag tags the image with a name
- `sk-react-analyzer` is the name of the image. It can be any name we want to give to the image.
- `.` indicates Docker should look for the Dockerfile in the current directory.

# View all images
- docker images

# Run image as container
- docker run -it -d -p 3000:3000 -p 80:80 sk-react-analyzer-1
Explanation:
- `docker run` is used to run an image
- `i` flag stands for interactive
- `t` flag stands for attaching a virtual terminal sesison
- `d` flag is used to run container in detached mode(i.e in background)
- `p` flag is used for port mapping between host port and container port.
- `sk-react-analyzer` is the image name


# View containers
- docker container ls
- docker ps

# stop a container
- docker stop a5f850583e17
Explanation:
- a5f850583e17 is containerId

# View docker content:
- docker exec -it a5f850583e17 sh
Explanation:
- a5f850583e17 is container ID
- `i` flag stands for interactive
- `t` flag stands for attaching a virtual terminal sesison
- `sh` to run it as shell

# push
- login: docker login --username=<USERNAME>
- tag: docker tag 2a5bc7744548 suvojitkar365/analyzer:1 
- push: docker push suvojitkar365/analyzer

# Docker remove cheatsheet
- https://linuxize.com/post/how-to-remove-docker-images-containers-volumes-and-networks/
