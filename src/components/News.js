import React,{useState} from 'react'
import {Select, Row, Col, Typography, Avatar, Card} from 'antd'
import moment from 'moment'
import {useGetCryptoNewsQuery} from '../services/cryptoNewsApi'

const {Text, Title} = Typography
const{Option} = Select

const News = (simplified) => {
  const[newsCat, setNewsCat] = useState('Cryptocurrency')
  const {data: cryptoNews} = useGetCryptoNewsQuery({newsCat, count: simplified? 6 : 20})
// console.log(cryptoNews)

if(!cryptoNews?.value) return "Loading..."

  return (
    <Row gutter={[24,24]}>
      {!simplified && (
        <Col span={24}>
          <Select
          showSearch
          className='select-news'
          placeholder="select a crypto"
          optionFilterProp='children'
          onChange={(value)=> console.log(value)}
          filterOption={(input, option)=>option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          
          
          >

            
          </Select>
        </Col>
      )}
        {cryptoNews.value.map((news)=>(
          <Col xs={24} sm={12} lg={8}  >
              <Card hoverable className="news-card">

            <a href={news.url} target="_blank" rel="noreferrer">
                <div className='news-image-container'>

                <Title className='news-title' level={4}>{news.name}</Title>
                <img src={news?.image?.thumbnail?.contentUrl} />
                </div>

                <p>
                  {news.description > 100
                   ? `${news.description.substring(0,100)}...`
                        : news.description
                    }
                </p>
                <div className='provider-container'>
                        <div>
                          <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl} />
                          <Text className='provider-name'>{news.provider[0]?.name}</Text>
                        </div>
                          <Text> {moment(news.datePublished).startOf('ss').fromNow()}</Text>

                </div>
            </a>
              </Card>
          </Col>
        ))}

    </Row>
  )
}

export default News