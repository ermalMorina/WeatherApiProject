import React, { useState } from 'react'
import { 
  Input,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  Button,
 } from 'reactstrap'
 import { useDispatch } from 'react-redux';
 import { search } from '../../Redux/Actions/SearchActions/search.actions'
import './StyleSearch.css'
export default function WeatherSearch() {

  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleOnSearch = () => {
    dispatch(search(input))
  }

  return (
    <Row className='boxSearch' style={{marginTop:"55px"}}>
      <Col  md="12">
        <Card>
          <CardBody>
            <CardTitle>Shenoni emrin e qytetit</CardTitle>
          </CardBody>
          <CardBody>
            <Input value={input} onChange={handleInputChange}  type="text" />
            <Button onClick={handleOnSearch} color="primary">Kerko</Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}
