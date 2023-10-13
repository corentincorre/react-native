import React from 'react';
import renderer from 'react-test-renderer';

import formatDate from '../src/Helpers/formatDate';


test('formate la date', () => {
    const received = formatDate(new Date('October 13, 2023 03:24:00'));
    const expected = 'vendredi 13 octobre 2023';

    expect(received).toBe(expected)
})