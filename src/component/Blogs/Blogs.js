import React from 'react';

const Blogs = () => {
    return (
        <div>
            <p className='border-2 border-black m-10'>Question-1: What is context Api?</p>
            <p className='mx-10 text-justify'>The React Context API may be used by a React project to create global variables that can be passed around. This is an alternative to "prop drilling," in which props are passed from grandmother to child to parent and so on. Context is also advertised as a more straightforward and lightweight approach to Redux state management.</p>

            <p className='border-2 border-black m-10'>Question-2: What is semantic tag?</p>
            <p className='mx-10 text-justify'>Instead than only describing the presentation or look of information in web pages and online apps, semantic tags employ HTML markup to reinforce the semantics, or meaning, of that information. Semantic HTML is parsed by traditional web browsers and a range of additional user agents.</p>

            <p className='border-2 border-black m-10'>Question-3: Difference between inline block and inline block elements?</p>
            <p className='mx-10 text-justify'>
                <li>Inline elements do not begin on a new line and just take up the space they require. You can't change the width or height of the window.</li>
                <li>The inline-block element is structured similarly to the inline element, but it does not begin on a new line. However, you may change the width and height of the image.</li>
            </p>
        </div>
    );
};

export default Blogs;