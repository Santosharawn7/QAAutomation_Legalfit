ENV=test pipenv run python manage.py runserver 8000 >logrunserver_output 2>&1 &
./run_stencil_dev >logstencil_output 2>&1 &
./run_watch_client >logwatchclient_output 2>&1 &
./run_watch_editor >logwatcheditor_output 2>&1 &  