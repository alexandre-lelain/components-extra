import React from 'react';
const MyCompo = ({ title, name }) => {
    return React.createElement("h1", null,
        title,
        ": ",
        name,
        ". That's components-extra true!");
};
export default MyCompo;
