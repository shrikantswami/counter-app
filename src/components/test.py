import json

connectionOne DB A
connectionOne DB B
SQLSource = "Select distinct id FROM tableName where id not in (  Select ID  FROM tableDest where groupby ID ) "
