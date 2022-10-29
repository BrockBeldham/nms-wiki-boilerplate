const customStyles = {
  control: () => ({
    alignItems: 'center',
    border: '1px solid #666666',
    cursor: 'pointer',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: '36px',
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms',
    boxSizing: 'border-box',
    backgroundColor: '#010b14',
    color: '#ffffff',
    fontSize: '14px'
  }),
  valueContainer: (provided) => ({
    ...provided,
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    padding: '0 5px',
    position: 'relative',
    overflow: 'hidden',
    boxSizing: 'border-box',
    color: '#ffffff'
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#ffffff'
  }),
  multiValue: (provided) => ({
    ...provided,
    color: '#ffffff',
    backgroundColor: '#ff8400'
  }),
  placeholder: () => ({
    color: '#777777',
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
    color: '#ffffff'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    alignSelf: 'flex-start',
    alignItems: 'center',
    display: 'flex'
  }),
  indicatorContainer: (provided) => ({
    ...provided,
    color: '#E0DDDD',
    display: 'flex',
    padding: '6px',
    transition: 'color 150ms',
    boxSizing: 'border-box'
  }),
  menu: () => ({
    top: '100%',
    backgroundColor: '#010b14',
    color: '#ffffff',
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
    color: '#ffffff',
    fontSize: '0.8em',
    cursor: 'pointer',
    backgroundColor: state.isFocused ? '#ff8400' : '#010b14'
  })
};

export default customStyles;