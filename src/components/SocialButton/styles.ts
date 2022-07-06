import { styled } from '../../../stitches.config';

export const Button = styled('button', {
  width: '100%',
  margin: '4px 0',
  padding: '10px 8px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,

  border: 'none',
  borderRadius: 4,
  background: '$blue500',

  '& span': {
    fontSize: '1rem',
    fontWeight: 600,
    color: '$blue100',    
  },
  
  '& svg': {
    color: '$blue100',
    fontSize: '1.5rem',
  },

  transition: 'all 0.2s',

  '&:hover': {
    opacity: 0.95,
    cursor: 'pointer',
  }
});