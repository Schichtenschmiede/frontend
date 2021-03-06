import React from 'react';
import ShiftEdit from "./ShiftEdit";
import { shallow } from 'enzyme';

describe('<ShiftEdit />', () => {
    test('Simulate wrong fieldata (validation)', () => {
        const wrapper = shallow(<ShiftEdit />);
        wrapper.setState({name:""});
        wrapper.setState({startTime:""});
        wrapper.setState({endTime:""});
        wrapper.setState({employeeCount:""});
        wrapper.setState({roleId:""});
        wrapper.find('input[type="submit"]').simulate("click");
        expect(wrapper.instance().validator.errorMessages.name).not.toBeNull();
        expect(wrapper.instance().validator.errorMessages.startTime).not.toBeNull();
        expect(wrapper.instance().validator.errorMessages.endTime).not.toBeNull();
        expect(wrapper.instance().validator.errorMessages.employeeCount).not.toBeNull();
        expect(wrapper.instance().validator.errorMessages.roleId).not.toBeNull();
    });
});