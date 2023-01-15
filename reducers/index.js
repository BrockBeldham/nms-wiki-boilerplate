function reducer(state, action) {
  switch (action.type) {
    case 'glyphs.selector':
      return {
        ...state,
        glyphs: state.glyphs + action.value
      };
    
    case 'gallery.upload':
      return {
        ...state,
        gallery: action.value
      };
    
    case 'gallery.caption':
      return {
        ...state,
        gallery: state.gallery.map((image, prevIndex) => {
          if (action.index === prevIndex) {
            return {
              path: image.path,
              preview: image.preview,
              name: image.name,
              caption: action.value
            };
          }
  
          return image;
        })
      };
    
    case 'members.change':
      return {
        ...state,
        members: state.members.map((member, prevIndex) => {
          if (action.index === prevIndex) {
            return { ...member, [action.key]: action.value };
          }
  
          return member;
        })
      };

    case 'members.delete':
      return {
        ...state,
        members: state.members.filter((_item, index) => (index !== action.value))
      };

    case 'members.add':
      return {
        ...state,
        members: [
          ...state.members,
          action.value
        ]
      };
    
    case 'rules.change':
      return {
        ...state,
        rules: state.members.map((member, prevIndex) => action.index === prevIndex ? action.value : member)
      };

    case 'rules.delete':
      return {
        ...state,
        rules: state.rules.filter((_item, index) => (index !== action.value))
      };

    case 'rules.add':
      return {
        ...state,
        rules: [
          ...state.rules,
          action.value
        ]
      };

    default:
      return {
        ...state,
        [action.type]: action.value
      };
  }
}

export default reducer;
