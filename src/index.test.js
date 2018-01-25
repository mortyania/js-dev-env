import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
import courseValue from './index.js';

describe('Our First Test', () => {
	it('should pass', () => {
		expect(true).to.equal(true);
	});
});

describe('index.html', () => {
	it('should say JavaScript', (done) => {
		const index = fs.readFileSync('./src/index.html', 'utf-8');
		jsdom.env(index, function(err, window){
			const h1 = window.document.getElementsByTagName('h1')[0];
			expect(h1.innerHTML).to.equal("A JavaScript Development Environment Example");
			done();
			window.close();
		});
	})
})

describe('testing course value', () => {
	it('should be £1,000.00', () => {
		expect(courseValue).to.equal("1,000.00");
	})
})
