import styled from 'styled-components';

export const Layout = styled.div`
    width: 100%;
    max-width: 1250px;
    margin: 0px auto;
  
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    height: 600px;
    margin-top: 100px;
    padding: 10px;

    div{
       >h1{
           font-size: 2.5rem;
           margin-bottom:20px;
       }

       >p{
           font-size: 1.1rem;
           line-height: 25px;
           margin-bottom:20px;
       }
    }
`;

export const Button = styled.button`
    width: 200px;
    height: 60px;
    padding: 8px 14px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    border-radius: 8px;
    margin-bottom: 30px;

    background-color: #ff0f4d;
    color: #fff;


`

export const ChurrascoContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-end;
    height: 500px;
    margin-top: 40px;
    padding: 10px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
        height: 800px;
    }

    >div{
        >h2{
            font-size: 2.2rem;
            margin-bottom: 60px;
        }
        div{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            padding-right: 10px;

            @media screen and (max-width: 900px) {
               justify-items: center;
            }

        }
    }
`

export const Image = styled.img`
    width: 260px;
    height: 260px;
    
`

export const HamburguerContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    height: 600px;
    margin-top: 40px;
    padding: 10px;

    div{
        
       >h2{
           font-size: 2.2rem;
           margin-bottom:20px;
       }

       >p{
           font-size: 1.1rem;
           line-height: 25px;
           margin-bottom:20px;
       }
    }

    >img{
        width: 530px;
        
    }
`

export const CervejaContainer = styled.div`
    padding: 10px;
    
    >img{
        width: 530px;
    }

    div{
        
        >h2{
            font-size: 2.2rem;
            margin-bottom:20px;
        }
 
        >p{
            font-size: 1.1rem;
            line-height: 25px;
            margin-bottom:20px;
        }
     }
 

`