const customStyles = {
  control: () => ({
    alignItems: 'center',
    border: '1px solid #E0DDDD',
    cursor: 'default',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: '38px',
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms',
    boxSizing: 'border-box',
    backgroundColor: '#fff'
  }),
  valueContainer: () => ({
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    padding: '0 8px',
    position: 'relative',
    overflow: 'hidden',
    boxSizing: 'border-box'
  }),
  placeholder: () => ({
    color: '#a9a9a9',
    marginLeft: '2px',
    marginRight: '2px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    boxSizing: 'border-box',
    letterSpacing: 'normal'
  }),
  input: () => ({
    margin: '0 2px',
    padding: 0,
    visibility: 'visible',
    color: '#363434'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  indicatorsContainer: () => ({
    alignSelf: 'flex-start',
    alignItems: 'center',
    display: 'flex'
  }),
  indicatorContainer: () => ({
    color: '#E0DDDD',
    display: 'flex',
    padding: '10px',
    transition: 'color 150ms',
    boxSizing: 'border-box'
  }),
  menu: () => ({
    top: '100%',
    backgroundColor: '#fff',
    borderRadius: '4px',
    boxShadow: '0 0 0 1px hsla(0, 0%, 0%, 0.1),0 4px 11px hsla(0, 0%, 0%, 0.1)',
    margin: 0,
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    boxSizing: 'border-box',
    textAlign: 'left'
  }),
  MenuList: () => ({
    maxHeight: '300px',
    overflowY: 'auto',
    padding: '4px 0',
    position: 'relative',
    boxSizing: 'border-box'
  }),
  option: (provided, state) => ({
    ...provided,
    padding: '5px 10px',
    color: '#363434',
    fontSize: '0.8em',
    cursor: 'pointer',
    backgroundColor: state.isFocused ? '#e6e6e6' : '#fff'
  })
};

export default customStyles;