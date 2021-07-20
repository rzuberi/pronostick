import React from 'react'
import { Card, Typography, Row, Image, Space, Button } from 'antd'
import 'antd/dist/antd.css'

const { Title, Paragraph } = Typography

const Match = ({ item }) => {
  var teamsTxt = [item.teams.home.name, ' vs ', item.teams.away.name]
  var currentScoreTxt = [item.goals.home, ' - ', item.goals.away]
  var countryTxt = ['Country: ', item.league.country]
  var dateTxt = ['Date: ', item.fixture.date.substring(0, 10)]
  var timeTxt = ['Time: ', item.fixture.date.substring(11, 16)]
  return (
    <Row justify='center'>
      <Card title={teamsTxt} bordered={true} style={{ width: 400 }}>
        <Space size='large'>
          <Image width={100} src={item.teams.home.logo} preview={false} />
          <Image width={100} src={item.teams.away.logo} preview={false} />
        </Space>
        <Typography>
          <Space direction='vertical'>
            <Title level='1'>{currentScoreTxt}</Title>
            <Space direction='horizontal' align='start'>
              <Paragraph level='4'>{countryTxt}</Paragraph>
              <Image width={30} src={item.league.flag} preview={false} />
            </Space>
            <Paragraph>{dateTxt}</Paragraph>
            <Paragraph>{timeTxt}</Paragraph>
          </Space>
        </Typography>
      </Card>
    </Row>
  )
}

export default Match
