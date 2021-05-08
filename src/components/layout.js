import React, { useState } from "react"
import "./layout.css"
import { useStaticQuery, graphql, Link } from "gatsby"
import {
  DrawerBody,
  DrawerHeader,
  Image,
  Flex,
  Text,
  Divider,
  Box,
} from "@chakra-ui/core"
import Sidebar from "./sidebar/sidebar"

import { Drawer, Button, Space } from "antd"
import "antd/dist/antd.css"

// Layout方法
const Layout = ({ children }) => {
  const [visible, setVisible] = useState(false)

  const [placement, setPlacement] = useState("left")

  let showDrawer = () => {
    setVisible(true)
  }

  let onClose = () => {
    setVisible(false)
  }

  let onChange = e => {
    setPlacement(e.target.value)
  }

  const data = useStaticQuery(graphql`
  query Icon {
    file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)

  return (
    <>
      <>

          <Text cursor="pointer"  fontSize="1.5rem" onClick={showDrawer} position="fixed" zIndex="100" left="1rem" top="0.5rem">
            Ξ <Box as="span" fontSize="1.4rem">目录</Box>
          </Text>


        <Drawer
          placement={placement}
          closable={false}
          onClose={onClose}
          visible={visible}
          key={placement}
        >
          <DrawerHeader mt="1rem">
            <Flex pl="1.1rem">
              <Image
                w="2rem"
                h="2rem"
                objectFit="cover"
                src={data.file.childImageSharp.fluid.src}
                alt="logo"
              />
              <Text
                lineHeight="1.4"
                ml="1rem"
                fontWeight="650"
                fontSize="1.4rem"
              >
                <Link to="/hello_eth2">ETH2</Link>
              </Text>
            </Flex>
          </DrawerHeader>
          <Divider mx="2.5rem" />
          <DrawerBody overflowY="auto">
            <Sidebar />
          </DrawerBody>
        </Drawer>
      </>
      <main>{children}</main>
    </>
  )
}

export default Layout
