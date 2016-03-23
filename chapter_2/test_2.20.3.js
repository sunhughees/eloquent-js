var size = 8;
for (var i=1; i<=size; i+=1)
    {
    	var lines="";
    	if (i%2==1)
    		for (var j=1; j<=size; j+=1)
    			if (j%2==1)
    				lines+="#";
    			else
    				lines+=" ";

    	else
    		for (var j=1; j<=size; j+=1)
    			if (j%2==1)
    				lines+=" ";
    			else
    				lines+="#";
    	console.log(lines);

    }