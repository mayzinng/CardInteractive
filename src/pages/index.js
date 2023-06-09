import { Container } from '@/styles/register'
import Head from 'next/head'
import Image from 'next/image'
import { Form } from '@/styles/register'
import DatePicker from 'react-date-picker'

import backcard from '../assets/backCard.svg'
import frontcard from '../assets/frontCard.svg'

export default function Home() {

  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='decoratedPart'>
        <Image src={frontcard.src} height={245} width={447} className='firstImage'>
        </Image>
        <p>9591 6489 6389 101E<br></br> <h4>FELICIA LEIRE <h5>09/00</h5> </h4></p>
        <Image src={backcard.src} height={245} width={447}>
        </Image>
        <h3>000</h3>
      </div>
      <div className='whitePart'>
        <Form>
          <label>
            Nome completo
          </label>
          <input type='text' placeholder='Your Name'></input>
          <label>
            Nome completo
          </label>
          <input type='text' placeholder='Your Name'></input>
          <label>
            Nome completo
          </label>
          <input type='date' placeholder='Your Name'></input>
          <input type='number' placeholder='Your Name' ></input>
        </Form>
      </div>
    </Container>
  )
}
