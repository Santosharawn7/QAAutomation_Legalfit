ENV=test pipenv run python manage.py runserver 8000 >logrunserver_output 2>&1 &
./run_stencil_dev >logstencil_output 2>&1 &
./run_watch_client >logwatchclient_output 2>&1 &
./run_watch_editor >logwatcheditor_output 2>&1 &  
echo "about to hit localhost:8000"
curl localhost:8000 || echo "it failed"
echo "about to hit 127.0.0.1:8000"
curl 127.0.0.1:8000 || echo "it failed"
echo "sites.local.legalfit.io:8000"
curl sites.local.legalfit.io:8000 || echo "it failed"  
cd ..
cd ~/qa-automation 
npx cypress run
