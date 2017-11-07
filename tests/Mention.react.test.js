import React from 'react';
import ReactDOM from 'react-dom';
import enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Mention from '../src/component/Mention.react';

enzyme.configure({ adapter: new Adapter() });

describe('Mention.react', () => {
  describe('Basic rendering', () => {
    it('render correctly', () => {
      const block = mount(
        <Mention prefix="test" />
      );

      expect(block.find('.test-wrapper')).not.toBe(null);
    });

    // 由于这个 issue，暂时无法完成这个测试。。 wtf... https://github.com/airbnb/enzyme/issues/1150
    // it('Basic suggestion', () => {
    //   jest.useFakeTimers();
    //   const handleSearch = jest.fn();
    //   const block = mount(
    //     <Mention
    //       suggestions={['afc163', 'raohai']}
    //       onSearchChange={handleSearch}
    //     />
    //   );
    //   block.find('DraftEditorContents').simulate('focus');

    //   const event = new Event('textInput', { data: '@a', target: { value: '@a' } });

    //   const ed = block.find('.public-DraftEditor-content');
    //   ed.simulate('beforeInput', { data: '@a' });
    //   jest.runAllTimers();
    //   expect(handleSearch).toBeCalledWith('a', '@');
    // });
  });
});
