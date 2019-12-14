import React from 'react'
import styled from 'styled-components'
import { Head, withRouteData } from 'react-static'
import { Box, Card, Image, Flex, Text, Heading } from 'rebass'

const Clickable = styled.div`
  cursor: pointer;
`

export default withRouteData(({ speakers }) =>
  (
    <div>
      <Head>
        <meta property="og:title" content="2020 Connectaha Speakers" />
        <meta property="og:image" content="https://connectaha.com/static/presenter.1286b8ef.jpg" />
        <meta property="og:url" content="https://www.connectaha.com/speakers" />
        <meta property="og:description" content="March 27, 2020 Walter Scott Conference Center" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="2020 Connectaha Conference" />
        <meta name="twitter:image:alt" content="March 27, 2020 Walter Scott Conference Center" />
      </Head>
      <Heading pl={4} pt={6} pb={4} color="white">Speakers</Heading>
      <Flex flexWrap="wrap" alignItems="center" justifyContent="center">
        {
          speakers.map(speaker => (
            <Clickable key={speaker.id}>
              <Box width={280} height={440}>
                <Card
                  m={16}
                  p={2}
                  width={[1, 1, 1 / 2]}
                  borderRadius={8}
                  boxShadow="0 0 16px rgba(0, 0, 0, .25)"
                  onClick={() => { window.location = `/speakers/${speaker.id}` }}>
                  <Image src={speaker.photo} />
                  <Box px={2}>
                    <Text color="darkblue" fontSize={4}>
                      {speaker.firstName}
                    </Text>
                    <Text color="darkblue" fontSize={4}>
                      {speaker.lastName}
                    </Text>
                  </Box>
                </Card>
              </Box>
            </Clickable>)
          )
        }
      </Flex>
    </div>)
)
