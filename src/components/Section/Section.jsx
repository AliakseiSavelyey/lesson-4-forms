import React from 'react';

const Section = ({ title, children }) => {
  return (
    <Section>
      {title && <h2> {title} </h2>}
      {children}
    </Section>
  );
};

export default Section;
