arr1 = [5,-2,-4,10,3,2,9,-12,-5];
arr2 = [7,-2,-4,10,3,2,9,-12,-5];



def conSum(arr, index)
	if arr.size > 0
		sum = 0
		start = index
		ending = index
		maxSum = arr[0]
		if 1 == arr.size
			return [start,ending,maxSum]
		else
			temp = conSum(arr.slice(1, arr.size-1), index+1)				
		end
		arr.each_index do |i|
			sum = sum + arr[i]
			if maxSum < sum
				# p i
				# p arr[i]
				ending = i+index
				maxSum = sum
			end
		end
		if maxSum > temp[2]
			return [start,ending,maxSum]			
		else
			return temp			
		end
	else
		return "Empty array"
	end	
end

p conSum(arr1, 0)
p conSum(arr2, 0)