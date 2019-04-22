import React from 'react';
import ReactDOM from 'react-dom';
import LightBox from './LightBox';
import {useFillColor} from './LightBox';
import { act } from 'react-dom/test-utils';
import { renderHook, act as actHook } from 'react-hooks-testing-library'

describe('Test Hook with library', ()=>{
  test('should toggle light', () => {
    const {result} = renderHook(() => useFillColor())
    actHook(() => result.current.toggle())
    expect(result.current.light).toBe(true)
  })
});

describe('Test component with official tutorial', ()=>{
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  
  test('can render and update a counter', () => {
    // Test first render and effect
    act(() => {
      ReactDOM.render(<LightBox />, container);
    });

    const label = container.querySelector('p');
    const button = container.querySelector('button');

    // Test second render and effect
    act(() => {
      button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });

    expect(label.textContent).toBe('Switch is true');
  
    act(() => {
      button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });

    expect(label.textContent).toBe('Switch is false');
  });
});
