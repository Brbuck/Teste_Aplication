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

    @media screen and (max-width: 812px){
        grid-template-columns: 1fr;
        height: 400px;

    }
           
    div{
       >h1{
           font-size: 2.5rem;
           margin-bottom:20px;

           @media screen and (max-width: 1000px){
                font-size: 2rem;
           }

           @media screen and (max-width: 650px){
                font-size: 1.5rem;
           }
       }

       >p{
           font-size: 1.1rem;
           line-height: 25px;
           margin-bottom:20px;

           @media screen and (max-width: 1000px){
                font-size: 1rem;
           }

           @media screen and (max-width: 650px){
                font-size: 0.9rem;
           }
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

    @media screen and (max-width: 650px){
        width: 160px;
        height: 50px;
        padding: 6px 10px;
        font-size: 0.9rem;
    }

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

    @media screen and (max-width: 650px) {
        height: auto;
    }

    
    >div{
        >h2{
            font-size: 2.2rem;
            margin-bottom: 60px;

            @media screen and (max-width: 1000px){
                font-size: 2rem;
            }

            @media screen and (max-width: 650px){
                font-size: 1.6rem;
            }
        }
        div{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            padding-right: 10px;

            @media screen and (max-width: 812px){
                justify-items: center;
            }   

            @media screen and (max-width: 650px){
                grid-template-columns: 1fr;
                margin-bottom: 20px;
            }
        }
    }

`

export const Image = styled.img`
    width: 260px;
    height: 260px;

    @media screen and (max-width: 650px){
        width: 300px;
        height: 300px;
    }
    
`

export const HamburguerContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    height: 600px;
    margin-top: 40px;
    padding: 10px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr;

    }

    div{
        
       >h2{
           font-size: 2.2rem;
           margin-bottom:20px;

           @media screen and (max-width: 650px){
            font-size: 1.7rem;
           }
       }

       >p{
           font-size: 1.1rem;
           line-height: 25px;
           margin-bottom:20px;

           @media screen and (max-width: 650px){
            font-size: 0.9rem;
           }
       }
    }

    >img{
        width: 510px; 
        height: 300px ;

        @media screen and (max-width: 1000px){
            order: -1;
            margin-bottom: 20px;
        }

        @media screen and (max-width: 812px){
            justify-self: center;
        }

        @media screen and (max-width: 650px){
            width: 400px;
        }

    @media screen and (max-width: 450px){
            width: 300px;
        }
    }


    
`

export const CervejaContainer = styled.div`
    padding: 10px;

    >img{
        width: 510px; 
        height: 300px ; 
        margin-top: 20px;

        @media screen and (max-width: 650px){
            width: 400px;
        };

        @media screen and (max-width: 450px){
             width: 300px;
        }

        
    }

    div{
        
        >h2{
            font-size: 2.2rem;
            margin-bottom:20px;

            @media screen and (max-width: 650px){
                font-size: 1.6rem;
           }
        }
 
        >p{
            font-size: 1.1rem;
            line-height: 25px;
            margin-bottom:20px;

            @media screen and (max-width: 650px){
                font-size: 0.9rem;
           }
        }
     }
 

`

export const DepoimentosContainer = styled.div`

    >h2{
        font-size: 2.2rem;
        margin-bottom: 60px;
        text-align: center;

        @media screen and (max-width: 650px){
            font-size: 1.6rem;
        }
    }

    >div{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
        justify-items: center;
        row-gap: 40px;
        
    }
`

export const DepoimentosCard = styled.div`
    width: 375px;
    height: auto;
    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items:center;

    margin-bottom: 50px;

    @media screen and (max-width: 650px){
        padding: 5px;
    }
    >img{
        width: 150px;
        border-radius: 50%;
        margin-bottom: 20px;
       
    }
    >span{
        font-size: 1rem;
        margin: 10px 0px;
    }
    >p{
        font-size: 1rem;
        color: #696969;

        @media screen and (max-width: 650px){
            font-size: 0.9rem;
        }
    }

`