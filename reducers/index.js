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
    
    case 'fauna.change':
      return {
        ...state,
        faunaDetails: state.faunaDetails.map((fauna, prevIndex) => {
          if (action.index === prevIndex) {
            return { ...fauna, [action.key]: action.value };
          }

          return fauna;
        })
      };

    case 'fauna.delete':
      return {
        ...state,
        faunaDetails: state.faunaDetails.filter((_item, index) => (index !== action.value))
      };

    case 'fauna.add':
      return {
        ...state,
        faunaDetails: [
          ...state.faunaDetails,
          action.value
        ]
      };
    
    case 'flora.change':
      return {
        ...state,
        floraDetails: state.floraDetails.map((flora, prevIndex) => {
          if (action.index === prevIndex) {
            return { ...flora, [action.key]: action.value };
          }

          return flora;
        })
      };

    case 'flora.delete':
      return {
        ...state,
        floraDetails: state.floraDetails.filter((_item, index) => (index !== action.value))
      };

    case 'flora.add':
      return {
        ...state,
        floraDetails: [
          ...state.floraDetails,
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
