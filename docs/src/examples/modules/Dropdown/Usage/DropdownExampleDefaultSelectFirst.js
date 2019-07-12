import _ from 'lodash'
import React from 'react'
import { Dropdown, Form } from 'semantic-ui-react'

const getOptions = (number, prefix = 'Choice ') =>
  _.times(number, (index) => ({
    key: index,
    text: `${prefix}${index}`,
    value: index,
  }))

const DropdownExampleDefaultSelectFirst = () => (
  <Form>
    <Form.Field>
      <label>Default defaultSelectFirst</label>
      <Dropdown
        selectOnNavigation={false}
        selection
        name='default'
        options={getOptions(3)}
        placeholder='I have the first value selected'
      />
    </Form.Field>
    <Form.Field>
      <label>{'defaultSelectFirst={false}'}</label>
      <Dropdown
        selectOnNavigation={false}
        defaultSelectFirst={false}
        selection
        name='false'
        options={getOptions(3)}
        placeholder='I do not have the first value selected'
      />
    </Form.Field>
  </Form>
)

export default DropdownExampleDefaultSelectFirst
