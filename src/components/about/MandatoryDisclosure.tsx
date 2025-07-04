import React from 'react';
import SchoolDetails from './disclosure/SchoolDetails';
import CBSEMandatory from './disclosure/CBSEMandatory';

const MandatoryDisclosure = () => (
  <div className="pt-20">
    <SchoolDetails />
    <CBSEMandatory />
  </div>
);

export default MandatoryDisclosure;