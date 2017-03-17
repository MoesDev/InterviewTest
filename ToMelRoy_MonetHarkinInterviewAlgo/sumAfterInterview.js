var arr1 = [5,-2,-4,10,3,2,9,-12,-5];
var arr2 = [7,-2,-4,10,3,2,9,-12,-5];

	function conSum(arr, i){

		if(arr.length>0){
			if(typeof i === 'undefined'){
				var i=0
			}
			var max=arr[i], sum=0, start=i, end=i;

			if (i == arr.length-1) {
				return [start, end, max];
			}
			else{
				temp = conSum(arr, i+1);
			}
			for(var i; i< arr.length; i++){
					sum += arr[i];
					if(sum > max){
						max=sum;
						end=i;
					}
			}
			if(max < temp[2]){
				return temp;
			}
			else{
				return [start, end, max];
			}

		}
		else{
			return "Array is empty";
		}
	}
	console.log(conSum(arr1));
	console.log(conSum(arr2));