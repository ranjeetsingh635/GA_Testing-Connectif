#!/bin/bash

#_Change_Working_Directory
cd /home/ubuntu/var

#_Remove_Unused_Code
rm -rf node_modules
rm -rf build

#Install_node_modules_&_Make_React_Build
yarn install
yarn build
