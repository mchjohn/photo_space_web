import { styled } from '../../../stitches.config';

export const Container = styled('form', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  '& input': {
    width: '96%',
    padding: '10px 8px',
    marginBottom: 8,
    
    borderRadius: 4,
    border: '1px solid $gray100'
  },

  '& > a': {
    width: '100%',

    fontWeight: 400,
    color: '$gray900',
    textAlign: 'right',
    fontSize: '0.875rem',
  },

  '& button': {
    width: '100%',
    padding: '12px 8px',
    margin: '16px 0',

    border: 'none',
    borderRadius: 4,
    background: '$gray900',

    transition: 'all 0.2s',

    '& span': {
      fontSize: '1rem',
      fontWeight: 700,
      color: '$blue100',
    },
  },

  '& button:hover': {
    opacity: 0.9,
    cursor: 'pointer',
  },

  '& > span': {
    fontSize: '0.875rem',
    fontWeight: 400,
    color: '$blue900',

    '& > a': {
      width: '100%',
  
      fontWeight: 400,
      color: '$gray900',
      textAlign: 'right',
    },
  }
});