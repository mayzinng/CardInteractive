import {styled} from '@stitches/react';

export const Container = styled('main', {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',

    div: {
        background: 'white',
        width: '45vw',
        height: '100vh',

        color: '#FFF',

        '&.decoratedPart': {
            background: 'linear-gradient(163.24deg, #440A53 11.72%, #68217A 22.64%, #21357A 31.35%, #68217A 45.92%, #440A53 58.54%)',
            backgroundBlendMode: 'lighten',

            'img:first-child': {
                position: 'fixed',
                margin: '15rem 0 2rem 20rem',
            },
            img: {
                position: 'fixed',
                margin: '32rem 0 2rem 25rem',
            },
            p: {
                margin: '23rem 0 0 21rem',
                position: 'fixed',
                fontSize: '2rem',
                fontWeight: '500'
            },
            h4: {
                margin: '1rem 0 0 0',
                display: 'flex',
                justifyContent: 'center',
                fontWeight: '400',
                fontSize: '1.3rem'
            },
            h5: {
                margin: '0 0 0 13rem',
                fontWeight: '400'
            },
            h3: {
                margin: '38.8rem 0 0 47rem',
                position: 'fixed',
                fontWeight: '400',
            },

        },

        '&.whitePart': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '90vw',
            background: '#FFF'
        },
        
    },

})

export const Form = styled('form', {

    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'nowrap',


    background: 'red',
    height: '55vh',
    width: '30vw',


    label: {
        width: '10rem',
        marginTop: '1.5rem',
        fontSize: '1rem',
    },

    input: {
        background: '#FFF',
        padding: '0.5rem',
        fontSize: '1.2rem',
        width: '35rem',
        height: '2vw',
        borderRadius: '0.5rem'
    },
    
    'input:last-child':{
        marginTop: '0.5rem',
        display: 'inline',
        width: '10rem'
    }
})