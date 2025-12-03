import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'

const Faculdade = () => {
  return (
   <Container className='py-4'>
    <h2 className='mb-4'>Faculdade</h2>

    <Card className='mb-4 shadow-sm'>
        <Card.Body>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi eum eaque culpa quod aut minima esse fuga cupiditate illum autem veritatis non, vitae perferendis nihil repellat veniam. Iusto, porro!</p>
        </Card.Body>

    </Card>

    <Row className='g-4'>
            <Col>
                <Card className='text-center h-100 shadow-sm'>
                    <Card.Img 
                         variant='top'
                         src='https://images.unsplash.com/photo-1556761175-4b46a572b786'
                         alt='Main Building'
                         style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                        <Card.Title>
                            Vida no campus
                        </Card.Title>
                        <Card.Text>
                            Um bom Ambiente
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className='text-center h-100 shadow-sm'>
                    <Card.Img 
                         variant='top'
                         src='https://images.unsplash.com/photo-1571260899304-425eee4c7efc'
                         alt='Main Building'
                         style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                        <Card.Title>
                            Biblioteca
                        </Card.Title>
                        <Card.Text>
                            uma biblioteca tal tal
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className='text-center h-100 shadow-sm'>
                    <Card.Img 
                         variant='top'
                         src='https://images.unsplash.com/photo-1652974731232-efc86a9bd985'
                         alt='Main Building'
                         style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                        <Card.Title>
                            Predio Principal
                        </Card.Title>
                        <Card.Text>
                            o centro de nossa...
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </Row>

   </Container>
  )
}

export default Faculdade