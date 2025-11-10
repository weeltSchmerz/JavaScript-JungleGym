// Log number
console.log(100);

// Log string
console.log('Hello World');

// Log multiple values
console.log(20, 'Hello', true);

// Log a varable
const x = 100;
console.log(x);

// Cosole error and warning
console.error('Alert');
console.warn('Warning');

// Log object as table
console.table({ name: 'Hasan', email: 'hasan@gmail.com' });

console.table({ name: 'Erik', email: 'erik@gmail.com' });

console.table(['apples', 'oranges', 'bananas']);

// Group console commands - not used that often
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

// Add CSS to logs
const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cHello World', styles);

// Add an alert box with a message and an OK button.
alert('Heeloo');
alert('Hello! I am an alert box!!');
window.alert('Hello world!');

// Add a timer and ending a timer.
console.time('answer time');
alert('Click to continue');
console.timeLog('answer time');
alert('Do a bunch of other stuff…');
console.timeEnd('answer time');
