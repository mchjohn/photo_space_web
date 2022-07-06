import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  flex: 1,
  height: '100vh',
  background: '$blue100',
});

export const Form = styled('div', {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  
  padding: '0 100px',
  background: '$blue100',

  '& img': {
    marginBottom: 32,
  },

  '& > span': {
    margin: '32px 10px',
    textTransform: 'uppercase',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    color: '$gray100'
  },

  '& > span::before, > span::after': {
    content: '',
    display: 'inline-block',
    border: '0.5px solid $gray100',
    
    width: '4rem',
    margin: '0 6px',
    marginBottom: 4,
  },
});

export const Arte = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  flex: 2,
  height: '100vh',
  background: '$blue500',

  '& img': {
    width: '80%',
    height: '80%',
  }
});
