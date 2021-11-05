/* export function signIn(text, user) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            token:
              '91j893h281h9nf98fnf2309jd09jkkd0as98238j9fr8j98f9j8f298r829r-f',
            user: {
              name: 'Teste',
              email: 'Testecodomingues@gmail.com',
            },
          },
        });
      }, 2000);
    });
  }

  export const defaults = {
    headers: {
      Authorization: '',
    },
  }; */

  export function post( ) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            token:
              '91j893h281h9nf98fnf2309jd09jkkd0as98238j9fr8j98f9j8f298r829r-f',
            user: {
              name: 'teste',
              email: 'teste.teste@gmail.com',
            },
          },
        });
      }, 2000);
    });
  }
  
  export const defaults = {
    headers: {
      Authorization: '',
    },
  };