function baseReducer(state, action) {
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
      const gallery = state.gallery.map((image, prevIndex) => {
        if (action.index === prevIndex) {
          return {
            path: image.path,
            preview: image.preview,
            name: image.name,
            caption: action.value
          };
        }

        return image;
      });

      return {
        ...state,
        gallery
      };

    default:
      return {
        ...state,
        [action.type]: action.value
      };
  }
}

export default baseReducer;
