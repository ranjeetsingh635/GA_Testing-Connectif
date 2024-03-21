#!/bin/bash

#_Change_Working_Directory
cd /home/ubuntu/var

#_Delete_Old_PM2_Service
#sudo pm2 delete Frontend
#sudo pm2 start server.js --name Frontend
pm2 delete Frontend
pm2 start npm --name "Frontend" -- start
