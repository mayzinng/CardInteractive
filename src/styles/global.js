import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
    
      body: {
        '-webkit-font-smoothing': 'antialiased',
        backgroundColor: '#F5F5F5',
        // color: '$gray100'
      },
    
      'body, input, textarea, button': {
        fontFamily: 'Space Grotesk',
        fontWeight: 400
      }
}) 