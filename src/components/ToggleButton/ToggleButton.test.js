import React from 'react';
import { shallow, mount } from 'enzyme';

import ToggleButton from "./ToggleButton";
import RepositoryList from "../../containers/RepositoryList/RepositoryList"

describe('<ToggleButton />', () => {

    it('should allows us to set props ToggleButton', () => {
        const wrapper = mount(<ToggleButton toggleBtnText="See More" mode="Collapse" />);
        expect(wrapper.props().toggleBtnText).toEqual('See More');
        wrapper.setProps({ toggleBtnText: 'Expand' });
        expect(wrapper.props().toggleBtnText).toEqual('Expand');
    });

    it('simulates click events', () => {
        const toggleRepositoryList = jest.fn();
        const wrapper = mount(<ToggleButton toggleRepositoryList={toggleRepositoryList} />)
        wrapper.find('button').simulate('click');
        expect(toggleRepositoryList).toHaveBeenCalled();
    });

});

