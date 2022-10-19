import React from 'react';
import Dashboard from '../containers/dashboard';
import getCustomersList from '../services/getCustomersApi';
import fetchMock from 'jest-fetch-mock';
import renderer from 'react-test-renderer';
import { props } from './props';



describe('render dashboard', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  test('should be able to fetch api response and render table', () => {
    fetchMock.mockResponseOnce(JSON.stringify(props));
    const onResponse = jest.fn();
    const onError = jest.fn();

    return getCustomersList()
      .then(onResponse)
      .catch(onError)
      .finally(() => {
        expect(onResponse).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
        expect(onResponse.mock.calls[0][0]).toEqual(props);
      });
  });
});

describe('render dashboard container', () => {
  it('should render container and match shanpshot', () => {
    const container = renderer.create(<Dashboard />).toJSON();
    expect(container).toMatchSnapshot();
  });
});
