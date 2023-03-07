import myFunction from './ex07.01.mjs';
import myObject from './ex07.02.mjs';
console.log(myFunction(10,20));
console.log(myObject.add(10,20));

//export가 여러개라서
//import * as m from './ex07.03.mjs';
import * as m from './ex07.03.mjs'
console.log(m.add(10,20));
//console.log(m.subtract(10,20));

import {subtract} from './ex07.04.mjs';
console.log(subtract(10,20));

import func05, {add} from './ex07.05.mjs';
console.log(func05.add(200,300));
console.log(add(300,300));
