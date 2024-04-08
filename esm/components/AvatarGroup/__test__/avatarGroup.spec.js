import React from 'react';
import { mount } from 'enzyme';
import AvatarGroup from '..';
import RenderIf from '../../RenderIf';
describe('<AvatarGroup />', function () {
  var avatars = [{
    src: 'images/user/user1.jpg',
    assistiveText: 'Jose Leandro',
    title: 'Jose Leandro'
  }, {
    src: 'images/user/user2.jpg',
    assistiveText: 'Tahimi Leon',
    title: 'Tahimi Leon'
  }, {
    src: 'images/user/user3.jpg',
    assistiveText: 'Carlos Miguel',
    title: 'Carlos Miguel'
  }, {
    src: 'images/user/user4.jpg',
    assistiveText: 'Jane Doe',
    title: 'Jane Doe'
  }];
  it('should pass the prop showCounter as isTrue to RenderIf component', function () {
    var component = mount(React.createElement(AvatarGroup, {
      avatars: avatars,
      showCounter: true
    }));
    expect(component.find(RenderIf).props().isTrue).toBe(true);
  });
});