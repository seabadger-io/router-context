import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import { shape } from 'prop-types';

configure({ adapter: new Adapter() });

const options = {
  context: {
    router: {
      history: {
        push: jest.fn(),
        replace: jest.fn(),
        createHref: jest.fn(),
      },
      route: {
        location: {
          hash: '',
          pathname: '',
          search: '',
          state: '',
        },
        match: {
          params: {},
          isExact: false,
          path: '',
          url: '',
        },
      },
    },
  },
  childContextTypes: {
    router: shape({
      route: shape({
        location: shape(),
        match: shape(),
      }),
      history: shape({}),
    }),
  },
};

describe('<NavigationBar />', () => {
  let wrapper;
  const pageTitle = 'TestTitle';

  beforeEach(() => {
    wrapper = mount(<NavigationBar title={pageTitle} />, options);
  });

  it('should render without error', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should contain a home link', () => {
    expect(wrapper.find(Link).filter({ to: '/' })).toHaveLength(1);
  });

  describe('Home link', () => {
    it('should render page title text', () => {
      expect(wrapper.find(Link).filter({ to: '/' }).render().text()).toEqual(pageTitle);
      const newTitle = 'NewTitle';
      wrapper.setProps({ title: newTitle });
      expect(wrapper.find(Link).filter({ to: '/' }).render().text()).toEqual(newTitle);
    });
  });
});
