# Tower of Hanoi
To simulate and play famouse tower of Hanoi algorithm I have create two applications one represent frontend and other backend. Frontend is an React application and backend is a flask based python application. To get glimpse of its web architecture please review this system diagram.
![image](https://github.com/MFQ/tower-of-hanoi/assets/1052725/cff241fe-c6cd-4917-ad5c-1290146d7cec)



# Frontend Application
Frontend application is consists two modes simulate steps for solving algorithm and other mode is to solve this problem freely. To build flexible Ui I have used konva.js to programmatically create Tow of hanoi Ui. Solution simulator mode relay on backend to generate steps from the Tower of Hannoi alog and then render those steps in an Interactive manner. In free flow mode user get chance to solve this problem on his own. Peg can be drag and drop into various towers and you can always reset the puzzle. It is an React applicaiton which heavliy relays on hocks, useEffect and functional component. 

# Backend Application
Backend application is consist of one endpoint who generates solution for tower of Hanoi algorithm.