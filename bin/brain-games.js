#!/usr/bin/env node
const { getUserNameFromStream } = require('./src/cli');

console.log('Welcome to the Brain Games');
const userName = getUserNameFromStream();
console.log(`Hello, ${userName}`);
