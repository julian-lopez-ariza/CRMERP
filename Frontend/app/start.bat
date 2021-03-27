@ECHO OFF
CD "../../mongo"
START mongod --config mongod.conf
START mongo --quiet main.js > deployment.log
CD "../backend"
START node index.js
EXIT