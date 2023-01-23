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

    case 'planets.set':
      return {
        ...state,
        planets: [ ...Array(action.value) ]
      };

    case 'changeObjInArray':
      return {
        ...state,
        [action.id]: state[action.id].map((obj, prevIndex) => {
          if (action.index === prevIndex) {
            return { ...obj, [action.key]: action.value };
          }

          return obj;
        })
      };

    case 'changeItemInArray':
      return {
        ...state,
        [action.id]: state[action.id].map((item, prevIndex) => action.index === prevIndex ? action.value : item)
      };

    case 'deleteItemFromArray':
      return {
        ...state,
        [action.id]: state[action.id].filter((_item, index) => (index !== action.value))
      };

    case 'addItemToArray':
      return {
        ...state,
        [action.id]: [
          ...state[action.id],
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
