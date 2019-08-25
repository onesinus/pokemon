import React from 'react';
import Main from '../../src/./Main';
import { shallow } from '../.././enzyme';
import { NavLink } from "react-router-dom";


test('Header pokemon berhasil diload [Logo, List Menu]', () => {
	const app = shallow(<Main/>);
	expect(app.containsAnyMatchingElements([
		<img id="logo" src="logo.png" alt="Logo not loaded"/>
	])
  ).toBe(true);

	expect(app.containsAnyMatchingElements([
		<li><NavLink to="/my_pokemon">My Pokemon</NavLink></li>
	])
  ).toBe(true);

	expect(app.containsAnyMatchingElements([
		<li><NavLink to="/">Pokemon List</NavLink></li>
	])
  ).toBe(true);
});