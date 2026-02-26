function volume_sphere() {
    //Write your code here
  let r=Number(document.getElementById("radius").value);
	if(isNaN(r)||r<0){
		document.getElementById("volume").value=NaN
		return false;
	};
	document.getElementById("volume").value=((4/3)*Math.PI*r**3).toFixed(4);
	return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
