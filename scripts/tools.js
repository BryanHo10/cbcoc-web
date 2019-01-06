var database=[];
var groups=['Date','Title','Key_Verses','Series','Series_#','Speaker'];




var i=0;

module.exports = {


      groups:groups,
      database:database,
      retrieveData: function (table) {
            var id=0;
            
            const rows = table.data.values;
            // console.log(rows);
            if (rows.length) {
              
              rows.map((row) => {
                var sermonMap={};
              /*
                0 - Date
                1 - Message Title
                2 - Key Verses
                3 = Series
                4 - # in series
                5 - Speaker
                6 - Descriptions
                7 - Notes
              // */
                  sermonMap['id']=id;  
                  console.log(row);
                  for(i=0;i<6;i++)
                  {
                    sermonMap[groups[i]]=row[i];
                  }
                  database.push(sermonMap);
                  id+=1;

              
              });
              
            } 
            else 
            {
               console.log('No data found.');
            }
            database.splice(0,1);
            console.log(database[0]['Date']);
            return database;
        }

}