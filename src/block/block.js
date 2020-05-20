const {
  registerFormatType,
  toggleFormat,
  applyFormat,
  removeFormat,
  remove,
  replace,
} = wp.richText;

const { RichTextToolbarButton } = wp.blockEditor;

const { compose, ifCondition } = wp.compose;

const setPopoverContent = (value) => {
  let _value = prompt('what?');

  console.log(value);
  // if (value.activeFormats[0]) {
  if (_value.length > 0) {
    return applyFormat(value, {
      type: 'popover/popover',
      attributes: {
        tabindex: '0',
        'data-toggle': 'popover',
        'data-placement': 'top',
        'data-content': _value,
        'data-trigger': 'focus',
        style: `border-bottom: solid 3px lightblue;cursor:pointer`,
      },
    });
  } else {
    return applyFormat(value, {
      type: 'popover/popover',
    });
  }
};

const MyPopover = ({ isActive, value, onChange }) => {
  return (
    <RichTextToolbarButton
      icon="admin-comments"
      title="MyPopover"
      onClick={() => {
        onChange(setPopoverContent(value));
      }}
      isActive={isActive}
    />
  );
};

registerFormatType('popover/popover', {
  title: 'MyPopover',
  tagName: 'span',
  className: 'pop',
  edit: MyPopover,
});
