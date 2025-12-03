import React from 'react'
import { Container, Carousel } from 'react-bootstrap'

const BannerAd = () => {
  return (
    <>
    <Container className='my-4 p-0' fluid>

        <Carousel fade interval= {5000} controls={true}>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src='/banner1.png'
                    alt='Vestibular'
                    style={{borderRadius: '8px'}}
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src='/banner2.png'
                    alt='Inova uniesp'
                    style={{borderRadius: '8px'}}
                />
            </Carousel.Item>
        </Carousel>
        
    </Container>
    </>
  )
}

export default BannerAd