import React from 'react';
import Main from '../../src/./Main';
import { shallow } from '../.././enzyme';

test('Logo berhasil dirender', () => {
	const app = shallow(<Main/>);
	expect(app.containsAnyMatchingElements([
		<img id="logo" src="logo.png" alt="Logo not loaded"/>
	])
  ).toBe(true);
});