let wodth, height, area;
width = 10;
height = 20;
area = width * height;
let perimeter = 2 * (width + height);
function displayResults(){
    document.getElementById('area').innerHTML = 'area' + area;
    document.getElementById('perimeter').innerHTML = 'perimeter' + perimeter;
}
displayResults();