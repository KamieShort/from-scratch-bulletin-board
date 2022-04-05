// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderPosts } from '../render-utils.js';

const test = QUnit.test;

test('renderPosts should return a <div> with post title, description, and contact', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="postdiv"><p class="title">Reminder</p><p class="description">make dentist appointment</p><p class="contact">Oregon Smile Care</p></div>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderPosts({
        title: 'Reminder',
        description: 'make dentist appointment',
        contact: 'Oregon Smile Care',
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
