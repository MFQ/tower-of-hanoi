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