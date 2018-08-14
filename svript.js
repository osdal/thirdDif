let str = 'урок-3-был слишком легким',
	light;
	
	
	str = str.charAt(0).toUpperCase() + str.substring(1);
	str = str.replace(/-/g, ' ');
	console.log(str);

	light = str.indexOf('легким');
	str = str.substr(light, 6);
	str = str.replace('им', 'оо');
	document.write(str);

let arr = [20, 33, 1, 'Человек', 2, 3];
	cube = Math.pow(arr[0], 3) + Math.pow(arr[1], 3) + Math.pow(arr[2], 3) + Math.pow(arr[4], 3) + Math.pow(arr[5], 3);
	console.log(Math.pow(cube, 0.5));

	// Функция, которая принимает один аргкмент

let argument;
function oneArg (argument) {
	if (typeof argument !== 'string') {
		alert('Аргуиент не строка');
	}

	argument = argument.trim();
	if (argument.length > 50) {
		argument = argument.substr(0, 49);
		alert('Аргумент = ' + argument + '...');
	} else {
		alert('Аргумент = ' + argument);
	}
	
}

oneArg('bhfvbh cdjidh njdfnvfdnvfod nvovofошщ  vhnfdnfsnksdnvkdlkdsvsvjnbkslnbklbmksbmkfs;bmksbmkfs  ');
	