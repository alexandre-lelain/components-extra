import isAddingNewGroup from '../isAddingNewGroup'

const GROUP_INCOMPLETE = '1234 56'
const NEW_GROUP_INCOMPLETE = '1234 567'

const GROUP_COMPLETE = '1234 5678 '
const NEW_GROUP_COMPLETE = '1234 5678 9'

test('isAddingNewGroup(GROUP_INCOMPLETE, NEW_GROUP_INCOMPLETE) should return false', () => {
  expect(isAddingNewGroup(GROUP_INCOMPLETE, NEW_GROUP_INCOMPLETE)).toEqual(false)
})

test('isAddingNewGroup(GROUP_COMPLETE, NEW_GROUP_COMPLETE) should return true', () => {
  expect(isAddingNewGroup(GROUP_COMPLETE, NEW_GROUP_COMPLETE)).toEqual(true)
})
