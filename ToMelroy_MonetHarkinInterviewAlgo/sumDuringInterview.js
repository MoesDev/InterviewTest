arr = [2,5,4,
8,-25,7,1,6,-1,-5,-8];

var sum=0;
var max=0;
var start, end;

if(arr.length>0){
	max=arr[0];
	sum=arr[0];
	start=0;
	end=0;
}

for(var i=0; i< arr.length; i++){
		sum=0;
	for(var x=i; x< arr.length; x++){
		sum += arr[x];
		if(sum > max){
			max=sum;
			start=i;
			end=x;
		}
	}
}
else{}


0,3,19