import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='question'>
            <h2>What is React Context API and How it's work</h2>
            <p>API is method of react. Which provides a way to share values in a components having to easily pass a prop through every level of the tree. We can exchange any kind of details from any levels of our application by using API context. The Context API allows to have a central store where data lives. The store can be push into any component straight. You can cut out the median. We have to create some new components for sender and receiver.</p>
            <h2>What is Semantic tag?</h2>
            <p>Semantic HTML elements describe clearly by meaningfull way for human and machine-readable. <code>header</code> , <code>footer</code> and <code>article</code> tags are all considered semantic because they can perfectly describe the motive of the element and the type of content that is inside them. On the otherside of this equation, some tags such as <code>b</code> and <code>i</code> are not semantic. They define only how the text look (bold or italic), they don't provide any another meaning to the markup. There are too many semantic tags have to use for build a standards website.</p>
        </div>
    );
};

export default Blogs;