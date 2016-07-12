import { TextField } from '../../src/components/TextField';
import * as React from 'react';
import { shallow } from 'enzyme';
 
describe('<TextField/>', () => {
  it("contains spec with an expectation", () => {
    const wrapper = shallow(<TextField id="id-test" text="text-test" value="value-test"/>)
    expect(wrapper.contains(<input className="form-control" name="id-test" value="value-test"/>)).toEqual(true);
  });
})