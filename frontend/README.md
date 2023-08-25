# Frontend Application
Frontend applicaton consists of two modes: first can be called simulate mode for rendering solution of the problem, while the other mode is to solve this problem through freeplay. To build flexible UI I have used konva.js to programmatically draw Tower of Hanoi UI through canvas tag. As mentioned above tower state data structure is the main backbone of our frontend application. All kind of tower states, logging activities and resolution of tower problems, are dependent upon this data structure. Backend API is responsible for generating solution in tower state data struture. After getting solution, frontend app programmatically generates number of pegs and then uses those pegs to simulate an animated flow which moves all pegs from tower one to tower 3. In simulator mode there are two buttons which can increase or decrease numbers of pegs. After selecting number of pegs, click on solve button which will start simulating new solution again. In freeplay mode, user gets a chance to solve this problem on his own. Peg can be dragged and dropped into various towers and you can always reset the puzzle. It is react applicaiton which heavily relies on hocks, useEffect and functional component. Frontend application can be accessed from this URL https://tower-of-hanoi-ui-7c6aeeb204e8.herokuapp.com/

Here are the instructions to start the frontend application 
```python
  # install node version v16.14.2, I usually use nvm to manage multiple node version on my system.
  nvm install v16.14.2
  # next step is to install all the dependent and update enviorment variable with valid backend url
  npm instll
  # To frontend application
  npm run start
```