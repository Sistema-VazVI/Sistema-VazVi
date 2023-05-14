import React from 'react';
import renderer from 'react-test-renderer';

import clients.tsx from '..\src\component\clients.tsx.js';

describe('<clients.tsx />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<clients.tsx />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });