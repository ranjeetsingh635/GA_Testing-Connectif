#!/bin/bash

#_Change_Working_Directory
cd /home/ubuntu/var

#_Update_&_Set_Node_Version
sudo apt install curl 
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.bashrc

nvm install v18.11.0

#_Download_Node_&NPM
sudo apt install npm -y

#_Install_Yarn
npm install --global yarn

#_Download_PM2
npm install pm2@latest -g
