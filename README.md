# Tower of Hanoi
To simulate and play famous tower of Hanoi algorithm I have created two applications one represent frontend and the other backend. Frontend is React application and backend is a flask based python application. To get a glimpse of its web architecture please review this system diagram.
![image](https://github.com/MFQ/tower-of-hanoi/assets/1052725/cff241fe-c6cd-4917-ad5c-1290146d7cec)
I have come up with a data structure that will represent, how many pegs are there in the tower. State of tower will vary as we will try to solve this problem. It is a two dimensional array that represents the state of the tower. For example 

```python
towers = [ [1,2,3], [], [] ]
```
Above towers two dimensional array represents first tower has three pegs and other two towers are empty. This screenshort will give you a much better understanding. 
![image](https://github.com/MFQ/tower-of-hanoi/assets/1052725/c80dfdd6-97e4-48f9-88e3-b97ec96069e2)

Now using the powers of this data struture we can save the states of algorithm as it tries to solve this problem. To store these moves we will again use another array which will transform our data structure into a three dimensional array. For example when we ran this algorithm for three pegs following moves can be represented by our three dimensional array like this
```python
moves_for_three_pegs = [
  [ [1,2,3], [], [] ],
  [ [2,3], [], [1] ]
  [ [3], [2], [1] ]
  [ [3], [1,2], [] ]
  [ [], [1,2], [3] ]
  [ [1], [2], [3] ]
  [ [1], [], [2,3] ]
  [ [1], [], [1,2,3] ]
]
```
This data structure is kind of backbone for both frontend and backend applications. As it is an array so its accessibility and maintenance is super simple which in result makes implementation of Tower of Hannoi problem super simple. 

# Frontend Application
Frontend application consists of two modes: first can be called simulate mode for rendering solution of the problem, while the other mode is to solve this problem through freeplay. To build flexible UI I have used konva.js to programmatically draw Tower of Hanoi UI through canvas tag. As mentioned above tower state data structure is the main backbone of our frontend application. All kind of tower states, logging activities and resolution of tower problems, are dependent upon this data structure. Backend API is responsible for generating solution in tower state data struture. After getting solution, frontend app programmatically generates number of pegs and then uses those pegs to simulate an animated flow which moves all pegs from tower one to tower 3. In simulator mode there are two buttons which can increase or decrease numbers of pegs. After selecting number of pegs, click on solve button which will start simulating new solution again. In freeplay mode, user gets a chance to solve this problem on his own. Peg can be dragged and dropped into various towers and you can always reset the puzzle. It is react applicaiton which heavily relies on hocks, useEffect and functional component. Frontend application can be accessed from this URL https://tower-of-hanoi-ui-7c6aeeb204e8.herokuapp.com/

Here are the instructions to start the frontend application 
```python
  # install node version v16.14.2, I usually use nvm to manage multiple node version on my system.
  nvm install v16.14.2
  # next step is to install all the dependent and update enviorment variable with valid backend url
  npm instll
  # To frontend application
  npm run start
```


# Backend Application
Backend application consists of one endpoint that accepts **number_of_pegs** from user and generates solution for the problem. Original implementation of alogrithm only prints out moves in the form of strings. I have written a helper function that creates moves in tower data structure format. As it is a python Flask based application, so, for deployment I have used **gunicorn** web server. 

Here are the instructions to spin up
```python
# first create a seprate environment with python3
python3.9 -m venv env

#activate into that environment 
source env/bin/activate

#install all the dependent modules with pip3
pip3 install -r requirement.txt

#Now  run gunicorn command to start the server
gunicorn wsgi:app
```


